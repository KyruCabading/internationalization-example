# Example app with [React Intl][]

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

### Implementation

- I recommend directly swapping out strings rather than abstracting code due to the difficulty of refactoring if we want to move things around. I can give a better example in person for this.
- I believe it'll be much faster to not implement internationalization during development process because our pace is quick with alot of moving parts. We will save more time replacing strings with the components _after_ the app is more or less finalized. The most intensive part of this process is hooking internationalization up properly which can be done after the app is finished (no compatibility issues).
