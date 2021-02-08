# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adammars/lotide`

**Require it:**

`const _ = require('@adammars/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns the head of an array (the first element as an array) 
* `tail(arr)`: returns the tail of an array (all elements of the array after the head/first element)
* `middle(arr)`: returns the middle indexed element of an array (two elements if the array has an even length)
* `assertEqual(actual, expected)`: returns a pass or fail assertion that two arguments are strictly equal (primitives only)
* `eqArrays(arr1, arr2)`: returns true if two arrays and their contents are strictly equal (even if the elements are nested arrays)
* `eqObjects(obj1, obj2)`: returns true if two objects and all key/value pairs are equal (even for object or array values)
* `assertArraysEqual(arr1, arr2)`: returns a pass or fail assertion that two argument arrays are equal (uses eqArrays)
* `assertObjectsEqual(obj1, obj2)`: returns a pass or fail assertion that two argument objects are equal (uses eqObjects)
* `countLetters(str)`: returns an object with a count of all unique letter characters in the provided string argument
* `countOnly(arr, obj)`: searches an array for specified elements based on the object argument, returns an object with counts
* `findKey(obj, callback)`: returns a specific key in an object specified by a callback function
* `findKeyByValue(obj, value)`: returns first key in an object whose value matches the given argument
* `flatten(arr)`: returns a non-nested array when given a nested (multidimensional) array 
* `letterPositions(str)`: returns an object with indices of each unique character in an argument sentence string
* `map(arr, callback)`: returns an array with each element of the argument array modified by the callback function argument 
* `takeUntil(arr, callback)`: from a given array the callback will add elements to the returning array until it returns a falsy value
* `without(arr1, arr2)`: returns a filtered array of first argument with only items not listed in the second argument array
