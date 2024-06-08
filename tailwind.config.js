/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"roboto-slab": ['"Roboto Slab"', "serif"],
				roboto: ["Roboto", "sans-serif"],
			},
			borderRadius: {
				none: "0",
				sm: ".125rem",
				DEFAULT: ".5rem",
				lg: ".625rem",
				full: "9999px",
			},
		},
	},
	plugins: [],
};
