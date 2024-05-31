/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			dropShadow: {
				custom: '0 4px 4px rgba(0, 0, 0, 0.5)',
			},
		},
	},
	plugins: [],
};
