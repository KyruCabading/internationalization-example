# Example app with [React Intl][]
https://with-react-intl.herokuapp.com/


## Summary
**It'll be much faster to implement translation after the app is finalized** because our pace is quick with alot of moving parts. We will save more dev hours by replacing strings with the components _after_ the app is more or less finalized. The most intensive part of this process is hooking internationalization up properly which can be done after the app is finished (no compatibility issues). 

1. Setup Internationalization
2. Finalize the Application
3. Translate Strings with Translation Components

# Overview
We can use either [react-intl](https://github.com/formatjs/react-intl) or [react-i18next](https://github.com/i18next/react-i18next). Both can do what we need. I prefer react-intl for it's cleaner structure.
I don't suggest that we make our own solution due to the amount of edge cases languages have. 

### Project Work Flow
1. Switch out english strings in the app with Translation components
2. Run a script to extract all english strings from components into one "language" file 
3. We send this language file to a team of spanish speakers to translate
4. They give us that file back and we'll have spanish supported. 

## How to run

`yarn`

`yarn dev`

## What's Covered

This is a working prototype of internationalization setup for both English and Spanish. It covers topics on;

- Basic translation
- Pluralization
- Ordinals (1st, 2nd, 3rd, 4th...)
- Relative Time (1 second ago / 2 seconds ago)
- Browser/Computer Language Detection (off for current app)
- In app language switching

## How to Implement

To implement, we just directly swap out English strings with Intl components like "FormattedMessage" which handles switching out the string it gets from the server based on app/browser locale.

### Technical Implementation
- I recommend directly swapping out strings with Translation Code inline the return/render function call rather than abstracting the code to a separate file per component due to the difficulty of refactoring if we want to move things around + inject values into our components. Especially without type-checking this can go out of hand pretty quick.

**A.K.A. Favor this...**

`homepage.js`

```
import React from 'react'
import { FormattedMessage } from 'react-intl'

const HomePage = () => {
        <FormattedMessage id="hello" defaultMessage="Hello World!">
}
```

Rather than this...

`abstractedMessages.js`

```
export const messages = {
    hello: {
        id: 'hello',
        defaultMessage: 'Hello World!'
    }
}

```

`homepage.js`

```
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { messages } = from 'abstratedMessages.js'

const HomePage = () => {
        <FormattedMessage {...messages.hello}>
}
```

- We also need to agree on a **scalable id structure** because IDs don't nest within intl... using an id of `home` in the homepage announcement... then later using `home` somewhere in the navbar will generate conflicting ids when swapping out strings to a different locale. [#550](https://github.com/formatjs/react-intl/issues/550) Could be something like `component/section.userDefinedString` `addAccount.addAccount` for "Add Account". and `buttons.cancel` for "Cancel".

## Language Selection
We should consider the several points for language selection
- Browser Language
- App State
- Cookies
- Page URL parameters (website.com?lang=en)

One implementation can be that cookies will be the primary way to persist the language selected with prioritization in this order

- Cookie
- Page URL parameters
- Browser Language

Without cookie, app state, or page URL parameters, we will use browser language (Ex. the first time a user visits the site)... When the browser language is detected, we set that to our cookie, and update that cookie based on page actions / page url paramters. The Cookie will be the source of truth for our language selection. 
