/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif']
            },
            backgroundImage: {
                'background': 'url(\'/src/assets/images/background.PNG\')',
            },
        },
    },
    plugins: [],
}
