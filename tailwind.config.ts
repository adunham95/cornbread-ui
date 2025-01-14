import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				brand: {
					'50': '#f2f8f9',
					'100': '#deedef',
					'200': '#c1dae0',
					'300': '#96bfca',
					'400': '#649dad',
					'500': '#488192',
					'600': '#3e6b7c',
					'700': '#385866',
					'800': '#344b56',
					'900': '#2f414a',
					'950': '#1b2931',
					DEFAULT: '#649dad'
				},
				accent: {
					'50': '#f9f6f9',
					'100': '#f4eff3',
					'200': '#ebdfe9',
					'300': '#dcc5d6',
					'400': '#c19ab7',
					'500': '#b183a4',
					'600': '#9a6889',
					'700': '#825471',
					'800': '#6d475e',
					'900': '#5c3f51',
					'950': '#36212e',
					DEFAULT: '#c19ab7'
				},
				surface: {
					background: 'rgb(var(--background) / <alpha-value>)',
					DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
					'1': 'rgb(var(--surface-1) / <alpha-value>)',
					'2': 'rgb(var(--surface-2) / <alpha-value>)',
					'3': 'rgb(var(--surface-3) / <alpha-value>)',
					'4': 'rgb(var(--surface-4) / <alpha-value>)',
					'5': 'rgb(var(--surface-5) / <alpha-value>)',
					success: `rgb(var(--success-surface) / <alpha-value>)`,
					error: `rgb(var(--error-surface) / <alpha-value>)`,
					warning: `rgb(var(--warning-surface) / <alpha-value>)`,
					info: `rgb(var(--info-surface) / <alpha-value>)`
				},
				tc: {
					DEFAULT: 'rgb(var(--text-1) / <alpha-value>)',
					'1': 'rgb(var(--text-1) / <alpha-value>)',
					'2': 'rgb(var(--text-2) / <alpha-value>)',
					'3': 'rgb(var(--text-3) / <alpha-value>)',
					'4': 'rgb(var(--text-4) / <alpha-value>)',
					'5': 'rgb(var(--text-5) / <alpha-value>)',
					success: `rgb(var(--success) / <alpha-value>)`,
					error: `rgb(var(--error) / <alpha-value>)`,
					warning: `rgb(var(--warning) / <alpha-value>)`,
					info: `rgb(var(--info) / <alpha-value>)`
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

	plugins: [typography, forms, containerQueries]
} satisfies Config;
