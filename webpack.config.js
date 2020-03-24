const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={

    mode: 'development',
    module: {  
       rules: [
           
        {
            test: /styles\.css$/,
            use: [

            MiniCssExtractPlugin.loader,
            'css-loader'

            ]


        }
        
        {

        test: /\.css$/,
        exclude:/styles\.css$/,
        use  : [

       'style-loader',
       'css-loader'
        
    ]



       }]

       
         
    },
    plugins:[

        new HtmlWebPackPlugin({

            // el template le dice al webpack que archivo hay que tomar
            template: './src/index.html',

            filename: './index.html'
        }),
        new  MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        })


    ]

}