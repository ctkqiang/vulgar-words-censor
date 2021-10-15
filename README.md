# Vulgar words censor

Just a simple package for censoring vulgar words

```json
{
  "bad": "--CENSORED--",
  "good": "Let's go to library"
}
```

#### Installation:

```js
npm install vulgar-words-censor --save
```

#### Usage:

The javascript discipline used in this package is ES6 where the package.json is set to "type": "module"

```javascript
import { censor } from "vulgar-words-censor";

let bad_dummytext = "This mother fucker is teribble !";
let good_dummytext = "Let's go to library";

console.log({
  bad: censor(bad_dummytext),
  good: censor(good_dummytext),
});

/**
 * output
 * {
 *      bad: '--CENSORED--',
 *      good: "Let's go to library"
 * }
 */
```
