import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontSize: {
			xs: '0.625rem',
			sm: '0.812rem',
			base: '1rem',
			lg: '1.25rem',
			xl: '1.562rem',
			'2xl': '1.938rem',
			'3xl': '2.438rem',
			'4xl': '3.062rem',
			'5xl': '3.812rem',
		},
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {
			screens: {
				// Custom screen sizes based on your requirements
				'sm': '375px', // Small devices (e.g., iPhone 6/7/8)
				'md': '768px', // Tablets and small laptops
				'lg': '1024px', // Desktops and laptops
				'xl': '1440px', // Larger desktops
				'2xl': '1920px', // Extra large screens (e.g., Full HD monitors)
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},

				// custom colors
				"c-primary": "#5BBA47",
				// "c-primary-2": "#418432",
				"c-secondary": "#ED1C24",
				"c-white": "#fff",
				"c-black": "#000",
				"c-text": "#212121",
				"c-contrast": "#9E9E9E",
				"c-footer-bg": "#EFF8ED",
				"c-border-stroke": "#D6D6D6",
				"c-bg": "#F6F6F6",
				"c-home-bg": "#ECF6F4",
				"c-disable": "#DBDBDB",
				"c-blue": "#29BFFF",
				"c-yellow": "#FDCA48"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'c-primary': 'Sriracha'
			},
			fontSize: {
				'xss': '10px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
