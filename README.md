# BardKit

A absolutely tiny (~500B[^1]) extension of `bard-ai` that makes Bard do what you want it to do.

Thanks to @ThatXliner for helping with the original prompt engineering.

[^1]: 508B minified and gzipped

The best way to show this is by example...

If you use `bard-ai`, and ask it this:

```javascript
import Bard, { askAI } from "bard-ai";

await Bard.init("COOKIE_KEY");

console.log(await askAI("Find a synonym of `red`"));
```

It will start with something along the lines of:

```
Sure, here are some synonyms of "red":

* crimson
* scarlet
* vermilion
* rose
... and 6 more ...

These synonyms can be used in a variety of contexts, depending on the desired meaning. For example, "crimson" can be used to describe a bright, deep red, while "rose" can be used to describe a softer, more delicate red.

Here are some examples of how these synonyms can be used in sentences:

* The leaves on the trees turned a brilliant crimson in the fall.
* The bride wore a scarlet dress to her wedding.
* The artist used vermilion to paint the sunset.
...and 6 more ...

I hope this helps!
```

However...
If you use `bardkit`'s `extractText()` method...

```javascript
import Bard, { extractText } from "./index.js";

await Bard.init("COOKIE_KEY");

console.log(await extractText("Find a synonym of `red`"));
```

You'll get this: `crimson`.

## Installation

First, install `bardkit` with

```bash
npm install bardkit
```

(or the equivalent)

Next, get your Google \_\_Secure-1PSID cookie key... refer [here](https://github.com/EvanZhouDev/bard-ai#obtaining-authentication) for details.

## API Referance

## Init

Always start off with this following code to initialize `bard-ai` and `bardkit`:

```javascript
import Bard, { extractCode } from "./index.js";

await Bard.init("COOKIE_KEY");
```

## `extractText()`
Use this to extract certain text from the response without the fancy "Here's how to do it" at the start and the "Hope this helped!" at the end...

```javascript
console.log(await extractCode("What's a synonym of red"));
```

Example use cases
- Get a summary
- Make tone casual
- Find a synonym
- Basically any other text-related task

## `extractCode()`
Use this to extract code from the response without the fancy "Here's how to do it" at the start and the "Hope this helped!" at the end...

```javascript
console.log(await extractCode("Give me an example of a function in Javascript"));
```

Example use cases
- Write some piece of code
- Add comments to code
- Modify code
- Basically any other code-related task

Got another built-in function you want me to make? Leave an issue, and I'll try to get to it!
