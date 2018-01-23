const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = (config, env) => {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
    config = rewireLess.withLoaderOptions({})(config, env);
    return config;
};