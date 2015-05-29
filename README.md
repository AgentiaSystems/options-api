# <a name="top"></a>![logo][logo-url]

[![Build Status][travis-image]][travis-url]
[![Code Climate][gpa-badge]][codeclimate-url]
[![Test Coverage][coverage-badge]][codeclimate-url]

Many applications and modules maintain a dictionary of options available to consumers.
I've frequently found myself adding this functionality to my code. So, I figured, why not just
package it up in an npm module and share it with the world. I'm sure someone
out there may find it useful. That when I decided to publish **options-api**.

**options-api** allows you to easily set, get and optionally validate key/value
pairs with a simply API, so that you can store/retreive your module's or application's
configuration. It's a simple in-memory options store you can use standalone, mixin
to an existing object, or attach to an existing class.

I took inspiration from some awesome open-source projects like [KeystoneJS][keystone-url], [Grappling Hook][grappling-url], and [ExpressJS][express-url], so the api is friendly and intuitive.

If I haven't bored you and you're still interested please read on.

- [Installation](#installation)
- [Usage](#usage)
- [Static API](#static-api)
- [Static API Parameters](#static-api-params)
- [Instance API](#instance-api)
- [Instance API Parameters](#instance-api-params)
- [Unit Testing](#unit-testing)
- [Attributions](#attributions)
- [License](#license)

<a name="installation"></a>
## Installation
[![npm][npm-badge]][npm-url]

**options-api** is available on [npm][npm-url].

```js
npm install --save options-api
```

[Back to Top](#top)

<a name="usage"></a>
## Usage

**options-api** a number of static methods that will easily let in incorporate its
functionality into your projects in a variety of circumstances.

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

  optionsApi.attach(Clazz);
  ```

[Back to Top](#top)

<a name="static-api"></a>
## Static API

Method | Parameters | Description
------ | ---------- | -----------
.create() | `defauts`&nbsp;*(optional)*<br>`validators`&nbsp;*(optional)* | Creates a standalone instance of **options-api**
.mixin() | `instance`<br>`defauts`&nbsp;*(optional)*<br>`validators`&nbsp;*(optional)* | Adds **options-api** functionality to an existing object
.attach() | `class`<br>`defauts`&nbsp;*(optional)*<br>`validators`&nbsp;*(optional)* | Adds **option-api** functionality to the prototype of an existing class

[Back to Top](#top)

<a name="static-api-params"></a>
### Static API Parameters

Parameter | Type | Description
--------- | ---- | -----------
defaults | `object` | Object hash of key/value pairs with default values for options, where the keys are the option names and values are the defaults.
validators | `object` | Object has of key/value pairs, where the keys as the option names and the values are the validators.<br><br>Validators can be either a function (which takes teh value to be validated as an argument and return a boolean indication if the validation was successful) or a regular expression.
instance | `object` | Object onto which you would like to add  **options-api** functionality
class | `constructor`<br>`object` | Class, the prototype of which you would like  add  **options-api** functionality

[Back to Top](#top)

<a name="instance-api"></a>
## Instance API

Method | Parameters | Description
------ | ---------- | -----------
.set() | `option`<br>`value` | Set an options value
.get() | `option` | Retrieve an options value
.enable() | `option` | Set an option's value to `true`
.disable() | `option` | Set an options's value to `false`
.defaults() | `defaults`| Sets default values for options
.validators() | `validators` | Specify option validators
.reset() | n/a | Sets all options back to their configured defaults

[Back to Top](#top)

<a name="instance-api-params"></a>
### Instance API Parameters

Parameter | Type | Description
--------- | ---- | -----------
option | `string` | Option name
value | `any` | Value to which to set the option
defaults | `object` | See `defaults` above (under [Static API Parameters](#static-api-params))
validators | `object` | See `validators` above (under [Static API Parameters](#static-api-params))

[Back to Top](#top)

<a name="unit-testing"></a>
## Unit Testing
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

[Back to Top](#top)

<a name="attributions"></a>
## Attributions
This work was partly inspired by [KeystoneJS][keystone-url] (thank you [@JedWatson][jedwatson-url] et al) and [Grappling Hook][grappling-url] (thank you [@crynders][crynders-url]).

[Back to Top](#top)

<a name="license"></a>
## License
**options-api** is free and open source under the MIT License.

Copyright (c) 2015 [Johnny Estilles](https://github.com/JohnnyEstilles), [http://www.agentia.asia][agentia-url]


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Back to Top](#top)

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
