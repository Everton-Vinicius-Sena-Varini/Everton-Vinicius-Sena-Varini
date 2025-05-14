//Módulo de processamento de arquivos .scss e .sass usando style-loader, css-loader e sass-loader, preferindo dart-sass sempre
module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`, even if `sass-embedded` is available
                            implementation: require.resolve("sass"),
                        },
                    },
                ],
            },
        ],
    },
};
