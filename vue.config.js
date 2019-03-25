module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:1211/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
