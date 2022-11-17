const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html' //告诉插件以我们的模板生成文件
    })],

    module: { //加载器配置
        rules: [{ //规则
            test: /\.css$/i,
            use: ["style-loader", "css-loader"], //满足使用 从右到左
        }, {
            test: /\.less$/i,
            use: [
                // compiles Less to CSS
                'style-loader',
                'css-loader',
                'less-loader',
            ],
        }, {
            test: /\.(jpg|png|gif|jpeg)$/,
            type: 'asset',
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            type: 'asset/resource', //所有字体图标文件到dist下
            generator: {
                filename: 'fonts/[name].[hash:6][ext][query]'
            }
        }, {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/, //不匹配这些文件。
            use: {
                loader: 'babel-loader', //处理js文件
                options: { //加载器
                    presets: ['@babel/preset-env'] //预设 降级规则，按照这的规则降级js语法。
                }
            }
        }],
    },
    devServer: {
        port: 0818 // 端口号
    }


};