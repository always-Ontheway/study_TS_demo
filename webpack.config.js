const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口文件
    entry:"./src/index.ts",
    output : {
        //打包文件的目录
        path : path.resolve(__dirname , 'dist'),
        //打包后的文件
        filename : "index.js"
    },
    //指定webpack打包时要用的模块
    module : {
        //加载规则
        rules : [
            {
                //指定规则
                test:/\.ts$/,
                use:[
                    //配置babel
                    {
                    loader:"babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        chrome: "88"
                                    },
                                    "corejs": "3",
                                    //usage表示按需加载
                                    "useBuiltIns" : "usage"
                                }
                            ]
                        ]
                    }
                },'ts-loader'],
                //排除文件
                exclude:/node-modules/
            },
            {
                test: /\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader:'postcss-loader' ,
                        options: {
                            postcssOptions:{
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            borwser: 'last 2 version'
                                        }
                                    ]
                                ]
                            }
                        },
                    },
                    "less-loader",
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
    ],
    
    resolve:{
        extensions : ['.ts','.js']
    }
}