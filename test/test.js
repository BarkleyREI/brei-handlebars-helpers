/*global describe, it, require, __dirname*/

'use strict';

const util = require('brei-util');
const u = require('util');

const root = __dirname + '/..';

let valid = [
	{
		'.github': [
			'CONTRIBUTING.md',
			'ISSUE_TEMPLATE.md',
			'PULL_REQUEST_TEMPLATE.md'
		]
	},
	'.gitignore',
	'.travis.yml',
	'README.md',
	'helpers.js',
	'package.json',
	{
		test: [
			'test.js'
		]
	},
	'updateScss.js'
];

describe('brei-assemble-helpers -- Verify file and folder structure', function () {

	it('Deep object comparison check', function () {

		let ttree = util.tree(root);

		let actual = util.ftree(ttree);

		let expected = util.filterObject(valid);

		console.log('\n------- actual --------\n');
		console.log(u.inspect(actual, false, null));

		console.log('\n------- expected --------\n');
		console.log(u.inspect(expected, false, null));

		util.assert(util.deep(expected, actual));

	});

});

