module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '24px',
                md: '48px',
                lg: '100px',
            },
        },
        extend: {
            fontFamily: {
                sans: ["'Noto Sans TC', serif"]
            },
            colors: {
                primary: '#487F78'
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
