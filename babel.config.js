module.exports = function (api) {
	api.cache(true);

	const presets = [
		['@babel/env'],
		['@babel/preset-react'],
		['flow'],
	];

	return {
		presets,
	};
};
