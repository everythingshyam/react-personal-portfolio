/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.jsx', './src/**/*.html', './src/**/*.css','./index.html'],
	theme: {
		extend: {
			colors: {
				accent: '#F0CD34',
				secondary: '#2C2A20',
				primaryC: '#DAD8CD',
				primaryB: '#F1EEE5',
				primaryA: '#F7F7F7',
			},
		},
	},
	plugins: [],
};
