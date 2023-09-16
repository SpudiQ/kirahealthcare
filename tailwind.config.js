module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
    ],
    theme: {
        theme: {
            screens: {
                sm: '520px',
                md: '768px',
                lg: '960px',
                xl: '1280px',
            },
            colors: {},
            fontFamily: {},
            extend: {}
        }
    },
    plugins: [],
}