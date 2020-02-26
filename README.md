# Example app with [React Intl][]
https://with-react-intl.herokuapp.com/

## How to run

`npm i`

`npm run dev`

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

## Recommendation
**It'll be much faster to implement internationalization after the app is finalized** because our pace is quick with alot of moving parts. We will save more dev hours by replacing strings with the components _after_ the app is more or less finalized. The most intensive part of this process is hooking internationalization up properly which can be done after the app is finished (no compatibility issues).

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
