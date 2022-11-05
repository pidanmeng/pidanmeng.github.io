---
sidebar_position: 0
sidebar_label: monorepo
---

# Monorepo

任何一项技术的产生都是为了解决一些之前存在但没有解决的问题，所以要想学懂monorepo，先要知道它解决了什么问题

## Multirepos

Multirepos是最自然的仓库管理方式，各个项目之间互相隔离，互不依赖

![multirepos](https://files.catbox.moe/rkhhax.png)

在开源的世界里，这种仓库管理方式似乎看起来十分自然，当然，不相关的仓库之间自然不需要通过monorepo进行管理

但，如果你正在开发一堆相互依赖的项目，这种项目管理方式的问题也逐渐暴露出来

### 项目基建

一个前端项目的诞生过程中，很多配置大同小异，比如[`lint`](/Tech/FrontendEngineering/lint)，[`prettier`](/Tech/FrontendEngineering/prettier)，[`CI/CD`](/docs/Tech/FrontendEngineering/ci_cd)等配置项，由于项目创建时间不同，参与人员不同，可能造成项目间代码规则、交付流程、格式化规则的差异，尽管这些内容可以通过自己封装脚手架来解决，但脚手架的通用性、成本、重构成本等依然成问题。

### 重复依赖

在传统的仓库管理方式中，每个仓库都会维护自己的`package.json`，当两个仓库同时依赖一个仓库的不同版本时，下游仓库打包时会重复打包依赖仓库的多个版本，变相地增加了bundle的体积，另外，在依赖链中，对包的语义化控制不能穿透到其子包，也就是包 `a@patch` 的改动可能意味着其子依赖包 `b@major` 级别的 Break Change。

### 多人协同

当公司内很多人维护同一个项目时，每个人精力有限，一个仓库的更新不一定能及时周知到其下游服务，可能几天后下游服务更新依赖才暴露上游依赖的break change导致线上事故

通过CI/CD，我们可以比较容易地实现子集构建，但似乎很难实现增量构建，因为我们很难完整地收集到所有依赖当前仓库的项目。假设有若干个`app`依赖`lib1`依赖`lib2`依赖`lib3`，当lib3频繁变动时上线流程就会变得繁琐且危险

当我们需要调试一个库时，可能会在本地创建一堆npm link，通过符号链接的方式引用本地依赖，而当本地项目足够多时，这种依赖方式将变得难以管理

通过monorepo，我们可以轻易规避上述问题

## monorepo工具选择

截至2022.11.04，monorepo主流工具在NPM[ 下载量 ](https://npmtrends.com/@microsoft/rush-vs-lage-vs-lerna-vs-nx-vs-rush-vs-turborepo)走势如下（仅做参考）：

![monorepo工具npm下载量](https://files.catbox.moe/7pplyb.png)

目前最主流的monorepo管理工具是[`nx`](https://nx.dev/getting-started/intro) [`lerna`](https://lerna.js.org/docs/introduction) 和 [`@microsoft/rush`](https://rushjs.io/zh-cn/pages/intro/welcome/)

在[`mini-vue`](https://github.com/pidanmeng/mini-vue)项目中，我将尝试使用`turborepo`进行monorepo的管理

## 踩坑记录
