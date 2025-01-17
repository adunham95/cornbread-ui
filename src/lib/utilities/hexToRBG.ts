export function hexToRgb(hex: string) {
	if (!hex.startsWith('#')) {
		return { r: 0, b: 0, g: 0 };
	}

	// Remove the hash symbol if it exists
	hex = hex.replace(/^#/, '');

	// Parse the hex values
	const bigint = parseInt(hex, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	// Return the RGB values in the specified format
	return { r, g, b };
}
