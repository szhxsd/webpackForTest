var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项

        entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
        output: {
            path: __dirname + "/public", //打包后的文件存放的地方
            // path: __dirname + "/build", //新建一个build文件夹用来存放最终的输出文件
            filename: "bundle.js" //打包后输出文件的文件名
        },

        //在配置文件里添加JSON loader
        module: {
            loaders: [{
                test: /\.json$/,
                loader: "json"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel', //在webpack的module部分的loaders里进行配置即可

                //单独写到名为 ".babelrc" 的配置文件中
                // query: {
                //     presets: ['es2015', 'react']
                // }
            }, {
                test: /\.css$/,
                //loader: 'style!css' //添加对样式表的处理
                //loader: 'style!css?modules' //跟前面相比就在后面加上了?modules
                loader: 'style!css?modules!postcss' //新建一个postcss关键字

                //感叹号的作用在于使同一文件能够使用不同类型的loader
            }]
        },

        //申明依赖的插件
        postcss: [
            require('autoprefixer') //调用autoprefixer插件
        ],

        //插件
        // plugins: [
        //     //在这个数组中new一个就可以了
        //     new webpack.BannerPlugin("Copyright Flying Unicorns inc.")
        // ],
        plugins: [
            //new 一个这个插件的实例，并传入相关的参数
            new HtmlWebpackPlugin({
                template: __dirname + "/app/index.tmpl.html"
            }),
            new webpack.HotModuleReplacementPlugin()//热加载插件
        ],

        //浏览器监测你代码的修改
        devServer: {
            contentBase: "./public", //本地服务器所加载的页面所在的目录
            //port: 8080,
            colors: true, //终端中输出结果为彩色
            historyApiFallback: true, //不跳转
            inline: true //实时刷新
        }
    }
    // “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
