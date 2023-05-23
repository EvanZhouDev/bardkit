# BardKit
A absolutely tiny extension of `bard-ai` that makes Bard do what you want it to do.
Here's what I mean...

If you use `bard-ai`, and ask it this:

```javascript
import Bard, {askAI} from 'bard-ai';

await Bard.init('COOKIE_KEY');

console.log(await askAI("Find a synonym of `red`"))
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
import { init, extractText } from './index.js';

await init('COOKIE_KEY');

console.log(await extractText("Find a synonym of `red`"))
```

You'll get this: `crimson`.

