/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: '320px', // For smartphones. I made it for desktop-first, not mobile-first...
            },
        },
    },
    plugins: [],
};
