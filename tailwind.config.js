/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			black: '#000000',
			gray: '#313231',
			white: '#ffffff',
			accent: '#F67160',
			dull: '#BBBBBB',
			bgOne: '#F67160',
			bgTwo: '#84DC15',
			bgThree: '#F4CA5D',
		},
		extend: {
			keyframes: {
				move: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.2)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.8)',
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
				},
				scale: {
					'0%': {
						transform: 'scale(0.5)',
						'transform-origin': '100% 50%',
					},
					'100%': {
						transform: 'scale(1)',
						'transform-origin': '100% 50%',
					},
				},
			},
			animation: {
				move: 'move 10s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite',
				scale: 'scale 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
			},
		},
	},
	plugins: [],
};
