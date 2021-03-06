/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 */
'use strict';

var _require = require("immutable"),
    OrderedSet = _require.OrderedSet;

var EMPTY_SET = OrderedSet();
/**
 * Convert to native JavaScript string lengths to determine ranges.
 */

function decodeInlineStyleRanges(text, ranges) {
  var styles = Array(text.length).fill(EMPTY_SET);

  if (ranges) {
    ranges.forEach(function (
    /*object*/
    range) {
      var cursor = range.offset;
      var end = cursor + range.length;

      while (cursor < end) {
        styles[cursor] = styles[cursor].add(range.style);
        cursor++;
      }
    });
  }

  return styles;
}

module.exports = decodeInlineStyleRanges;