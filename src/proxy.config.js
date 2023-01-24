const PROXI_CONFIG = [
    {
        constext: [
            '/macros',
        ],
        target: 'https://script.google.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/" : ""
        }
    }
]

modules.exports = PROXI_CONFIG