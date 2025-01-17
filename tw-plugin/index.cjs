/* eslint-disable @typescript-eslint/no-require-imports */
// Reexport your entry components here
const plugin = require('tailwindcss/plugin');

const components = require('./components.js');

const themeData = require('./theme.js');

const TailwindUiKitPlugin = plugin.withOptions(
	() => {
		return ({ addComponents }) => {
			addComponents(components);
		};
	},
	() => {
		return {
			// The theme's color palette can be extended with our generated colorPalette.
			theme: { extend: { colors: themeData } }
		};
	}
);

module.exports = TailwindUiKitPlugin;
