module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require('postcss-cssnext')({browsers: ['> 0.05%', 'IE 7'], cascade: false}),
    ],
};
