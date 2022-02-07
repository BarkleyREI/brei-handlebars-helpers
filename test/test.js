/*global describe, it, require*/

'use strict';

const assert = require('assert');

const Handlebars = require('handlebars');

describe('brei-handlebars-helpers -- Test (test/test.js)', function () {
	it('Helpers can be loaded successfully', function () {

		const helpers = require('../helpers.js');

		// console.log(helpers);

		for (const property in helpers) {
			if (helpers.hasOwnProperty(property)) {
				Handlebars.registerHelper(property, helpers[property]);
			}
		}

		let tester = Handlebars.compile('{{scriptPath val}}');

		assert.equal(tester({'val': 'foobar'}), '/js/foobar.js');
	});
});
