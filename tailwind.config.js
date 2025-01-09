/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                typing: {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                },
                blink: {
                    '50%': { borderColor: 'transparent' },
                },
            },
            animation: {
                typing: 'typing 2s steps(30, end), blink 0.5s step-end infinite',
            },
        },
    },
    plugins: [],
};
