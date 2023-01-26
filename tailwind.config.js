/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['Manrope', 'sans-serif'],
			},
			colors: {
				lebowski: '#f9d08e',
			},
			backgroundImage: {
				dude: "url('/thedude.jpeg')",
			},
			border: {
				DEFAULT: '1px',
			},
		},
	},
	plugins: [],
}
