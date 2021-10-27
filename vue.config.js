module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/xCovn.github.io-vue-18n-starter/' : '/',
    runtimeCompiler: true,
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = {
                    img: 'src',
                    a: 'href',
                    image: 'xlink:href',
                    'b-avatar': 'src',
                    'b-img': 'src',
                    'b-img-lazy': ['src', 'blank-src'],
                    'b-card': 'img-src',
                    'b-card-img': 'src',
                    'b-card-img-lazy': ['src', 'blank-src'],
                    'b-carousel-slide': 'img-src',
                    'b-embed': 'src',
                }
                return options
            });
        config.module
            .rule('pdf')
            .test(/\.(pdf)(\?.*)?$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'assets/pdfs/[name].[hash:8].[ext]'
            });

        config.plugins.delete('prefetch')
        config.plugin('preload').tap((options) => {
            options[0].include = 'initial'
            return options
        })

    }
}
