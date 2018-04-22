// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var JsCookie = require("js-cookie");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function setJson(prim, prim$1) {
  JsCookie.set(prim, prim$1);
  return /* () */0;
}

function makeConfig(prim, prim$1, _) {
  var tmp = { };
  if (prim) {
    tmp.expires = prim[0];
  }
  if (prim$1) {
    tmp.path = prim$1[0];
  }
  return tmp;
}

function remove(prim) {
  JsCookie.remove(prim);
  return /* () */0;
}

function setJsonConfig(prim, prim$1, prim$2) {
  JsCookie.set(prim, prim$1, prim$2);
  return /* () */0;
}

function setString(prim, prim$1) {
  JsCookie.set(prim, prim$1);
  return /* () */0;
}

function getAsString(prim) {
  return Js_primitive.null_undefined_to_opt(JsCookie.get(prim));
}

function getAsJson(prim) {
  return Js_primitive.null_undefined_to_opt(JsCookie.getJSON(prim));
}

exports.setJson = setJson;
exports.makeConfig = makeConfig;
exports.remove = remove;
exports.setJsonConfig = setJsonConfig;
exports.setString = setString;
exports.getAsString = getAsString;
exports.getAsJson = getAsJson;
/* js-cookie Not a pure module */