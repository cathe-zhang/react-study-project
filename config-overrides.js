// create-react-app 2.0以上版本 无法使用react-app-rewired 需要换成customize-cra


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
  addDecoratorsLegacy(),   // 添加装饰器语法支持
  fixBabelImports(      // 按需加载配置：指定从antd-m库中的es模块导入，需要导入css格式的样式
    'import', {   // 会直达需要引用的组件
      libraryName: 'antd',     // 匹配文件中的antd引用，所有引用到antd的地方都会用这里配置的方式引入 
      libraryDirectory: 'es',   // es文件夹
      style: 'css'    // 导入css.js文件
    }
  ),
)

