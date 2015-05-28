# ![logo][logo-url]

[![Build Status][travis-image]][travis-url]
[![Code Climate][gpa-badge]][codeclimate-url]
[![Test Coverage][coverage-badge]][codeclimate-url]

I've frequently found myself reusing code that would allow me to set/get
configuration options in my apps and modules. So, I figured, why not just
package it up in an npm module and share it with the world. I'm sure someone
out there may find it useful. That when I decided to publish **options-api**.

**options-api** allows you to easily set, get and optionally validate key/value
pairs with a simply API, so that you can store/retreive your module's or application's
configuration. It's a simple in-memory options store you can use standalone, mixin
to an existing object, or attach to an existing class.

I took inspiration from existing open-source projects like [KeystoneJS][keystone-url]
and [ExpressJS][express-url], so the api is friendly and intuitive.

If I haven't bored you and you're still interested, check out the usage and api
docs below.

## Installation
[![npm][npm-badge]][npm-url]

**options-api** is available on [npm][npm-url].

```js
npm install --save options-api
```

## Usage

Once you require the module, there are three ways you can use **options-api**.

1. Create a standalone instance

  ```js
  var optionsApi = require('options-api');
  var instance = optionsApi.create();
  ```

2. Mix it into an existing object

  ```js
  var optionsApi = require('options-api');
  var obj = {};

  optionsApi.mixin(obj);
  ```

3. Attach it to an existing class

  ```js
  var optionsApi = require('options-api');
  var Clazz = function() {};
  Clazz.prototype.xxx = function() {};
  Clazz.prototype.yyy = function() {};
  Clazz.prototype.zzz = function() {};

  optionsApi.attach(obj);
  ```

## API

This is what you can do with **options-api**

### .set()
Sets the value of a option, which can later be retrieved with `.get()`

```js
instance.set('option', 'value');
```

> The above example sets the value of `option` to `'value'`.

### .get()
Retrieves the value of an existing option.

```js
var instance.get('option');
```

### .enable()
Sets the value of the specified option to `true`.

```js
instance.enable('option');
```

> The above example sets `option` to `true`.

### .disable()
Sets the value of a specified options to `false`

```js
instance.disable('option');
```

> The above example sets `option` to `false`.

### .defaults()
Used to set the initial/default values for set of options.

```js
instance.defaults({
  option1: 'default1',
  option2: 'default2'
});
```

> The above example sets the default values of `option1` and `option2` to `'default1'` and `'default2'` respectively.

### .validators()
Use to specify validators for a set of options. Validators can be either a function or a regular expression.

If the validator is a function it will take the value to be validated as it's sole argument, and must return a boolean indicating if the validation was successful.

**options-api** will throw an `InvalidOption` error after an unsuccessful validation.

> **NOTE:**
>
> *Validators are only applied to values set with `.set()`. Initial/default values set with `.default()` are not validated.*

```js
instance.validators({
  option1: function(value) {
    return typeof value === 'string'
  },
  option2: /^default/
});
```

> In the example above, values for `option1` are only valid if they are a `string`, and values for `option2` are only valid if the begin with the string `'default'`.

### .reset()
Resets all options to their default values.

```js
instance.reset();
```

## Testing
To test **options-api** simply clone the repo and run `npm test`.

```
git clone https://github.com/AgentiaSystems/options-api.git
cd options-api
npm test
```

You can also run lint test and check the test coverage.

```
npm run lint
npm run cover  // <-- report will be store in the `.coverage` folder
```

## Attributions
This work was partly inspired by  [KeystoneJS][keystone-url] (my thanks to [@JedWatson][jedwatson-url]) and
[Grappling Hook][grappling-url] (my thanks to [@crynders][crynders-url]).

## License
**options-api** is free and open source under the MIT License.

Copyright (c) 2015 [Johnny Estilles](https://github.com/JohnnyEstilles), [http://www.agentia.asia][agentia-url]


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[logo-url]: media/logo.png
[agentia-url]: http://www.agentia.asia
[express-url]: http://expressjs.com

[keystone-url]: http://www.keystonejs.com
[jedwatson-url]: https://github.com/JedWatson

[grappling-url]: https://github.com/keystonejs/grappling-hook
[crynders-url]: https://github.com/creynders

[npm-badge]: https://badge.fury.io/js/options-api.svg
[npm-url]: https://npmjs.org/package/options-api

[travis-image]: https://travis-ci.org/AgentiaSystems/options-api.svg?branch=master
[travis-url]: https://travis-ci.org/AgentiaSystems/options-api

[codeclimate-url]: https://codeclimate.com/github/AgentiaSystems/options-api
[gpa-badge]: https://codeclimate.com/github/AgentiaSystems/options-api/badges/gpa.svg
[coverage-badge]: https://codeclimate.com/github/AgentiaSystems/options-api/badges/coverage.svg
