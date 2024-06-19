const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', 
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				'purple-dark': {
					background: '#0D001A',
					foreground: '#ffffff',
					primary: '#DD62ED',
					focus: '#F182F6',
				},
				'purple-light': {
					background: '#ffffff',
					foreground: '#0D001A',
					primary: '#DD62ED',
					focus: '#DD62ED',
				},
			},
			borderRadius: {
				sm: '4px',
				md: '6px',
				lg: '8px',
			},
			borderWidth: {
				sm: '1px',
				md: '2px',
				lg: '3px',
			},
		},
	},
	plugins: [nextui()],
};
