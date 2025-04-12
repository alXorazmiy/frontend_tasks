/** @type {import ('tailwindcss').Config }  */


module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{ts,js}", 
        "./app.vue",
        "./assets/**/*.{js,ts,vue}"
    ],
    theme: {
        extend: {}
    },
    plugins: []
}