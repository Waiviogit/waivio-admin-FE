const withSass = require('@zeit/next-sass');
require('dotenv').config();
const withCSS = require('@zeit/next-css');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = withCSS(withSass({
        webpack: (config) => {
            config.module.rules.push(
                {
                    test: /\.test.js$/,
                    loader: 'ignore-loader',
                },
            );
            config.module.rules.push({
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]',
                    },
                },
            });
            config.plugins = [
                ...config.plugins,
                new FilterWarningsPlugin({
                    exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
                }),
            ];
            return config;
        },
    },
));
