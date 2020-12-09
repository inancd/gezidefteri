// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontSize: {
            '7xl': ['5rem', {
                lineHeight: '1.5'
            }],
            '4xl': ['3rem', {
                lineHeight: '1.5'
            }]
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}