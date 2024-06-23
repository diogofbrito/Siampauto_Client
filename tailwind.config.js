const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				green: {
					link: '#63d75c'
					
				},

				grey: {
					default: '#212121',
					title: '#a4a4a4',
					boxCard: '#333333',
					hover: '#545454',
				},
			},
		},
	},
	plugins: [nextui()],
};
