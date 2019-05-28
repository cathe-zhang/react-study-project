// const { injectBabelPlugin } = require('react-app-rewired')  // 读取injectBablePlugin插件

// module.exports = function override ( config, env ) {
//   config = injectBabelPlugin([
//     'import', {   // 指定从antd-m库中的es模块导入，需要导入css格式的样式  按需加载
//       libraryName: 'antd-mobile',   
//       libraryDirectory: 'es',
//       style: 'css'
//     }
//   ], config)   // 自定义配置作为第一个数组，webpack默认配置作为第二个参数

//   // 添加装饰器的能力  需要注释掉，否则会报错
//   config = injectBabelPlugin([  
//     ['@babel/plugin-proposal-decorators', {"legacy": true}]
//   ],config)
  
//   return config;
// }

const { 
  override, 
  addBabelPlugins,
  addDecoratorsLegacy,
  fixBabelImports 
} = require('customize-cra')

module.exports = override(
  // ...addBabelPlugins([   // 添加装饰器的能力
  //   '@babel/plugin-proposal-decorators',
  //   {
  //     "legacy": true
  //   }
  // ]),
  addDecoratorsLegacy(),
  fixBabelImports(      // 按需加载配置：指定从antd-m库中的es模块导入，需要导入css格式的样式
    'import', {
      libraryName: 'antd', 
      libraryDirectory: 'es',
      style: 'css'
    }
  ),
)

