function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/core-js/internals/a-function.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/a-function.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAFunctionJs(module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') {
        throw TypeError(String(it) + ' is not a function');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/a-possible-prototype.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAPossiblePrototypeJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    module.exports = function (it) {
      if (!isObject(it) && it !== null) {
        throw TypeError("Can't set " + String(it) + ' as a prototype');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/add-to-unscopables.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAddToUnscopablesJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var create = __webpack_require__(
    /*! ../internals/object-create */
    "./node_modules/core-js/internals/object-create.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var UNSCOPABLES = wellKnownSymbol('unscopables');
    var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
    // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

    if (ArrayPrototype[UNSCOPABLES] == undefined) {
      definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create(null)
      });
    } // add a key to Array.prototype[@@unscopables]


    module.exports = function (key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/advance-string-index.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/advance-string-index.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAdvanceStringIndexJs(module, exports, __webpack_require__) {
    "use strict";

    var charAt = __webpack_require__(
    /*! ../internals/string-multibyte */
    "./node_modules/core-js/internals/string-multibyte.js").charAt; // `AdvanceStringIndex` abstract operation
    // https://tc39.github.io/ecma262/#sec-advancestringindex


    module.exports = function (S, index, unicode) {
      return index + (unicode ? charAt(S, index).length : 1);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/an-instance.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/an-instance.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAnInstanceJs(module, exports) {
    module.exports = function (it, Constructor, name) {
      if (!(it instanceof Constructor)) {
        throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/an-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/an-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAnObjectJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    module.exports = function (it) {
      if (!isObject(it)) {
        throw TypeError(String(it) + ' is not an object');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/array-fill.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/array-fill.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayFillJs(module, exports, __webpack_require__) {
    "use strict";

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var toAbsoluteIndex = __webpack_require__(
    /*! ../internals/to-absolute-index */
    "./node_modules/core-js/internals/to-absolute-index.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js"); // `Array.prototype.fill` method implementation
    // https://tc39.github.io/ecma262/#sec-array.prototype.fill


    module.exports = function fill(value
    /* , start = 0, end = @length */
    ) {
      var O = toObject(this);
      var length = toLength(O.length);
      var argumentsLength = arguments.length;
      var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
      var end = argumentsLength > 2 ? arguments[2] : undefined;
      var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

      while (endPos > index) {
        O[index++] = value;
      }

      return O;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/array-for-each.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/array-for-each.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayForEachJs(module, exports, __webpack_require__) {
    "use strict";

    var $forEach = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js").forEach;

    var arrayMethodIsStrict = __webpack_require__(
    /*! ../internals/array-method-is-strict */
    "./node_modules/core-js/internals/array-method-is-strict.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var STRICT_METHOD = arrayMethodIsStrict('forEach');
    var USES_TO_LENGTH = arrayMethodUsesToLength('forEach'); // `Array.prototype.forEach` method implementation
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach

    module.exports = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn
    /* , thisArg */
    ) {
      return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    } : [].forEach;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-from.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/array-from.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayFromJs(module, exports, __webpack_require__) {
    "use strict";

    var bind = __webpack_require__(
    /*! ../internals/function-bind-context */
    "./node_modules/core-js/internals/function-bind-context.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var callWithSafeIterationClosing = __webpack_require__(
    /*! ../internals/call-with-safe-iteration-closing */
    "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

    var isArrayIteratorMethod = __webpack_require__(
    /*! ../internals/is-array-iterator-method */
    "./node_modules/core-js/internals/is-array-iterator-method.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var createProperty = __webpack_require__(
    /*! ../internals/create-property */
    "./node_modules/core-js/internals/create-property.js");

    var getIteratorMethod = __webpack_require__(
    /*! ../internals/get-iterator-method */
    "./node_modules/core-js/internals/get-iterator-method.js"); // `Array.from` method implementation
    // https://tc39.github.io/ecma262/#sec-array.from


    module.exports = function from(arrayLike
    /* , mapfn = undefined, thisArg = undefined */
    ) {
      var O = toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var iteratorMethod = getIteratorMethod(O);
      var index = 0;
      var length, result, step, iterator, next, value;
      if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

      if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = iteratorMethod.call(O);
        next = iterator.next;
        result = new C();

        for (; !(step = next.call(iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
          createProperty(result, index, value);
        }
      } else {
        length = toLength(O.length);
        result = new C(length);

        for (; length > index; index++) {
          value = mapping ? mapfn(O[index], index) : O[index];
          createProperty(result, index, value);
        }
      }

      result.length = index;
      return result;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/array-includes.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/array-includes.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayIncludesJs(module, exports, __webpack_require__) {
    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var toAbsoluteIndex = __webpack_require__(
    /*! ../internals/to-absolute-index */
    "./node_modules/core-js/internals/to-absolute-index.js"); // `Array.prototype.{ indexOf, includes }` methods implementation


    var createMethod = function createMethod(IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value; // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare

        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++]; // eslint-disable-next-line no-self-compare

          if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
        } else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };

    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-iteration.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/array-iteration.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayIterationJs(module, exports, __webpack_require__) {
    var bind = __webpack_require__(
    /*! ../internals/function-bind-context */
    "./node_modules/core-js/internals/function-bind-context.js");

    var IndexedObject = __webpack_require__(
    /*! ../internals/indexed-object */
    "./node_modules/core-js/internals/indexed-object.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var arraySpeciesCreate = __webpack_require__(
    /*! ../internals/array-species-create */
    "./node_modules/core-js/internals/array-species-create.js");

    var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

    var createMethod = function createMethod(TYPE) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      return function ($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = IndexedObject(O);
        var boundFunction = bind(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var value, result;

        for (; length > index; index++) {
          if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);

            if (TYPE) {
              if (IS_MAP) target[index] = result; // map
              else if (result) switch (TYPE) {
                  case 3:
                    return true;
                  // some

                  case 5:
                    return value;
                  // find

                  case 6:
                    return index;
                  // findIndex

                  case 2:
                    push.call(target, value);
                  // filter
                } else if (IS_EVERY) return false; // every
            }
          }
        }

        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
      };
    };

    module.exports = {
      // `Array.prototype.forEach` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
      forEach: createMethod(0),
      // `Array.prototype.map` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.map
      map: createMethod(1),
      // `Array.prototype.filter` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.filter
      filter: createMethod(2),
      // `Array.prototype.some` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.some
      some: createMethod(3),
      // `Array.prototype.every` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.every
      every: createMethod(4),
      // `Array.prototype.find` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.find
      find: createMethod(5),
      // `Array.prototype.findIndex` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod(6)
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-last-index-of.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayLastIndexOfJs(module, exports, __webpack_require__) {
    "use strict";

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var arrayMethodIsStrict = __webpack_require__(
    /*! ../internals/array-method-is-strict */
    "./node_modules/core-js/internals/array-method-is-strict.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var min = Math.min;
    var nativeLastIndexOf = [].lastIndexOf;
    var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
    var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf'); // For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method

    var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', {
      ACCESSORS: true,
      1: 0
    });
    var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH; // `Array.prototype.lastIndexOf` method implementation
    // https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof

    module.exports = FORCED ? function lastIndexOf(searchElement
    /* , fromIndex = @[*-1] */
    ) {
      // convert -0 to +0
      if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
      var O = toIndexedObject(this);
      var length = toLength(O.length);
      var index = length - 1;
      if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
      if (index < 0) index = length + index;

      for (; index >= 0; index--) {
        if (index in O && O[index] === searchElement) return index || 0;
      }

      return -1;
    } : nativeLastIndexOf;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-method-has-species-support.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayMethodHasSpeciesSupportJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var V8_VERSION = __webpack_require__(
    /*! ../internals/engine-v8-version */
    "./node_modules/core-js/internals/engine-v8-version.js");

    var SPECIES = wellKnownSymbol('species');

    module.exports = function (METHOD_NAME) {
      // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/677
      return V8_VERSION >= 51 || !fails(function () {
        var array = [];
        var constructor = array.constructor = {};

        constructor[SPECIES] = function () {
          return {
            foo: 1
          };
        };

        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/array-method-is-strict.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayMethodIsStrictJs(module, exports, __webpack_require__) {
    "use strict";

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    module.exports = function (METHOD_NAME, argument) {
      var method = [][METHOD_NAME];
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call,no-throw-literal
        method.call(null, argument || function () {
          throw 1;
        }, 1);
      });
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/array-method-uses-to-length.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayMethodUsesToLengthJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var defineProperty = Object.defineProperty;
    var cache = {};

    var thrower = function thrower(it) {
      throw it;
    };

    module.exports = function (METHOD_NAME, options) {
      if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
      if (!options) options = {};
      var method = [][METHOD_NAME];
      var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
      var argument0 = has(options, 0) ? options[0] : thrower;
      var argument1 = has(options, 1) ? options[1] : undefined;
      return cache[METHOD_NAME] = !!method && !fails(function () {
        if (ACCESSORS && !DESCRIPTORS) return true;
        var O = {
          length: -1
        };
        if (ACCESSORS) defineProperty(O, 1, {
          enumerable: true,
          get: thrower
        });else O[1] = 1;
        method.call(O, argument0, argument1);
      });
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/array-reduce.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/array-reduce.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayReduceJs(module, exports, __webpack_require__) {
    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js/internals/a-function.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var IndexedObject = __webpack_require__(
    /*! ../internals/indexed-object */
    "./node_modules/core-js/internals/indexed-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js"); // `Array.prototype.{ reduce, reduceRight }` methods implementation


    var createMethod = function createMethod(IS_RIGHT) {
      return function (that, callbackfn, argumentsLength, memo) {
        aFunction(callbackfn);
        var O = toObject(that);
        var self = IndexedObject(O);
        var length = toLength(O.length);
        var index = IS_RIGHT ? length - 1 : 0;
        var i = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2) while (true) {
          if (index in self) {
            memo = self[index];
            index += i;
            break;
          }

          index += i;

          if (IS_RIGHT ? index < 0 : length <= index) {
            throw TypeError('Reduce of empty array with no initial value');
          }
        }

        for (; IS_RIGHT ? index >= 0 : length > index; index += i) {
          if (index in self) {
            memo = callbackfn(memo, self[index], index, O);
          }
        }

        return memo;
      };
    };

    module.exports = {
      // `Array.prototype.reduce` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
      left: createMethod(false),
      // `Array.prototype.reduceRight` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
      right: createMethod(true)
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-species-create.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/array-species-create.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArraySpeciesCreateJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var isArray = __webpack_require__(
    /*! ../internals/is-array */
    "./node_modules/core-js/internals/is-array.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
    // https://tc39.github.io/ecma262/#sec-arrayspeciescreate

    module.exports = function (originalArray, length) {
      var C;

      if (isArray(originalArray)) {
        C = originalArray.constructor; // cross-realm fallback

        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      }

      return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCallWithSafeIterationClosingJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js"); // call something on iterator step with safe closing on error


    module.exports = function (iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
      } catch (error) {
        var returnMethod = iterator['return'];
        if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
        throw error;
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/check-correctness-of-iteration.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCheckCorrectnessOfIterationJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var ITERATOR = wellKnownSymbol('iterator');
    var SAFE_CLOSING = false;

    try {
      var called = 0;
      var iteratorWithReturn = {
        next: function next() {
          return {
            done: !!called++
          };
        },
        'return': function _return() {
          SAFE_CLOSING = true;
        }
      };

      iteratorWithReturn[ITERATOR] = function () {
        return this;
      }; // eslint-disable-next-line no-throw-literal


      Array.from(iteratorWithReturn, function () {
        throw 2;
      });
    } catch (error) {
      /* empty */
    }

    module.exports = function (exec, SKIP_CLOSING) {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
      var ITERATION_SUPPORT = false;

      try {
        var object = {};

        object[ITERATOR] = function () {
          return {
            next: function next() {
              return {
                done: ITERATION_SUPPORT = true
              };
            }
          };
        };

        exec(object);
      } catch (error) {
        /* empty */
      }

      return ITERATION_SUPPORT;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/classof-raw.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/classof-raw.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsClassofRawJs(module, exports) {
    var toString = {}.toString;

    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/classof.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/internals/classof.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsClassofJs(module, exports, __webpack_require__) {
    var TO_STRING_TAG_SUPPORT = __webpack_require__(
    /*! ../internals/to-string-tag-support */
    "./node_modules/core-js/internals/to-string-tag-support.js");

    var classofRaw = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

    var CORRECT_ARGUMENTS = classofRaw(function () {
      return arguments;
    }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

    var tryGet = function tryGet(it, key) {
      try {
        return it[key];
      } catch (error) {
        /* empty */
      }
    }; // getting tag from ES6+ `Object.prototype.toString`


    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
      var O, tag, result;
      return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/collection-strong.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/collection-strong.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCollectionStrongJs(module, exports, __webpack_require__) {
    "use strict";

    var defineProperty = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js").f;

    var create = __webpack_require__(
    /*! ../internals/object-create */
    "./node_modules/core-js/internals/object-create.js");

    var redefineAll = __webpack_require__(
    /*! ../internals/redefine-all */
    "./node_modules/core-js/internals/redefine-all.js");

    var bind = __webpack_require__(
    /*! ../internals/function-bind-context */
    "./node_modules/core-js/internals/function-bind-context.js");

    var anInstance = __webpack_require__(
    /*! ../internals/an-instance */
    "./node_modules/core-js/internals/an-instance.js");

    var iterate = __webpack_require__(
    /*! ../internals/iterate */
    "./node_modules/core-js/internals/iterate.js");

    var defineIterator = __webpack_require__(
    /*! ../internals/define-iterator */
    "./node_modules/core-js/internals/define-iterator.js");

    var setSpecies = __webpack_require__(
    /*! ../internals/set-species */
    "./node_modules/core-js/internals/set-species.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var fastKey = __webpack_require__(
    /*! ../internals/internal-metadata */
    "./node_modules/core-js/internals/internal-metadata.js").fastKey;

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js");

    var setInternalState = InternalStateModule.set;
    var internalStateGetterFor = InternalStateModule.getterFor;
    module.exports = {
      getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, CONSTRUCTOR_NAME);
          setInternalState(that, {
            type: CONSTRUCTOR_NAME,
            index: create(null),
            first: undefined,
            last: undefined,
            size: 0
          });
          if (!DESCRIPTORS) that.size = 0;
          if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        });
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

        var define = function define(that, key, value) {
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          var previous, index; // change existing entry

          if (entry) {
            entry.value = value; // create new entry
          } else {
            state.last = entry = {
              index: index = fastKey(key, true),
              key: key,
              value: value,
              previous: previous = state.last,
              next: undefined,
              removed: false
            };
            if (!state.first) state.first = entry;
            if (previous) previous.next = entry;
            if (DESCRIPTORS) state.size++;else that.size++; // add to index

            if (index !== 'F') state.index[index] = entry;
          }

          return that;
        };

        var getEntry = function getEntry(that, key) {
          var state = getInternalState(that); // fast case

          var index = fastKey(key);
          var entry;
          if (index !== 'F') return state.index[index]; // frozen object case

          for (entry = state.first; entry; entry = entry.next) {
            if (entry.key == key) return entry;
          }
        };

        redefineAll(C.prototype, {
          // 23.1.3.1 Map.prototype.clear()
          // 23.2.3.2 Set.prototype.clear()
          clear: function clear() {
            var that = this;
            var state = getInternalState(that);
            var data = state.index;
            var entry = state.first;

            while (entry) {
              entry.removed = true;
              if (entry.previous) entry.previous = entry.previous.next = undefined;
              delete data[entry.index];
              entry = entry.next;
            }

            state.first = state.last = undefined;
            if (DESCRIPTORS) state.size = 0;else that.size = 0;
          },
          // 23.1.3.3 Map.prototype.delete(key)
          // 23.2.3.4 Set.prototype.delete(value)
          'delete': function _delete(key) {
            var that = this;
            var state = getInternalState(that);
            var entry = getEntry(that, key);

            if (entry) {
              var next = entry.next;
              var prev = entry.previous;
              delete state.index[entry.index];
              entry.removed = true;
              if (prev) prev.next = next;
              if (next) next.previous = prev;
              if (state.first == entry) state.first = next;
              if (state.last == entry) state.last = prev;
              if (DESCRIPTORS) state.size--;else that.size--;
            }

            return !!entry;
          },
          // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
          // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
          forEach: function forEach(callbackfn
          /* , that = undefined */
          ) {
            var state = getInternalState(this);
            var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
            var entry;

            while (entry = entry ? entry.next : state.first) {
              boundFunction(entry.value, entry.key, this); // revert to the last existing entry

              while (entry && entry.removed) {
                entry = entry.previous;
              }
            }
          },
          // 23.1.3.7 Map.prototype.has(key)
          // 23.2.3.7 Set.prototype.has(value)
          has: function has(key) {
            return !!getEntry(this, key);
          }
        });
        redefineAll(C.prototype, IS_MAP ? {
          // 23.1.3.6 Map.prototype.get(key)
          get: function get(key) {
            var entry = getEntry(this, key);
            return entry && entry.value;
          },
          // 23.1.3.9 Map.prototype.set(key, value)
          set: function set(key, value) {
            return define(this, key === 0 ? 0 : key, value);
          }
        } : {
          // 23.2.3.1 Set.prototype.add(value)
          add: function add(value) {
            return define(this, value = value === 0 ? 0 : value, value);
          }
        });
        if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
          get: function get() {
            return getInternalState(this).size;
          }
        });
        return C;
      },
      setStrong: function setStrong(C, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11

        defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
          setInternalState(this, {
            type: ITERATOR_NAME,
            target: iterated,
            state: getInternalCollectionState(iterated),
            kind: kind,
            last: undefined
          });
        }, function () {
          var state = getInternalIteratorState(this);
          var kind = state.kind;
          var entry = state.last; // revert to the last existing entry

          while (entry && entry.removed) {
            entry = entry.previous;
          } // get next entry


          if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
            // or finish the iteration
            state.target = undefined;
            return {
              value: undefined,
              done: true
            };
          } // return step by kind


          if (kind == 'keys') return {
            value: entry.key,
            done: false
          };
          if (kind == 'values') return {
            value: entry.value,
            done: false
          };
          return {
            value: [entry.key, entry.value],
            done: false
          };
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

        setSpecies(CONSTRUCTOR_NAME);
      }
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/collection-weak.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/collection-weak.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCollectionWeakJs(module, exports, __webpack_require__) {
    "use strict";

    var redefineAll = __webpack_require__(
    /*! ../internals/redefine-all */
    "./node_modules/core-js/internals/redefine-all.js");

    var getWeakData = __webpack_require__(
    /*! ../internals/internal-metadata */
    "./node_modules/core-js/internals/internal-metadata.js").getWeakData;

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var anInstance = __webpack_require__(
    /*! ../internals/an-instance */
    "./node_modules/core-js/internals/an-instance.js");

    var iterate = __webpack_require__(
    /*! ../internals/iterate */
    "./node_modules/core-js/internals/iterate.js");

    var ArrayIterationModule = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js");

    var $has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js");

    var setInternalState = InternalStateModule.set;
    var internalStateGetterFor = InternalStateModule.getterFor;
    var find = ArrayIterationModule.find;
    var findIndex = ArrayIterationModule.findIndex;
    var id = 0; // fallback for uncaught frozen keys

    var uncaughtFrozenStore = function uncaughtFrozenStore(store) {
      return store.frozen || (store.frozen = new UncaughtFrozenStore());
    };

    var UncaughtFrozenStore = function UncaughtFrozenStore() {
      this.entries = [];
    };

    var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
      return find(store.entries, function (it) {
        return it[0] === key;
      });
    };

    UncaughtFrozenStore.prototype = {
      get: function get(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
      },
      has: function has(key) {
        return !!findUncaughtFrozen(this, key);
      },
      set: function set(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;else this.entries.push([key, value]);
      },
      'delete': function _delete(key) {
        var index = findIndex(this.entries, function (it) {
          return it[0] === key;
        });
        if (~index) this.entries.splice(index, 1);
        return !!~index;
      }
    };
    module.exports = {
      getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, CONSTRUCTOR_NAME);
          setInternalState(that, {
            type: CONSTRUCTOR_NAME,
            id: id++,
            frozen: undefined
          });
          if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        });
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

        var define = function define(that, key, value) {
          var state = getInternalState(that);
          var data = getWeakData(anObject(key), true);
          if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
          return that;
        };

        redefineAll(C.prototype, {
          // 23.3.3.2 WeakMap.prototype.delete(key)
          // 23.4.3.3 WeakSet.prototype.delete(value)
          'delete': function _delete(key) {
            var state = getInternalState(this);
            if (!isObject(key)) return false;
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state)['delete'](key);
            return data && $has(data, state.id) && delete data[state.id];
          },
          // 23.3.3.4 WeakMap.prototype.has(key)
          // 23.4.3.4 WeakSet.prototype.has(value)
          has: function has(key) {
            var state = getInternalState(this);
            if (!isObject(key)) return false;
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state).has(key);
            return data && $has(data, state.id);
          }
        });
        redefineAll(C.prototype, IS_MAP ? {
          // 23.3.3.3 WeakMap.prototype.get(key)
          get: function get(key) {
            var state = getInternalState(this);

            if (isObject(key)) {
              var data = getWeakData(key);
              if (data === true) return uncaughtFrozenStore(state).get(key);
              return data ? data[state.id] : undefined;
            }
          },
          // 23.3.3.5 WeakMap.prototype.set(key, value)
          set: function set(key, value) {
            return define(this, key, value);
          }
        } : {
          // 23.4.3.1 WeakSet.prototype.add(value)
          add: function add(value) {
            return define(this, value, true);
          }
        });
        return C;
      }
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/collection.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/collection.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCollectionJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var isForced = __webpack_require__(
    /*! ../internals/is-forced */
    "./node_modules/core-js/internals/is-forced.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var InternalMetadataModule = __webpack_require__(
    /*! ../internals/internal-metadata */
    "./node_modules/core-js/internals/internal-metadata.js");

    var iterate = __webpack_require__(
    /*! ../internals/iterate */
    "./node_modules/core-js/internals/iterate.js");

    var anInstance = __webpack_require__(
    /*! ../internals/an-instance */
    "./node_modules/core-js/internals/an-instance.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var checkCorrectnessOfIteration = __webpack_require__(
    /*! ../internals/check-correctness-of-iteration */
    "./node_modules/core-js/internals/check-correctness-of-iteration.js");

    var setToStringTag = __webpack_require__(
    /*! ../internals/set-to-string-tag */
    "./node_modules/core-js/internals/set-to-string-tag.js");

    var inheritIfRequired = __webpack_require__(
    /*! ../internals/inherit-if-required */
    "./node_modules/core-js/internals/inherit-if-required.js");

    module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
      var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
      var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
      var ADDER = IS_MAP ? 'set' : 'add';
      var NativeConstructor = global[CONSTRUCTOR_NAME];
      var NativePrototype = NativeConstructor && NativeConstructor.prototype;
      var Constructor = NativeConstructor;
      var exported = {};

      var fixMethod = function fixMethod(KEY) {
        var nativeMethod = NativePrototype[KEY];
        redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
          nativeMethod.call(this, value === 0 ? 0 : value);
          return this;
        } : KEY == 'delete' ? function (key) {
          return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
        } : KEY == 'get' ? function get(key) {
          return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
        } : KEY == 'has' ? function has(key) {
          return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
        } : function set(key, value) {
          nativeMethod.call(this, key === 0 ? 0 : key, value);
          return this;
        });
      }; // eslint-disable-next-line max-len


      if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
        new NativeConstructor().entries().next();
      })))) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        InternalMetadataModule.REQUIRED = true;
      } else if (isForced(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor(); // early implementations not supports chaining

        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

        var THROWS_ON_PRIMITIVES = fails(function () {
          instance.has(1);
        }); // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new

        var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
          new NativeConstructor(iterable);
        }); // for early implementations -0 and +0 not the same

        var BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new NativeConstructor();
          var index = 5;

          while (index--) {
            $instance[ADDER](index, index);
          }

          return !$instance.has(-0);
        });

        if (!ACCEPT_ITERABLES) {
          Constructor = wrapper(function (dummy, iterable) {
            anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
            var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
            if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
            return that;
          });
          Constructor.prototype = NativePrototype;
          NativePrototype.constructor = Constructor;
        }

        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }

        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
      }

      exported[CONSTRUCTOR_NAME] = Constructor;
      $({
        global: true,
        forced: Constructor != NativeConstructor
      }, exported);
      setToStringTag(Constructor, CONSTRUCTOR_NAME);
      if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
      return Constructor;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/copy-constructor-properties.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCopyConstructorPropertiesJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var ownKeys = __webpack_require__(
    /*! ../internals/own-keys */
    "./node_modules/core-js/internals/own-keys.js");

    var getOwnPropertyDescriptorModule = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    module.exports = function (target, source) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/correct-is-regexp-logic.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCorrectIsRegexpLogicJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var MATCH = wellKnownSymbol('match');

    module.exports = function (METHOD_NAME) {
      var regexp = /./;

      try {
        '/./'[METHOD_NAME](regexp);
      } catch (e) {
        try {
          regexp[MATCH] = false;
          return '/./'[METHOD_NAME](regexp);
        } catch (f) {
          /* empty */
        }
      }

      return false;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/correct-prototype-getter.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCorrectPrototypeGetterJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    module.exports = !fails(function () {
      function F() {
        /* empty */
      }

      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/create-html.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/create-html.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreateHtmlJs(module, exports, __webpack_require__) {
    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
    // https://tc39.github.io/ecma262/#sec-createhtml

    module.exports = function (string, tag, attribute, value) {
      var S = String(requireObjectCoercible(string));
      var p1 = '<' + tag;
      if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
      return p1 + '>' + S + '</' + tag + '>';
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/create-iterator-constructor.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreateIteratorConstructorJs(module, exports, __webpack_require__) {
    "use strict";

    var IteratorPrototype = __webpack_require__(
    /*! ../internals/iterators-core */
    "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;

    var create = __webpack_require__(
    /*! ../internals/object-create */
    "./node_modules/core-js/internals/object-create.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    var setToStringTag = __webpack_require__(
    /*! ../internals/set-to-string-tag */
    "./node_modules/core-js/internals/set-to-string-tag.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js/internals/iterators.js");

    var returnThis = function returnThis() {
      return this;
    };

    module.exports = function (IteratorConstructor, NAME, next) {
      var TO_STRING_TAG = NAME + ' Iterator';
      IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(1, next)
      });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
      Iterators[TO_STRING_TAG] = returnThis;
      return IteratorConstructor;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/create-non-enumerable-property.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreateNonEnumerablePropertyJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    module.exports = DESCRIPTORS ? function (object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/create-property-descriptor.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreatePropertyDescriptorJs(module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/create-property.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/create-property.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreatePropertyJs(module, exports, __webpack_require__) {
    "use strict";

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    module.exports = function (object, key, value) {
      var propertyKey = toPrimitive(key);
      if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/define-iterator.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/define-iterator.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDefineIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var createIteratorConstructor = __webpack_require__(
    /*! ../internals/create-iterator-constructor */
    "./node_modules/core-js/internals/create-iterator-constructor.js");

    var getPrototypeOf = __webpack_require__(
    /*! ../internals/object-get-prototype-of */
    "./node_modules/core-js/internals/object-get-prototype-of.js");

    var setPrototypeOf = __webpack_require__(
    /*! ../internals/object-set-prototype-of */
    "./node_modules/core-js/internals/object-set-prototype-of.js");

    var setToStringTag = __webpack_require__(
    /*! ../internals/set-to-string-tag */
    "./node_modules/core-js/internals/set-to-string-tag.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js/internals/is-pure.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js/internals/iterators.js");

    var IteratorsCore = __webpack_require__(
    /*! ../internals/iterators-core */
    "./node_modules/core-js/internals/iterators-core.js");

    var IteratorPrototype = IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR = wellKnownSymbol('iterator');
    var KEYS = 'keys';
    var VALUES = 'values';
    var ENTRIES = 'entries';

    var returnThis = function returnThis() {
      return this;
    };

    module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);

      var getIterationMethod = function getIterationMethod(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

        switch (KIND) {
          case KEYS:
            return function keys() {
              return new IteratorConstructor(this, KIND);
            };

          case VALUES:
            return function values() {
              return new IteratorConstructor(this, KIND);
            };

          case ENTRIES:
            return function entries() {
              return new IteratorConstructor(this, KIND);
            };
        }

        return function () {
          return new IteratorConstructor(this);
        };
      };

      var TO_STRING_TAG = NAME + ' Iterator';
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY; // fix native

      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

        if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
              createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
          } // Set @@toStringTag to native iterators


          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
          if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
      } // fix Array#{values, @@iterator}.name in V8 / FF


      if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        INCORRECT_VALUES_NAME = true;

        defaultIterator = function values() {
          return nativeIterator.call(this);
        };
      } // define iterator


      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
      }

      Iterators[NAME] = defaultIterator; // export additional methods

      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            redefine(IterablePrototype, KEY, methods[KEY]);
          }
        } else $({
          target: NAME,
          proto: true,
          forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
      }

      return methods;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/define-well-known-symbol.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDefineWellKnownSymbolJs(module, exports, __webpack_require__) {
    var path = __webpack_require__(
    /*! ../internals/path */
    "./node_modules/core-js/internals/path.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var wrappedWellKnownSymbolModule = __webpack_require__(
    /*! ../internals/well-known-symbol-wrapped */
    "./node_modules/core-js/internals/well-known-symbol-wrapped.js");

    var defineProperty = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js").f;

    module.exports = function (NAME) {
      var Symbol = path.Symbol || (path.Symbol = {});
      if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
        value: wrappedWellKnownSymbolModule.f(NAME)
      });
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/descriptors.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/descriptors.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDescriptorsJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js"); // Thank's IE8 for his funny defineProperty


    module.exports = !fails(function () {
      return Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1] != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/document-create-element.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/document-create-element.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDocumentCreateElementJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var document = global.document; // typeof document.createElement is 'object' in old IE

    var EXISTS = isObject(document) && isObject(document.createElement);

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {};
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/dom-iterables.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/dom-iterables.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDomIterablesJs(module, exports) {
    // iterable DOM collections
    // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
    module.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/engine-is-ios.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsEngineIsIosJs(module, exports, __webpack_require__) {
    var userAgent = __webpack_require__(
    /*! ../internals/engine-user-agent */
    "./node_modules/core-js/internals/engine-user-agent.js");

    module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);
    /***/
  },

  /***/
  "./node_modules/core-js/internals/engine-user-agent.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsEngineUserAgentJs(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    module.exports = getBuiltIn('navigator', 'userAgent') || '';
    /***/
  },

  /***/
  "./node_modules/core-js/internals/engine-v8-version.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsEngineV8VersionJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var userAgent = __webpack_require__(
    /*! ../internals/engine-user-agent */
    "./node_modules/core-js/internals/engine-user-agent.js");

    var process = global.process;
    var versions = process && process.versions;
    var v8 = versions && versions.v8;
    var match, version;

    if (v8) {
      match = v8.split('.');
      version = match[0] + match[1];
    } else if (userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);

      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = match[1];
      }
    }

    module.exports = version && +version;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/enum-bug-keys.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsEnumBugKeysJs(module, exports) {
    // IE8- don't enum bug keys
    module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
    /***/
  },

  /***/
  "./node_modules/core-js/internals/export.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/export.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsExportJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var getOwnPropertyDescriptor = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var copyConstructorProperties = __webpack_require__(
    /*! ../internals/copy-constructor-properties */
    "./node_modules/core-js/internals/copy-constructor-properties.js");

    var isForced = __webpack_require__(
    /*! ../internals/is-forced */
    "./node_modules/core-js/internals/is-forced.js");
    /*
      options.target      - name of the target object
      options.global      - target is the global object
      options.stat        - export as static methods of target
      options.proto       - export as prototype methods of target
      options.real        - real prototype method for the `pure` version
      options.forced      - export even if the native feature is available
      options.bind        - bind methods to the target, required for the `pure` version
      options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe      - use the simple assignment of property instead of delete + defineProperty
      options.sham        - add a flag to not completely full polyfills
      options.enumerable  - export as enumerable property
      options.noTargetGet - prevent calling a getter on target
    */


    module.exports = function (options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;

      if (GLOBAL) {
        target = global;
      } else if (STATIC) {
        target = global[TARGET] || setGlobal(TARGET, {});
      } else {
        target = (global[TARGET] || {}).prototype;
      }

      if (target) for (key in source) {
        sourceProperty = source[key];

        if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];

        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

        if (!FORCED && targetProperty !== undefined) {
          if (typeof sourceProperty === typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        } // add a flag to not completely full polyfills


        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(sourceProperty, 'sham', true);
        } // extend global


        redefine(target, key, sourceProperty, options);
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/fails.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/internals/fails.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFailsJs(module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFixRegexpWellKnownSymbolLogicJs(module, exports, __webpack_require__) {
    "use strict"; // TODO: Remove from `core-js@4` since it's moved to entry points

    __webpack_require__(
    /*! ../modules/es.regexp.exec */
    "./node_modules/core-js/modules/es.regexp.exec.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var regexpExec = __webpack_require__(
    /*! ../internals/regexp-exec */
    "./node_modules/core-js/internals/regexp-exec.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var SPECIES = wellKnownSymbol('species');
    var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
      // #replace needs built-in support for named groups.
      // #match works fine because it just return the exec results, even if it has
      // a "grops" property.
      var re = /./;

      re.exec = function () {
        var result = [];
        result.groups = {
          a: '7'
        };
        return result;
      };

      return ''.replace(re, '$<a>') !== '7';
    }); // IE <= 11 replaces $0 with the whole match, as if it was $&
    // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0

    var REPLACE_KEEPS_$0 = function () {
      return 'a'.replace(/./, '$0') === '$0';
    }();

    var REPLACE = wellKnownSymbol('replace'); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string

    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
      if (/./[REPLACE]) {
        return /./[REPLACE]('a', '$0') === '';
      }

      return false;
    }(); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    // Weex JS has frozen built-in prototypes, so use try / catch wrapper


    var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
      var re = /(?:)/;
      var originalExec = re.exec;

      re.exec = function () {
        return originalExec.apply(this, arguments);
      };

      var result = 'ab'.split(re);
      return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
    });

    module.exports = function (KEY, length, exec, sham) {
      var SYMBOL = wellKnownSymbol(KEY);
      var DELEGATES_TO_SYMBOL = !fails(function () {
        // String methods call symbol-named RegEp methods
        var O = {};

        O[SYMBOL] = function () {
          return 7;
        };

        return ''[KEY](O) != 7;
      });
      var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;

        if (KEY === 'split') {
          // We can't use real regex here since it causes deoptimization
          // and serious performance degradation in V8
          // https://github.com/zloirock/core-js/issues/306
          re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
          // a new one. We need to return the patched regex when creating the new one.

          re.constructor = {};

          re.constructor[SPECIES] = function () {
            return re;
          };

          re.flags = '';
          re[SYMBOL] = /./[SYMBOL];
        }

        re.exec = function () {
          execCalled = true;
          return null;
        };

        re[SYMBOL]('');
        return !execCalled;
      });

      if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
        var nativeRegExpMethod = /./[SYMBOL];
        var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
          if (regexp.exec === regexpExec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return {
                done: true,
                value: nativeRegExpMethod.call(regexp, str, arg2)
              };
            }

            return {
              done: true,
              value: nativeMethod.call(str, regexp, arg2)
            };
          }

          return {
            done: false
          };
        }, {
          REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
          REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
        });
        var stringMethod = methods[0];
        var regexMethod = methods[1];
        redefine(String.prototype, KEY, stringMethod);
        redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) {
          return regexMethod.call(string, this, arg);
        } // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) {
          return regexMethod.call(string, this);
        });
      }

      if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/freezing.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/freezing.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFreezingJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    module.exports = !fails(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/function-bind-context.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js/internals/function-bind-context.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFunctionBindContextJs(module, exports, __webpack_require__) {
    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js/internals/a-function.js"); // optional / simple context binding


    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;

      switch (length) {
        case 0:
          return function () {
            return fn.call(that);
          };

        case 1:
          return function (a) {
            return fn.call(that, a);
          };

        case 2:
          return function (a, b) {
            return fn.call(that, a, b);
          };

        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
      }

      return function ()
      /* ...args */
      {
        return fn.apply(that, arguments);
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/get-built-in.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/get-built-in.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGetBuiltInJs(module, exports, __webpack_require__) {
    var path = __webpack_require__(
    /*! ../internals/path */
    "./node_modules/core-js/internals/path.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var aFunction = function aFunction(variable) {
      return typeof variable == 'function' ? variable : undefined;
    };

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/get-iterator-method.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGetIteratorMethodJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ../internals/classof */
    "./node_modules/core-js/internals/classof.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js/internals/iterators.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var ITERATOR = wellKnownSymbol('iterator');

    module.exports = function (it) {
      if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/global.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/global.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGlobalJs(module, exports) {
    var check = function check(it) {
      return it && it.Math == Math && it;
    }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


    module.exports = // eslint-disable-next-line no-undef
    check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func
    Function('return this')();
    /***/
  },

  /***/
  "./node_modules/core-js/internals/has.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/internals/has.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHasJs(module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;

    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/hidden-keys.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/hidden-keys.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHiddenKeysJs(module, exports) {
    module.exports = {};
    /***/
  },

  /***/
  "./node_modules/core-js/internals/html.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/html.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHtmlJs(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    module.exports = getBuiltIn('document', 'documentElement');
    /***/
  },

  /***/
  "./node_modules/core-js/internals/ie8-dom-define.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIe8DomDefineJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var createElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js/internals/document-create-element.js"); // Thank's IE8 for his funny defineProperty


    module.exports = !DESCRIPTORS && !fails(function () {
      return Object.defineProperty(createElement('div'), 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/indexed-object.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/indexed-object.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIndexedObjectJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js");

    var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins
      return !Object('z').propertyIsEnumerable(0);
    }) ? function (it) {
      return classof(it) == 'String' ? split.call(it, '') : Object(it);
    } : Object;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/inherit-if-required.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsInheritIfRequiredJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var setPrototypeOf = __webpack_require__(
    /*! ../internals/object-set-prototype-of */
    "./node_modules/core-js/internals/object-set-prototype-of.js"); // makes subclassing work correct for wrapped built-ins


    module.exports = function ($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if ( // it can work only with native `setPrototypeOf`
      setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
      return $this;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/inspect-source.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/inspect-source.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsInspectSourceJs(module, exports, __webpack_require__) {
    var store = __webpack_require__(
    /*! ../internals/shared-store */
    "./node_modules/core-js/internals/shared-store.js");

    var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

    if (typeof store.inspectSource != 'function') {
      store.inspectSource = function (it) {
        return functionToString.call(it);
      };
    }

    module.exports = store.inspectSource;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/internal-metadata.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/internal-metadata.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsInternalMetadataJs(module, exports, __webpack_require__) {
    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var defineProperty = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js").f;

    var uid = __webpack_require__(
    /*! ../internals/uid */
    "./node_modules/core-js/internals/uid.js");

    var FREEZING = __webpack_require__(
    /*! ../internals/freezing */
    "./node_modules/core-js/internals/freezing.js");

    var METADATA = uid('meta');
    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var setMetadata = function setMetadata(it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + ++id,
          // object ID
          weakData: {} // weak collections IDs

        }
      });
    };

    var fastKey = function fastKey(it, create) {
      // return a primitive with prefix
      if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMetadata(it); // return object ID
      }

      return it[METADATA].objectID;
    };

    var getWeakData = function getWeakData(it, create) {
      if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMetadata(it); // return the store of weak collections IDs
      }

      return it[METADATA].weakData;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function onFreeze(it) {
      if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
      return it;
    };

    var meta = module.exports = {
      REQUIRED: false,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    };
    hiddenKeys[METADATA] = true;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/internal-state.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/internal-state.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsInternalStateJs(module, exports, __webpack_require__) {
    var NATIVE_WEAK_MAP = __webpack_require__(
    /*! ../internals/native-weak-map */
    "./node_modules/core-js/internals/native-weak-map.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var objectHas = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    var WeakMap = global.WeakMap;
    var set, get, has;

    var enforce = function enforce(it) {
      return has(it) ? get(it) : set(it, {});
    };

    var getterFor = function getterFor(TYPE) {
      return function (it) {
        var state;

        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        }

        return state;
      };
    };

    if (NATIVE_WEAK_MAP) {
      var store = new WeakMap();
      var wmget = store.get;
      var wmhas = store.has;
      var wmset = store.set;

      set = function set(it, metadata) {
        wmset.call(store, it, metadata);
        return metadata;
      };

      get = function get(it) {
        return wmget.call(store, it) || {};
      };

      has = function has(it) {
        return wmhas.call(store, it);
      };
    } else {
      var STATE = sharedKey('state');
      hiddenKeys[STATE] = true;

      set = function set(it, metadata) {
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };

      get = function get(it) {
        return objectHas(it, STATE) ? it[STATE] : {};
      };

      has = function has(it) {
        return objectHas(it, STATE);
      };
    }

    module.exports = {
      set: set,
      get: get,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-array-iterator-method.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsArrayIteratorMethodJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js/internals/iterators.js");

    var ITERATOR = wellKnownSymbol('iterator');
    var ArrayPrototype = Array.prototype; // check on default Array iterator

    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/is-array.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/is-array.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsArrayJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js"); // `IsArray` abstract operation
    // https://tc39.github.io/ecma262/#sec-isarray


    module.exports = Array.isArray || function isArray(arg) {
      return classof(arg) == 'Array';
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/is-forced.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-forced.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsForcedJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var replacement = /#|\.prototype\./;

    var isForced = function isForced(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
    };

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = 'N';
    var POLYFILL = isForced.POLYFILL = 'P';
    module.exports = isForced;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-integer.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/is-integer.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsIntegerJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var floor = Math.floor; // `Number.isInteger` method implementation
    // https://tc39.github.io/ecma262/#sec-number.isinteger

    module.exports = function isInteger(it) {
      return !isObject(it) && isFinite(it) && floor(it) === it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/is-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsObjectJs(module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/is-pure.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/internals/is-pure.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsPureJs(module, exports) {
    module.exports = false;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-regexp.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-regexp.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsRegexpJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
    // https://tc39.github.io/ecma262/#sec-isregexp

    module.exports = function (it) {
      var isRegExp;
      return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/iterate.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/internals/iterate.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIterateJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var isArrayIteratorMethod = __webpack_require__(
    /*! ../internals/is-array-iterator-method */
    "./node_modules/core-js/internals/is-array-iterator-method.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var bind = __webpack_require__(
    /*! ../internals/function-bind-context */
    "./node_modules/core-js/internals/function-bind-context.js");

    var getIteratorMethod = __webpack_require__(
    /*! ../internals/get-iterator-method */
    "./node_modules/core-js/internals/get-iterator-method.js");

    var callWithSafeIterationClosing = __webpack_require__(
    /*! ../internals/call-with-safe-iteration-closing */
    "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

    var Result = function Result(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };

    var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
      var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
      var iterator, iterFn, index, length, result, next, step;

      if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = toLength(iterable.length); length > index; index++) {
            result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
            if (result && result instanceof Result) return result;
          }

          return new Result(false);
        }

        iterator = iterFn.call(iterable);
      }

      next = iterator.next;

      while (!(step = next.call(iterator)).done) {
        result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
        if (typeof result == 'object' && result && result instanceof Result) return result;
      }

      return new Result(false);
    };

    iterate.stop = function (result) {
      return new Result(true, result);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/iterators-core.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/iterators-core.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIteratorsCoreJs(module, exports, __webpack_require__) {
    "use strict";

    var getPrototypeOf = __webpack_require__(
    /*! ../internals/object-get-prototype-of */
    "./node_modules/core-js/internals/object-get-prototype-of.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js/internals/is-pure.js");

    var ITERATOR = wellKnownSymbol('iterator');
    var BUGGY_SAFARI_ITERATORS = false;

    var returnThis = function returnThis() {
      return this;
    }; // `%IteratorPrototype%` object
    // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object


    var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

    if ([].keys) {
      arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

      if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }

    if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

    if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
      createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
    }

    module.exports = {
      IteratorPrototype: IteratorPrototype,
      BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/iterators.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/iterators.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIteratorsJs(module, exports) {
    module.exports = {};
    /***/
  },

  /***/
  "./node_modules/core-js/internals/native-symbol.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/native-symbol.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsNativeSymbolJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
      // Chrome 38 Symbol has incorrect toString conversion
      // eslint-disable-next-line no-undef
      return !String(Symbol());
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/native-weak-map.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/native-weak-map.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsNativeWeakMapJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var inspectSource = __webpack_require__(
    /*! ../internals/inspect-source */
    "./node_modules/core-js/internals/inspect-source.js");

    var WeakMap = global.WeakMap;
    module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));
    /***/
  },

  /***/
  "./node_modules/core-js/internals/not-a-regexp.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsNotARegexpJs(module, exports, __webpack_require__) {
    var isRegExp = __webpack_require__(
    /*! ../internals/is-regexp */
    "./node_modules/core-js/internals/is-regexp.js");

    module.exports = function (it) {
      if (isRegExp(it)) {
        throw TypeError("The method doesn't accept regular expressions");
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-assign.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/object-assign.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectAssignJs(module, exports, __webpack_require__) {
    "use strict";

    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var objectKeys = __webpack_require__(
    /*! ../internals/object-keys */
    "./node_modules/core-js/internals/object-keys.js");

    var getOwnPropertySymbolsModule = __webpack_require__(
    /*! ../internals/object-get-own-property-symbols */
    "./node_modules/core-js/internals/object-get-own-property-symbols.js");

    var propertyIsEnumerableModule = __webpack_require__(
    /*! ../internals/object-property-is-enumerable */
    "./node_modules/core-js/internals/object-property-is-enumerable.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var IndexedObject = __webpack_require__(
    /*! ../internals/indexed-object */
    "./node_modules/core-js/internals/indexed-object.js");

    var nativeAssign = Object.assign;
    var defineProperty = Object.defineProperty; // `Object.assign` method
    // https://tc39.github.io/ecma262/#sec-object.assign

    module.exports = !nativeAssign || fails(function () {
      // should have correct order of operations (Edge bug)
      if (DESCRIPTORS && nativeAssign({
        b: 1
      }, nativeAssign(defineProperty({}, 'a', {
        enumerable: true,
        get: function get() {
          defineProperty(this, 'b', {
            value: 3,
            enumerable: false
          });
        }
      }), {
        b: 2
      })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

      var A = {};
      var B = {}; // eslint-disable-next-line no-undef

      var symbol = Symbol();
      var alphabet = 'abcdefghijklmnopqrst';
      A[symbol] = 7;
      alphabet.split('').forEach(function (chr) {
        B[chr] = chr;
      });
      return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
    }) ? function assign(target, source) {
      // eslint-disable-line no-unused-vars
      var T = toObject(target);
      var argumentsLength = arguments.length;
      var index = 1;
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      var propertyIsEnumerable = propertyIsEnumerableModule.f;

      while (argumentsLength > index) {
        var S = IndexedObject(arguments[index++]);
        var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;

        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
        }
      }

      return T;
    } : nativeAssign;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-create.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/object-create.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectCreateJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var defineProperties = __webpack_require__(
    /*! ../internals/object-define-properties */
    "./node_modules/core-js/internals/object-define-properties.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js");

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    var html = __webpack_require__(
    /*! ../internals/html */
    "./node_modules/core-js/internals/html.js");

    var documentCreateElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js/internals/document-create-element.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var GT = '>';
    var LT = '<';
    var PROTOTYPE = 'prototype';
    var SCRIPT = 'script';
    var IE_PROTO = sharedKey('IE_PROTO');

    var EmptyConstructor = function EmptyConstructor() {
      /* empty */
    };

    var scriptTag = function scriptTag(content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


    var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
      activeXDocument.write(scriptTag(''));
      activeXDocument.close();
      var temp = activeXDocument.parentWindow.Object;
      activeXDocument = null; // avoid memory leak

      return temp;
    }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


    var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = documentCreateElement('iframe');
      var JS = 'java' + SCRIPT + ':';
      var iframeDocument;
      iframe.style.display = 'none';
      html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag('document.F=Object'));
      iframeDocument.close();
      return iframeDocument.F;
    }; // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug


    var activeXDocument;

    var _NullProtoObject = function NullProtoObject() {
      try {
        /* global ActiveXObject */
        activeXDocument = document.domain && new ActiveXObject('htmlfile');
      } catch (error) {
        /* ignore */
      }

      _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
      var length = enumBugKeys.length;

      while (length--) {
        delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      }

      return _NullProtoObject();
    };

    hiddenKeys[IE_PROTO] = true; // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create

    module.exports = Object.create || function create(O, Properties) {
      var result;

      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

        result[IE_PROTO] = O;
      } else result = _NullProtoObject();

      return Properties === undefined ? result : defineProperties(result, Properties);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-define-properties.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/object-define-properties.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectDefinePropertiesJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var objectKeys = __webpack_require__(
    /*! ../internals/object-keys */
    "./node_modules/core-js/internals/object-keys.js"); // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties


    module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;

      while (length > index) {
        definePropertyModule.f(O, key = keys[index++], Properties[key]);
      }

      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-define-property.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-define-property.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectDefinePropertyJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ../internals/ie8-dom-define */
    "./node_modules/core-js/internals/ie8-dom-define.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty

    exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return nativeDefineProperty(O, P, Attributes);
      } catch (error) {
        /* empty */
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyDescriptorJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var propertyIsEnumerableModule = __webpack_require__(
    /*! ../internals/object-property-is-enumerable */
    "./node_modules/core-js/internals/object-property-is-enumerable.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ../internals/ie8-dom-define */
    "./node_modules/core-js/internals/ie8-dom-define.js");

    var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

    exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return nativeGetOwnPropertyDescriptor(O, P);
      } catch (error) {
        /* empty */
      }
      if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-names-external.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyNamesExternalJs(module, exports, __webpack_require__) {
    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var nativeGetOwnPropertyNames = __webpack_require__(
    /*! ../internals/object-get-own-property-names */
    "./node_modules/core-js/internals/object-get-own-property-names.js").f;

    var toString = {}.toString;
    var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    var getWindowNames = function getWindowNames(it) {
      try {
        return nativeGetOwnPropertyNames(it);
      } catch (error) {
        return windowNames.slice();
      }
    }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


    module.exports.f = function getOwnPropertyNames(it) {
      return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-names.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyNamesJs(module, exports, __webpack_require__) {
    var internalObjectKeys = __webpack_require__(
    /*! ../internals/object-keys-internal */
    "./node_modules/core-js/internals/object-keys-internal.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js");

    var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-symbols.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertySymbolsJs(module, exports) {
    exports.f = Object.getOwnPropertySymbols;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-prototype-of.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetPrototypeOfJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
    /*! ../internals/correct-prototype-getter */
    "./node_modules/core-js/internals/correct-prototype-getter.js");

    var IE_PROTO = sharedKey('IE_PROTO');
    var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.getprototypeof

    module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];

      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      }

      return O instanceof Object ? ObjectPrototype : null;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-keys-internal.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectKeysInternalJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var indexOf = __webpack_require__(
    /*! ../internals/array-includes */
    "./node_modules/core-js/internals/array-includes.js").indexOf;

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    module.exports = function (object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;

      for (key in O) {
        !has(hiddenKeys, key) && has(O, key) && result.push(key);
      } // Don't enum bug & hidden keys


      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~indexOf(result, key) || result.push(key);
        }
      }

      return result;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-keys.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/object-keys.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectKeysJs(module, exports, __webpack_require__) {
    var internalObjectKeys = __webpack_require__(
    /*! ../internals/object-keys-internal */
    "./node_modules/core-js/internals/object-keys-internal.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js"); // `Object.keys` method
    // https://tc39.github.io/ecma262/#sec-object.keys


    module.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-property-is-enumerable.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectPropertyIsEnumerableJs(module, exports, __webpack_require__) {
    "use strict";

    var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

    var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
      1: 2
    }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : nativePropertyIsEnumerable;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-set-prototype-of.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectSetPrototypeOfJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var aPossiblePrototype = __webpack_require__(
    /*! ../internals/a-possible-prototype */
    "./node_modules/core-js/internals/a-possible-prototype.js"); // `Object.setPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.

    /* eslint-disable no-proto */


    module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;

      try {
        setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
        setter.call(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
        /* empty */
      }

      return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
        return O;
      };
    }() : undefined);
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-to-string.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/internals/object-to-string.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectToStringJs(module, exports, __webpack_require__) {
    "use strict";

    var TO_STRING_TAG_SUPPORT = __webpack_require__(
    /*! ../internals/to-string-tag-support */
    "./node_modules/core-js/internals/to-string-tag-support.js");

    var classof = __webpack_require__(
    /*! ../internals/classof */
    "./node_modules/core-js/internals/classof.js"); // `Object.prototype.toString` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.tostring


    module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
      return '[object ' + classof(this) + ']';
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/own-keys.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/own-keys.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsOwnKeysJs(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    var getOwnPropertyNamesModule = __webpack_require__(
    /*! ../internals/object-get-own-property-names */
    "./node_modules/core-js/internals/object-get-own-property-names.js");

    var getOwnPropertySymbolsModule = __webpack_require__(
    /*! ../internals/object-get-own-property-symbols */
    "./node_modules/core-js/internals/object-get-own-property-symbols.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js"); // all object keys, includes non-enumerable and symbols


    module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/path.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/path.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsPathJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    module.exports = global;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/redefine-all.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/redefine-all.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRedefineAllJs(module, exports, __webpack_require__) {
    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    module.exports = function (target, src, options) {
      for (var key in src) {
        redefine(target, key, src[key], options);
      }

      return target;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/redefine.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/redefine.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRedefineJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var inspectSource = __webpack_require__(
    /*! ../internals/inspect-source */
    "./node_modules/core-js/internals/inspect-source.js");

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js");

    var getInternalState = InternalStateModule.get;
    var enforceInternalState = InternalStateModule.enforce;
    var TEMPLATE = String(String).split('String');
    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;

      if (typeof value == 'function') {
        if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
        enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }

      if (O === global) {
        if (simple) O[key] = value;else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }

      if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/regexp-exec-abstract.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRegexpExecAbstractJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ./classof-raw */
    "./node_modules/core-js/internals/classof-raw.js");

    var regexpExec = __webpack_require__(
    /*! ./regexp-exec */
    "./node_modules/core-js/internals/regexp-exec.js"); // `RegExpExec` abstract operation
    // https://tc39.github.io/ecma262/#sec-regexpexec


    module.exports = function (R, S) {
      var exec = R.exec;

      if (typeof exec === 'function') {
        var result = exec.call(R, S);

        if (typeof result !== 'object') {
          throw TypeError('RegExp exec method returned something other than an Object or null');
        }

        return result;
      }

      if (classof(R) !== 'RegExp') {
        throw TypeError('RegExp#exec called on incompatible receiver');
      }

      return regexpExec.call(R, S);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/regexp-exec.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/regexp-exec.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRegexpExecJs(module, exports, __webpack_require__) {
    "use strict";

    var regexpFlags = __webpack_require__(
    /*! ./regexp-flags */
    "./node_modules/core-js/internals/regexp-flags.js");

    var stickyHelpers = __webpack_require__(
    /*! ./regexp-sticky-helpers */
    "./node_modules/core-js/internals/regexp-sticky-helpers.js");

    var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
    // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
    // which loads this file before patching the method.

    var nativeReplace = String.prototype.replace;
    var patchedExec = nativeExec;

    var UPDATES_LAST_INDEX_WRONG = function () {
      var re1 = /a/;
      var re2 = /b*/g;
      nativeExec.call(re1, 'a');
      nativeExec.call(re2, 'a');
      return re1.lastIndex !== 0 || re2.lastIndex !== 0;
    }();

    var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

    var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

    if (PATCH) {
      patchedExec = function exec(str) {
        var re = this;
        var lastIndex, reCopy, match, i;
        var sticky = UNSUPPORTED_Y && re.sticky;
        var flags = regexpFlags.call(re);
        var source = re.source;
        var charsAdded = 0;
        var strCopy = str;

        if (sticky) {
          flags = flags.replace('y', '');

          if (flags.indexOf('g') === -1) {
            flags += 'g';
          }

          strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

          if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
            source = '(?: ' + source + ')';
            strCopy = ' ' + strCopy;
            charsAdded++;
          } // ^(? + rx + ) is needed, in combination with some str slicing, to
          // simulate the 'y' flag.


          reCopy = new RegExp('^(?:' + source + ')', flags);
        }

        if (NPCG_INCLUDED) {
          reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
        }

        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
        match = nativeExec.call(sticky ? reCopy : re, strCopy);

        if (sticky) {
          if (match) {
            match.input = match.input.slice(charsAdded);
            match[0] = match[0].slice(charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
          } else re.lastIndex = 0;
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
        }

        if (NPCG_INCLUDED && match && match.length > 1) {
          // Fix browsers whose `exec` methods don't consistently return `undefined`
          // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
          nativeReplace.call(match[0], reCopy, function () {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined;
            }
          });
        }

        return match;
      };
    }

    module.exports = patchedExec;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/regexp-flags.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/regexp-flags.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRegexpFlagsJs(module, exports, __webpack_require__) {
    "use strict";

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js"); // `RegExp.prototype.flags` getter implementation
    // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags


    module.exports = function () {
      var that = anObject(this);
      var result = '';
      if (that.global) result += 'g';
      if (that.ignoreCase) result += 'i';
      if (that.multiline) result += 'm';
      if (that.dotAll) result += 's';
      if (that.unicode) result += 'u';
      if (that.sticky) result += 'y';
      return result;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/regexp-sticky-helpers.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRegexpStickyHelpersJs(module, exports, __webpack_require__) {
    "use strict";

    var fails = __webpack_require__(
    /*! ./fails */
    "./node_modules/core-js/internals/fails.js"); // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
    // so we use an intermediate function.


    function RE(s, f) {
      return RegExp(s, f);
    }

    exports.UNSUPPORTED_Y = fails(function () {
      // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
      var re = RE('a', 'y');
      re.lastIndex = 2;
      return re.exec('abcd') != null;
    });
    exports.BROKEN_CARET = fails(function () {
      // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
      var re = RE('^r', 'gy');
      re.lastIndex = 2;
      return re.exec('str') != null;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/require-object-coercible.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRequireObjectCoercibleJs(module, exports) {
    // `RequireObjectCoercible` abstract operation
    // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on " + it);
      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/same-value.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/same-value.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSameValueJs(module, exports) {
    // `SameValue` abstract operation
    // https://tc39.github.io/ecma262/#sec-samevalue
    module.exports = Object.is || function is(x, y) {
      // eslint-disable-next-line no-self-compare
      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/set-global.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/set-global.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSetGlobalJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    module.exports = function (key, value) {
      try {
        createNonEnumerableProperty(global, key, value);
      } catch (error) {
        global[key] = value;
      }

      return value;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/set-species.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/set-species.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSetSpeciesJs(module, exports, __webpack_require__) {
    "use strict";

    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var SPECIES = wellKnownSymbol('species');

    module.exports = function (CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
      var defineProperty = definePropertyModule.f;

      if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
        defineProperty(Constructor, SPECIES, {
          configurable: true,
          get: function get() {
            return this;
          }
        });
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/set-to-string-tag.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSetToStringTagJs(module, exports, __webpack_require__) {
    var defineProperty = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js").f;

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var TO_STRING_TAG = wellKnownSymbol('toStringTag');

    module.exports = function (it, TAG, STATIC) {
      if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
        defineProperty(it, TO_STRING_TAG, {
          configurable: true,
          value: TAG
        });
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/shared-key.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/shared-key.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedKeyJs(module, exports, __webpack_require__) {
    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js/internals/shared.js");

    var uid = __webpack_require__(
    /*! ../internals/uid */
    "./node_modules/core-js/internals/uid.js");

    var keys = shared('keys');

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/shared-store.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/shared-store.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedStoreJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || setGlobal(SHARED, {});
    module.exports = store;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/shared.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/shared.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedJs(module, exports, __webpack_require__) {
    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js/internals/is-pure.js");

    var store = __webpack_require__(
    /*! ../internals/shared-store */
    "./node_modules/core-js/internals/shared-store.js");

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.6.4',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/species-constructor.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/internals/species-constructor.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSpeciesConstructorJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js/internals/a-function.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
    // https://tc39.github.io/ecma262/#sec-speciesconstructor

    module.exports = function (O, defaultConstructor) {
      var C = anObject(O).constructor;
      var S;
      return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/string-html-forced.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/internals/string-html-forced.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsStringHtmlForcedJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js"); // check the existence of a method, lowercase
    // of a tag and escaping quotes in arguments


    module.exports = function (METHOD_NAME) {
      return fails(function () {
        var test = ''[METHOD_NAME]('"');
        return test !== test.toLowerCase() || test.split('"').length > 3;
      });
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/string-multibyte.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/internals/string-multibyte.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsStringMultibyteJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js"); // `String.prototype.{ codePointAt, at }` methods implementation


    var createMethod = function createMethod(CONVERT_TO_STRING) {
      return function ($this, pos) {
        var S = String(requireObjectCoercible($this));
        var position = toInteger(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = S.charCodeAt(position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
      };
    };

    module.exports = {
      // `String.prototype.codePointAt` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod(true)
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/string-pad.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/string-pad.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsStringPadJs(module, exports, __webpack_require__) {
    // https://github.com/tc39/proposal-string-pad-start-end
    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var repeat = __webpack_require__(
    /*! ../internals/string-repeat */
    "./node_modules/core-js/internals/string-repeat.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    var ceil = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

    var createMethod = function createMethod(IS_END) {
      return function ($this, maxLength, fillString) {
        var S = String(requireObjectCoercible($this));
        var stringLength = S.length;
        var fillStr = fillString === undefined ? ' ' : String(fillString);
        var intMaxLength = toLength(maxLength);
        var fillLen, stringFiller;
        if (intMaxLength <= stringLength || fillStr == '') return S;
        fillLen = intMaxLength - stringLength;
        stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
        if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
        return IS_END ? S + stringFiller : stringFiller + S;
      };
    };

    module.exports = {
      // `String.prototype.padStart` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
      start: createMethod(false),
      // `String.prototype.padEnd` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.padend
      end: createMethod(true)
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/string-repeat.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/string-repeat.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsStringRepeatJs(module, exports, __webpack_require__) {
    "use strict";

    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js"); // `String.prototype.repeat` method implementation
    // https://tc39.github.io/ecma262/#sec-string.prototype.repeat


    module.exports = ''.repeat || function repeat(count) {
      var str = String(requireObjectCoercible(this));
      var result = '';
      var n = toInteger(count);
      if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

      for (; n > 0; (n >>>= 1) && (str += str)) {
        if (n & 1) result += str;
      }

      return result;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/string-trim-forced.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsStringTrimForcedJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var whitespaces = __webpack_require__(
    /*! ../internals/whitespaces */
    "./node_modules/core-js/internals/whitespaces.js");

    var non = "\u200B\x85\u180E"; // check that a method works with the correct list
    // of whitespaces and has a correct name

    module.exports = function (METHOD_NAME) {
      return fails(function () {
        return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
      });
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/string-trim.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/string-trim.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsStringTrimJs(module, exports, __webpack_require__) {
    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    var whitespaces = __webpack_require__(
    /*! ../internals/whitespaces */
    "./node_modules/core-js/internals/whitespaces.js");

    var whitespace = '[' + whitespaces + ']';
    var ltrim = RegExp('^' + whitespace + whitespace + '*');
    var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

    var createMethod = function createMethod(TYPE) {
      return function ($this) {
        var string = String(requireObjectCoercible($this));
        if (TYPE & 1) string = string.replace(ltrim, '');
        if (TYPE & 2) string = string.replace(rtrim, '');
        return string;
      };
    };

    module.exports = {
      // `String.prototype.{ trimLeft, trimStart }` methods
      // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
      start: createMethod(1),
      // `String.prototype.{ trimRight, trimEnd }` methods
      // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
      end: createMethod(2),
      // `String.prototype.trim` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.trim
      trim: createMethod(3)
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/task.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/task.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsTaskJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js");

    var bind = __webpack_require__(
    /*! ../internals/function-bind-context */
    "./node_modules/core-js/internals/function-bind-context.js");

    var html = __webpack_require__(
    /*! ../internals/html */
    "./node_modules/core-js/internals/html.js");

    var createElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js/internals/document-create-element.js");

    var IS_IOS = __webpack_require__(
    /*! ../internals/engine-is-ios */
    "./node_modules/core-js/internals/engine-is-ios.js");

    var location = global.location;
    var set = global.setImmediate;
    var clear = global.clearImmediate;
    var process = global.process;
    var MessageChannel = global.MessageChannel;
    var Dispatch = global.Dispatch;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = 'onreadystatechange';
    var defer, channel, port;

    var run = function run(id) {
      // eslint-disable-next-line no-prototype-builtins
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };

    var runner = function runner(id) {
      return function () {
        run(id);
      };
    };

    var listener = function listener(event) {
      run(event.data);
    };

    var post = function post(id) {
      // old engines have not location.origin
      global.postMessage(id + '', location.protocol + '//' + location.host);
    }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


    if (!set || !clear) {
      set = function setImmediate(fn) {
        var args = [];
        var i = 1;

        while (arguments.length > i) {
          args.push(arguments[i++]);
        }

        queue[++counter] = function () {
          // eslint-disable-next-line no-new-func
          (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
        };

        defer(counter);
        return counter;
      };

      clear = function clearImmediate(id) {
        delete queue[id];
      }; // Node.js 0.8-


      if (classof(process) == 'process') {
        defer = function defer(id) {
          process.nextTick(runner(id));
        }; // Sphere (JS game engine) Dispatch API

      } else if (Dispatch && Dispatch.now) {
        defer = function defer(id) {
          Dispatch.now(runner(id));
        }; // Browsers with MessageChannel, includes WebWorkers
        // except iOS - https://github.com/zloirock/core-js/issues/624

      } else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
        defer = post;
        global.addEventListener('message', listener, false); // IE8-
      } else if (ONREADYSTATECHANGE in createElement('script')) {
        defer = function defer(id) {
          html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run(id);
          };
        }; // Rest old browsers

      } else {
        defer = function defer(id) {
          setTimeout(runner(id), 0);
        };
      }
    }

    module.exports = {
      set: set,
      clear: clear
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/this-number-value.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/this-number-value.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsThisNumberValueJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js"); // `thisNumberValue` abstract operation
    // https://tc39.github.io/ecma262/#sec-thisnumbervalue


    module.exports = function (value) {
      if (typeof value != 'number' && classof(value) != 'Number') {
        throw TypeError('Incorrect invocation');
      }

      return +value;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-absolute-index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToAbsoluteIndexJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var max = Math.max;
    var min = Math.min; // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

    module.exports = function (index, length) {
      var integer = toInteger(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-indexed-object.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToIndexedObjectJs(module, exports, __webpack_require__) {
    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject = __webpack_require__(
    /*! ../internals/indexed-object */
    "./node_modules/core-js/internals/indexed-object.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-integer.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/to-integer.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToIntegerJs(module, exports) {
    var ceil = Math.ceil;
    var floor = Math.floor; // `ToInteger` abstract operation
    // https://tc39.github.io/ecma262/#sec-tointeger

    module.exports = function (argument) {
      return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-length.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/to-length.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToLengthJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var min = Math.min; // `ToLength` abstract operation
    // https://tc39.github.io/ecma262/#sec-tolength

    module.exports = function (argument) {
      return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/to-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToObjectJs(module, exports, __webpack_require__) {
    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js"); // `ToObject` abstract operation
    // https://tc39.github.io/ecma262/#sec-toobject


    module.exports = function (argument) {
      return Object(requireObjectCoercible(argument));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-primitive.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/to-primitive.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToPrimitiveJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js"); // `ToPrimitive` abstract operation
    // https://tc39.github.io/ecma262/#sec-toprimitive
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string


    module.exports = function (input, PREFERRED_STRING) {
      if (!isObject(input)) return input;
      var fn, val;
      if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
      if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-string-tag-support.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToStringTagSupportJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    var test = {};
    test[TO_STRING_TAG] = 'z';
    module.exports = String(test) === '[object z]';
    /***/
  },

  /***/
  "./node_modules/core-js/internals/uid.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/internals/uid.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsUidJs(module, exports) {
    var id = 0;
    var postfix = Math.random();

    module.exports = function (key) {
      return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/use-symbol-as-uid.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsUseSymbolAsUidJs(module, exports, __webpack_require__) {
    var NATIVE_SYMBOL = __webpack_require__(
    /*! ../internals/native-symbol */
    "./node_modules/core-js/internals/native-symbol.js");

    module.exports = NATIVE_SYMBOL // eslint-disable-next-line no-undef
    && !Symbol.sham // eslint-disable-next-line no-undef
    && typeof Symbol.iterator == 'symbol';
    /***/
  },

  /***/
  "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsWellKnownSymbolWrappedJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    exports.f = wellKnownSymbol;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/well-known-symbol.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsWellKnownSymbolJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js/internals/shared.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var uid = __webpack_require__(
    /*! ../internals/uid */
    "./node_modules/core-js/internals/uid.js");

    var NATIVE_SYMBOL = __webpack_require__(
    /*! ../internals/native-symbol */
    "./node_modules/core-js/internals/native-symbol.js");

    var USE_SYMBOL_AS_UID = __webpack_require__(
    /*! ../internals/use-symbol-as-uid */
    "./node_modules/core-js/internals/use-symbol-as-uid.js");

    var WellKnownSymbolsStore = shared('wks');
    var Symbol = global.Symbol;
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

    module.exports = function (name) {
      if (!has(WellKnownSymbolsStore, name)) {
        if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }

      return WellKnownSymbolsStore[name];
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/whitespaces.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/whitespaces.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsWhitespacesJs(module, exports) {
    // a string of all valid unicode whitespaces
    // eslint-disable-next-line max-len
    module.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.concat.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.concat.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayConcatJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var isArray = __webpack_require__(
    /*! ../internals/is-array */
    "./node_modules/core-js/internals/is-array.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var createProperty = __webpack_require__(
    /*! ../internals/create-property */
    "./node_modules/core-js/internals/create-property.js");

    var arraySpeciesCreate = __webpack_require__(
    /*! ../internals/array-species-create */
    "./node_modules/core-js/internals/array-species-create.js");

    var arrayMethodHasSpeciesSupport = __webpack_require__(
    /*! ../internals/array-method-has-species-support */
    "./node_modules/core-js/internals/array-method-has-species-support.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var V8_VERSION = __webpack_require__(
    /*! ../internals/engine-v8-version */
    "./node_modules/core-js/internals/engine-v8-version.js");

    var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
    var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/679

    var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
      var array = [];
      array[IS_CONCAT_SPREADABLE] = false;
      return array.concat()[0] !== array;
    });
    var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

    var isConcatSpreadable = function isConcatSpreadable(O) {
      if (!isObject(O)) return false;
      var spreadable = O[IS_CONCAT_SPREADABLE];
      return spreadable !== undefined ? !!spreadable : isArray(O);
    };

    var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.concat
    // with adding support of @@isConcatSpreadable and @@species

    $({
      target: 'Array',
      proto: true,
      forced: FORCED
    }, {
      concat: function concat(arg) {
        // eslint-disable-line no-unused-vars
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;

        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i];

          if (isConcatSpreadable(E)) {
            len = toLength(E.length);
            if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

            for (k = 0; k < len; k++, n++) {
              if (k in E) createProperty(A, n, E[k]);
            }
          } else {
            if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
            createProperty(A, n++, E);
          }
        }

        A.length = n;
        return A;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.every.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.every.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayEveryJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $every = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js").every;

    var arrayMethodIsStrict = __webpack_require__(
    /*! ../internals/array-method-is-strict */
    "./node_modules/core-js/internals/array-method-is-strict.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var STRICT_METHOD = arrayMethodIsStrict('every');
    var USES_TO_LENGTH = arrayMethodUsesToLength('every'); // `Array.prototype.every` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.every

    $({
      target: 'Array',
      proto: true,
      forced: !STRICT_METHOD || !USES_TO_LENGTH
    }, {
      every: function every(callbackfn
      /* , thisArg */
      ) {
        return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.fill.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.fill.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayFillJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var fill = __webpack_require__(
    /*! ../internals/array-fill */
    "./node_modules/core-js/internals/array-fill.js");

    var addToUnscopables = __webpack_require__(
    /*! ../internals/add-to-unscopables */
    "./node_modules/core-js/internals/add-to-unscopables.js"); // `Array.prototype.fill` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.fill


    $({
      target: 'Array',
      proto: true
    }, {
      fill: fill
    }); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

    addToUnscopables('fill');
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.filter.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.filter.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayFilterJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $filter = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js").filter;

    var arrayMethodHasSpeciesSupport = __webpack_require__(
    /*! ../internals/array-method-has-species-support */
    "./node_modules/core-js/internals/array-method-has-species-support.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // Edge 14- issue

    var USES_TO_LENGTH = arrayMethodUsesToLength('filter'); // `Array.prototype.filter` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.filter
    // with adding support of @@species

    $({
      target: 'Array',
      proto: true,
      forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
    }, {
      filter: function filter(callbackfn
      /* , thisArg */
      ) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.find-index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayFindIndexJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $findIndex = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js").findIndex;

    var addToUnscopables = __webpack_require__(
    /*! ../internals/add-to-unscopables */
    "./node_modules/core-js/internals/add-to-unscopables.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var FIND_INDEX = 'findIndex';
    var SKIPS_HOLES = true;
    var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX); // Shouldn't skip holes

    if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
      SKIPS_HOLES = false;
    }); // `Array.prototype.findIndex` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.findindex

    $({
      target: 'Array',
      proto: true,
      forced: SKIPS_HOLES || !USES_TO_LENGTH
    }, {
      findIndex: function findIndex(callbackfn
      /* , that = undefined */
      ) {
        return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    }); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

    addToUnscopables(FIND_INDEX);
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.find.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.find.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayFindJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $find = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js").find;

    var addToUnscopables = __webpack_require__(
    /*! ../internals/add-to-unscopables */
    "./node_modules/core-js/internals/add-to-unscopables.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var FIND = 'find';
    var SKIPS_HOLES = true;
    var USES_TO_LENGTH = arrayMethodUsesToLength(FIND); // Shouldn't skip holes

    if (FIND in []) Array(1)[FIND](function () {
      SKIPS_HOLES = false;
    }); // `Array.prototype.find` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.find

    $({
      target: 'Array',
      proto: true,
      forced: SKIPS_HOLES || !USES_TO_LENGTH
    }, {
      find: function find(callbackfn
      /* , that = undefined */
      ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    }); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

    addToUnscopables(FIND);
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.for-each.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayForEachJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var forEach = __webpack_require__(
    /*! ../internals/array-for-each */
    "./node_modules/core-js/internals/array-for-each.js"); // `Array.prototype.forEach` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach


    $({
      target: 'Array',
      proto: true,
      forced: [].forEach != forEach
    }, {
      forEach: forEach
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.from.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.from.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayFromJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var from = __webpack_require__(
    /*! ../internals/array-from */
    "./node_modules/core-js/internals/array-from.js");

    var checkCorrectnessOfIteration = __webpack_require__(
    /*! ../internals/check-correctness-of-iteration */
    "./node_modules/core-js/internals/check-correctness-of-iteration.js");

    var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
      Array.from(iterable);
    }); // `Array.from` method
    // https://tc39.github.io/ecma262/#sec-array.from

    $({
      target: 'Array',
      stat: true,
      forced: INCORRECT_ITERATION
    }, {
      from: from
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.index-of.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayIndexOfJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $indexOf = __webpack_require__(
    /*! ../internals/array-includes */
    "./node_modules/core-js/internals/array-includes.js").indexOf;

    var arrayMethodIsStrict = __webpack_require__(
    /*! ../internals/array-method-is-strict */
    "./node_modules/core-js/internals/array-method-is-strict.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var nativeIndexOf = [].indexOf;
    var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
    var STRICT_METHOD = arrayMethodIsStrict('indexOf');
    var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', {
      ACCESSORS: true,
      1: 0
    }); // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof

    $({
      target: 'Array',
      proto: true,
      forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH
    }, {
      indexOf: function indexOf(searchElement
      /* , fromIndex = 0 */
      ) {
        return NEGATIVE_ZERO // convert -0 to +0
        ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.iterator.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var addToUnscopables = __webpack_require__(
    /*! ../internals/add-to-unscopables */
    "./node_modules/core-js/internals/add-to-unscopables.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js/internals/iterators.js");

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js");

    var defineIterator = __webpack_require__(
    /*! ../internals/define-iterator */
    "./node_modules/core-js/internals/define-iterator.js");

    var ARRAY_ITERATOR = 'Array Iterator';
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.entries
    // `Array.prototype.keys` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.keys
    // `Array.prototype.values` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.values
    // `Array.prototype[@@iterator]` method
    // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
    // `CreateArrayIterator` internal method
    // https://tc39.github.io/ecma262/#sec-createarrayiterator

    module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        // target
        index: 0,
        // next index
        kind: kind // kind

      }); // `%ArrayIteratorPrototype%.next` method
      // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
    }, function () {
      var state = getInternalState(this);
      var target = state.target;
      var kind = state.kind;
      var index = state.index++;

      if (!target || index >= target.length) {
        state.target = undefined;
        return {
          value: undefined,
          done: true
        };
      }

      if (kind == 'keys') return {
        value: index,
        done: false
      };
      if (kind == 'values') return {
        value: target[index],
        done: false
      };
      return {
        value: [index, target[index]],
        done: false
      };
    }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
    // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
    // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

    Iterators.Arguments = Iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.join.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.join.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayJoinJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var IndexedObject = __webpack_require__(
    /*! ../internals/indexed-object */
    "./node_modules/core-js/internals/indexed-object.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var arrayMethodIsStrict = __webpack_require__(
    /*! ../internals/array-method-is-strict */
    "./node_modules/core-js/internals/array-method-is-strict.js");

    var nativeJoin = [].join;
    var ES3_STRINGS = IndexedObject != Object;
    var STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.join

    $({
      target: 'Array',
      proto: true,
      forced: ES3_STRINGS || !STRICT_METHOD
    }, {
      join: function join(separator) {
        return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.last-index-of.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.last-index-of.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayLastIndexOfJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var lastIndexOf = __webpack_require__(
    /*! ../internals/array-last-index-of */
    "./node_modules/core-js/internals/array-last-index-of.js"); // `Array.prototype.lastIndexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof


    $({
      target: 'Array',
      proto: true,
      forced: lastIndexOf !== [].lastIndexOf
    }, {
      lastIndexOf: lastIndexOf
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.map.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.map.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayMapJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $map = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js").map;

    var arrayMethodHasSpeciesSupport = __webpack_require__(
    /*! ../internals/array-method-has-species-support */
    "./node_modules/core-js/internals/array-method-has-species-support.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // FF49- issue

    var USES_TO_LENGTH = arrayMethodUsesToLength('map'); // `Array.prototype.map` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.map
    // with adding support of @@species

    $({
      target: 'Array',
      proto: true,
      forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
    }, {
      map: function map(callbackfn
      /* , thisArg */
      ) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.reduce.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayReduceJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $reduce = __webpack_require__(
    /*! ../internals/array-reduce */
    "./node_modules/core-js/internals/array-reduce.js").left;

    var arrayMethodIsStrict = __webpack_require__(
    /*! ../internals/array-method-is-strict */
    "./node_modules/core-js/internals/array-method-is-strict.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var STRICT_METHOD = arrayMethodIsStrict('reduce');
    var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', {
      1: 0
    }); // `Array.prototype.reduce` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.reduce

    $({
      target: 'Array',
      proto: true,
      forced: !STRICT_METHOD || !USES_TO_LENGTH
    }, {
      reduce: function reduce(callbackfn
      /* , initialValue */
      ) {
        return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.slice.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.slice.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArraySliceJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var isArray = __webpack_require__(
    /*! ../internals/is-array */
    "./node_modules/core-js/internals/is-array.js");

    var toAbsoluteIndex = __webpack_require__(
    /*! ../internals/to-absolute-index */
    "./node_modules/core-js/internals/to-absolute-index.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var createProperty = __webpack_require__(
    /*! ../internals/create-property */
    "./node_modules/core-js/internals/create-property.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var arrayMethodHasSpeciesSupport = __webpack_require__(
    /*! ../internals/array-method-has-species-support */
    "./node_modules/core-js/internals/array-method-has-species-support.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
    var USES_TO_LENGTH = arrayMethodUsesToLength('slice', {
      ACCESSORS: true,
      0: 0,
      1: 2
    });
    var SPECIES = wellKnownSymbol('species');
    var nativeSlice = [].slice;
    var max = Math.max; // `Array.prototype.slice` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.slice
    // fallback for not array-like ES3 strings and DOM objects

    $({
      target: 'Array',
      proto: true,
      forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
    }, {
      slice: function slice(start, end) {
        var O = toIndexedObject(this);
        var length = toLength(O.length);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

        var Constructor, result, n;

        if (isArray(O)) {
          Constructor = O.constructor; // cross-realm fallback

          if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
            Constructor = undefined;
          } else if (isObject(Constructor)) {
            Constructor = Constructor[SPECIES];
            if (Constructor === null) Constructor = undefined;
          }

          if (Constructor === Array || Constructor === undefined) {
            return nativeSlice.call(O, k, fin);
          }
        }

        result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));

        for (n = 0; k < fin; k++, n++) {
          if (k in O) createProperty(result, n, O[k]);
        }

        result.length = n;
        return result;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.some.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.some.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArraySomeJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $some = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js").some;

    var arrayMethodIsStrict = __webpack_require__(
    /*! ../internals/array-method-is-strict */
    "./node_modules/core-js/internals/array-method-is-strict.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var STRICT_METHOD = arrayMethodIsStrict('some');
    var USES_TO_LENGTH = arrayMethodUsesToLength('some'); // `Array.prototype.some` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.some

    $({
      target: 'Array',
      proto: true,
      forced: !STRICT_METHOD || !USES_TO_LENGTH
    }, {
      some: function some(callbackfn
      /* , thisArg */
      ) {
        return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.sort.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.sort.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArraySortJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js/internals/a-function.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var arrayMethodIsStrict = __webpack_require__(
    /*! ../internals/array-method-is-strict */
    "./node_modules/core-js/internals/array-method-is-strict.js");

    var test = [];
    var nativeSort = test.sort; // IE8-

    var FAILS_ON_UNDEFINED = fails(function () {
      test.sort(undefined);
    }); // V8 bug

    var FAILS_ON_NULL = fails(function () {
      test.sort(null);
    }); // Old WebKit

    var STRICT_METHOD = arrayMethodIsStrict('sort');
    var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD; // `Array.prototype.sort` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.sort

    $({
      target: 'Array',
      proto: true,
      forced: FORCED
    }, {
      sort: function sort(comparefn) {
        return comparefn === undefined ? nativeSort.call(toObject(this)) : nativeSort.call(toObject(this), aFunction(comparefn));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.splice.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.splice.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArraySpliceJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var toAbsoluteIndex = __webpack_require__(
    /*! ../internals/to-absolute-index */
    "./node_modules/core-js/internals/to-absolute-index.js");

    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var arraySpeciesCreate = __webpack_require__(
    /*! ../internals/array-species-create */
    "./node_modules/core-js/internals/array-species-create.js");

    var createProperty = __webpack_require__(
    /*! ../internals/create-property */
    "./node_modules/core-js/internals/create-property.js");

    var arrayMethodHasSpeciesSupport = __webpack_require__(
    /*! ../internals/array-method-has-species-support */
    "./node_modules/core-js/internals/array-method-has-species-support.js");

    var arrayMethodUsesToLength = __webpack_require__(
    /*! ../internals/array-method-uses-to-length */
    "./node_modules/core-js/internals/array-method-uses-to-length.js");

    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
    var USES_TO_LENGTH = arrayMethodUsesToLength('splice', {
      ACCESSORS: true,
      0: 0,
      1: 2
    });
    var max = Math.max;
    var min = Math.min;
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
    var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.splice
    // with adding support of @@species

    $({
      target: 'Array',
      proto: true,
      forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
    }, {
      splice: function splice(start, deleteCount
      /* , ...items */
      ) {
        var O = toObject(this);
        var len = toLength(O.length);
        var actualStart = toAbsoluteIndex(start, len);
        var argumentsLength = arguments.length;
        var insertCount, actualDeleteCount, A, k, from, to;

        if (argumentsLength === 0) {
          insertCount = actualDeleteCount = 0;
        } else if (argumentsLength === 1) {
          insertCount = 0;
          actualDeleteCount = len - actualStart;
        } else {
          insertCount = argumentsLength - 2;
          actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
        }

        if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
          throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
        }

        A = arraySpeciesCreate(O, actualDeleteCount);

        for (k = 0; k < actualDeleteCount; k++) {
          from = actualStart + k;
          if (from in O) createProperty(A, k, O[from]);
        }

        A.length = actualDeleteCount;

        if (insertCount < actualDeleteCount) {
          for (k = actualStart; k < len - actualDeleteCount; k++) {
            from = k + actualDeleteCount;
            to = k + insertCount;
            if (from in O) O[to] = O[from];else delete O[to];
          }

          for (k = len; k > len - actualDeleteCount + insertCount; k--) {
            delete O[k - 1];
          }
        } else if (insertCount > actualDeleteCount) {
          for (k = len - actualDeleteCount; k > actualStart; k--) {
            from = k + actualDeleteCount - 1;
            to = k + insertCount - 1;
            if (from in O) O[to] = O[from];else delete O[to];
          }
        }

        for (k = 0; k < insertCount; k++) {
          O[k + actualStart] = arguments[k + 2];
        }

        O.length = len - actualDeleteCount + insertCount;
        return A;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.function.name.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/modules/es.function.name.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsFunctionNameJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var defineProperty = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js").f;

    var FunctionPrototype = Function.prototype;
    var FunctionPrototypeToString = FunctionPrototype.toString;
    var nameRE = /^\s*function ([^ (]*)/;
    var NAME = 'name'; // Function instances `.name` property
    // https://tc39.github.io/ecma262/#sec-function-instances-name

    if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
      defineProperty(FunctionPrototype, NAME, {
        configurable: true,
        get: function get() {
          try {
            return FunctionPrototypeToString.call(this).match(nameRE)[1];
          } catch (error) {
            return '';
          }
        }
      });
    }
    /***/

  },

  /***/
  "./node_modules/core-js/modules/es.map.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/modules/es.map.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsMapJs(module, exports, __webpack_require__) {
    "use strict";

    var collection = __webpack_require__(
    /*! ../internals/collection */
    "./node_modules/core-js/internals/collection.js");

    var collectionStrong = __webpack_require__(
    /*! ../internals/collection-strong */
    "./node_modules/core-js/internals/collection-strong.js"); // `Map` constructor
    // https://tc39.github.io/ecma262/#sec-map-objects


    module.exports = collection('Map', function (init) {
      return function Map() {
        return init(this, arguments.length ? arguments[0] : undefined);
      };
    }, collectionStrong);
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.number.constructor.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsNumberConstructorJs(module, exports, __webpack_require__) {
    "use strict";

    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var isForced = __webpack_require__(
    /*! ../internals/is-forced */
    "./node_modules/core-js/internals/is-forced.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js");

    var inheritIfRequired = __webpack_require__(
    /*! ../internals/inherit-if-required */
    "./node_modules/core-js/internals/inherit-if-required.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var create = __webpack_require__(
    /*! ../internals/object-create */
    "./node_modules/core-js/internals/object-create.js");

    var getOwnPropertyNames = __webpack_require__(
    /*! ../internals/object-get-own-property-names */
    "./node_modules/core-js/internals/object-get-own-property-names.js").f;

    var getOwnPropertyDescriptor = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

    var defineProperty = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js").f;

    var trim = __webpack_require__(
    /*! ../internals/string-trim */
    "./node_modules/core-js/internals/string-trim.js").trim;

    var NUMBER = 'Number';
    var NativeNumber = global[NUMBER];
    var NumberPrototype = NativeNumber.prototype; // Opera ~12 has broken Object#toString

    var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER; // `ToNumber` abstract operation
    // https://tc39.github.io/ecma262/#sec-tonumber

    var toNumber = function toNumber(argument) {
      var it = toPrimitive(argument, false);
      var first, third, radix, maxCode, digits, length, index, code;

      if (typeof it == 'string' && it.length > 2) {
        it = trim(it);
        first = it.charCodeAt(0);

        if (first === 43 || first === 45) {
          third = it.charCodeAt(2);
          if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
          switch (it.charCodeAt(1)) {
            case 66:
            case 98:
              radix = 2;
              maxCode = 49;
              break;
            // fast equal of /^0b[01]+$/i

            case 79:
            case 111:
              radix = 8;
              maxCode = 55;
              break;
            // fast equal of /^0o[0-7]+$/i

            default:
              return +it;
          }

          digits = it.slice(2);
          length = digits.length;

          for (index = 0; index < length; index++) {
            code = digits.charCodeAt(index); // parseInt parses a string to a first unavailable symbol
            // but ToNumber should return NaN if a string contains unavailable symbols

            if (code < 48 || code > maxCode) return NaN;
          }

          return parseInt(digits, radix);
        }
      }

      return +it;
    }; // `Number` constructor
    // https://tc39.github.io/ecma262/#sec-number-constructor


    if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
      var NumberWrapper = function Number(value) {
        var it = arguments.length < 1 ? 0 : value;
        var dummy = this;
        return dummy instanceof NumberWrapper // check on 1..constructor(foo) case
        && (BROKEN_CLASSOF ? fails(function () {
          NumberPrototype.valueOf.call(dummy);
        }) : classof(dummy) != NUMBER) ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
      };

      for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : ( // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
        if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
          defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
        }
      }

      NumberWrapper.prototype = NumberPrototype;
      NumberPrototype.constructor = NumberWrapper;
      redefine(global, NUMBER, NumberWrapper);
    }
    /***/

  },

  /***/
  "./node_modules/core-js/modules/es.number.is-integer.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/modules/es.number.is-integer.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsNumberIsIntegerJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var isInteger = __webpack_require__(
    /*! ../internals/is-integer */
    "./node_modules/core-js/internals/is-integer.js"); // `Number.isInteger` method
    // https://tc39.github.io/ecma262/#sec-number.isinteger


    $({
      target: 'Number',
      stat: true
    }, {
      isInteger: isInteger
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.number.to-fixed.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsNumberToFixedJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var thisNumberValue = __webpack_require__(
    /*! ../internals/this-number-value */
    "./node_modules/core-js/internals/this-number-value.js");

    var repeat = __webpack_require__(
    /*! ../internals/string-repeat */
    "./node_modules/core-js/internals/string-repeat.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var nativeToFixed = 1.0.toFixed;
    var floor = Math.floor;

    var pow = function pow(x, n, acc) {
      return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
    };

    var log = function log(x) {
      var n = 0;
      var x2 = x;

      while (x2 >= 4096) {
        n += 12;
        x2 /= 4096;
      }

      while (x2 >= 2) {
        n += 1;
        x2 /= 2;
      }

      return n;
    };

    var FORCED = nativeToFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !fails(function () {
      // V8 ~ Android 4.3-
      nativeToFixed.call({});
    }); // `Number.prototype.toFixed` method
    // https://tc39.github.io/ecma262/#sec-number.prototype.tofixed

    $({
      target: 'Number',
      proto: true,
      forced: FORCED
    }, {
      // eslint-disable-next-line max-statements
      toFixed: function toFixed(fractionDigits) {
        var number = thisNumberValue(this);
        var fractDigits = toInteger(fractionDigits);
        var data = [0, 0, 0, 0, 0, 0];
        var sign = '';
        var result = '0';
        var e, z, j, k;

        var multiply = function multiply(n, c) {
          var index = -1;
          var c2 = c;

          while (++index < 6) {
            c2 += n * data[index];
            data[index] = c2 % 1e7;
            c2 = floor(c2 / 1e7);
          }
        };

        var divide = function divide(n) {
          var index = 6;
          var c = 0;

          while (--index >= 0) {
            c += data[index];
            data[index] = floor(c / n);
            c = c % n * 1e7;
          }
        };

        var dataToString = function dataToString() {
          var index = 6;
          var s = '';

          while (--index >= 0) {
            if (s !== '' || index === 0 || data[index] !== 0) {
              var t = String(data[index]);
              s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
            }
          }

          return s;
        };

        if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare

        if (number != number) return 'NaN';
        if (number <= -1e21 || number >= 1e21) return String(number);

        if (number < 0) {
          sign = '-';
          number = -number;
        }

        if (number > 1e-21) {
          e = log(number * pow(2, 69, 1)) - 69;
          z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
          z *= 0x10000000000000;
          e = 52 - e;

          if (e > 0) {
            multiply(0, z);
            j = fractDigits;

            while (j >= 7) {
              multiply(1e7, 0);
              j -= 7;
            }

            multiply(pow(10, j, 1), 0);
            j = e - 1;

            while (j >= 23) {
              divide(1 << 23);
              j -= 23;
            }

            divide(1 << j);
            multiply(1, 1);
            divide(2);
            result = dataToString();
          } else {
            multiply(0, z);
            multiply(1 << -e, 0);
            result = dataToString() + repeat.call('0', fractDigits);
          }
        }

        if (fractDigits > 0) {
          k = result.length;
          result = sign + (k <= fractDigits ? '0.' + repeat.call('0', fractDigits - k) + result : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
        } else {
          result = sign + result;
        }

        return result;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.assign.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.assign.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectAssignJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var assign = __webpack_require__(
    /*! ../internals/object-assign */
    "./node_modules/core-js/internals/object-assign.js"); // `Object.assign` method
    // https://tc39.github.io/ecma262/#sec-object.assign


    $({
      target: 'Object',
      stat: true,
      forced: Object.assign !== assign
    }, {
      assign: assign
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.freeze.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.freeze.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectFreezeJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var FREEZING = __webpack_require__(
    /*! ../internals/freezing */
    "./node_modules/core-js/internals/freezing.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var onFreeze = __webpack_require__(
    /*! ../internals/internal-metadata */
    "./node_modules/core-js/internals/internal-metadata.js").onFreeze;

    var nativeFreeze = Object.freeze;
    var FAILS_ON_PRIMITIVES = fails(function () {
      nativeFreeze(1);
    }); // `Object.freeze` method
    // https://tc39.github.io/ecma262/#sec-object.freeze

    $({
      target: 'Object',
      stat: true,
      forced: FAILS_ON_PRIMITIVES,
      sham: !FREEZING
    }, {
      freeze: function freeze(it) {
        return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.get-own-property-names.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.get-own-property-names.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectGetOwnPropertyNamesJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var nativeGetOwnPropertyNames = __webpack_require__(
    /*! ../internals/object-get-own-property-names-external */
    "./node_modules/core-js/internals/object-get-own-property-names-external.js").f;

    var FAILS_ON_PRIMITIVES = fails(function () {
      return !Object.getOwnPropertyNames(1);
    }); // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

    $({
      target: 'Object',
      stat: true,
      forced: FAILS_ON_PRIMITIVES
    }, {
      getOwnPropertyNames: nativeGetOwnPropertyNames
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.get-prototype-of.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.get-prototype-of.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectGetPrototypeOfJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var nativeGetPrototypeOf = __webpack_require__(
    /*! ../internals/object-get-prototype-of */
    "./node_modules/core-js/internals/object-get-prototype-of.js");

    var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
    /*! ../internals/correct-prototype-getter */
    "./node_modules/core-js/internals/correct-prototype-getter.js");

    var FAILS_ON_PRIMITIVES = fails(function () {
      nativeGetPrototypeOf(1);
    }); // `Object.getPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.getprototypeof

    $({
      target: 'Object',
      stat: true,
      forced: FAILS_ON_PRIMITIVES,
      sham: !CORRECT_PROTOTYPE_GETTER
    }, {
      getPrototypeOf: function getPrototypeOf(it) {
        return nativeGetPrototypeOf(toObject(it));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.keys.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.keys.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectKeysJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var nativeKeys = __webpack_require__(
    /*! ../internals/object-keys */
    "./node_modules/core-js/internals/object-keys.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var FAILS_ON_PRIMITIVES = fails(function () {
      nativeKeys(1);
    }); // `Object.keys` method
    // https://tc39.github.io/ecma262/#sec-object.keys

    $({
      target: 'Object',
      stat: true,
      forced: FAILS_ON_PRIMITIVES
    }, {
      keys: function keys(it) {
        return nativeKeys(toObject(it));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.set-prototype-of.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.set-prototype-of.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectSetPrototypeOfJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var setPrototypeOf = __webpack_require__(
    /*! ../internals/object-set-prototype-of */
    "./node_modules/core-js/internals/object-set-prototype-of.js"); // `Object.setPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.setprototypeof


    $({
      target: 'Object',
      stat: true
    }, {
      setPrototypeOf: setPrototypeOf
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.object.to-string.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsObjectToStringJs(module, exports, __webpack_require__) {
    var TO_STRING_TAG_SUPPORT = __webpack_require__(
    /*! ../internals/to-string-tag-support */
    "./node_modules/core-js/internals/to-string-tag-support.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var toString = __webpack_require__(
    /*! ../internals/object-to-string */
    "./node_modules/core-js/internals/object-to-string.js"); // `Object.prototype.toString` method
    // https://tc39.github.io/ecma262/#sec-object.prototype.tostring


    if (!TO_STRING_TAG_SUPPORT) {
      redefine(Object.prototype, 'toString', toString, {
        unsafe: true
      });
    }
    /***/

  },

  /***/
  "./node_modules/core-js/modules/es.regexp.constructor.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsRegexpConstructorJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var isForced = __webpack_require__(
    /*! ../internals/is-forced */
    "./node_modules/core-js/internals/is-forced.js");

    var inheritIfRequired = __webpack_require__(
    /*! ../internals/inherit-if-required */
    "./node_modules/core-js/internals/inherit-if-required.js");

    var defineProperty = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js").f;

    var getOwnPropertyNames = __webpack_require__(
    /*! ../internals/object-get-own-property-names */
    "./node_modules/core-js/internals/object-get-own-property-names.js").f;

    var isRegExp = __webpack_require__(
    /*! ../internals/is-regexp */
    "./node_modules/core-js/internals/is-regexp.js");

    var getFlags = __webpack_require__(
    /*! ../internals/regexp-flags */
    "./node_modules/core-js/internals/regexp-flags.js");

    var stickyHelpers = __webpack_require__(
    /*! ../internals/regexp-sticky-helpers */
    "./node_modules/core-js/internals/regexp-sticky-helpers.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var setInternalState = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js").set;

    var setSpecies = __webpack_require__(
    /*! ../internals/set-species */
    "./node_modules/core-js/internals/set-species.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var MATCH = wellKnownSymbol('match');
    var NativeRegExp = global.RegExp;
    var RegExpPrototype = NativeRegExp.prototype;
    var re1 = /a/g;
    var re2 = /a/g; // "new" should create a new object, old webkit bug

    var CORRECT_NEW = new NativeRegExp(re1) !== re1;
    var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
    var FORCED = DESCRIPTORS && isForced('RegExp', !CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
      re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

      return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
    })); // `RegExp` constructor
    // https://tc39.github.io/ecma262/#sec-regexp-constructor

    if (FORCED) {
      var RegExpWrapper = function RegExp(pattern, flags) {
        var thisIsRegExp = this instanceof RegExpWrapper;
        var patternIsRegExp = isRegExp(pattern);
        var flagsAreUndefined = flags === undefined;
        var sticky;

        if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
          return pattern;
        }

        if (CORRECT_NEW) {
          if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
        } else if (pattern instanceof RegExpWrapper) {
          if (flagsAreUndefined) flags = getFlags.call(pattern);
          pattern = pattern.source;
        }

        if (UNSUPPORTED_Y) {
          sticky = !!flags && flags.indexOf('y') > -1;
          if (sticky) flags = flags.replace(/y/g, '');
        }

        var result = inheritIfRequired(CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
        if (UNSUPPORTED_Y && sticky) setInternalState(result, {
          sticky: sticky
        });
        return result;
      };

      var proxy = function proxy(key) {
        key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
          configurable: true,
          get: function get() {
            return NativeRegExp[key];
          },
          set: function set(it) {
            NativeRegExp[key] = it;
          }
        });
      };

      var keys = getOwnPropertyNames(NativeRegExp);
      var index = 0;

      while (keys.length > index) {
        proxy(keys[index++]);
      }

      RegExpPrototype.constructor = RegExpWrapper;
      RegExpWrapper.prototype = RegExpPrototype;
      redefine(global, 'RegExp', RegExpWrapper);
    } // https://tc39.github.io/ecma262/#sec-get-regexp-@@species


    setSpecies('RegExp');
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.regexp.exec.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsRegexpExecJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var exec = __webpack_require__(
    /*! ../internals/regexp-exec */
    "./node_modules/core-js/internals/regexp-exec.js");

    $({
      target: 'RegExp',
      proto: true,
      forced: /./.exec !== exec
    }, {
      exec: exec
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.regexp.to-string.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsRegexpToStringJs(module, exports, __webpack_require__) {
    "use strict";

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var flags = __webpack_require__(
    /*! ../internals/regexp-flags */
    "./node_modules/core-js/internals/regexp-flags.js");

    var TO_STRING = 'toString';
    var RegExpPrototype = RegExp.prototype;
    var nativeToString = RegExpPrototype[TO_STRING];
    var NOT_GENERIC = fails(function () {
      return nativeToString.call({
        source: 'a',
        flags: 'b'
      }) != '/a/b';
    }); // FF44- RegExp#toString has a wrong name

    var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring

    if (NOT_GENERIC || INCORRECT_NAME) {
      redefine(RegExp.prototype, TO_STRING, function toString() {
        var R = anObject(this);
        var p = String(R.source);
        var rf = R.flags;
        var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
        return '/' + p + '/' + f;
      }, {
        unsafe: true
      });
    }
    /***/

  },

  /***/
  "./node_modules/core-js/modules/es.set.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/modules/es.set.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsSetJs(module, exports, __webpack_require__) {
    "use strict";

    var collection = __webpack_require__(
    /*! ../internals/collection */
    "./node_modules/core-js/internals/collection.js");

    var collectionStrong = __webpack_require__(
    /*! ../internals/collection-strong */
    "./node_modules/core-js/internals/collection-strong.js"); // `Set` constructor
    // https://tc39.github.io/ecma262/#sec-set-objects


    module.exports = collection('Set', function (init) {
      return function Set() {
        return init(this, arguments.length ? arguments[0] : undefined);
      };
    }, collectionStrong);
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.code-point-at.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.code-point-at.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringCodePointAtJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var codeAt = __webpack_require__(
    /*! ../internals/string-multibyte */
    "./node_modules/core-js/internals/string-multibyte.js").codeAt; // `String.prototype.codePointAt` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat


    $({
      target: 'String',
      proto: true
    }, {
      codePointAt: function codePointAt(pos) {
        return codeAt(this, pos);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.ends-with.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringEndsWithJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var getOwnPropertyDescriptor = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var notARegExp = __webpack_require__(
    /*! ../internals/not-a-regexp */
    "./node_modules/core-js/internals/not-a-regexp.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    var correctIsRegExpLogic = __webpack_require__(
    /*! ../internals/correct-is-regexp-logic */
    "./node_modules/core-js/internals/correct-is-regexp-logic.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js/internals/is-pure.js");

    var nativeEndsWith = ''.endsWith;
    var min = Math.min;
    var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith'); // https://github.com/zloirock/core-js/pull/702

    var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
      var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
      return descriptor && !descriptor.writable;
    }(); // `String.prototype.endsWith` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.endswith

    $({
      target: 'String',
      proto: true,
      forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
    }, {
      endsWith: function endsWith(searchString
      /* , endPosition = @length */
      ) {
        var that = String(requireObjectCoercible(this));
        notARegExp(searchString);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = toLength(that.length);
        var end = endPosition === undefined ? len : min(toLength(endPosition), len);
        var search = String(searchString);
        return nativeEndsWith ? nativeEndsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.includes.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.includes.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringIncludesJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var notARegExp = __webpack_require__(
    /*! ../internals/not-a-regexp */
    "./node_modules/core-js/internals/not-a-regexp.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    var correctIsRegExpLogic = __webpack_require__(
    /*! ../internals/correct-is-regexp-logic */
    "./node_modules/core-js/internals/correct-is-regexp-logic.js"); // `String.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.includes


    $({
      target: 'String',
      proto: true,
      forced: !correctIsRegExpLogic('includes')
    }, {
      includes: function includes(searchString
      /* , position = 0 */
      ) {
        return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.iterator.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    var charAt = __webpack_require__(
    /*! ../internals/string-multibyte */
    "./node_modules/core-js/internals/string-multibyte.js").charAt;

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js");

    var defineIterator = __webpack_require__(
    /*! ../internals/define-iterator */
    "./node_modules/core-js/internals/define-iterator.js");

    var STRING_ITERATOR = 'String Iterator';
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
    // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator

    defineIterator(String, 'String', function (iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: String(iterated),
        index: 0
      }); // `%StringIteratorPrototype%.next` method
      // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
    }, function next() {
      var state = getInternalState(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length) return {
        value: undefined,
        done: true
      };
      point = charAt(string, index);
      state.index += point.length;
      return {
        value: point,
        done: false
      };
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.link.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.link.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringLinkJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var createHTML = __webpack_require__(
    /*! ../internals/create-html */
    "./node_modules/core-js/internals/create-html.js");

    var forcedStringHTMLMethod = __webpack_require__(
    /*! ../internals/string-html-forced */
    "./node_modules/core-js/internals/string-html-forced.js"); // `String.prototype.link` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.link


    $({
      target: 'String',
      proto: true,
      forced: forcedStringHTMLMethod('link')
    }, {
      link: function link(url) {
        return createHTML(this, 'a', 'href', url);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.match.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.match.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringMatchJs(module, exports, __webpack_require__) {
    "use strict";

    var fixRegExpWellKnownSymbolLogic = __webpack_require__(
    /*! ../internals/fix-regexp-well-known-symbol-logic */
    "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    var advanceStringIndex = __webpack_require__(
    /*! ../internals/advance-string-index */
    "./node_modules/core-js/internals/advance-string-index.js");

    var regExpExec = __webpack_require__(
    /*! ../internals/regexp-exec-abstract */
    "./node_modules/core-js/internals/regexp-exec-abstract.js"); // @@match logic


    fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
      return [// `String.prototype.match` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible(this);
        var matcher = regexp == undefined ? undefined : regexp[MATCH];
        return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      }, // `RegExp.prototype[@@match]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
      function (regexp) {
        var res = maybeCallNative(nativeMatch, regexp, this);
        if (res.done) return res.value;
        var rx = anObject(regexp);
        var S = String(this);
        if (!rx.global) return regExpExec(rx, S);
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;

        while ((result = regExpExec(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          n++;
        }

        return n === 0 ? null : A;
      }];
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.replace.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.replace.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringReplaceJs(module, exports, __webpack_require__) {
    "use strict";

    var fixRegExpWellKnownSymbolLogic = __webpack_require__(
    /*! ../internals/fix-regexp-well-known-symbol-logic */
    "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    var advanceStringIndex = __webpack_require__(
    /*! ../internals/advance-string-index */
    "./node_modules/core-js/internals/advance-string-index.js");

    var regExpExec = __webpack_require__(
    /*! ../internals/regexp-exec-abstract */
    "./node_modules/core-js/internals/regexp-exec-abstract.js");

    var max = Math.max;
    var min = Math.min;
    var floor = Math.floor;
    var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
    var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

    var maybeToString = function maybeToString(it) {
      return it === undefined ? it : String(it);
    }; // @@replace logic


    fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
      var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
      var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
      var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
      return [// `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
      }, // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
          var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
          if (res.done) return res.value;
        }

        var rx = anObject(regexp);
        var S = String(this);
        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);
        var global = rx.global;

        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }

        var results = [];

        while (true) {
          var result = regExpExec(rx, S);
          if (result === null) break;
          results.push(result);
          if (!global) break;
          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;

        for (var i = 0; i < results.length; i++) {
          result = results[i];
          var matched = String(result[0]);
          var position = max(min(toInteger(result.index), S.length), 0);
          var captures = []; // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

          for (var j = 1; j < result.length; j++) {
            captures.push(maybeToString(result[j]));
          }

          var namedCaptures = result.groups;

          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }

          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }

        return accumulatedResult + S.slice(nextSourcePosition);
      }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

      function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

        if (namedCaptures !== undefined) {
          namedCaptures = toObject(namedCaptures);
          symbols = SUBSTITUTION_SYMBOLS;
        }

        return nativeReplace.call(replacement, symbols, function (match, ch) {
          var capture;

          switch (ch.charAt(0)) {
            case '$':
              return '$';

            case '&':
              return matched;

            case '`':
              return str.slice(0, position);

            case "'":
              return str.slice(tailPos);

            case '<':
              capture = namedCaptures[ch.slice(1, -1)];
              break;

            default:
              // \d\d?
              var n = +ch;
              if (n === 0) return match;

              if (n > m) {
                var f = floor(n / 10);
                if (f === 0) return match;
                if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                return match;
              }

              capture = captures[n - 1];
          }

          return capture === undefined ? '' : capture;
        });
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.search.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.search.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringSearchJs(module, exports, __webpack_require__) {
    "use strict";

    var fixRegExpWellKnownSymbolLogic = __webpack_require__(
    /*! ../internals/fix-regexp-well-known-symbol-logic */
    "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    var sameValue = __webpack_require__(
    /*! ../internals/same-value */
    "./node_modules/core-js/internals/same-value.js");

    var regExpExec = __webpack_require__(
    /*! ../internals/regexp-exec-abstract */
    "./node_modules/core-js/internals/regexp-exec-abstract.js"); // @@search logic


    fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
      return [// `String.prototype.search` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.search
      function search(regexp) {
        var O = requireObjectCoercible(this);
        var searcher = regexp == undefined ? undefined : regexp[SEARCH];
        return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
      }, // `RegExp.prototype[@@search]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
      function (regexp) {
        var res = maybeCallNative(nativeSearch, regexp, this);
        if (res.done) return res.value;
        var rx = anObject(regexp);
        var S = String(this);
        var previousLastIndex = rx.lastIndex;
        if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
        var result = regExpExec(rx, S);
        if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
        return result === null ? -1 : result.index;
      }];
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.split.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.split.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringSplitJs(module, exports, __webpack_require__) {
    "use strict";

    var fixRegExpWellKnownSymbolLogic = __webpack_require__(
    /*! ../internals/fix-regexp-well-known-symbol-logic */
    "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");

    var isRegExp = __webpack_require__(
    /*! ../internals/is-regexp */
    "./node_modules/core-js/internals/is-regexp.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    var speciesConstructor = __webpack_require__(
    /*! ../internals/species-constructor */
    "./node_modules/core-js/internals/species-constructor.js");

    var advanceStringIndex = __webpack_require__(
    /*! ../internals/advance-string-index */
    "./node_modules/core-js/internals/advance-string-index.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var callRegExpExec = __webpack_require__(
    /*! ../internals/regexp-exec-abstract */
    "./node_modules/core-js/internals/regexp-exec-abstract.js");

    var regexpExec = __webpack_require__(
    /*! ../internals/regexp-exec */
    "./node_modules/core-js/internals/regexp-exec.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var arrayPush = [].push;
    var min = Math.min;
    var MAX_UINT32 = 0xFFFFFFFF; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

    var SUPPORTS_Y = !fails(function () {
      return !RegExp(MAX_UINT32, 'y');
    }); // @@split logic

    fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
      var internalSplit;

      if ('abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
        // based on es5-shim implementation, need to rework it
        internalSplit = function internalSplit(separator, limit) {
          var string = String(requireObjectCoercible(this));
          var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
          if (lim === 0) return [];
          if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

          if (!isRegExp(separator)) {
            return nativeSplit.call(string, separator, lim);
          }

          var output = [];
          var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
          var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

          var separatorCopy = new RegExp(separator.source, flags + 'g');
          var match, lastIndex, lastLength;

          while (match = regexpExec.call(separatorCopy, string)) {
            lastIndex = separatorCopy.lastIndex;

            if (lastIndex > lastLastIndex) {
              output.push(string.slice(lastLastIndex, match.index));
              if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
              lastLength = match[0].length;
              lastLastIndex = lastIndex;
              if (output.length >= lim) break;
            }

            if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
          }

          if (lastLastIndex === string.length) {
            if (lastLength || !separatorCopy.test('')) output.push('');
          } else output.push(string.slice(lastLastIndex));

          return output.length > lim ? output.slice(0, lim) : output;
        }; // Chakra, V8

      } else if ('0'.split(undefined, 0).length) {
        internalSplit = function internalSplit(separator, limit) {
          return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
        };
      } else internalSplit = nativeSplit;

      return [// `String.prototype.split` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
      }, // `RegExp.prototype[@@split]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;
        var rx = anObject(regexp);
        var S = String(this);
        var C = speciesConstructor(rx, RegExp);
        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.

        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];

        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;

          if (z === null || (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
            q = advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;

            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }

            q = p = e;
          }
        }

        A.push(S.slice(p));
        return A;
      }];
    }, !SUPPORTS_Y);
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.starts-with.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringStartsWithJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var getOwnPropertyDescriptor = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var notARegExp = __webpack_require__(
    /*! ../internals/not-a-regexp */
    "./node_modules/core-js/internals/not-a-regexp.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    var correctIsRegExpLogic = __webpack_require__(
    /*! ../internals/correct-is-regexp-logic */
    "./node_modules/core-js/internals/correct-is-regexp-logic.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js/internals/is-pure.js");

    var nativeStartsWith = ''.startsWith;
    var min = Math.min;
    var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith'); // https://github.com/zloirock/core-js/pull/702

    var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
      var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
      return descriptor && !descriptor.writable;
    }(); // `String.prototype.startsWith` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.startswith

    $({
      target: 'String',
      proto: true,
      forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
    }, {
      startsWith: function startsWith(searchString
      /* , position = 0 */
      ) {
        var that = String(requireObjectCoercible(this));
        notARegExp(searchString);
        var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return nativeStartsWith ? nativeStartsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.string.trim.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.string.trim.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsStringTrimJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $trim = __webpack_require__(
    /*! ../internals/string-trim */
    "./node_modules/core-js/internals/string-trim.js").trim;

    var forcedStringTrimMethod = __webpack_require__(
    /*! ../internals/string-trim-forced */
    "./node_modules/core-js/internals/string-trim-forced.js"); // `String.prototype.trim` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.trim


    $({
      target: 'String',
      proto: true,
      forced: forcedStringTrimMethod('trim')
    }, {
      trim: function trim() {
        return $trim(this);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.symbol.description.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsSymbolDescriptionJs(module, exports, __webpack_require__) {
    "use strict"; // `Symbol.prototype.description` getter
    // https://tc39.github.io/ecma262/#sec-symbol.prototype.description

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var defineProperty = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js").f;

    var copyConstructorProperties = __webpack_require__(
    /*! ../internals/copy-constructor-properties */
    "./node_modules/core-js/internals/copy-constructor-properties.js");

    var NativeSymbol = global.Symbol;

    if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
    NativeSymbol().description !== undefined)) {
      var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

      var SymbolWrapper = function Symbol() {
        var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
        var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
        : description === undefined ? NativeSymbol() : NativeSymbol(description);
        if (description === '') EmptyStringDescriptionStore[result] = true;
        return result;
      };

      copyConstructorProperties(SymbolWrapper, NativeSymbol);
      var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
      symbolPrototype.constructor = SymbolWrapper;
      var symbolToString = symbolPrototype.toString;

      var _native = String(NativeSymbol('test')) == 'Symbol(test)';

      var regexp = /^Symbol\((.*)\)[^)]+$/;
      defineProperty(symbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          var symbol = isObject(this) ? this.valueOf() : this;
          var string = symbolToString.call(symbol);
          if (has(EmptyStringDescriptionStore, symbol)) return '';
          var desc = _native ? string.slice(7, -1) : string.replace(regexp, '$1');
          return desc === '' ? undefined : desc;
        }
      });
      $({
        global: true,
        forced: true
      }, {
        Symbol: SymbolWrapper
      });
    }
    /***/

  },

  /***/
  "./node_modules/core-js/modules/es.symbol.iterator.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsSymbolIteratorJs(module, exports, __webpack_require__) {
    var defineWellKnownSymbol = __webpack_require__(
    /*! ../internals/define-well-known-symbol */
    "./node_modules/core-js/internals/define-well-known-symbol.js"); // `Symbol.iterator` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.iterator


    defineWellKnownSymbol('iterator');
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.symbol.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/modules/es.symbol.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsSymbolJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js/internals/is-pure.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var NATIVE_SYMBOL = __webpack_require__(
    /*! ../internals/native-symbol */
    "./node_modules/core-js/internals/native-symbol.js");

    var USE_SYMBOL_AS_UID = __webpack_require__(
    /*! ../internals/use-symbol-as-uid */
    "./node_modules/core-js/internals/use-symbol-as-uid.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var isArray = __webpack_require__(
    /*! ../internals/is-array */
    "./node_modules/core-js/internals/is-array.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    var nativeObjectCreate = __webpack_require__(
    /*! ../internals/object-create */
    "./node_modules/core-js/internals/object-create.js");

    var objectKeys = __webpack_require__(
    /*! ../internals/object-keys */
    "./node_modules/core-js/internals/object-keys.js");

    var getOwnPropertyNamesModule = __webpack_require__(
    /*! ../internals/object-get-own-property-names */
    "./node_modules/core-js/internals/object-get-own-property-names.js");

    var getOwnPropertyNamesExternal = __webpack_require__(
    /*! ../internals/object-get-own-property-names-external */
    "./node_modules/core-js/internals/object-get-own-property-names-external.js");

    var getOwnPropertySymbolsModule = __webpack_require__(
    /*! ../internals/object-get-own-property-symbols */
    "./node_modules/core-js/internals/object-get-own-property-symbols.js");

    var getOwnPropertyDescriptorModule = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var propertyIsEnumerableModule = __webpack_require__(
    /*! ../internals/object-property-is-enumerable */
    "./node_modules/core-js/internals/object-property-is-enumerable.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js/internals/shared.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    var uid = __webpack_require__(
    /*! ../internals/uid */
    "./node_modules/core-js/internals/uid.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var wrappedWellKnownSymbolModule = __webpack_require__(
    /*! ../internals/well-known-symbol-wrapped */
    "./node_modules/core-js/internals/well-known-symbol-wrapped.js");

    var defineWellKnownSymbol = __webpack_require__(
    /*! ../internals/define-well-known-symbol */
    "./node_modules/core-js/internals/define-well-known-symbol.js");

    var setToStringTag = __webpack_require__(
    /*! ../internals/set-to-string-tag */
    "./node_modules/core-js/internals/set-to-string-tag.js");

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js");

    var $forEach = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js").forEach;

    var HIDDEN = sharedKey('hidden');
    var SYMBOL = 'Symbol';
    var PROTOTYPE = 'prototype';
    var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(SYMBOL);
    var ObjectPrototype = Object[PROTOTYPE];
    var $Symbol = global.Symbol;
    var $stringify = getBuiltIn('JSON', 'stringify');
    var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var nativeDefineProperty = definePropertyModule.f;
    var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
    var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
    var AllSymbols = shared('symbols');
    var ObjectPrototypeSymbols = shared('op-symbols');
    var StringToSymbolRegistry = shared('string-to-symbol-registry');
    var SymbolToStringRegistry = shared('symbol-to-string-registry');
    var WellKnownSymbolsStore = shared('wks');
    var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

    var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

    var setSymbolDescriptor = DESCRIPTORS && fails(function () {
      return nativeObjectCreate(nativeDefineProperty({}, 'a', {
        get: function get() {
          return nativeDefineProperty(this, 'a', {
            value: 7
          }).a;
        }
      })).a != 7;
    }) ? function (O, P, Attributes) {
      var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
      if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
      nativeDefineProperty(O, P, Attributes);

      if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
        nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
      }
    } : nativeDefineProperty;

    var wrap = function wrap(tag, description) {
      var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
      setInternalState(symbol, {
        type: SYMBOL,
        tag: tag,
        description: description
      });
      if (!DESCRIPTORS) symbol.description = description;
      return symbol;
    };

    var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
      return typeof it == 'symbol';
    } : function (it) {
      return Object(it) instanceof $Symbol;
    };

    var $defineProperty = function defineProperty(O, P, Attributes) {
      if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
      anObject(O);
      var key = toPrimitive(P, true);
      anObject(Attributes);

      if (has(AllSymbols, key)) {
        if (!Attributes.enumerable) {
          if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
          O[HIDDEN][key] = true;
        } else {
          if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
          Attributes = nativeObjectCreate(Attributes, {
            enumerable: createPropertyDescriptor(0, false)
          });
        }

        return setSymbolDescriptor(O, key, Attributes);
      }

      return nativeDefineProperty(O, key, Attributes);
    };

    var $defineProperties = function defineProperties(O, Properties) {
      anObject(O);
      var properties = toIndexedObject(Properties);
      var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
      $forEach(keys, function (key) {
        if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
      });
      return O;
    };

    var $create = function create(O, Properties) {
      return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
    };

    var $propertyIsEnumerable = function propertyIsEnumerable(V) {
      var P = toPrimitive(V, true);
      var enumerable = nativePropertyIsEnumerable.call(this, P);
      if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
      return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
    };

    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
      var it = toIndexedObject(O);
      var key = toPrimitive(P, true);
      if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
      var descriptor = nativeGetOwnPropertyDescriptor(it, key);

      if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true;
      }

      return descriptor;
    };

    var $getOwnPropertyNames = function getOwnPropertyNames(O) {
      var names = nativeGetOwnPropertyNames(toIndexedObject(O));
      var result = [];
      $forEach(names, function (key) {
        if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
      });
      return result;
    };

    var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
      var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
      var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
      var result = [];
      $forEach(names, function (key) {
        if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
          result.push(AllSymbols[key]);
        }
      });
      return result;
    }; // `Symbol` constructor
    // https://tc39.github.io/ecma262/#sec-symbol-constructor


    if (!NATIVE_SYMBOL) {
      $Symbol = function Symbol() {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
        var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
        var tag = uid(description);

        var setter = function setter(value) {
          if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
          if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
          setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
        };

        if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
          configurable: true,
          set: setter
        });
        return wrap(tag, description);
      };

      redefine($Symbol[PROTOTYPE], 'toString', function toString() {
        return getInternalState(this).tag;
      });
      redefine($Symbol, 'withoutSetter', function (description) {
        return wrap(uid(description), description);
      });
      propertyIsEnumerableModule.f = $propertyIsEnumerable;
      definePropertyModule.f = $defineProperty;
      getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
      getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
      getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

      wrappedWellKnownSymbolModule.f = function (name) {
        return wrap(wellKnownSymbol(name), name);
      };

      if (DESCRIPTORS) {
        // https://github.com/tc39/proposal-Symbol-description
        nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
          configurable: true,
          get: function description() {
            return getInternalState(this).description;
          }
        });

        if (!IS_PURE) {
          redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
            unsafe: true
          });
        }
      }
    }

    $({
      global: true,
      wrap: true,
      forced: !NATIVE_SYMBOL,
      sham: !NATIVE_SYMBOL
    }, {
      Symbol: $Symbol
    });
    $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
      defineWellKnownSymbol(name);
    });
    $({
      target: SYMBOL,
      stat: true,
      forced: !NATIVE_SYMBOL
    }, {
      // `Symbol.for` method
      // https://tc39.github.io/ecma262/#sec-symbol.for
      'for': function _for(key) {
        var string = String(key);
        if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
        var symbol = $Symbol(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry[symbol] = string;
        return symbol;
      },
      // `Symbol.keyFor` method
      // https://tc39.github.io/ecma262/#sec-symbol.keyfor
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
        if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
      },
      useSetter: function useSetter() {
        USE_SETTER = true;
      },
      useSimple: function useSimple() {
        USE_SETTER = false;
      }
    });
    $({
      target: 'Object',
      stat: true,
      forced: !NATIVE_SYMBOL,
      sham: !DESCRIPTORS
    }, {
      // `Object.create` method
      // https://tc39.github.io/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty,
      // `Object.defineProperties` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    });
    $({
      target: 'Object',
      stat: true,
      forced: !NATIVE_SYMBOL
    }, {
      // `Object.getOwnPropertyNames` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames,
      // `Object.getOwnPropertySymbols` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
      getOwnPropertySymbols: $getOwnPropertySymbols
    }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
    // https://bugs.chromium.org/p/v8/issues/detail?id=3443

    $({
      target: 'Object',
      stat: true,
      forced: fails(function () {
        getOwnPropertySymbolsModule.f(1);
      })
    }, {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return getOwnPropertySymbolsModule.f(toObject(it));
      }
    }); // `JSON.stringify` method behavior with symbols
    // https://tc39.github.io/ecma262/#sec-json.stringify

    if ($stringify) {
      var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
        var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

        return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
        || $stringify({
          a: symbol
        }) != '{}' // V8 throws on boxed symbols
        || $stringify(Object(symbol)) != '{}';
      });
      $({
        target: 'JSON',
        stat: true,
        forced: FORCED_JSON_STRINGIFY
      }, {
        // eslint-disable-next-line no-unused-vars
        stringify: function stringify(it, replacer, space) {
          var args = [it];
          var index = 1;
          var $replacer;

          while (arguments.length > index) {
            args.push(arguments[index++]);
          }

          $replacer = replacer;
          if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

          if (!isArray(replacer)) replacer = function replacer(key, value) {
            if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
          };
          args[1] = replacer;
          return $stringify.apply(null, args);
        }
      });
    } // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive


    if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
      createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
    } // `Symbol.prototype[@@toStringTag]` property
    // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag


    setToStringTag($Symbol, SYMBOL);
    hiddenKeys[HIDDEN] = true;
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.weak-map.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/modules/es.weak-map.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsWeakMapJs(module, exports, __webpack_require__) {
    "use strict";

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var redefineAll = __webpack_require__(
    /*! ../internals/redefine-all */
    "./node_modules/core-js/internals/redefine-all.js");

    var InternalMetadataModule = __webpack_require__(
    /*! ../internals/internal-metadata */
    "./node_modules/core-js/internals/internal-metadata.js");

    var collection = __webpack_require__(
    /*! ../internals/collection */
    "./node_modules/core-js/internals/collection.js");

    var collectionWeak = __webpack_require__(
    /*! ../internals/collection-weak */
    "./node_modules/core-js/internals/collection-weak.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var enforceIternalState = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js").enforce;

    var NATIVE_WEAK_MAP = __webpack_require__(
    /*! ../internals/native-weak-map */
    "./node_modules/core-js/internals/native-weak-map.js");

    var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
    var isExtensible = Object.isExtensible;
    var InternalWeakMap;

    var wrapper = function wrapper(init) {
      return function WeakMap() {
        return init(this, arguments.length ? arguments[0] : undefined);
      };
    }; // `WeakMap` constructor
    // https://tc39.github.io/ecma262/#sec-weakmap-constructor


    var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak); // IE11 WeakMap frozen keys fix
    // We can't use feature detection because it crash some old IE builds
    // https://github.com/zloirock/core-js/issues/485

    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
      InternalMetadataModule.REQUIRED = true;
      var WeakMapPrototype = $WeakMap.prototype;
      var nativeDelete = WeakMapPrototype['delete'];
      var nativeHas = WeakMapPrototype.has;
      var nativeGet = WeakMapPrototype.get;
      var nativeSet = WeakMapPrototype.set;
      redefineAll(WeakMapPrototype, {
        'delete': function _delete(key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeDelete.call(this, key) || state.frozen['delete'](key);
          }

          return nativeDelete.call(this, key);
        },
        has: function has(key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeHas.call(this, key) || state.frozen.has(key);
          }

          return nativeHas.call(this, key);
        },
        get: function get(key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
          }

          return nativeGet.call(this, key);
        },
        set: function set(key, value) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
          } else nativeSet.call(this, key, value);

          return this;
        }
      });
    }
    /***/

  },

  /***/
  "./node_modules/core-js/modules/web.dom-collections.for-each.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesWebDomCollectionsForEachJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var DOMIterables = __webpack_require__(
    /*! ../internals/dom-iterables */
    "./node_modules/core-js/internals/dom-iterables.js");

    var forEach = __webpack_require__(
    /*! ../internals/array-for-each */
    "./node_modules/core-js/internals/array-for-each.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    for (var COLLECTION_NAME in DOMIterables) {
      var Collection = global[COLLECTION_NAME];
      var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

      if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
        createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
      } catch (error) {
        CollectionPrototype.forEach = forEach;
      }
    }
    /***/

  },

  /***/
  "./node_modules/core-js/modules/web.dom-collections.iterator.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesWebDomCollectionsIteratorJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var DOMIterables = __webpack_require__(
    /*! ../internals/dom-iterables */
    "./node_modules/core-js/internals/dom-iterables.js");

    var ArrayIteratorMethods = __webpack_require__(
    /*! ../modules/es.array.iterator */
    "./node_modules/core-js/modules/es.array.iterator.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var ITERATOR = wellKnownSymbol('iterator');
    var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    var ArrayValues = ArrayIteratorMethods.values;

    for (var COLLECTION_NAME in DOMIterables) {
      var Collection = global[COLLECTION_NAME];
      var CollectionPrototype = Collection && Collection.prototype;

      if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
          createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
        } catch (error) {
          CollectionPrototype[ITERATOR] = ArrayValues;
        }

        if (!CollectionPrototype[TO_STRING_TAG]) {
          createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
        }

        if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
            createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
          } catch (error) {
            CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
          }
        }
      }
    }
    /***/

  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/algorithmComponents/agglomerative/agglomerative.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/algorithmComponents/agglomerative/agglomerative.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AgglomerativeComponent */

  /***/
  function srcAppAlgorithmComponentsAgglomerativeAgglomerativeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgglomerativeComponent", function () {
      return AgglomerativeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AgglomerativeComponent_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter the number of clusters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgglomerativeComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AgglomerativeComponent_div_14_div_1_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.clusters.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var AgglomerativeComponent = /*#__PURE__*/function () {
      function AgglomerativeComponent(formBuilder, logger) {
        _classCallCheck(this, AgglomerativeComponent);

        this.formBuilder = formBuilder;
        this.logger = logger;
        this.submitted = false;
        this.algorithmEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AgglomerativeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.form = this.formBuilder.group({
            clusters: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            runName: ['']
          });
          this.form.get('clusters').valueChanges.subscribe(function (value) {
            _this.logEvent('ASA2', 'Clusters value changed to ' + value);
          });
          this.form.get('runName').valueChanges.subscribe(function (value) {
            _this.logEvent('ASA3', 'Run name value changed to ' + value);
          });
        }
      }, {
        key: "logEvent",
        value: function logEvent(id, event) {
          this.logger.log(id, event).subscribe();
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "runAlgorithm",
        value: function runAlgorithm() {
          this.submitted = true;

          if (this.form.invalid) {
            console.log("invalid form");
            return;
          }

          this.algorithmEmitter.emit({
            "clusters": this.f.clusters.value,
            "runName": this.f.runName.value
          });
        }
      }]);

      return AgglomerativeComponent;
    }();

    AgglomerativeComponent.ɵfac = function AgglomerativeComponent_Factory(t) {
      return new (t || AgglomerativeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]));
    };

    AgglomerativeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgglomerativeComponent,
      selectors: [["app-agglomerative"]],
      outputs: {
        algorithmEmitter: "algorithmEmitter"
      },
      decls: 23,
      vars: 6,
      consts: [[1, "card-body"], [1, "row"], [1, "col"], [1, "card-title"], [1, "col", 2, "text-align", "right"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "auto", 1, "btn", "btn-dark", 2, "border-radius", "50%", "padding", "0px", "width", "25px", "height", "25px", 3, "outsideClick", "onShown", "onHidden"], [3, "formGroup"], ["for", "exampleInputEmail1"], ["type", "number", "min", "2", "placeholder", "2", "formControlName", "clusters", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Agglomerative-1", "formControlName", "runName", 1, "form-control"], [1, "container", 2, "display", "flex", "padding", "20px 60px", "justify-content", "center", "flex-direction", "column", "max-width", "400px"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function AgglomerativeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Agglomerative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onShown", function AgglomerativeComponent_Template_button_onShown_6_listener() {
            return ctx.logEvent("ASA1", "Algorithm Section Agglomerative help opened");
          })("onHidden", function AgglomerativeComponent_Template_button_onHidden_6_listener() {
            return ctx.logEvent("ASA1", "Algorithm Section Agglomerative help closed");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Number of Clusters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AgglomerativeComponent_div_14_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name of run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgglomerativeComponent_Template_button_click_21_listener() {
            return ctx.runAlgorithm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Run Algorithm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("outsideClick", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.submitted && ctx.f.clusters.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.clusters.errors);
        }
      },
      directives: [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobUNvbXBvbmVudHMvYWdnbG9tZXJhdGl2ZS9hZ2dsb21lcmF0aXZlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgglomerativeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-agglomerative',
          templateUrl: './agglomerative.component.html',
          styleUrls: ['./agglomerative.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]
        }];
      }, {
        algorithmEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/algorithmComponents/classification/classification.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/algorithmComponents/classification/classification.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ClassificationComponent */

  /***/
  function srcAppAlgorithmComponentsClassificationClassificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassificationComponent", function () {
      return ClassificationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @handsontable/angular */
    "./node_modules/@handsontable/angular/__ivy_ngcc__/fesm2015/handsontable-angular.js");
    /* harmony import */


    var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-csv-parser */
    "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js");
    /* harmony import */


    var _app_services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ClassificationComponent_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter the number of the column that contains the labels for the data (value of -1 for last column)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClassificationComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClassificationComponent_div_14_div_1_Template, 2, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.labelsCol.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var ClassificationComponent = /*#__PURE__*/function () {
      function ClassificationComponent(ngxCsvParser, formBuilder, logger) {
        _classCallCheck(this, ClassificationComponent);

        this.ngxCsvParser = ngxCsvParser;
        this.formBuilder = formBuilder;
        this.logger = logger;
        this.hotRegisterer = new _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableRegisterer"]();
        this.hooks = ['afterBeginEditing', 'afterChange', 'afterContextMenuShow', 'afterContextMenuHide', 'afterCopy', 'afterCreateCol', 'afterCreateRow', 'afterCut', 'afterPaste', 'afterRemoveCol', 'afterRemoveRow', 'afterSelection', 'afterUndo'];
        this.hotSettings = {
          startRows: 50,
          startCols: 50,
          colHeaders: function colHeaders(index) {
            return 'Attribute ' + index;
          },
          rowHeaders: function rowHeaders(index) {
            return 'Object ' + index;
          },
          rowHeaderWidth: 100,
          contextMenu: true,
          width: '100%',
          height: 450,
          licenseKey: 'non-commercial-and-evaluation'
        };
        this.tableID = 'test-data-table';
        this.csvRecords = [];
        this.submitted = false;
        this.algorithmEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ClassificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.form = this.formBuilder.group({
            labelsCol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            runName: ['']
          });
          this.form.get('labelsCol').valueChanges.subscribe(function (value) {
            _this2.logEvent('ASC2', 'Labels Column value changed to ' + value);
          });
          this.form.get('runName').valueChanges.subscribe(function (value) {
            _this2.logEvent('ASC3', 'Run name value changed to ' + value);
          });
          this.hooks.forEach(function (hook) {
            _this2.hotSettings[hook] = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              _this2.logHook(hook, args);
            };
          });
        }
      }, {
        key: "logHook",
        value: function logHook(event, data) {
          this.logEvent('ASC6', '[' + event + ']' + data);
        }
      }, {
        key: "logEvent",
        value: function logEvent(id, event) {
          this.logger.log(id, event).subscribe();
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files, value) {
          var _this3 = this;

          this.ngxCsvParser.parse(files[0], {
            header: false,
            delimiter: ','
          }).pipe().subscribe(function (result) {
            _this3.csvRecords = result;

            _this3.hotRegisterer.getInstance(_this3.tableID).loadData(_this3.csvRecords);

            _this3.logEvent("ASC4", "Classification file loaded");
          }, function (error) {
            console.log('Error', error);
          });
          value = "";
        }
      }, {
        key: "runAlgorithm",
        value: function runAlgorithm() {
          this.submitted = true;

          if (this.form.invalid) {
            console.log("invalid form");
            return;
          }

          this.algorithmEmitter.emit({
            "labelsCol": this.f.labelsCol.value,
            "testData": this.hotRegisterer.getInstance(this.tableID).getData(),
            "runName": this.f.runName.value
          });
        }
      }, {
        key: "exportCSV",
        value: function exportCSV(event) {
          var exportPlugin1 = this.hotRegisterer.getInstance(this.tableID).getPlugin('exportFile');
          exportPlugin1.downloadFile('csv', {
            bom: false,
            columnDelimiter: ',',
            columnHeaders: true,
            rowHeaders: true,
            exportHiddenColumns: true,
            exportHiddenRows: true,
            fileExtension: 'csv',
            filename: this.title + '_test_[YYYY]-[MM]-[DD]',
            mimeType: 'text/csv',
            rowDelimiter: '\r\n'
          });
          this.logEvent("ASC5", "Classification data downloaded");
        }
      }]);

      return ClassificationComponent;
    }();

    ClassificationComponent.ɵfac = function ClassificationComponent_Factory(t) {
      return new (t || ClassificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__["NgxCsvParser"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]));
    };

    ClassificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClassificationComponent,
      selectors: [["app-classification"]],
      inputs: {
        title: "title"
      },
      outputs: {
        algorithmEmitter: "algorithmEmitter"
      },
      decls: 39,
      vars: 10,
      consts: [[1, "card-body"], [1, "row"], [1, "col"], [1, "card-title"], [1, "col", 2, "text-align", "right"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "auto", 1, "btn", "btn-dark", 2, "border-radius", "50%", "padding", "0px", "width", "25px", "height", "25px", 3, "outsideClick", "onShown", "onHidden"], [3, "formGroup"], ["for", "labelsCol"], ["type", "number", "min", "-1", "placeholder", "0", "formControlName", "labelsCol", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "exampleInputEmail1"], ["type", "text", "formControlName", "runName", 1, "form-control", 3, "placeholder"], ["for", "exampleFormControlFile1"], [2, "color", "red"], ["type", "file", "accept", ".csv", 1, "form-control-file", 3, "change"], [1, "hot"], [3, "settings", "hotId"], ["id", "search_field", "type", "search", "placeholder", "Search", 3, "click"], [1, "container", 2, "display", "flex", "padding", "20px 60px", "justify-content", "center", "flex-direction", "column", "max-width", "400px"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function ClassificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onShown", function ClassificationComponent_Template_button_onShown_6_listener() {
            return ctx.logEvent("ASC1", "Algorithm Section Classification help opened");
          })("onHidden", function ClassificationComponent_Template_button_onHidden_6_listener() {
            return ctx.logEvent("ASC1", "Algorithm Section Classification help closed");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Labels Column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClassificationComponent_div_14_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name of run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Test Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enter data from file (Optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Test Data should not have a headers row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClassificationComponent_Template_input_change_30_listener($event) {
            return ctx.handleFileInput($event.target.files, $event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hot-table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassificationComponent_Template_button_click_33_listener($event) {
            return ctx.exportCSV($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Export file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassificationComponent_Template_button_click_37_listener() {
            return ctx.runAlgorithm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Run Algorithm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("outsideClick", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.labelsCol.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.labelsCol.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "", ctx.title, "-1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.hotSettings)("hotId", ctx.tableID);
        }
      },
      directives: [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobUNvbXBvbmVudHMvY2xhc3NpZmljYXRpb24vY2xhc3NpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-classification',
          templateUrl: './classification.component.html',
          styleUrls: ['./classification.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__["NgxCsvParser"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _app_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        algorithmEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/algorithmComponents/db-scan/db-scan.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/algorithmComponents/db-scan/db-scan.component.ts ***!
    \******************************************************************/

  /*! exports provided: DbScanComponent */

  /***/
  function srcAppAlgorithmComponentsDbScanDbScanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DbScanComponent", function () {
      return DbScanComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DbScanComponent_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter the number of samples");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DbScanComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DbScanComponent_div_14_div_1_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.samples.errors.required);
      }
    }

    function DbScanComponent_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter the eps");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DbScanComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DbScanComponent_div_19_div_1_Template, 2, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.eps.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var DbScanComponent = /*#__PURE__*/function () {
      function DbScanComponent(formBuilder, logger) {
        _classCallCheck(this, DbScanComponent);

        this.formBuilder = formBuilder;
        this.logger = logger;
        this.submitted = false;
        this.algorithmEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(DbScanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.form = this.formBuilder.group({
            samples: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eps: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            runName: ['']
          });
          this.form.get('samples').valueChanges.subscribe(function (value) {
            _this4.logEvent('ASD2', 'Samples value changed to ' + value);
          });
          this.form.get('eps').valueChanges.subscribe(function (value) {
            _this4.logEvent('ASD3', 'EPS value changed to ' + value);
          });
          this.form.get('runName').valueChanges.subscribe(function (value) {
            _this4.logEvent('ASD4', 'Run Name value changed to ' + value);
          });
        }
      }, {
        key: "logEvent",
        value: function logEvent(id, event) {
          this.logger.log(id, event).subscribe();
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "runAlgorithm",
        value: function runAlgorithm() {
          this.submitted = true;

          if (this.form.invalid) {
            console.log("invalid form");
            return;
          }

          this.algorithmEmitter.emit({
            "samples": this.f.samples.value,
            "eps": this.f.eps.value,
            "runName": this.f.runName.value
          });
        }
      }]);

      return DbScanComponent;
    }();

    DbScanComponent.ɵfac = function DbScanComponent_Factory(t) {
      return new (t || DbScanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]));
    };

    DbScanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DbScanComponent,
      selectors: [["app-db-scan"]],
      outputs: {
        algorithmEmitter: "algorithmEmitter"
      },
      decls: 28,
      vars: 10,
      consts: [[1, "card-body"], [1, "row"], [1, "col"], [1, "card-title"], [1, "col", 2, "text-align", "right"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "auto", 1, "btn", "btn-dark", 2, "border-radius", "50%", "padding", "0px", "width", "25px", "height", "25px", 3, "outsideClick", "onShown", "onHidden"], [3, "formGroup"], ["for", "InputSamples"], ["type", "number", "min", "2", "placeholder", "2", "formControlName", "samples", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "InputEPS"], ["type", "number", "min", "0", "step", "0.5", "placeholder", "1", "formControlName", "eps", 1, "form-control", 3, "ngClass"], ["for", "InputNameofRun"], ["type", "text", "placeholder", "DBSCAN-1", "formControlName", "runName", 1, "form-control"], [1, "container", 2, "display", "flex", "padding", "20px 60px", "justify-content", "center", "flex-direction", "column", "max-width", "400px"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function DbScanComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DBSCAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onShown", function DbScanComponent_Template_button_onShown_6_listener() {
            return ctx.logEvent("ASD1", "Algorithm Section DBScan help opened");
          })("onHidden", function DbScanComponent_Template_button_onHidden_6_listener() {
            return ctx.logEvent("ASD1", "Algorithm Section DBScan help closed");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Number of Samples");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DbScanComponent_div_14_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "EPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DbScanComponent_div_19_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name of run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DbScanComponent_Template_button_click_26_listener() {
            return ctx.runAlgorithm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Run Algorithm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("outsideClick", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.submitted && ctx.f.samples.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.samples.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.eps.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.eps.errors);
        }
      },
      directives: [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobUNvbXBvbmVudHMvZGItc2Nhbi9kYi1zY2FuLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbScanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-db-scan',
          templateUrl: './db-scan.component.html',
          styleUrls: ['./db-scan.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]
        }];
      }, {
        algorithmEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/algorithmComponents/k-means/k-means.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/algorithmComponents/k-means/k-means.component.ts ***!
    \******************************************************************/

  /*! exports provided: KMeansComponent */

  /***/
  function srcAppAlgorithmComponentsKMeansKMeansComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KMeansComponent", function () {
      return KMeansComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_services_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function KMeansComponent_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter the number of clusters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function KMeansComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KMeansComponent_div_14_div_1_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.clusters.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var KMeansComponent = /*#__PURE__*/function () {
      function KMeansComponent(formBuilder, logger) {
        _classCallCheck(this, KMeansComponent);

        this.formBuilder = formBuilder;
        this.logger = logger;
        this.submitted = false;
        this.algorithmEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(KMeansComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.form = this.formBuilder.group({
            clusters: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            runName: ['']
          });
          this.form.get('clusters').valueChanges.subscribe(function (value) {
            _this5.logEvent('ASK2', 'Clusters value changed to ' + value);
          });
          this.form.get('runName').valueChanges.subscribe(function (value) {
            _this5.logEvent('ASK3', 'Run name value changed to ' + value);
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "logEvent",
        value: function logEvent(id, event) {
          this.logger.log(id, event).subscribe();
        }
      }, {
        key: "runAlgorithm",
        value: function runAlgorithm() {
          this.submitted = true;

          if (this.form.invalid) {
            console.log("invalid form");
            return;
          }

          this.algorithmEmitter.emit({
            "clusters": this.f.clusters.value,
            "runName": this.f.runName.value
          });
        }
      }]);

      return KMeansComponent;
    }();

    KMeansComponent.ɵfac = function KMeansComponent_Factory(t) {
      return new (t || KMeansComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]));
    };

    KMeansComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KMeansComponent,
      selectors: [["app-k-means"]],
      outputs: {
        algorithmEmitter: "algorithmEmitter"
      },
      decls: 23,
      vars: 6,
      consts: [[1, "card-body"], [1, "row"], [1, "col"], [1, "card-title"], [1, "col", 2, "text-align", "right"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "auto", 1, "btn", "btn-dark", 2, "border-radius", "50%", "padding", "0px", "width", "25px", "height", "25px", 3, "outsideClick", "onShown", "onHidden"], [3, "formGroup"], ["for", "exampleInputEmail1"], ["type", "number", "min", "2", "placeholder", "2", "formControlName", "clusters", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Kmeans-1", "formControlName", "runName", 1, "form-control"], [1, "container", 2, "display", "flex", "padding", "20px 60px", "justify-content", "center", "flex-direction", "column", "max-width", "400px"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function KMeansComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "K-Means");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onShown", function KMeansComponent_Template_button_onShown_6_listener() {
            return ctx.logEvent("ASK1", "Algorithm Section K-means help opened");
          })("onHidden", function KMeansComponent_Template_button_onHidden_6_listener() {
            return ctx.logEvent("ASK1", "Algorithm Section K-means help closed");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Number of Clusters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, KMeansComponent_div_14_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name of run");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KMeansComponent_Template_button_click_21_listener() {
            return ctx.runAlgorithm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Run Algorithm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("outsideClick", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.submitted && ctx.f.clusters.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.clusters.errors);
        }
      },
      directives: [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobUNvbXBvbmVudHMvay1tZWFucy9rLW1lYW5zLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KMeansComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-k-means',
          templateUrl: './k-means.component.html',
          styleUrls: ['./k-means.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _app_services_log_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]
        }];
      }, {
        algorithmEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tutorial/tutorial.component */
    "./src/app/tutorial/tutorial.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./helpers/auth.guard */
    "./src/app/helpers/auth.guard.ts");
    /* harmony import */


    var _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./teacher-view/teacher-view.component */
    "./src/app/teacher-view/teacher-view.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]
    }, {
      path: 'teacher_view',
      component: _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_7__["TeacherViewComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      data: {
        teacher: true
      }
    }, {
      path: 'tutorials',
      component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_0__["TutorialComponent"]
    }, {
      path: '',
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"],
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Front-End';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @handsontable/angular */
    "./node_modules/@handsontable/angular/__ivy_ngcc__/fesm2015/handsontable-angular.js");
    /* harmony import */


    var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-csv-parser */
    "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _input_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./input/input.component */
    "./src/app/input/input.component.ts");
    /* harmony import */


    var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./helpers/jwt.interceptor */
    "./src/app/helpers/jwt.interceptor.ts");
    /* harmony import */


    var _algorithmComponents_k_means_k_means_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./algorithmComponents/k-means/k-means.component */
    "./src/app/algorithmComponents/k-means/k-means.component.ts");
    /* harmony import */


    var _algorithmComponents_db_scan_db_scan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./algorithmComponents/db-scan/db-scan.component */
    "./src/app/algorithmComponents/db-scan/db-scan.component.ts");
    /* harmony import */


    var _algorithmComponents_agglomerative_agglomerative_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./algorithmComponents/agglomerative/agglomerative.component */
    "./src/app/algorithmComponents/agglomerative/agglomerative.component.ts");
    /* harmony import */


    var _results_kmeans_results_kmeans_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./results/kmeans-results/kmeans-results.component */
    "./src/app/results/kmeans-results/kmeans-results.component.ts");
    /* harmony import */


    var _results_dbscan_results_dbscan_results_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./results/dbscan-results/dbscan-results.component */
    "./src/app/results/dbscan-results/dbscan-results.component.ts");
    /* harmony import */


    var _results_agglomerative_results_agglomerative_results_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./results/agglomerative-results/agglomerative-results.component */
    "./src/app/results/agglomerative-results/agglomerative-results.component.ts");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _algorithmComponents_classification_classification_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./algorithmComponents/classification/classification.component */
    "./src/app/algorithmComponents/classification/classification.component.ts");
    /* harmony import */


    var _results_classification_results_classification_results_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./results/classification-results/classification-results.component */
    "./src/app/results/classification-results/classification-results.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./teacher-view/teacher-view.component */
    "./src/app/teacher-view/teacher-view.component.ts");
    /* harmony import */


    var _teacher_view_all_students_activity_all_students_activity_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./teacher-view/all-students-activity/all-students-activity.component */
    "./src/app/teacher-view/all-students-activity/all-students-activity.component.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var _teacher_view_activity_by_course_activity_by_course_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./teacher-view/activity-by-course/activity-by-course.component */
    "./src/app/teacher-view/activity-by-course/activity-by-course.component.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./tutorial/tutorial.component */
    "./src/app/tutorial/tutorial.component.ts"); // npm install jquery --save
    // npm install datatables.net --save
    // npm install datatables.net-dt --save
    // npm install angular-datatables --save
    // npm install @types/jquery --save-dev
    // npm install @types/datatables.net --save-dev


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__["ModalModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_21__["BsDropdownModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__["PopoverModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_26__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__["NgxCsvParserModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_29__["DataTablesModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_31__["NgSelectModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__["PopoverModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_13__["InputComponent"], _algorithmComponents_k_means_k_means_component__WEBPACK_IMPORTED_MODULE_15__["KMeansComponent"], _algorithmComponents_db_scan_db_scan_component__WEBPACK_IMPORTED_MODULE_16__["DbScanComponent"], _algorithmComponents_agglomerative_agglomerative_component__WEBPACK_IMPORTED_MODULE_17__["AgglomerativeComponent"], _results_kmeans_results_kmeans_results_component__WEBPACK_IMPORTED_MODULE_18__["KmeansResultsComponent"], _results_dbscan_results_dbscan_results_component__WEBPACK_IMPORTED_MODULE_19__["DbscanResultsComponent"], _results_agglomerative_results_agglomerative_results_component__WEBPACK_IMPORTED_MODULE_20__["AgglomerativeResultsComponent"], _algorithmComponents_classification_classification_component__WEBPACK_IMPORTED_MODULE_24__["ClassificationComponent"], _results_classification_results_classification_results_component__WEBPACK_IMPORTED_MODULE_25__["ClassificationResultsComponent"], _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_27__["TeacherViewComponent"], _teacher_view_all_students_activity_all_students_activity_component__WEBPACK_IMPORTED_MODULE_28__["AllStudentsActivityComponent"], _teacher_view_activity_by_course_activity_by_course_component__WEBPACK_IMPORTED_MODULE_30__["ActivityByCourseComponent"], _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_33__["TutorialComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__["ModalModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_21__["BsDropdownModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__["PopoverModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_26__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__["NgxCsvParserModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_29__["DataTablesModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_31__["NgSelectModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__["PopoverModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_13__["InputComponent"], _algorithmComponents_k_means_k_means_component__WEBPACK_IMPORTED_MODULE_15__["KMeansComponent"], _algorithmComponents_db_scan_db_scan_component__WEBPACK_IMPORTED_MODULE_16__["DbScanComponent"], _algorithmComponents_agglomerative_agglomerative_component__WEBPACK_IMPORTED_MODULE_17__["AgglomerativeComponent"], _results_kmeans_results_kmeans_results_component__WEBPACK_IMPORTED_MODULE_18__["KmeansResultsComponent"], _results_dbscan_results_dbscan_results_component__WEBPACK_IMPORTED_MODULE_19__["DbscanResultsComponent"], _results_agglomerative_results_agglomerative_results_component__WEBPACK_IMPORTED_MODULE_20__["AgglomerativeResultsComponent"], _algorithmComponents_classification_classification_component__WEBPACK_IMPORTED_MODULE_24__["ClassificationComponent"], _results_classification_results_classification_results_component__WEBPACK_IMPORTED_MODULE_25__["ClassificationResultsComponent"], _teacher_view_teacher_view_component__WEBPACK_IMPORTED_MODULE_27__["TeacherViewComponent"], _teacher_view_all_students_activity_all_students_activity_component__WEBPACK_IMPORTED_MODULE_28__["AllStudentsActivityComponent"], _teacher_view_activity_by_course_activity_by_course_component__WEBPACK_IMPORTED_MODULE_30__["ActivityByCourseComponent"], _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_33__["TutorialComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__["ModalModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_21__["BsDropdownModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__["PopoverModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_26__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__["NgxCsvParserModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_29__["DataTablesModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_31__["NgSelectModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_32__["PopoverModule"].forRoot()],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/helpers/auth.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/helpers/auth.guard.ts ***!
    \***************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppHelpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/services */
    "./src/app/services/index.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser) {
            if (route.data.teacher && !currentUser.is_teacher) {
              this.router.navigate(['/']);
              return false;
            } // logged in so return true


            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/helpers/jwt.interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/helpers/jwt.interceptor.ts ***!
    \********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppHelpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/services */
    "./src/app/services/index.ts");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var currentUser = this.authenticationService.currentUserValue;
          var isLoggedIn = currentUser && currentUser.token;
          var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);

          if (isLoggedIn && isApiUrl) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
      return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/input/input.component.ts":
  /*!******************************************!*\
    !*** ./src/app/input/input.component.ts ***!
    \******************************************/

  /*! exports provided: InputComponent */

  /***/
  function srcAppInputInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return InputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _handsontable_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @handsontable/angular */
    "./node_modules/@handsontable/angular/__ivy_ngcc__/fesm2015/handsontable-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-csv-parser */
    "./node_modules/ngx-csv-parser/__ivy_ngcc__/fesm2015/ngx-csv-parser.js");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");

    var InputComponent = /*#__PURE__*/function () {
      function InputComponent(ngxCsvParser, logger) {
        _classCallCheck(this, InputComponent);

        this.ngxCsvParser = ngxCsvParser;
        this.logger = logger;
        this.hotRegisterer = new _handsontable_angular__WEBPACK_IMPORTED_MODULE_1__["HotTableRegisterer"]();
        this.hooks = ['afterBeginEditing', 'afterChange', 'afterContextMenuShow', 'afterContextMenuHide', 'afterCopy', 'afterCreateCol', 'afterCreateRow', 'afterCut', 'afterPaste', 'afterRemoveCol', 'afterRemoveRow', 'afterSelection', 'afterUndo'];
        this.hotSettings = {
          startRows: 50,
          startCols: 50,
          colHeaders: function colHeaders(index) {
            return 'Attribute ' + index;
          },
          rowHeaders: function rowHeaders(index) {
            return 'Object ' + index;
          },
          rowHeaderWidth: 100,
          contextMenu: true,
          width: '100%',
          height: 650,
          licenseKey: 'non-commercial-and-evaluation'
        };
        this.header = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true);
        this.inputID = 'input-table';
        this.csvRecords = [];
      }

      _createClass(InputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.header.valueChanges.subscribe(function (value) {
            _this6.logEvent('IS6', 'Header checkbox changed to ' + value);
          });
          this.hooks.forEach(function (hook) {
            _this6.hotSettings[hook] = function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              _this6.logHook(hook, args);
            };
          });
        }
      }, {
        key: "logHook",
        value: function logHook(event, data) {
          this.logEvent('IS8', '[' + event + ']' + data);
        }
      }, {
        key: "logEvent",
        value: function logEvent(id, event) {
          this.logger.log(id, event).subscribe();
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files, value) {
          var _this7 = this;

          this.ngxCsvParser.parse(files[0], {
            header: false,
            delimiter: ','
          }).pipe().subscribe(function (result) {
            _this7.csvRecords = result;

            _this7.hotRegisterer.getInstance(_this7.inputID).loadData(_this7.csvRecords);

            _this7.logEvent("IS5", "Input file loaded");
          }, function (error) {
            console.log('Error', error);
          });
          value = "";
        }
      }, {
        key: "exportCSV",
        value: function exportCSV(event) {
          var exportPlugin1 = this.hotRegisterer.getInstance(this.inputID).getPlugin('exportFile');
          exportPlugin1.downloadFile('csv', {
            bom: false,
            columnDelimiter: ',',
            columnHeaders: false,
            rowHeaders: false,
            exportHiddenColumns: true,
            exportHiddenRows: true,
            fileExtension: 'csv',
            filename: 'input-file_[YYYY]-[MM]-[DD]',
            mimeType: 'text/csv',
            rowDelimiter: '\r\n'
          });
          this.logEvent("IS7", "Input data downloaded");
        }
      }]);

      return InputComponent;
    }();

    InputComponent.ɵfac = function InputComponent_Factory(t) {
      return new (t || InputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__["NgxCsvParser"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]));
    };

    InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputComponent,
      selectors: [["app-input"]],
      decls: 21,
      vars: 3,
      consts: [[1, "card-body"], [1, "form-group"], [1, "align-items-center", "row"], [1, "col"], ["for", "exampleFormControlFile1"], ["type", "button", "popover", "Please use CSV only. Data content must be numeric. Header can be textual.", "popoverTitle", "Upload Data", "triggers", "mouseenter:mouseleave", "title", "", "placement", "right", 1, "btn", "btn-dark", 2, "border-radius", "50%", "padding", "0px", "width", "25px", "height", "25px", 3, "onShown", "onHidden"], [1, "col", 2, "text-align", "right"], ["type", "file", "accept", ".csv", 1, "form-control-file", 3, "change"], [1, "form-check", 2, "float", "right"], ["type", "checkbox", "id", "defaultCheck1", 1, "form-check-input", 3, "formControl"], ["for", "defaultCheck1", 1, "form-check-label"], ["type", "button", "popover", "Check the box if your dataset has column or feature or attribute names. Uncheck if there is no column or feature or attribute name.", "triggers", "mouseenter:mouseleave", "title", "", "placement", "auto", 1, "btn", "btn-dark", 2, "border-radius", "50%", "padding", "0px", "width", "25px", "height", "25px", 3, "onShown", "onHidden"], [1, "hot"], [3, "settings", "hotId"], ["id", "search_field", "type", "search", "placeholder", "Search", 3, "click"]],
      template: function InputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter data from file (Optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onShown", function InputComponent_Template_button_onShown_7_listener() {
            return ctx.logEvent("IS3", "Input Section upload data help opened");
          })("onHidden", function InputComponent_Template_button_onHidden_7_listener() {
            return ctx.logEvent("IS3", "Input Section upload data help closed");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InputComponent_Template_input_change_10_listener($event) {
            return ctx.handleFileInput($event.target.files, $event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Dataset has header? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onShown", function InputComponent_Template_button_onShown_15_listener() {
            return ctx.logEvent("IS4", "Input Section header help opened");
          })("onHidden", function InputComponent_Template_button_onHidden_15_listener() {
            return ctx.logEvent("IS4", "Input Section header data help closed");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hot-table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputComponent_Template_button_click_19_listener($event) {
            return ctx.exportCSV($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Export file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.hotSettings)("hotId", ctx.inputID);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _handsontable_angular__WEBPACK_IMPORTED_MODULE_1__["HotTableComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-input',
          templateUrl: './input.component.html',
          styleUrls: ['./input.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__["NgxCsvParser"]
        }, {
          type: _services_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _app_services_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["regModal"];

    function LoginComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_0_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
      }
    }

    function LoginComponent_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_10_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
      }
    }

    function LoginComponent_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_14_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "is-invalid": a0
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, route, router, authenticationService, logger, modalService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.logger = logger;
        this.modalService = modalService;
        this.submitted = false;
        this.current_time = new Date();

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          this.submitted = true;

          if (this.form.invalid) {
            return;
          }

          this.authenticationService.login(this.f.email.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            _this8.router.navigate([_this8.returnUrl]);

            _this8.logger.log("LG1", "user logged in").subscribe();
          }, function (error) {
            _this8.message = '';
            _this8.title = 'Login error';

            for (var key in error.error) {
              for (var message in error.error[key]) {
                _this8.message += error.error[key][message] + "\n";
              }
            }

            _this8.openModal(_this8.modal);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      decls: 21,
      vars: 10,
      consts: [["regModal", ""], [1, "text-center", "frmcontainer"], [1, "form-signin", 3, "formGroup", "ngSubmit"], ["src", "https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg", "alt", "", "width", "72", "height", "72", 1, "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block"], [3, "routerLink"], [1, "mt-5", "mb-3", "text-muted"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 2, "white-space", "pre-line"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_ng_template_0_Template, 8, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "No account? Register here!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "IDRProject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.submitted && ctx.f.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.submitted && ctx.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/register");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".frmcontainer[_ngcontent-%COMP%] {\n  height: 95.4%;\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbi9JRFJQcm9qZWN0L0Zyb250LUVuZC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFHQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUVBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNBRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNJRjs7QURGQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mcm1jb250YWluZXIge1xuICBoZWlnaHQ6IDk1LjQlO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG4iLCIuZnJtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA5NS40JTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1lbWFpbF0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _app_services_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
        }];
      }, {
        modal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['regModal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _input_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../input/input.component */
    "./src/app/input/input.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _services_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _algorithmComponents_k_means_k_means_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../algorithmComponents/k-means/k-means.component */
    "./src/app/algorithmComponents/k-means/k-means.component.ts");
    /* harmony import */


    var _algorithmComponents_db_scan_db_scan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../algorithmComponents/db-scan/db-scan.component */
    "./src/app/algorithmComponents/db-scan/db-scan.component.ts");
    /* harmony import */


    var _algorithmComponents_agglomerative_agglomerative_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../algorithmComponents/agglomerative/agglomerative.component */
    "./src/app/algorithmComponents/agglomerative/agglomerative.component.ts");
    /* harmony import */


    var _algorithmComponents_classification_classification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../algorithmComponents/classification/classification.component */
    "./src/app/algorithmComponents/classification/classification.component.ts");
    /* harmony import */


    var _results_kmeans_results_kmeans_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../results/kmeans-results/kmeans-results.component */
    "./src/app/results/kmeans-results/kmeans-results.component.ts");
    /* harmony import */


    var _results_dbscan_results_dbscan_results_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../results/dbscan-results/dbscan-results.component */
    "./src/app/results/dbscan-results/dbscan-results.component.ts");
    /* harmony import */


    var _results_agglomerative_results_agglomerative_results_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../results/agglomerative-results/agglomerative-results.component */
    "./src/app/results/agglomerative-results/agglomerative-results.component.ts");
    /* harmony import */


    var _results_classification_results_classification_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../results/classification-results/classification-results.component */
    "./src/app/results/classification-results/classification-results.component.ts");

    var _c0 = ["regModal"];

    function MainComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_template_3_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
      }
    }

    function MainComponent_ng_template_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Choose an algorithm");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Choose a machine learning algorithm from the menu. Please visit the links below to learn more about the algorithms.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Clustring ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "K-Means");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "DB-Scan");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Agglomerative");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Classification ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "K Nearest Neighbors");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Gaussian Naive Bayes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Support Vector Machine");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainComponent_ul_45_ul_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ul_45_ul_5_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r16.setAlgorithm("K-Means");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "K-Means");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ul_45_ul_5_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r18.setAlgorithm("DBSCAN");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "DBScan");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ul_45_ul_5_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r19.setAlgorithm("Agglomerative");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Agglomerative");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainComponent_ul_45_ul_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ul_45_ul_10_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r20.setAlgorithm("KNN");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "K-Nearest Neighbors");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ul_45_ul_10_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r22.setAlgorithm("NaiveBayes");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Gaussian Naive Bayes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ul_45_ul_10_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r23.setAlgorithm("SVM");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Support Vector Machine");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainComponent_ul_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onShown", function MainComponent_ul_45_Template_li_onShown_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.logEvent("AS4", "Clustering submenu opened");
        })("onHidden", function MainComponent_ul_45_Template_li_onHidden_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r26.logEvent("AS4", "Clustering submenu closed");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Clustering ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MainComponent_ul_45_ul_5_Template, 10, 0, "ul", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onShown", function MainComponent_ul_45_Template_li_onShown_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r27.logEvent("AS4", "Classification submenu opened");
        })("onHidden", function MainComponent_ul_45_Template_li_onHidden_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r28.logEvent("AS4", "Classification submenu closed");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Classification ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MainComponent_ul_45_ul_10_Template, 10, 0, "ul", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainComponent_app_k_means_47_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-k-means", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("algorithmEmitter", function MainComponent_app_k_means_47_Template_app_k_means_algorithmEmitter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r29.runAlgorithm($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainComponent_app_db_scan_48_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-db-scan", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("algorithmEmitter", function MainComponent_app_db_scan_48_Template_app_db_scan_algorithmEmitter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r31.runAlgorithm($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainComponent_app_agglomerative_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-agglomerative", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("algorithmEmitter", function MainComponent_app_agglomerative_49_Template_app_agglomerative_algorithmEmitter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r33.runAlgorithm($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MainComponent_app_classification_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-classification", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("algorithmEmitter", function MainComponent_app_classification_50_Template_app_classification_algorithmEmitter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r35.runAlgorithm($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "K-Nearest Neighbors");
      }
    }

    function MainComponent_app_classification_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-classification", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("algorithmEmitter", function MainComponent_app_classification_51_Template_app_classification_algorithmEmitter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r37.runAlgorithm($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Gaussian Naive Bayes");
      }
    }

    function MainComponent_app_classification_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-classification", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("algorithmEmitter", function MainComponent_app_classification_52_Template_app_classification_algorithmEmitter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r39.runAlgorithm($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Support Vector Machine");
      }
    }

    function MainComponent_tab_69_app_kmeans_results_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-kmeans-results", 59);
      }

      if (rf & 2) {
        var tabz_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", tabz_r41.contentData);
      }
    }

    function MainComponent_tab_69_app_dbscan_results_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-dbscan-results", 59);
      }

      if (rf & 2) {
        var tabz_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", tabz_r41.contentData);
      }
    }

    function MainComponent_tab_69_app_agglomerative_results_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-agglomerative-results", 59);
      }

      if (rf & 2) {
        var tabz_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", tabz_r41.contentData);
      }
    }

    function MainComponent_tab_69_app_classification_results_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-classification-results", 60);
      }

      if (rf & 2) {
        var tabz_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", tabz_r41.contentData)("title", "KNN");
      }
    }

    function MainComponent_tab_69_app_classification_results_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-classification-results", 60);
      }

      if (rf & 2) {
        var tabz_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", tabz_r41.contentData)("title", "NaiveBayes");
      }
    }

    function MainComponent_tab_69_app_classification_results_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-classification-results", 60);
      }

      if (rf & 2) {
        var tabz_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", tabz_r41.contentData)("title", "SVM");
      }
    }

    function MainComponent_tab_69_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tab", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectTab", function MainComponent_tab_69_Template_tab_selectTab_0_listener() {
          var tabz_r41 = ctx.$implicit;
          return tabz_r41.active = true;
        })("deselect", function MainComponent_tab_69_Template_tab_deselect_0_listener() {
          var tabz_r41 = ctx.$implicit;
          return tabz_r41.active = false;
        })("removed", function MainComponent_tab_69_Template_tab_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57);

          var tabz_r41 = ctx.$implicit;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r56.removeTabHandler(tabz_r41);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainComponent_tab_69_app_kmeans_results_2_Template, 1, 1, "app-kmeans-results", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MainComponent_tab_69_app_dbscan_results_3_Template, 1, 1, "app-dbscan-results", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MainComponent_tab_69_app_agglomerative_results_4_Template, 1, 1, "app-agglomerative-results", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MainComponent_tab_69_app_classification_results_5_Template, 1, 2, "app-classification-results", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MainComponent_tab_69_app_classification_results_6_Template, 1, 2, "app-classification-results", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MainComponent_tab_69_app_classification_results_7_Template, 1, 2, "app-classification-results", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tabz_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("heading", tabz_r41.id)("active", tabz_r41.active)("disabled", tabz_r41.disabled)("removable", true)("customClass", tabz_r41.customClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", tabz_r41.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "K-Means");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "DBSCAN");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Agglomerative");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "KNN");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "NaiveBayes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "SVM");
      }
    }

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent(algorithmsService, spinner, modalService, logger) {
        _classCallCheck(this, MainComponent);

        this.algorithmsService = algorithmsService;
        this.spinner = spinner;
        this.modalService = modalService;
        this.logger = logger;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedAlgorithm = "";
          this.tabCounter = 0;
          this.tabs = [];
          this.logEvent('M1', "Main page loaded");
        }
      }, {
        key: "setAlgorithm",
        value: function setAlgorithm(value) {
          this.selectedAlgorithm = value;
          this.logger.log('AS4', this.selectedAlgorithm + " Algorithm Selected").subscribe();
        }
      }, {
        key: "notNull",
        value: function notNull(value) {
          return value != null;
        }
      }, {
        key: "logEvent",
        value: function logEvent(id, event) {
          this.logger.log(id, event).subscribe();
        }
      }, {
        key: "runAlgorithm",
        value: function runAlgorithm(values) {
          var _this9 = this;

          var inputData = this.inputComponent.hotRegisterer.getInstance(this.inputComponent.inputID).getData();
          var header = this.inputComponent.header.value;
          this.logger.log('AS5', "Run algorithm clicked with " + this.selectedAlgorithm).subscribe();
          this.spinner.show();

          switch (this.selectedAlgorithm) {
            case "K-Means":
              {
                this.algorithmsService.kmeans(values.clusters, inputData, header).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
                  _this9.createTab(values.runName, true, data, _this9.selectedAlgorithm);

                  _this9.spinner.hide();
                }, function (error) {
                  _this9.displayError(error);
                });
                break;
              }

            case "DBSCAN":
              {
                this.algorithmsService.dbscan(values.eps, values.samples, inputData, header).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
                  _this9.createTab(values.runName, true, data, _this9.selectedAlgorithm);

                  _this9.spinner.hide();
                }, function (error) {
                  _this9.displayError(error);
                });
                break;
              }

            case "Agglomerative":
              {
                this.algorithmsService.agglomerative(values.clusters, inputData, header).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
                  _this9.createTab(values.runName, true, data, _this9.selectedAlgorithm);

                  _this9.spinner.hide();
                }, function (error) {
                  _this9.displayError(error);
                });
                break;
              }

            case "KNN":
              {
                this.algorithmsService.knn(values.labelsCol, 5, inputData, values.testData, header).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
                  _this9.createTab(values.runName, true, data, _this9.selectedAlgorithm);

                  _this9.spinner.hide();
                }, function (error) {
                  _this9.displayError(error);
                });
                break;
              }

            case "NaiveBayes":
              {
                this.algorithmsService.naivebayes(values.labelsCol, inputData, values.testData, header).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
                  _this9.createTab(values.runName, true, data, _this9.selectedAlgorithm);

                  _this9.spinner.hide();
                }, function (error) {
                  _this9.displayError(error);
                });
                break;
              }

            case "SVM":
              {
                this.algorithmsService.svm(values.labelsCol, inputData, values.testData, header).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
                  _this9.createTab(values.runName, true, data, _this9.selectedAlgorithm);

                  _this9.spinner.hide();
                }, function (error) {
                  _this9.displayError(error);
                });
                break;
              }
          }
        }
      }, {
        key: "displayError",
        value: function displayError(error) {
          this.spinner.hide();
          this.message = '';
          this.title = 'Data error';

          if (error.status == 413) {
            this.message = "File size bigger than the maximum 2MB limit. Please use a smaller file.";
          } else {
            for (var key in error.error) {
              for (var message in error.error[key]) {
                this.message += error.error[key][message] + "\n";
              }
            }
          }

          this.openModal(this.modal);
        }
      }, {
        key: "createTab",
        value: function createTab(id, active, contentData, type) {
          this.tabCounter++;

          if (id) {
            var newTab = {
              id: id,
              active: active,
              contentData: contentData,
              type: type
            };
          } else {
            id = type + " " + this.tabCounter;
            var newTab = {
              id: id,
              active: active,
              contentData: contentData,
              type: type
            };
          }

          this.tabs.forEach(function (value) {
            value.active = false;
          });
          this.tabs.push(newTab);
          this.logger.log('RS1', "New results tab created with name " + id).subscribe();
        }
      }, {
        key: "removeTabHandler",
        value: function removeTabHandler(tab) {
          this.tabs.splice(this.tabs.indexOf(tab), 1);
          this.logger.log('RS1', "Closed tab with name " + tab.id).subscribe();
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AlgorithmsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      viewQuery: function MainComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_input_input_component__WEBPACK_IMPORTED_MODULE_0__["InputComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputComponent = _t.first);
        }
      },
      decls: 70,
      vars: 12,
      consts: [["type", "ball-pulse"], [2, "font-size", "20px", "color", "white"], ["regModal", ""], [1, "container"], ["id", "accordionExample", 1, "accordion"], [1, "card"], ["id", "headingOne", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "container", "pb-4", "pt-4"], [1, "align-items-center", "row"], [1, "col"], [1, "border-secondary", "mb-0", "mt-0"], [1, "col-auto"], [1, "font-weight-bold", "mb-0", "text-uppercase"], ["type", "button", "popover", "Upload a file or write data. Data content must be numeric. Headers can be textual.", "popoverTitle", "Provide input", "triggers", "mouseenter:mouseleave", "title", "", "placement", "right", 1, "btn", "btn-dark", 2, "border-radius", "50%", "padding", "0px", "width", "25px", "height", "25px", 3, "onShown", "onHidden"], ["id", "collapseOne", "aria-labelledby", "headingOne", 1, "collapse", "show"], ["id", "headingTwo", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "container", "pb-4", "pt-4"], ["type", "button", "popover", "Choose an algorithm by exploring the drop-down menu.", "popoverTitle", "Select a Machine Learning Algorithm", "triggers", "mouseenter:mouseleave", "title", "", "placement", "right", 1, "btn", "btn-dark", 2, "border-radius", "50%", "padding", "0px", "width", "25px", "height", "25px", 3, "onShown", "onHidden"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", 1, "collapse"], [1, "card-body"], ["dropdown", "", "container", "body", 1, "btn-group", 3, "autoClose", "insideClick", "onShown", "onHidden"], ["id", "button-nested", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-nested", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "caret"], ["popTemplate", ""], ["type", "button", "title", "", "placement", "right", 1, "btn", "btn-dark", 2, "border-radius", "50%", "padding", "0px", "width", "25px", "height", "25px", 3, "popover", "outsideClick", "onShown", "onHidden"], ["id", "dropdown-nested", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-nested", 4, "dropdownMenu"], [1, "card", 3, "ngSwitch"], [3, "algorithmEmitter", 4, "ngSwitchCase"], [3, "title", "algorithmEmitter", 4, "ngSwitchCase"], ["id", "headingThree", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "container", "pb-4", "pt-4"], ["type", "button", "popover", "The results are provided here.", "popoverTitle", "Results Panel", "triggers", "mouseenter:mouseleave", "title", "", "placement", "right", 1, "btn", "btn-dark", 2, "border-radius", "50%", "padding", "0px", "width", "25px", "height", "25px"], ["id", "collapseThree", "aria-labelledby", "headingThree"], [3, "heading", "active", "disabled", "removable", "customClass", "selectTab", "deselect", "removed", 4, "ngFor", "ngForOf"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 2, "white-space", "pre-line"], [1, "popover-title", "popover-header", 2, "margin", "-.5rem -.75rem 0 -.75rem"], ["href", "https://computing4all.com/courses/introductory-data-science/lessons/k-means-clustering-algorithm/", "target", "_blank"], ["href", "https://iq.opengenus.org/dbscan-clustering-algorithm/", "target", "_blank"], ["href", "https://iq.opengenus.org/hierarchical-clustering/", "target", "_blank"], ["href", "https://iq.opengenus.org/k-nearest-neighbors-algorithm/", "target", "_blank"], ["href", "https://iq.opengenus.org/gaussian-naive-bayes/", "target", "_blank"], ["href", "https://iq.opengenus.org/understand-support-vector-machine-in-depth/", "target", "_blank"], ["id", "dropdown-nested", "role", "menu", "aria-labelledby", "button-nested", 1, "dropdown-menu"], ["role", "menuitem", "dropdown", "", "triggers", "mouseclick", "placement", "right", "container", "body", 3, "onShown", "onHidden"], ["dropdownToggle", "", 1, "dropdown-item", "dropdown-toggle"], ["class", "dropdown-menu", "role", "menu", 4, "dropdownMenu"], ["role", "menu", 1, "dropdown-menu"], ["role", "menuitem"], [1, "dropdown-item", 3, "click"], [3, "algorithmEmitter"], [3, "title", "algorithmEmitter"], [3, "heading", "active", "disabled", "removable", "customClass", "selectTab", "deselect", "removed"], [3, "ngSwitch"], [3, "data", 4, "ngSwitchCase"], [3, "data", "title", 4, "ngSwitchCase"], [3, "data"], [3, "data", "title"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Computing result...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MainComponent_ng_template_3_Template, 8, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Input Section ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onShown", function MainComponent_Template_button_onShown_16_listener() {
            return ctx.logEvent("IS2", "Input Section help opened");
          })("onHidden", function MainComponent_Template_button_onHidden_16_listener() {
            return ctx.logEvent("IS2", "Input Section help closed");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-input");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Algorithm Section ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onShown", function MainComponent_Template_button_onShown_31_listener() {
            return ctx.logEvent("AS2", "Algorithm Section help opened");
          })("onHidden", function MainComponent_Template_button_onHidden_31_listener() {
            return ctx.logEvent("AS2", "Algorithm Section help closed");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onShown", function MainComponent_Template_div_onShown_37_listener() {
            return ctx.logEvent("AS4", "Select Algorithm menu opened");
          })("onHidden", function MainComponent_Template_div_onHidden_37_listener() {
            return ctx.logEvent("AS4", "Select Algorithm menu closed");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Select Algorithm ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, MainComponent_ng_template_41_Template, 28, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onShown", function MainComponent_Template_button_onShown_43_listener() {
            return ctx.logEvent("AS3", "Select Algorithm menu help open");
          })("onHidden", function MainComponent_Template_button_onHidden_43_listener() {
            return ctx.logEvent("AS3", "Select Algorithm menu help closed");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, MainComponent_ul_45_Template, 11, 0, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, MainComponent_app_k_means_47_Template, 1, 0, "app-k-means", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, MainComponent_app_db_scan_48_Template, 1, 0, "app-db-scan", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, MainComponent_app_agglomerative_49_Template, 1, 0, "app-agglomerative", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, MainComponent_app_classification_50_Template, 1, 1, "app-classification", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, MainComponent_app_classification_51_Template, 1, 1, "app-classification", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, MainComponent_app_classification_52_Template, 1, 1, "app-classification", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Results Section ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, MainComponent_tab_69_Template, 8, 12, "tab", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoClose", true)("insideClick", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("popover", _r2)("outsideClick", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.selectedAlgorithm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "K-Means");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "DBSCAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Agglomerative");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "KNN");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "NaiveBayes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "SVM");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabs);
        }
      },
      directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_7__["PopoverDirective"], _input_input_component__WEBPACK_IMPORTED_MODULE_0__["InputComponent"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _algorithmComponents_k_means_k_means_component__WEBPACK_IMPORTED_MODULE_11__["KMeansComponent"], _algorithmComponents_db_scan_db_scan_component__WEBPACK_IMPORTED_MODULE_12__["DbScanComponent"], _algorithmComponents_agglomerative_agglomerative_component__WEBPACK_IMPORTED_MODULE_13__["AgglomerativeComponent"], _algorithmComponents_classification_classification_component__WEBPACK_IMPORTED_MODULE_14__["ClassificationComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabDirective"], _results_kmeans_results_kmeans_results_component__WEBPACK_IMPORTED_MODULE_15__["KmeansResultsComponent"], _results_dbscan_results_dbscan_results_component__WEBPACK_IMPORTED_MODULE_16__["DbscanResultsComponent"], _results_agglomerative_results_agglomerative_results_component__WEBPACK_IMPORTED_MODULE_17__["AgglomerativeResultsComponent"], _results_classification_results_classification_results_component__WEBPACK_IMPORTED_MODULE_18__["ClassificationResultsComponent"]],
      styles: [".card-body[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  max-width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbi9JRFJQcm9qZWN0L0Zyb250LUVuZC9zcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXgtd2lkdGg6IDk1JTtcbn1cbiIsIi5jYXJkLWJvZHkge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1heC13aWR0aDogOTUlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AlgorithmsService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
        }, {
          type: _services_log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"]
        }];
      }, {
        modal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['regModal']
        }],
        inputComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_input_input_component__WEBPACK_IMPORTED_MODULE_0__["InputComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/services/log.service */
    "./src/app/services/log.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarComponent_div_5_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_5_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.teacherView();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Teacher's Area");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tutorials");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_div_5_button_10_Template, 2, 0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_5_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "tutorials");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.is_teacher);
      }
    }

    function NavbarComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Register ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/register");
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router, authenticationService, logger) {
        var _this10 = this;

        _classCallCheck(this, NavbarComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.logger = logger;
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this10.currentUser = x;
        });
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.logger.log("LG2", "user logged out").subscribe();
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "teacherView",
        value: function teacherView() {
          this.router.navigate(['/teacher_view']);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 8,
      vars: 3,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["class", "collapse navbar-collapse", "id", "navbarNav", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "nav-item"], ["type", "button", "class", "btn btn-dark", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "navbar-nav"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "IDR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_div_5_Template, 13, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_ng_template_6_Template, 15, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser)("ngIfElse", _r1);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registration/registration.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/registration.component.ts ***!
    \********************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["regModal"];

    function RegistrationComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_ng_template_0_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.modalRef.hide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
      }
    }

    function RegistrationComponent_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "University is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_21_div_1_Template, 2, 0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.university.errors.required);
      }
    }

    function RegistrationComponent_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_25_div_1_Template, 2, 0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.FName.errors.required);
      }
    }

    function RegistrationComponent_div_29_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_29_div_1_Template, 2, 0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.LName.errors.required);
      }
    }

    function RegistrationComponent_div_33_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_33_div_1_Template, 2, 0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.email.errors.required);
      }
    }

    function RegistrationComponent_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_37_div_1_Template, 2, 0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.password.errors.required);
      }
    }

    function RegistrationComponent_div_41_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter the same passowrd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_div_41_div_1_Template, 2, 0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f.Vpassword.errors.required);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "is-invalid": a0
      };
    };

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(formBuilder, route, router, authenticationService, modalService) {
        _classCallCheck(this, RegistrationComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.modalService = modalService;
        this.submitted = false;

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            university: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            FName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            LName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Vpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = '/login';
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          // TODO: Use EventEmitter with form value
          this.submitted = true;

          if (this.form.invalid) {
            return;
          }

          this.authenticationService.register(this.f.university.value, this.f.FName.value, this.f.LName.value, this.f.email.value, this.f.password.value, this.f.Vpassword.value, this.f.course.value).subscribe(function (data) {
            _this11.title = 'Registration successful';
            _this11.message = 'Registration was successful! \n A verification email has been sent to your eamil address.';

            _this11.openModal(_this11.modal);

            _this11.router.navigate(['/login']);
          }, function (error) {
            _this11.message = '';
            _this11.title = 'Registration error';

            for (var key in error.error) {
              for (var message in error.error[key]) {
                _this11.message += error.error[key][message] + "\n";
              }
            }

            _this11.openModal(_this11.modal);
          });
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      viewQuery: function RegistrationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      decls: 46,
      vars: 28,
      consts: [["regModal", ""], [1, "text-center", "frmcontainer"], [1, "form-signin", 3, "formGroup", "ngSubmit"], ["src", "https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg", "alt", "", "width", "72", "height", "72", 1, "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], ["for", "inputUniversity", 1, "sr-only"], ["id", "inputUniversity", "required", "", "formControlName", "university", 1, "form-control", 3, "ngClass"], ["for", "inputCourse", 1, "sr-only"], ["id", "inputCourse", "required", "", "formControlName", "course", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "inputFName", 1, "sr-only"], ["type", "text", "id", "inputFName", "placeholder", "First Name", "required", "", "formControlName", "FName", 1, "form-control", 3, "ngClass"], ["for", "inputLName", 1, "sr-only"], ["type", "text", "id", "inputLName", "placeholder", "Last Name", "required", "", "formControlName", "LName", 1, "form-control", 3, "ngClass"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "required", "", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "required", "", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["for", "inputVPassword", 1, "sr-only"], ["type", "password", "id", "inputVPassword", "placeholder", "Verify Password", "required", "", "formControlName", "Vpassword", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block", 2, "margin-top", "10px"], [1, "mt-5", "mb-3", "text-muted"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 2, "white-space", "pre-line"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegistrationComponent_ng_template_0_Template, 8, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Arizona State University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SUNY Albany");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CEHC-200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "HSD-500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegistrationComponent_div_21_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegistrationComponent_div_25_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegistrationComponent_div_29_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RegistrationComponent_div_33_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegistrationComponent_div_37_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Verify Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RegistrationComponent_div_41_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "IDRProject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.submitted && ctx.f.university.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.submitted && ctx.f.course.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.university.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.submitted && ctx.f.FName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.FName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.submitted && ctx.f.LName.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.LName.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.submitted && ctx.f.email.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.submitted && ctx.f.password.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx.submitted && ctx.f.Vpassword.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Vpassword.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]],
      styles: [".frmcontainer[_ngcontent-%COMP%] {\n  height: 95.4%;\n  display: flex;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbi9JRFJQcm9qZWN0L0Zyb250LUVuZC9zcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBR0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSxtQkFBQTtFQUVBLHVCQUFBO0VBQ0EseUJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDREY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uZnJtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA5NS40JTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufVxuXG4iLCIuZnJtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA5NS40JTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICB6LWluZGV4OiAyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }];
      }, {
        modal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['regModal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/results/agglomerative-results/agglomerative-results.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/results/agglomerative-results/agglomerative-results.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AgglomerativeResultsComponent */

  /***/
  function srcAppResultsAgglomerativeResultsAgglomerativeResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgglomerativeResultsComponent", function () {
      return AgglomerativeResultsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @handsontable/angular */
    "./node_modules/@handsontable/angular/__ivy_ngcc__/fesm2015/handsontable-angular.js");
    /* harmony import */


    var _app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/services/log.service */
    "./src/app/services/log.service.ts");

    var AgglomerativeResultsComponent = /*#__PURE__*/function () {
      function AgglomerativeResultsComponent(logger) {
        _classCallCheck(this, AgglomerativeResultsComponent);

        this.logger = logger;
        this.hotRegisterer = new _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableRegisterer"]();
        this.hooks = ['afterBeginEditing', 'afterChange', 'afterContextMenuShow', 'afterContextMenuHide', 'afterCopy', 'afterCreateCol', 'afterCreateRow', 'afterCut', 'afterPaste', 'afterRemoveCol', 'afterRemoveRow', 'afterSelection', 'afterUndo'];
        this.hotSettings = {
          colHeaders: function colHeaders(index) {
            if (index == 0) {
              return 'Labels';
            }

            return 'Attribute ' + String(Number(index) - 1);
          },
          rowHeaders: function rowHeaders(index) {
            return 'Object ' + index;
          },
          contextMenu: true,
          rowHeaderWidth: 75,
          width: '100%',
          height: '100%',
          licenseKey: 'non-commercial-and-evaluation'
        };
        this.resultID = 'result-table';
        this.score = 0.0;
        this.plotLink = "";
      }

      _createClass(AgglomerativeResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.score = this.data["silhouette_score"];
          this.plotLink = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/api/") + this.data["plt_url"];
          this.tableData = this.data["input_output"];
          this.hooks.forEach(function (hook) {
            _this12.hotSettings[hook] = function () {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              _this12.logHook(hook, args);
            };
          });
        }
      }, {
        key: "logHook",
        value: function logHook(event, data) {
          this.logEvent('RSA1', '[' + event + ']' + data);
        }
      }, {
        key: "logEvent",
        value: function logEvent(id, event) {
          this.logger.log(id, event).subscribe();
        }
      }, {
        key: "exportCSV",
        value: function exportCSV(event) {
          var exportPlugin1 = this.hotRegisterer.getInstance(this.resultID).getPlugin('exportFile');
          exportPlugin1.downloadFile('csv', {
            bom: false,
            columnDelimiter: ',',
            columnHeaders: true,
            rowHeaders: true,
            exportHiddenColumns: true,
            exportHiddenRows: true,
            fileExtension: 'csv',
            filename: 'agglomerative_output_[YYYY]-[MM]-[DD]',
            mimeType: 'text/csv',
            rowDelimiter: '\r\n'
          });
          this.logEvent("RSA2", "Results Section Agglomerative output downloaded");
        }
      }]);

      return AgglomerativeResultsComponent;
    }();

    AgglomerativeResultsComponent.ɵfac = function AgglomerativeResultsComponent_Factory(t) {
      return new (t || AgglomerativeResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]));
    };

    AgglomerativeResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgglomerativeResultsComponent,
      selectors: [["app-agglomerative-results"]],
      inputs: {
        data: "data"
      },
      decls: 23,
      vars: 5,
      consts: [[1, "container", 2, "max-width", "80%"], [1, "row"], [1, "col-md-12", 2, "max-height", "700px", "min-height", "60px", "margin-bottom", "60px"], [1, "hot"], ["id", "search_field", "type", "search", "placeholder", "Search", 3, "click"], [3, "settings", "hotId", "data"], [1, "col-md-5"], [1, "table"], ["scope", "row"], [1, "col-md-7"], [3, "src"]],
      template: function AgglomerativeResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cluster labels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgglomerativeResultsComponent_Template_button_click_6_listener($event) {
            return ctx.exportCSV($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Export file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hot-table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Result Metrics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Silhouette Score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Results Graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.hotSettings)("hotId", ctx.resultID)("data", ctx.tableData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.plotLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvYWdnbG9tZXJhdGl2ZS1yZXN1bHRzL2FnZ2xvbWVyYXRpdmUtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgglomerativeResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-agglomerative-results',
          templateUrl: './agglomerative-results.component.html',
          styleUrls: ['./agglomerative-results.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/results/classification-results/classification-results.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/results/classification-results/classification-results.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ClassificationResultsComponent */

  /***/
  function srcAppResultsClassificationResultsClassificationResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassificationResultsComponent", function () {
      return ClassificationResultsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @handsontable/angular */
    "./node_modules/@handsontable/angular/__ivy_ngcc__/fesm2015/handsontable-angular.js");
    /* harmony import */


    var _app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/services/log.service */
    "./src/app/services/log.service.ts");

    var ClassificationResultsComponent = /*#__PURE__*/function () {
      function ClassificationResultsComponent(logger) {
        _classCallCheck(this, ClassificationResultsComponent);

        this.logger = logger;
        this.hotRegisterer = new _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableRegisterer"]();
        this.hooks = ['afterBeginEditing', 'afterChange', 'afterContextMenuShow', 'afterContextMenuHide', 'afterCopy', 'afterCreateCol', 'afterCreateRow', 'afterCut', 'afterPaste', 'afterRemoveCol', 'afterRemoveRow', 'afterSelection', 'afterUndo'];
        this.hotSettings = {
          colHeaders: function colHeaders(index) {
            if (index == 0) {
              return 'Labels';
            }

            return 'Attribute ' + String(Number(index) - 1);
          },
          rowHeaders: function rowHeaders(index) {
            return 'Object ' + index;
          },
          contextMenu: true,
          rowHeaderWidth: 100,
          width: '100%',
          height: '100%',
          licenseKey: 'non-commercial-and-evaluation'
        };
        this.resultID = 'result-table';
        this.plotLink = "";
      }

      _createClass(ClassificationResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.plotLink = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/api/") + this.data["plt_url"];
          this.tableData = this.data["test_output"];
          this.hooks.forEach(function (hook) {
            _this13.hotSettings[hook] = function () {
              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }

              _this13.logHook(hook, args);
            };
          });
        }
      }, {
        key: "logHook",
        value: function logHook(event, data) {
          this.logEvent('RSC1', '[' + event + ']' + data);
        }
      }, {
        key: "logEvent",
        value: function logEvent(id, event) {
          this.logger.log(id, event).subscribe();
        }
      }, {
        key: "exportCSV",
        value: function exportCSV(event) {
          var exportPlugin1 = this.hotRegisterer.getInstance(this.resultID).getPlugin('exportFile');
          exportPlugin1.downloadFile('csv', {
            bom: false,
            columnDelimiter: ',',
            columnHeaders: true,
            rowHeaders: true,
            exportHiddenColumns: true,
            exportHiddenRows: true,
            fileExtension: 'csv',
            filename: this.title + '_output_[YYYY]-[MM]-[DD]',
            mimeType: 'text/csv',
            rowDelimiter: '\r\n'
          });
          this.logEvent("RSC2", "Results Section Classification output downloaded");
        }
      }]);

      return ClassificationResultsComponent;
    }();

    ClassificationResultsComponent.ɵfac = function ClassificationResultsComponent_Factory(t) {
      return new (t || ClassificationResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]));
    };

    ClassificationResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClassificationResultsComponent,
      selectors: [["app-classification-results"]],
      inputs: {
        data: "data",
        title: "title"
      },
      decls: 13,
      vars: 4,
      consts: [[1, "container", 2, "max-width", "80%"], [1, "row"], [1, "col-md-12", 2, "max-height", "700px", "min-height", "60px", "margin-bottom", "60px"], [1, "hot"], ["id", "search_field", "type", "search", "placeholder", "Search", 3, "click"], [3, "settings", "hotId", "data"], [1, "col-md-7"], [3, "src"]],
      template: function ClassificationResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Predicted labels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClassificationResultsComponent_Template_button_click_6_listener($event) {
            return ctx.exportCSV($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Export file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hot-table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Results Graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.hotSettings)("hotId", ctx.resultID)("data", ctx.tableData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.plotLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvY2xhc3NpZmljYXRpb24tcmVzdWx0cy9jbGFzc2lmaWNhdGlvbi1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassificationResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-classification-results',
          templateUrl: './classification-results.component.html',
          styleUrls: ['./classification-results.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/results/dbscan-results/dbscan-results.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/results/dbscan-results/dbscan-results.component.ts ***!
    \********************************************************************/

  /*! exports provided: DbscanResultsComponent */

  /***/
  function srcAppResultsDbscanResultsDbscanResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DbscanResultsComponent", function () {
      return DbscanResultsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @handsontable/angular */
    "./node_modules/@handsontable/angular/__ivy_ngcc__/fesm2015/handsontable-angular.js");
    /* harmony import */


    var _app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/services/log.service */
    "./src/app/services/log.service.ts");

    var DbscanResultsComponent = /*#__PURE__*/function () {
      function DbscanResultsComponent(logger) {
        _classCallCheck(this, DbscanResultsComponent);

        this.logger = logger;
        this.hotRegisterer = new _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableRegisterer"]();
        this.hooks = ['afterBeginEditing', 'afterChange', 'afterContextMenuShow', 'afterContextMenuHide', 'afterCopy', 'afterCreateCol', 'afterCreateRow', 'afterCut', 'afterPaste', 'afterRemoveCol', 'afterRemoveRow', 'afterSelection', 'afterUndo'];
        this.hotSettings = {
          colHeaders: function colHeaders(index) {
            if (index == 0) {
              return 'Labels';
            }

            return 'Attribute ' + String(Number(index) - 1);
          },
          rowHeaders: function rowHeaders(index) {
            return 'Object ' + index;
          },
          contextMenu: true,
          rowHeaderWidth: 100,
          width: '100%',
          height: '100%',
          licenseKey: 'non-commercial-and-evaluation'
        };
        this.resultID = 'result-table';
        this.score = 0.0;
        this.plotLink = "";
      }

      _createClass(DbscanResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.score = this.data["silhouette_score"];
          this.plotLink = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/api/") + this.data["plt_url"];
          this.tableData = this.data["input_output"];
          this.hooks.forEach(function (hook) {
            _this14.hotSettings[hook] = function () {
              for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
              }

              _this14.logHook(hook, args);
            };
          });
        }
      }, {
        key: "logHook",
        value: function logHook(event, data) {
          this.logEvent('RSD1', '[' + event + ']' + data);
        }
      }, {
        key: "logEvent",
        value: function logEvent(id, event) {
          this.logger.log(id, event).subscribe();
        }
      }, {
        key: "exportCSV",
        value: function exportCSV(event) {
          var exportPlugin1 = this.hotRegisterer.getInstance(this.resultID).getPlugin('exportFile');
          exportPlugin1.downloadFile('csv', {
            bom: false,
            columnDelimiter: ',',
            columnHeaders: true,
            rowHeaders: true,
            exportHiddenColumns: true,
            exportHiddenRows: true,
            fileExtension: 'csv',
            filename: 'dbScan_output_[YYYY]-[MM]-[DD]',
            mimeType: 'text/csv',
            rowDelimiter: '\r\n'
          });
          this.logEvent("RSD2", "Results Section DBScan output downloaded");
        }
      }]);

      return DbscanResultsComponent;
    }();

    DbscanResultsComponent.ɵfac = function DbscanResultsComponent_Factory(t) {
      return new (t || DbscanResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]));
    };

    DbscanResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DbscanResultsComponent,
      selectors: [["app-dbscan-results"]],
      inputs: {
        data: "data"
      },
      decls: 23,
      vars: 5,
      consts: [[1, "container", 2, "max-width", "80%"], [1, "row"], [1, "col-md-12", 2, "max-height", "700px", "min-height", "60px", "margin-bottom", "60px"], [1, "hot"], ["id", "search_field", "type", "search", "placeholder", "Search", 3, "click"], [3, "settings", "hotId", "data"], [1, "col-md-5"], [1, "table"], ["scope", "row"], [1, "col-md-7"], [3, "src"]],
      template: function DbscanResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cluster labels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DbscanResultsComponent_Template_button_click_6_listener($event) {
            return ctx.exportCSV($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Export file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hot-table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Result Metrics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Silhouette Score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Results Graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.hotSettings)("hotId", ctx.resultID)("data", ctx.tableData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.plotLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvZGJzY2FuLXJlc3VsdHMvZGJzY2FuLXJlc3VsdHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbscanResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dbscan-results',
          templateUrl: './dbscan-results.component.html',
          styleUrls: ['./dbscan-results.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/results/kmeans-results/kmeans-results.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/results/kmeans-results/kmeans-results.component.ts ***!
    \********************************************************************/

  /*! exports provided: KmeansResultsComponent */

  /***/
  function srcAppResultsKmeansResultsKmeansResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KmeansResultsComponent", function () {
      return KmeansResultsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @handsontable/angular */
    "./node_modules/@handsontable/angular/__ivy_ngcc__/fesm2015/handsontable-angular.js");
    /* harmony import */


    var _app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/services/log.service */
    "./src/app/services/log.service.ts");

    var KmeansResultsComponent = /*#__PURE__*/function () {
      function KmeansResultsComponent(logger) {
        _classCallCheck(this, KmeansResultsComponent);

        this.logger = logger;
        this.hotRegisterer = new _handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableRegisterer"]();
        this.hooks = ['afterBeginEditing', 'afterChange', 'afterContextMenuShow', 'afterContextMenuHide', 'afterCopy', 'afterCreateCol', 'afterCreateRow', 'afterCut', 'afterPaste', 'afterRemoveCol', 'afterRemoveRow', 'afterSelection', 'afterUndo'];
        this.hotSettings = {
          colHeaders: function colHeaders(index) {
            if (index == 0) {
              return 'Labels';
            }

            return 'Attribute ' + String(Number(index) - 1);
          },
          rowHeaders: function rowHeaders(index) {
            return 'Object ' + index;
          },
          contextMenu: true,
          rowHeaderWidth: 75,
          width: '100%',
          height: '100%',
          licenseKey: 'non-commercial-and-evaluation'
        };
        this.resultID = 'result-table';
        this.ssd = 0.0;
        this.score = 0.0;
        this.plotLink = "";
      }

      _createClass(KmeansResultsComponent, [{
        key: "logHook",
        value: function logHook(event, data) {
          this.logEvent('RSK1', '[' + event + ']' + data);
        }
      }, {
        key: "logEvent",
        value: function logEvent(id, event) {
          this.logger.log(id, event).subscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.score = this.data["silhouette_score"];
          this.ssd = this.data["ssd"];
          this.plotLink = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/api/") + this.data["plt_url"];
          this.tableData = this.data["input_output"];
          this.hooks.forEach(function (hook) {
            _this15.hotSettings[hook] = function () {
              for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                args[_key6] = arguments[_key6];
              }

              _this15.logHook(hook, args);
            };
          });
        }
      }, {
        key: "exportCSV",
        value: function exportCSV(event) {
          var exportPlugin1 = this.hotRegisterer.getInstance(this.resultID).getPlugin('exportFile');
          exportPlugin1.downloadFile('csv', {
            bom: false,
            columnDelimiter: ',',
            columnHeaders: true,
            rowHeaders: true,
            exportHiddenColumns: true,
            exportHiddenRows: true,
            fileExtension: 'csv',
            filename: 'kmeans_output_[YYYY]-[MM]-[DD]',
            mimeType: 'text/csv',
            rowDelimiter: '\r\n'
          });
          this.logEvent("RSK2", "Results Section K-Means output downloaded");
        }
      }]);

      return KmeansResultsComponent;
    }();

    KmeansResultsComponent.ɵfac = function KmeansResultsComponent_Factory(t) {
      return new (t || KmeansResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]));
    };

    KmeansResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KmeansResultsComponent,
      selectors: [["app-kmeans-results"]],
      inputs: {
        data: "data"
      },
      decls: 28,
      vars: 6,
      consts: [[1, "container", 2, "max-width", "80%"], [1, "row"], [1, "col-md-12", 2, "max-height", "700px", "min-height", "60px", "margin-bottom", "60px"], [1, "hot"], ["id", "search_field", "type", "search", "placeholder", "Search", 3, "click"], [3, "settings", "hotId", "data"], [1, "col-md-5"], [1, "table"], ["scope", "row"], [1, "col-md-7"], [3, "src"]],
      template: function KmeansResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cluster labels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KmeansResultsComponent_Template_button_click_6_listener($event) {
            return ctx.exportCSV($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Export file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hot-table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Result Metrics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SSD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Silhouette Score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Results Graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.hotSettings)("hotId", ctx.resultID)("data", ctx.tableData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ssd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.plotLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_handsontable_angular__WEBPACK_IMPORTED_MODULE_2__["HotTableComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMva21lYW5zLXJlc3VsdHMva21lYW5zLXJlc3VsdHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KmeansResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kmeans-results',
          templateUrl: './kmeans-results.component.html',
          styleUrls: ['./kmeans-results.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/algorithms.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/algorithms.service.ts ***!
    \************************************************/

  /*! exports provided: AlgorithmsService */

  /***/
  function srcAppServicesAlgorithmsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgorithmsService", function () {
      return AlgorithmsService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AlgorithmsService = /*#__PURE__*/function () {
      function AlgorithmsService(http) {
        _classCallCheck(this, AlgorithmsService);

        this.http = http;
      }

      _createClass(AlgorithmsService, [{
        key: "kmeans",
        value: function kmeans(k, train, header) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/ml_models/kmeans/"), {
            k: k,
            train: train,
            header: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            //
            return result;
          }));
        }
      }, {
        key: "dbscan",
        value: function dbscan(eps, min_samples, train, header) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/ml_models/db_scan/"), {
            eps: eps,
            min_samples: min_samples,
            train: train,
            header: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            //
            return result;
          }));
        }
      }, {
        key: "agglomerative",
        value: function agglomerative(n, train, header) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/ml_models/agglomerative/"), {
            n: n,
            train: train,
            header: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            //
            return result;
          }));
        }
      }, {
        key: "knn",
        value: function knn(label_col, n_neighbors, train, test, header) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/ml_models/knn_classifier/"), {
            label_col: label_col,
            n_neighbors: n_neighbors,
            train: train,
            test: test,
            header: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            //
            return result;
          }));
        }
      }, {
        key: "naivebayes",
        value: function naivebayes(label_col, train, test, header) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/ml_models/gauss_nb/"), {
            label_col: label_col,
            train: train,
            test: test,
            header: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            //
            return result;
          }));
        }
      }, {
        key: "svm",
        value: function svm(label_col, train, test, header) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/ml_models/svm_classifier/"), {
            label_col: label_col,
            train: train,
            test: test,
            header: header
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            //
            return result;
          }));
        }
      }]);

      return AlgorithmsService;
    }();

    AlgorithmsService.ɵfac = function AlgorithmsService_Factory(t) {
      return new (t || AlgorithmsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AlgorithmsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AlgorithmsService,
      factory: AlgorithmsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlgorithmsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthService, [{
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this16 = this;

          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/user/custom/login/"), {
            email: email,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user.user));

            _this16.currentUserSubject.next(user.user);

            return user.user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "register",
        value: function register(university, first_name, last_name, email, password1, password2, course) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/user/custom/registration/"), {
            university: university,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password1: password1,
            password2: password2,
            course: course
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/index.ts":
  /*!***********************************!*\
    !*** ./src/app/services/index.ts ***!
    \***********************************/

  /*! exports provided: AuthService, AlgorithmsService */

  /***/
  function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"];
    });
    /* harmony import */


    var _algorithms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./algorithms.service */
    "./src/app/services/algorithms.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlgorithmsService", function () {
      return _algorithms_service__WEBPACK_IMPORTED_MODULE_1__["AlgorithmsService"];
    });
    /***/

  },

  /***/
  "./src/app/services/log.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/log.service.ts ***!
    \*****************************************/

  /*! exports provided: LogService */

  /***/
  function srcAppServicesLogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogService", function () {
      return LogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! . */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LogService = /*#__PURE__*/function () {
      function LogService(authenticationService, http) {
        _classCallCheck(this, LogService);

        this.authenticationService = authenticationService;
        this.http = http;
      }

      _createClass(LogService, [{
        key: "log",
        value: function log(activity_id, description) {
          var email = this.authenticationService.currentUserValue.email;
          var time = new Date();
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/user/logging/"), {
            email: email,
            activity_id: activity_id,
            time: time,
            description: description
          });
        }
      }]);

      return LogService;
    }();

    LogService.ɵfac = function LogService_Factory(t) {
      return new (t || LogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](___WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    LogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LogService,
      factory: LogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ___WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/students-activity.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/students-activity.service.ts ***!
    \*******************************************************/

  /*! exports provided: StudentsActivityService */

  /***/
  function srcAppServicesStudentsActivityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsActivityService", function () {
      return StudentsActivityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var StudentsActivityService = /*#__PURE__*/function () {
      function StudentsActivityService(httpClient) {
        _classCallCheck(this, StudentsActivityService);

        this.httpClient = httpClient;
        this.baseUrl = 'http://127.0.0.1:8000/activity/all_activities/';
        this.activities = null;
      }

      _createClass(StudentsActivityService, [{
        key: "getAllStudentActivity",
        value: function getAllStudentActivity() {
          this.activities = this.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/api/activity/all_activities/"));
          console.log(this.activities);
          return this.activities;
        }
      }]);

      return StudentsActivityService;
    }();

    StudentsActivityService.ɵfac = function StudentsActivityService_Factory(t) {
      return new (t || StudentsActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    StudentsActivityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentsActivityService,
      factory: StudentsActivityService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsActivityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/teacher-view/activity-by-course/activity-by-course.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/teacher-view/activity-by-course/activity-by-course.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ActivityByCourseComponent */

  /***/
  function srcAppTeacherViewActivityByCourseActivityByCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityByCourseComponent", function () {
      return ActivityByCourseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ActivityByCourseComponent_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.name);
      }
    }

    function ActivityByCourseComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stdActivity_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stdActivity_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", stdActivity_r3.user_first_name, " ", stdActivity_r3.user_last_name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stdActivity_r3.user_email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stdActivity_r3.user_course);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stdActivity_r3.ml_model);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("[", stdActivity_r3.n_columns, ", ", stdActivity_r3.n_rows, "]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stdActivity_r3.date_time);
      }
    }

    var ActivityByCourseComponent = /*#__PURE__*/function () {
      function ActivityByCourseComponent() {
        _classCallCheck(this, ActivityByCourseComponent);

        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.studentActivities = [];
        this.seletedCourseActivity = [];
        this.courseSelect = null;
        this.courses = [{
          id: 1,
          name: "CS-1000"
        }, {
          id: 2,
          name: "HSD-500"
        }, {
          id: 3,
          name: "CEHC-200"
        }];
      }

      _createClass(ActivityByCourseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            dom: 'Bfrtip',
            buttons: ['copy', 'csv', 'excel', 'print']
          };
          console.log("student activities", this.studentActivities);
        }
      }, {
        key: "onOptionsSelected",
        value: function onOptionsSelected(event) {
          var _this17 = this;

          var course = event.target.value;
          this.seletedCourseActivity = this.studentActivities.filter(function (act) {
            return act.user_course == course;
          });
          console.log(this.seletedCourseActivity);
          this.dtElement.dtInstance.then(function (dtInstance) {
            // Destroy the table first
            dtInstance.destroy(); // Call the dtTrigger to rerender again

            _this17.dtTrigger.next();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dtTrigger.next();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Do not forget to unsubscribe the event
          this.dtTrigger.unsubscribe();
        }
      }]);

      return ActivityByCourseComponent;
    }();

    ActivityByCourseComponent.ɵfac = function ActivityByCourseComponent_Factory(t) {
      return new (t || ActivityByCourseComponent)();
    };

    ActivityByCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActivityByCourseComponent,
      selectors: [["app-activity-by-course"]],
      viewQuery: function ActivityByCourseComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
        }
      },
      inputs: {
        studentActivities: "studentActivities"
      },
      decls: 28,
      vars: 5,
      consts: [[1, "course-view"], ["for", "course"], [1, "select-option", 3, "ngModel", "ngModelChange", "change"], ["class", "option", 3, "value", 4, "ngFor", "ngForOf"], [1, "table"], ["datatable", "", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "option", 3, "value"]],
      template: function ActivityByCourseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Activities by Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Course select: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivityByCourseComponent_Template_select_ngModelChange_6_listener($event) {
            return ctx.courseSelect = $event;
          })("change", function ActivityByCourseComponent_Template_select_change_6_listener($event) {
            return ctx.onOptionsSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ActivityByCourseComponent_option_7_Template, 2, 2, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ML Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Size of Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ActivityByCourseComponent_tr_27_Template, 15, 9, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.courseSelect);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seletedCourseActivity);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: [".table[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n\n.course-view[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbi9JRFJQcm9qZWN0L0Zyb250LUVuZC9zcmMvYXBwL3RlYWNoZXItdmlldy9hY3Rpdml0eS1ieS1jb3Vyc2UvYWN0aXZpdHktYnktY291cnNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyLXZpZXcvYWN0aXZpdHktYnktY291cnNlL2FjdGl2aXR5LWJ5LWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItdmlldy9hY3Rpdml0eS1ieS1jb3Vyc2UvYWN0aXZpdHktYnktY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG4uY291cnNlLXZpZXd7XG4gICAgcGFkZGluZzogNTBweDtcbn0iLCIudGFibGUge1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uY291cnNlLXZpZXcge1xuICBwYWRkaW5nOiA1MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityByCourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-activity-by-course',
          templateUrl: './activity-by-course.component.html',
          styleUrls: ['./activity-by-course.component.scss']
        }]
      }], function () {
        return [];
      }, {
        dtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], {
            "static": false
          }]
        }],
        studentActivities: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/teacher-view/all-students-activity/all-students-activity.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/teacher-view/all-students-activity/all-students-activity.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AllStudentsActivityComponent */

  /***/
  function srcAppTeacherViewAllStudentsActivityAllStudentsActivityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllStudentsActivityComponent", function () {
      return AllStudentsActivityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AllStudentsActivityComponent_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stdActivity_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stdActivity_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", stdActivity_r1.user_first_name, " ", stdActivity_r1.user_last_name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stdActivity_r1.user_email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stdActivity_r1.user_course);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stdActivity_r1.ml_model);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("[", stdActivity_r1.n_columns, ", ", stdActivity_r1.n_rows, "]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stdActivity_r1.date_time);
      }
    }

    var AllStudentsActivityComponent = /*#__PURE__*/function () {
      function AllStudentsActivityComponent() {
        _classCallCheck(this, AllStudentsActivityComponent);

        this.studentActivities = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(AllStudentsActivityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dtOptions = {
            // pagingType: 'full_numbers',
            pageLength: 10,
            lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
            processing: true,
            dom: 'Bfrtip',
            buttons: ['csv', 'excel', 'print']
          };
          console.log(this.studentActivities);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dtTrigger.next();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Do not forget to unsubscribe the event
          this.dtTrigger.unsubscribe();
        }
      }]);

      return AllStudentsActivityComponent;
    }();

    AllStudentsActivityComponent.ɵfac = function AllStudentsActivityComponent_Factory(t) {
      return new (t || AllStudentsActivityComponent)();
    };

    AllStudentsActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllStudentsActivityComponent,
      selectors: [["app-all-students-activity"]],
      viewQuery: function AllStudentsActivityComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
        }
      },
      inputs: {
        studentActivities: "studentActivities"
      },
      decls: 22,
      vars: 3,
      consts: [[1, "table"], ["datatable", "", 1, "row-border", "hover", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"]],
      template: function AllStudentsActivityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Students Activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ML Model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Size of Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AllStudentsActivityComponent_tr_21_Template, 15, 9, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.studentActivities);
        }
      },
      directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".table[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbi9JRFJQcm9qZWN0L0Zyb250LUVuZC9zcmMvYXBwL3RlYWNoZXItdmlldy9hbGwtc3R1ZGVudHMtYWN0aXZpdHkvYWxsLXN0dWRlbnRzLWFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyLXZpZXcvYWxsLXN0dWRlbnRzLWFjdGl2aXR5L2FsbC1zdHVkZW50cy1hY3Rpdml0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItdmlldy9hbGwtc3R1ZGVudHMtYWN0aXZpdHkvYWxsLXN0dWRlbnRzLWFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xuICAgIHBhZGRpbmc6IDUwcHg7XG59XG4iLCIudGFibGUge1xuICBwYWRkaW5nOiA1MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllStudentsActivityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-students-activity',
          templateUrl: './all-students-activity.component.html',
          styleUrls: ['./all-students-activity.component.scss']
        }]
      }], function () {
        return [];
      }, {
        dtElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], {
            "static": false
          }]
        }],
        studentActivities: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/teacher-view/teacher-view.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/teacher-view/teacher-view.component.ts ***!
    \********************************************************/

  /*! exports provided: TeacherViewComponent */

  /***/
  function srcAppTeacherViewTeacherViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherViewComponent", function () {
      return TeacherViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_students_activity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/students-activity.service */
    "./src/app/services/students-activity.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _all_students_activity_all_students_activity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./all-students-activity/all-students-activity.component */
    "./src/app/teacher-view/all-students-activity/all-students-activity.component.ts");
    /* harmony import */


    var _activity_by_course_activity_by_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./activity-by-course/activity-by-course.component */
    "./src/app/teacher-view/activity-by-course/activity-by-course.component.ts");

    function TeacherViewComponent_app_all_students_activity_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-all-students-activity", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("studentActivities", ctx_r0.studentActivities);
      }
    }

    function TeacherViewComponent_app_activity_by_course_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-activity-by-course", 3);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("studentActivities", ctx_r1.studentActivities);
      }
    }

    var TeacherViewComponent = /*#__PURE__*/function () {
      function TeacherViewComponent(studentsActivityService) {
        _classCallCheck(this, TeacherViewComponent);

        this.studentsActivityService = studentsActivityService;
        this.studentActivities = [];
        this.allActivitySelected = false;
        this.activityByCourseSelected = false;
      }

      _createClass(TeacherViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.studentsActivityService.getAllStudentActivity().subscribe(function (data) {
            _this18.studentActivities = data;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "allStudentActivities",
        value: function allStudentActivities() {
          this.allActivitySelected = true;
          this.activityByCourseSelected = false;
        }
      }, {
        key: "activityByCourse",
        value: function activityByCourse() {
          this.allActivitySelected = false;
          this.activityByCourseSelected = true;
        }
      }]);

      return TeacherViewComponent;
    }();

    TeacherViewComponent.ɵfac = function TeacherViewComponent_Factory(t) {
      return new (t || TeacherViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_students_activity_service__WEBPACK_IMPORTED_MODULE_1__["StudentsActivityService"]));
    };

    TeacherViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeacherViewComponent,
      selectors: [["app-teacher-view"]],
      decls: 10,
      vars: 2,
      consts: [[1, "container"], [3, "click"], [3, "studentActivities", 4, "ngIf"], [3, "studentActivities"]],
      template: function TeacherViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Teacher's Area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherViewComponent_Template_button_click_3_listener() {
            return ctx.allStudentActivities();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All Student Activities ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherViewComponent_Template_button_click_5_listener() {
            return ctx.activityByCourse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Activities by course ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeacherViewComponent_app_all_students_activity_8_Template, 1, 1, "app-all-students-activity", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeacherViewComponent_app_activity_by_course_9_Template, 1, 1, "app-activity-by-course", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allActivitySelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activityByCourseSelected);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _all_students_activity_all_students_activity_component__WEBPACK_IMPORTED_MODULE_3__["AllStudentsActivityComponent"], _activity_by_course_activity_by_course_component__WEBPACK_IMPORTED_MODULE_4__["ActivityByCourseComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  max-width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbi9JRFJQcm9qZWN0L0Zyb250LUVuZC9zcmMvYXBwL3RlYWNoZXItdmlldy90ZWFjaGVyLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RlYWNoZXItdmlldy90ZWFjaGVyLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGVyLXZpZXcvdGVhY2hlci12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1heC13aWR0aDogOTUlO1xuICB9IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXgtd2lkdGg6IDk1JTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-teacher-view',
          templateUrl: './teacher-view.component.html',
          styleUrls: ['./teacher-view.component.scss']
        }]
      }], function () {
        return [{
          type: _services_students_activity_service__WEBPACK_IMPORTED_MODULE_1__["StudentsActivityService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tutorial/tutorial.component.ts":
  /*!************************************************!*\
    !*** ./src/app/tutorial/tutorial.component.ts ***!
    \************************************************/

  /*! exports provided: TutorialComponent */

  /***/
  function srcAppTutorialTutorialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialComponent", function () {
      return TutorialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TutorialComponent = /*#__PURE__*/function () {
      function TutorialComponent() {
        _classCallCheck(this, TutorialComponent);
      }

      _createClass(TutorialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TutorialComponent;
    }();

    TutorialComponent.ɵfac = function TutorialComponent_Factory(t) {
      return new (t || TutorialComponent)();
    };

    TutorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TutorialComponent,
      selectors: [["app-tutorial"]],
      decls: 73,
      vars: 0,
      consts: [["id", "msb", 1, "msb"], [1, "side-menu-container"], [1, "nav", "flex-column"], ["href", "#", 1, "nav-link", "active"], ["id", "dropdown", 1, "panel", "panel-default"], ["data-toggle", "collapse", "href", "#clustering", 1, "nav-link", "dropdown-toggle"], ["id", "clustering", 1, "panel-collapse", "collapse"], [1, "panel-body"], [1, "nav", "navbar-nav"], ["href", "#"], ["data-toggle", "collapse", "href", "#classification", 1, "nav-link", "dropdown-toggle"], ["id", "classification", 1, "panel-collapse", "collapse"], ["href", "#", 1, "nav-link"], [1, "mcw"], [1, "cv"], [1, "inbox"], [1, "inbox-sb"], [1, "inbox-bx", "container-fluid"], [1, "row"], [1, "col-md-10"], ["id", "introduction"], ["id", "overview"], ["id", "examples"], [1, "col-md-2"], ["id", "scrollspy"], ["data-allow-hashes", "", 1, "nav", "flex-column", "nav-pills", "default-pills", "smooth-scroll"], [1, "nav-item"], [1, "nav-link"]],
      template: function TutorialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Clustering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Kmenas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DBScan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Aglomerative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Classification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "K-Nearest-Neighbors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Gaussian Naive Bayes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Support Vector Machines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Something else");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\nIntroduction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum ipsum vel nisi ultricies, ullamcorper congue nisl faucibus. Cras tempus, massa vel sagittis pharetra, tellus mi tempus nulla, sit amet porttitor mi mauris quis velit. Ut nec tempor libero, sit amet blandit nibh. Cras eget fringilla neque, in vulputate eros. Etiam vitae suscipit tellus. Aenean vehicula nibh a augue tincidunt, sit amet auctor odio volutpat. Vivamus rutrum nisi pretium tincidunt porta. Mauris non ligula non sapien dignissim ultrices at at sem.\nSed sit amet commodo nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ac convallis tellus, nec aliquet odio. Sed sed hendrerit diam, at facilisis dolor. Etiam porttitor sapien et odio scelerisque, non pharetra eros consequat. Nam ornare ex fermentum leo tempus, non accumsan enim luctus. Cras nibh sapien, consectetur eu ornare id, volutpat eget urna. Morbi porttitor quam ac felis lobortis maximus. Nam sit amet augue at odio tincidunt commodo lobortis vitae arcu. Maecenas ultrices consectetur massa a sagittis. Aenean sit amet laoreet odio. Nulla arcu est, tempor quis lacus sit amet, egestas molestie risus. Cras id venenatis ante, vitae ultrices tortor. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam pharetra, dui vitae efficitur ullamcorper, enim orci cursus ligula, ut hendrerit libero nisi id lacus. Suspendisse quis elit ac enim consectetur tristique eget eu nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam mauris vitae auctor maximus. Morbi et ante eget quam dapibus feugiat non id mauris. Vestibulum tristique semper sapien ut facilisis. Nullam pulvinar, metus et eleifend tristique, libero leo cursus ipsum, ut finibus libero elit ut arcu. Nunc pulvinar massa ac felis congue finibus. Nulla at metus elit. Morbi leo felis, eleifend vitae leo non, tristique bibendum lectus. Morbi eros velit, mattis ut urna at, pretium volutpat nisi. Nam porta et dolor at pellentesque. Suspendisse potenti. Aliquam erat volutpat. Aenean nisl ipsum, posuere a felis id, cursus condimentum felis.Fusce mattis ligula risus, sed ullamcorper velit tincidunt sed. Aliquam vulputate mi nec libero pellentesque facilisis sit amet ac leo. Praesent ut dignissim neque, vel ornare diam. In at semper tellus, vitae mattis odio. Pellentesque erat augue, maximus ac condimentum ullamcorper, sollicitudin ut odio. Nullam venenatis justo at mi ultricies, ut mollis nibh congue. Nam odio justo, pellentesque quis rutrum id, sollicitudin et nisi. Quisque quis aliquet quam, ac lacinia diam. Fusce quis tincidunt lorem, a ultricies est. Etiam ante nunc, dignissim sit amet porttitor vel, pretium et velit. Fusce varius leo in lacus scelerisque, at ullamcorper dui sagittis. Mauris eu leo nibh. Nam vitae sapien quis nisi condimentum maximus in in urna. Nam eget metus non nibh posuere pulvinar et et dolor. Morbi imperdiet mi non eleifend congue. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Examples");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\nVivamus dolor magna, auctor in dapibus ac, facilisis congue velit. Pellentesque ullamcorper nisl et dui dictum, ut pharetra leo tincidunt. Suspendisse augue nisi, tempus ac ultricies at, luctus at odio. Mauris efficitur vestibulum ante a scelerisque. Donec bibendum suscipit purus et tincidunt. Vivamus vitae velit id nunc elementum vulputate pellentesque vitae nibh. Praesent consectetur arcu ligula, eget porta sem semper a. Mauris leo eros, rutrum sed libero a, blandit maximus arcu. Nulla ornare, arcu ut volutpat hendrerit, sem sem posuere nibh, tempor vehicula quam nisl in purus. Fusce a sem at mi pharetra malesuada id vel erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vel euismod justo. Etiam ornare diam tempor tristique dictum. Cras iaculis magna sapien. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Introduction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Examples");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  background-color: #fff;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  letter-spacing: 0.01em;\n  color: #39464e;\n}\n\n.navbar-default[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  margin-left: 200px;\n}\n\n\n\n.msb[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: #F5F7F9;\n  position: fixed;\n  right: auto;\n  min-height: 100%;\n  overflow-y: auto;\n  white-space: nowrap;\n  height: 100%;\n  z-index: 1;\n  border-right: 1px solid #ddd;\n}\n\n.msb[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  border: none;\n  margin-left: 0;\n  background-color: inherit;\n}\n\n.msb[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #e7e7e7;\n  margin-bottom: 20px;\n  background: #fff;\n}\n\n.msb[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  border: 0 none;\n  box-shadow: none;\n  margin: 0;\n  background: inherit;\n}\n\n.msb[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.msb[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 15px;\n  color: #5f5f5f;\n}\n\n.msb[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%], .msb[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.msb[_ngcontent-%COMP%]   .nb[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-left: 10px;\n  margin-bottom: 30px;\n  overflow: hidden;\n}\n\nul.nv[_ngcontent-%COMP%], ul.ns[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n  list-style: none;\n}\n\n.nv[_ngcontent-%COMP%] {\n  \n}\n\n.nv[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n\n.nv[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\n.nv[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #444;\n  padding: 10px 25px;\n  display: block;\n  vertical-align: middle;\n}\n\n.nv[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 5px;\n  font-weight: 300;\n  display: inline-block;\n}\n\n.nv[_ngcontent-%COMP%]   .ns[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 50px;\n}\n\n\n\n.mcw[_ngcontent-%COMP%] {\n  margin-left: 200px;\n  position: relative;\n  min-height: 100%;\n  \n}\n\n\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.inbox[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.inbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .inbox[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.inbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.inbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 20px;\n}\n\n.msb[_ngcontent-%COMP%], .mnb[_ngcontent-%COMP%] {\n  -webkit-animation: slidein 300ms forwards;\n  animation: slidein 300ms forwards;\n  transform-style: preserve-3d;\n}\n\n.mcw[_ngcontent-%COMP%] {\n  -webkit-animation: bodyslidein 300ms forwards;\n  animation: bodyslidein 300ms forwards;\n  transform-style: preserve-3d;\n}\n\nbody.msb-x[_ngcontent-%COMP%]   .mcw[_ngcontent-%COMP%], body.msb-x[_ngcontent-%COMP%]   .mnb[_ngcontent-%COMP%] {\n  margin-left: 0;\n  -webkit-animation: bodyslideout 300ms forwards;\n  animation: bodyslideout 300ms forwards;\n  transform-style: preserve-3d;\n}\n\nbody.msb-x[_ngcontent-%COMP%]   .msb[_ngcontent-%COMP%] {\n  -webkit-animation: slideout 300ms forwards;\n  animation: slideout 300ms forwards;\n  transform-style: preserve-3d;\n}\n\n\n\n@-webkit-keyframes slidein {\n  0% {\n    left: -200px;\n  }\n  100% {\n    left: 0;\n  }\n}\n\n@keyframes slidein {\n  0% {\n    left: -200px;\n  }\n  100% {\n    left: 0;\n  }\n}\n\n@-webkit-keyframes slideout {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -200px;\n  }\n}\n\n@keyframes slideout {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: -200px;\n  }\n}\n\n@-webkit-keyframes bodyslidein {\n  0% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n\n@keyframes bodyslidein {\n  0% {\n    margin-left: 0;\n  }\n  100% {\n    margin-left: 200px;\n  }\n}\n\n@-webkit-keyframes bodyslideout {\n  0% {\n    margin-left: 200px;\n  }\n  100% {\n    margin-left: 0;\n  }\n}\n\n@keyframes bodyslideout {\n  0% {\n    margin-left: 200px;\n  }\n  100% {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbi9JRFJQcm9qZWN0L0Zyb250LUVuZC9zcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90dXRvcmlhbC90dXRvcmlhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQSxnQkFBQTs7QUFDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREFFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFFO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDQ047O0FEQ0k7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0NOOztBREFNO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUNFUjs7QUREUTtFQUNFLGlCQUFBO0FDR1Y7O0FERUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElBOztFQUVFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0E7RUF3QkUsY0FBQTtBQ3ZCRjs7QURBRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDRU47O0FEQUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNFTjs7QURBTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNFUjs7QURLTTtFQUNFLGtCQUFBO0FDSFI7O0FEWUEsdUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0FDVkY7O0FEZ0JBLFVBQUE7O0FBQ0E7OztFQUdDLHFCQUFBO0FDZEQ7O0FEa0JFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDZko7O0FEa0JFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNoQko7O0FEbUJJO0VBQ0UsZ0JBQUE7QUNqQk47O0FEa0JNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDaEJSOztBRHFCQTtFQUdJLHlDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtBQ2xCSjs7QURvQkE7RUFHSSw2Q0FBQTtFQUNBLHFDQUFBO0VBRUEsNEJBQUE7QUNqQko7O0FEcUJFO0VBQ0UsY0FBQTtFQUdBLDhDQUFBO0VBQ0Esc0NBQUE7RUFFQSw0QkFBQTtBQ2xCSjs7QURvQkU7RUFHRSwwQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7QUNsQko7O0FEc0JFLHVCQUFBOztBQVNBO0VBQ0U7SUFDRSxZQUFBO0VDbkJKO0VEcUJFO0lBQ0UsT0FBQTtFQ25CSjtBQUNGOztBRHFCRTtFQUNFO0lBQ0UsWUFBQTtFQ25CSjtFRHFCRTtJQUNFLE9BQUE7RUNuQko7QUFDRjs7QUQ2QkU7RUFDRTtJQUNFLE9BQUE7RUNuQko7RURxQkU7SUFDRSxZQUFBO0VDbkJKO0FBQ0Y7O0FEcUJFO0VBQ0U7SUFDRSxPQUFBO0VDbkJKO0VEcUJFO0lBQ0UsWUFBQTtFQ25CSjtBQUNGOztBRDhCRTtFQUNFO0lBQ0UsT0FBQTtFQ3BCSjtFRHNCRTtJQUNFLE9BQUE7RUNwQko7QUFDRjs7QURzQkU7RUFDRTtJQUNFLGNBQUE7RUNwQko7RURzQkU7SUFDRSxrQkFBQTtFQ3BCSjtBQUNGOztBRDhCRTtFQUNFO0lBQ0Usa0JBQUE7RUNwQko7RURzQkU7SUFDRSxjQUFBO0VDcEJKO0FBQ0Y7O0FEc0JFO0VBQ0U7SUFDRSxrQkFBQTtFQ3BCSjtFRHNCRTtJQUNFLGNBQUE7RUNwQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzM5NDY0ZTtcbn1cblxuLm5hdmJhci1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xufVxuXG4vKm1haW4gc2lkZSBiYXIqL1xuLm1zYiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjdGOTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuICAubmF2YmFyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuICAubmF2YmFyLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U3ZTc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG4gIC5uYXZiYXItbmF2IHtcbiAgICAucGFuZWwge1xuICAgICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICB9XG4gICAgbGkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGEge1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgLmdseXBoaWNvbiwgLmZhIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAubmIge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICB9XG59XG51bC5udixcbnVsLm5zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm52IHtcbiAgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB9XG4gICAgYSB7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgLmljIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKm5zOiBuYXYtc3ViKi9cbiAgLm5zIHtcbiAgICBsaSB7XG4gICAgICBhIHtcbiAgICAgICAgcGFkZGluZzogMTBweCA1MHB4O1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vKm1haW4gY29udGVudCB3cmFwcGVyKi9cbi5tY3cge1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwJTtcblxuICAvKmNvbnRlbnQgdmlldyovXG4gIC5jdiB7XG4gIH1cbn1cblxuXG4vKmdsb2JhbHMqL1xuYSxcbmE6Zm9jdXMsXG5hOmhvdmVyIHtcbiB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pbmJveCB7XG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cbiAgdWwsIGxpIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICB1bCB7XG4gICAgbGkge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm1zYiwgLm1uYiB7XG4gICAgLW1vei1hbmltYXRpb246IHNsaWRlaW4gMzAwbXMgZm9yd2FyZHM7XG4gICAgLW8tYW5pbWF0aW9uOiBzbGlkZWluIDMwMG1zIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZWluIDMwMG1zIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogc2xpZGVpbiAzMDBtcyBmb3J3YXJkcztcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5tY3cge1xuICAgIC1tb3otYW5pbWF0aW9uOiBib2R5c2xpZGVpbiAzMDBtcyBmb3J3YXJkcztcbiAgICAtby1hbmltYXRpb246IGJvZHlzbGlkZWluIDMwMG1zIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib2R5c2xpZGVpbiAzMDBtcyBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IGJvZHlzbGlkZWluIDMwMG1zIGZvcndhcmRzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuYm9keS5tc2IteCB7XG5cbiAgLm1jdywgLm1uYiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4tbW96LWFuaW1hdGlvbjogYm9keXNsaWRlb3V0IDMwMG1zIGZvcndhcmRzO1xuICAgIC1vLWFuaW1hdGlvbjogYm9keXNsaWRlb3V0IDMwMG1zIGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib2R5c2xpZGVvdXQgMzAwbXMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBib2R5c2xpZGVvdXQgMzAwbXMgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIH1cbiAgLm1zYiB7XG4gICAgLW1vei1hbmltYXRpb246IHNsaWRlb3V0IDMwMG1zIGZvcndhcmRzO1xuICAgIC1vLWFuaW1hdGlvbjogc2xpZGVvdXQgMzAwbXMgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlb3V0IDMwMG1zIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogc2xpZGVvdXQgMzAwbXMgZm9yd2FyZHM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIH1cbn1cblxuICAvKiBTbGlkZSBpbiBhbmltYXRpb24gKi9cbiAgQC1tb3ota2V5ZnJhbWVzIHNsaWRlaW4ge1xuICAgIDAlIHtcbiAgICAgIGxlZnQ6IC0yMDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgfVxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVpbiB7XG4gICAgMCUge1xuICAgICAgbGVmdDogLTIwMHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2xpZGVpbiB7XG4gICAgMCUge1xuICAgICAgbGVmdDogLTIwMHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICB9XG4gIEAtbW96LWtleWZyYW1lcyBzbGlkZW91dCB7XG4gICAgMCUge1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBsZWZ0OiAtMjAwcHg7XG4gICAgfVxuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZW91dCB7XG4gICAgMCUge1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBsZWZ0OiAtMjAwcHg7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2xpZGVvdXQge1xuICAgIDAlIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgbGVmdDogLTIwMHB4O1xuICAgIH1cbiAgfVxuXG4gIEAtbW96LWtleWZyYW1lcyBib2R5c2xpZGVpbiB7XG4gICAgMCUge1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgfVxuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyBib2R5c2xpZGVpbiB7XG4gICAgMCUge1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBsZWZ0OjBcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBib2R5c2xpZGVpbiB7XG4gICAgMCUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICAgIH1cbiAgfVxuICBALW1vei1rZXlmcmFtZXMgYm9keXNsaWRlb3V0IHtcbiAgICAwJSB7XG4gICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuICBALXdlYmtpdC1rZXlmcmFtZXMgYm9keXNsaWRlb3V0IHtcbiAgICAwJSB7XG4gICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgYm9keXNsaWRlb3V0IHtcbiAgICAwJSB7XG4gICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICB9XG4iLCJib2R5IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzk0NjRlO1xufVxuXG4ubmF2YmFyLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG59XG5cbi8qbWFpbiBzaWRlIGJhciovXG4ubXNiIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGN0Y5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG59XG4ubXNiIC5uYXZiYXIge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuLm1zYiAubmF2YmFyLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTdlNztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5tc2IgLm5hdmJhci1uYXYgLnBhbmVsIHtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cbi5tc2IgLm5hdmJhci1uYXYgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4ubXNiIC5uYXZiYXItbmF2IGxpIGEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogIzVmNWY1Zjtcbn1cbi5tc2IgLm5hdmJhci1uYXYgbGkgYSAuZ2x5cGhpY29uLCAubXNiIC5uYXZiYXItbmF2IGxpIGEgLmZhIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubXNiIC5uYiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudWwubnYsXG51bC5ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLm52IHtcbiAgLypuczogbmF2LXN1YiovXG59XG4ubnYgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm52IGxpOjpiZWZvcmUge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG4ubnYgbGkgYSB7XG4gIGNvbG9yOiAjNDQ0O1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm52IGxpIGEgLmljIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm52IC5ucyBsaSBhIHtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xufVxuXG4vKm1haW4gY29udGVudCB3cmFwcGVyKi9cbi5tY3cge1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgLypjb250ZW50IHZpZXcqL1xufVxuLypnbG9iYWxzKi9cbmEsXG5hOmZvY3VzLFxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmluYm94IC5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uaW5ib3ggdWwsIC5pbmJveCBsaSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5pbmJveCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uaW5ib3ggdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5tc2IsIC5tbmIge1xuICAtbW96LWFuaW1hdGlvbjogc2xpZGVpbiAzMDBtcyBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBzbGlkZWluIDMwMG1zIGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGVpbiAzMDBtcyBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBzbGlkZWluIDMwMG1zIGZvcndhcmRzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi5tY3cge1xuICAtbW96LWFuaW1hdGlvbjogYm9keXNsaWRlaW4gMzAwbXMgZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbjogYm9keXNsaWRlaW4gMzAwbXMgZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBib2R5c2xpZGVpbiAzMDBtcyBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBib2R5c2xpZGVpbiAzMDBtcyBmb3J3YXJkcztcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG5ib2R5Lm1zYi14IC5tY3csIGJvZHkubXNiLXggLm1uYiB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICAtbW96LWFuaW1hdGlvbjogYm9keXNsaWRlb3V0IDMwMG1zIGZvcndhcmRzO1xuICAtby1hbmltYXRpb246IGJvZHlzbGlkZW91dCAzMDBtcyBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IGJvZHlzbGlkZW91dCAzMDBtcyBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBib2R5c2xpZGVvdXQgMzAwbXMgZm9yd2FyZHM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbmJvZHkubXNiLXggLm1zYiB7XG4gIC1tb3otYW5pbWF0aW9uOiBzbGlkZW91dCAzMDBtcyBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uOiBzbGlkZW91dCAzMDBtcyBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlb3V0IDMwMG1zIGZvcndhcmRzO1xuICBhbmltYXRpb246IHNsaWRlb3V0IDMwMG1zIGZvcndhcmRzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi8qIFNsaWRlIGluIGFuaW1hdGlvbiAqL1xuQC1tb3ota2V5ZnJhbWVzIHNsaWRlaW4ge1xuICAwJSB7XG4gICAgbGVmdDogLTIwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZWluIHtcbiAgMCUge1xuICAgIGxlZnQ6IC0yMDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlaW4ge1xuICAwJSB7XG4gICAgbGVmdDogLTIwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBzbGlkZW91dCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IC0yMDBweDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlb3V0IHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTIwMHB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlb3V0IHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTIwMHB4O1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYm9keXNsaWRlaW4ge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBib2R5c2xpZGVpbiB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm9keXNsaWRlaW4ge1xuICAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYm9keXNsaWRlb3V0IHtcbiAgMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBib2R5c2xpZGVvdXQge1xuICAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJvZHlzbGlkZW91dCB7XG4gIDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TutorialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tutorial',
          templateUrl: './tutorial.component.html',
          styleUrls: ['./tutorial.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'https://easymlonline.com',
      localhostUrl: 'http://127.0.0.1:8000'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/sebastian/IDRProject/Front-End/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map