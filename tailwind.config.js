/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '4rem',
				lg: '6rem'
			}
		},
		extend: {}
	},
	plugins: []
};
