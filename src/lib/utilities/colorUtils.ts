export type PaletteDetails = {
	[key: number | string]: string;
};

const CMY_HUES = [180, 300, 60];
const RGB_HUES = [360, 240, 120, 0];

function hexToHsv(hex: string): { h: number; s: number; v: number } {
	// Convert hex to RGB values
	const { r, g, b } = hexToRgb(hex);

	// Calculate HSV values
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	const v = max;
	const d = max - min;
	const s = max === 0 ? 0 : d / max;

	if (max !== min) {
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	return { h: Math.round(h * 360), s: Math.round(s * 100), v: Math.round(v * 100) };
}

function hsvToHex(h: number, s: number, v: number): string {
	s /= 100;
	v /= 100;
	const c = v * s;
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = v - c;
	let r = 0,
		g = 0,
		b = 0;

	if (h >= 0 && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (h >= 60 && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (h >= 120 && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (h >= 180 && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (h >= 240 && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else if (h >= 300 && h < 360) {
		r = c;
		g = 0;
		b = x;
	}

	return rgbToHex(Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255));
}

function hueShift(hues: Array<number>, hue: number, intensity: number) {
	const closestHue = hues.sort((a, b) => Math.abs(a - hue) - Math.abs(b - hue))[0],
		hueShift = closestHue - hue;
	return Math.round(intensity * hueShift * 0.5);
}

export function rgbToHex(r: number, g: number, b: number): string {
	const toHex = (c: number) => `0${c.toString(16)}`.slice(-2);
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function hexToRgb(hex: string) {
	// Remove the hash symbol if it exists
	hex = hex.replace('#', '');

	const r = parseInt(hex.substring(0, 2), 16) / 255;
	const g = parseInt(hex.substring(2, 4), 16) / 255;
	const b = parseInt(hex.substring(4, 6), 16) / 255;

	// Return the RGB values in the specified format
	return { r, g, b };
}

export function getTextColor(color: string): '#ffffff' | '#181818' {
	const rgbColor = hexToRgb(color);

	if (!rgbColor) {
		return '#181818';
	}

	const { r, g, b } = rgbColor;
	const luma = (0.2126 * r + 0.7152 * g + 0.0722 * b) * 100;

	console.log('luma', luma);

	return luma < 55 ? '#ffffff' : '#181818';
}

function lighten(hex: string, intensity: number): string {
	const color = hexToRgb(`#${hex}`);

	if (!color) {
		return '';
	}

	const { h, s, v } = hexToHsv(hex);
	const hue = h + hueShift(CMY_HUES, h, intensity);
	const saturation = s - Math.round(s * intensity);
	const value = v + Math.round((100 - v) * intensity);

	return hsvToHex(hue, saturation, value);
}

function darken(hex: string, intensity: number): string {
	const color = hexToRgb(hex);

	if (!color) {
		return '';
	}

	const inverseIntensity = 1 - intensity;
	const { h, s, v } = hexToHsv(hex);
	const hue = h + hueShift(RGB_HUES, h, inverseIntensity);
	const saturation = s + Math.round((100 - s) * inverseIntensity);
	const value = v - Math.round(v * inverseIntensity);

	return hsvToHex(hue, saturation, value);
}

export function generatePallet(baseColor: string): PaletteDetails {
	// eslint-disable-next-line prefer-const
	let colors: PaletteDetails = {
		500: `#${baseColor}`.replace('##', '#')
	};

	const intensityMap: {
		[key: number]: number;
	} = {
		50: 0.95,
		100: 0.9,
		200: 0.75,
		300: 0.6,
		400: 0.3,
		600: 0.9,
		700: 0.75,
		800: 0.6,
		900: 0.45,
		950: 0.29
	};

	[50, 100, 200, 300, 400].forEach((level) => {
		colors[level] = lighten(baseColor, intensityMap[level]);
	});

	[600, 700, 800, 900].forEach((level) => {
		colors[level] = darken(baseColor, intensityMap[level]);
	});

	return {
		DEFAULT: `#${baseColor}`.replace('##', '#'),
		light: lighten(baseColor, 0.6),
		dark: darken(baseColor, 0.75),
		content: getTextColor(baseColor),
		...colors
	};
}
