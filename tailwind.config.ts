import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

import TailwindUiKitPlugin from './tw-plugin/index.cjs';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				code: ['"Source Code Pro"', 'ui-monospace']
			},
			colors: {
				custom: {
					surface: 'rgb(var(--surface) / <alpha-value>)',
					surfaceBackground: 'rgb(var(--surface-background) / <alpha-value>)'
				},
				development: {
					'50': '#edffe6',
					'100': '#c4ffb2',
					'200': '#adff97',
					'300': '#7afb5b',
					'400': '#4ef12a',
					'500': '#2cd70b',
					'600': '#1dac04',
					'700': '#188308',
					'800': '#18670d',
					'900': '#175710',
					'950': '#053102',
					DEFAULT: '#C4FFB2'
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries, TailwindUiKitPlugin]
} satisfies Config;
