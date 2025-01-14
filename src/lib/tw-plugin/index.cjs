/* eslint-disable @typescript-eslint/no-require-imports */
// Reexport your entry components here
const plugin = require('tailwindcss/plugin');

const components = require('../../../dist/components.js');
// const utilities = require('../dist/utilities');

const TailwindUiKitPlugin = plugin(function ({ addComponents }) {
	// addUtilities(utilities);
	addComponents(components);
});

module.exports = TailwindUiKitPlugin;
