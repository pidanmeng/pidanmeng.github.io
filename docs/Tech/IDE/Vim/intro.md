---
sidebar_position: 0
sidebar_label: 基本介绍
---

# 基本介绍

:::note 备注

本章节主要对于 Vim 新手提出以下几个需要关注的问题，并基于我自己的角度给出答案，对于以下问题，有些并不存在标准答案或最优解，本篇博文也仅代表我个人我为一名前端程序员的立场与观点，必然有其狭隘之处，万望读者见谅：

:::

- Vim 是什么
- 你是否需要学习 Vim
- IDE 的 Vim 插件 or 完全客制化的文本编辑器?
- Vim or NeoVim?
- 如何获取 Vim 的学习资料

## [Vim](https://github.com/vim/vim)是什么

Vim 作为一款上古时代的文本编辑器，古老而又强大。[Vim 官网](https://www.vim.org/)对 Vim 的描述如下:

> Vim 是一个高度可配置的文本编辑器，旨在非常高效地创建和更改任何类型的文本。它以“vi”的形式内置于大多数 Unix 系统和 Apple OS X 中。
>
> Vim 非常稳定，并且正在不断开发，以变得更好。它的特点包括：
>
> - 持久化、多级撤消树。
> - 扩展插件系统。
> - 支持数百种编程语言和文件格式。
> - 强大的搜索和替换功能。
> - 与许多工具集成

事实上，Vim真正的强大之处在于对键盘最极致的利用，和极高的可扩展性。而提到可扩展性，就不得不提Vim的亲儿子`NeoVim`

### [NeoVim](https://github.com/neovim/neovim)

`NeoVim`本来是Vim的一个分支，经过长期的持续的更新，NeoVim对比Vim已经在各个方面有所超越，而后NeoVim成为了一个单独的项目~~（或许是NeoVim卷到了Vim，原本怠惰的Vim仓库也开始勤奋了起来）~~，NeoVim对比Vim最大的优势在两方面：

- :white_check_mark: NeoVim重构了Vim的代码，优化了api，对插件作者更为友好，因此，很多优秀的插件仅支持NeoVim
- :white_check_mark: NeoVim支持使用Lua进行客制化的配置，意味着NeoVim的客制化方案更容易解耦，且更易维护

### 高度客制化的NeoVim能做到什么

:::tip 结论先行，在下面这个动图中，你可以看到，高度客制化的NeoVim的：

- :white_check_mark: 项目管理器
- :white_check_mark: 代码高亮
- :white_check_mark: File Explore
- :white_check_mark: terminal
- :white_check_mark: 窗口切换
- :white_check_mark: tab切换
- :white_check_mark: 代码提示
- :white_check_mark: 错误提示
- :white_check_mark: git状态显示
:::

![NeoVim](https://files.catbox.moe/apmom3.gif)

我的NeoVim配置参考自[《Neovim 配置实战：从0到1打造自己的IDE》](https://juejin.cn/book/7051157342770954277)；实际上这里展示的只是NeoVim能做的事的冰山一角，我们可以看到，高度客制化的NeoVim基本与诸如VSCode等IDE无异，重点是，这些操作完全是用键盘进行的，使用Vim，你可以在双手不离开键盘主要区域的情况下完成大部分工作！这是一件很酷的事情。

## 你是否真的需要Vim？

:::caution 注意

在进入到Vim的学习之前，我先进行一波劝退：Vim只是一个文本编辑器，文本编辑器的效率取决于使用它的人，我始终认为大多数形成自己书写习惯的人不需要切换到Vim，盲目地从自己熟悉的生产环境切换到Vim，只会使自己的生产效率变低。

:::

Vim适合这样的人：

**足够懒惰，同时足够勤奋**：足够懒惰，以致于无法忍受多按一个键；足够勤奋，可以反复练习不熟悉的快捷键直到身体形成条件反射

**想要装逼，或不满足于当前打字效率**：熟练使用Vim进行文本编辑突出一个快！最适合装逼

**每天有至少一小时练习时间**：学习Vim就像学习双拼或自行车，重点不在学习而在练习，它会打破你已经建立好的书写习惯，这个过程是十分痛苦的，唯有不断练习才能愈发熟练

## 如何选择Vim编辑器？

:::info 信息
关于Vim编辑器的选择，我们将面临两个问题，一是选择IDE的Vim插件还是使用原生的Vim，二是使用NeoVim还是Vim
:::

:::tip 国际惯例，结论先行：
我选择的是IDE下的Vim插件
:::

### 选择IDE插件 or 原生Vim？

作为一名前端程序员，这个问题基本不需要考虑，回归到我们最原始的诉求，学习Vim只是为了提高书写效率，无论IDE插件还是原生Vim，都可以通过尽量让手处于键盘的主要区域完成这一任务，那么在此之上，IDE有几个优点是Vim代替不了的：

1. 无论Vim的生态再怎么活跃，使用原生Vim的人数也远远小于VSCode，在公司进行团队协作的时候，有时我们需要尽可能与同事的环境保持一致，这样当某个项目需要安装一个插件时，才不至于出现只有你一个人在Vim的生态中苦苦寻找的尴尬境地

2. 尽管Vim的客制化可以深度定制到你习惯的任何一个角落，但毕竟这份配置只是你一个人在维护，且这份配置也只适用于你一个人；而技术是不断迭代更新的，Vim中的代码提示等LSP插件配置起来十分繁琐，需要挨个进行设置，一个人维护着实无力，相比之下IDE是一个团队在维护，能白嫖别人的劳动成果自然还是白嫖

综上，我选择IDE插件而非原生Vim

### 选择Vim or NeoVim？

![VSCode plugin](https://files.catbox.moe/l8nl1u.png)

关于这个问题，我们先把目光聚焦在这两个插件有啥区别

||VSCode-Vim|VSCode-NeoVim|
|---|---|---|
|实现|使用VSC命令模拟Vim|NeoVim实例作为后端，相当于在VSC编辑器里内嵌了一个NeoVim编辑器|
|配置|以JSON为主配置的过程与配置VSC快捷键相仿|以lua为主，容易解耦，方便维护|
|插件|:x:|:white_check_mark:|

基于以上原因我一开始使用的是NeoVim这个插件，但在配置的过程中遇到了一个致命的问题

![分屏跳转](https://s2.loli.net/2022/10/25/r6nysZvgVmFab7w.gif)

Coding过程中，我有时会使用到分屏功能，在Vim中，分屏之间跳转的命令是`Ctrl+w h/j/k/l`，但由于NeoVim底层实现的原因，内嵌的编辑器无法Focus到VSCode的其他Panel中。

![Vim help](https://files.catbox.moe/urdhtt.png)

于我个人而言，相较于VSCode-Vim无法安装Vim插件的问题，这个问题更加难以接受，两相取舍之下，我最终选择了前者

有些选择并不存在标准答案，只是见仁见智，本篇博文仅提供思路。

## 一些学习资料

- [NeoVim插件](https://neovimcraft.com/)
- [reddit社区](https://www.reddit.com/r/neovim/)
- [Vim菜鸟教程](https://www.runoob.com/linux/linux-vim.html)
- [掘进Vim社区](https://juejin.cn/tag/VIM)
- [github topic](https://github.com/topics/vim)

很多开发者习惯将他们的 vimrc 放在 Github 上展示（通常放在叫做 "vim-config" 或者 "dotfiles" 的仓库中），可以再github上搜索上述关键词，按star排列，看别人的配置作为参考

有其他资料也欢迎补充在评论区
