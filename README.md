# brei-handlebars-helpers

[![Version npm][version]](http://browsenpm.org/package/brei-handlebars-helpers)
[![Build Status](https://travis-ci.org/BarkleyREI/brei-handlebars-helpers.svg?branch=master)](https://travis-ci.org/BarkleyREI/brei-handlebars-helpers) 

[version]: http://img.shields.io/npm/v/brei-handlebars-helpers.svg?style=flat-square

The BREI custom handlebar helpers for our projects.

## Fractal vs. Assemble

This helper file is loaded into Fractal-powered and Assemble-powered projects.

The primary difference in functionality is that the Fractal functionality is preferred, and there is a fallback object for Assemble projects with default values.

The configuration object is loaded from Fractal and used to influence the behavior of multiple helpers. 

See line 7 in `helpers.js` for an example.

## Tests

The Mocha test (`test/test.js`) verifies that the Handlebar helpers can be loaded successfully into the Handlebars runtime, and does this by verifying the rendered output of a simple helper.

It currently does not verify that every helper works as intended beyond that one helper.
