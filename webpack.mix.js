let mix = require('laravel-mix');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery']
});

mix.webpackConfig(
	{
		module: {
			rules: [
				{
					test: /\.mjs$/, resolve: { fullySpecified: false },
					include: /node_modules/, 
					type: "javascript/auto" 
				}
			]
		},
	}
);

mix.js('resources/main.js', 'assets/app/js/app.js').vue({ version: 3 });