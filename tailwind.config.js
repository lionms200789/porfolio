module.exports = {
    mode: 'jit',
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './public/**/*.json'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '18px',
                md: '36px',
                lg: '48px',
            },
            screens: {
                sm: '600px',
                md: '768px',
                lg: '996px',
                xl: '1024px',
                '2xl': '1140px',
              },
        },
        extend: {
            fontFamily: {
                sans: ["'Noto Sans TC', serif"]
            },
            height: {
                '85vh': '85vh',
                '90vh': '90vh',
                '95vh': '95vh',
                '100vh': '100vh'
            }
        },
    },
    plugins: [],
}
