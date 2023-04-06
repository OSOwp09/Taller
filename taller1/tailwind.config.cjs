/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html", 
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				"primary-color": '#fff',
        		"secondary-color": '#f9f9f9'
			}
		},
	},
	plugins: [],
};
