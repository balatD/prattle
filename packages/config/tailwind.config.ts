import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            milk: '#F4EEE0',
            dark: '#393646',
            night: '#4F4557',
            choco: '#6D5D6E',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
        }
    },
    plugins: [],
};

export default config
