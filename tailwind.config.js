module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors : {
                search : '#F5F5F7',
                homebtn : '#FC5C6C',
                pinkshadow : '1px 10px 19px -3px rgba(252,92,108,0.91)'

            },
            fontFamily : {
                sans : ['Nunito']
            },
            backgroundImage : {
                'tajmahal' : "url('~@/assets/tajmahal.png')",
                'toureiffel' : "url('~@/assets/tourEiffel.png')",
            },
            boxShadow : {
                
            }
        },
        
    
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
