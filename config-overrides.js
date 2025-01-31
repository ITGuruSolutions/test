module.exports = function override(config, env) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      type: 'asset/resource',
    });
    return config;
  };
  