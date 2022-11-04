/* eslint-disable no-undef */

const sidebars = {
  IDE: [
    'Tech/IDE/intro',
    {
      type: 'category',
      label: 'VSCode-Vim',
      link: {
        type: 'generated-index',
        title: 'Vim配置',
        description: '学习VSCode-Vim插件!',
        slug: 'Tech/IDE/Vim',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'Tech/IDE/Vim'
        }
      ]
    },
    {
      type: 'category',
      label: 'VSC插件',
      link: {
        type: 'generated-index',
        title: 'VSCode插件',
        description: 'VSCode插件推荐!',
        slug: 'Tech/IDE/plugins',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'Tech/IDE/plugins'
        }
      ]
    }
  ],
  Vue: [
    {
      type: 'autogenerated',
      dirName: 'Tech/Vue'
    }
  ],
  React: [
    {
      type: 'autogenerated',
      dirName: 'Tech/React'
    }
  ],
  FrontendEngineering:[
    {
      type: 'autogenerated',
      dirName: 'Tech/FrontendEngineering'
    }
  ],
  Blog: [
    {
      type: 'autogenerated',
      dirName: 'Tech/Blog'
    }
  ],
  DesignPattern:[
    {
      type: 'autogenerated',
      dirName: 'Tech/DesignPattern'
    }
  ] 
};

module.exports = sidebars;
