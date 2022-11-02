---
sidebar_position: 1
sidebar_label: vim相关设置
---

# Vim 相关设置

特别鸣谢 B 站 up 主[@敲代码的脱发水](https://space.bilibili.com/26319956)，本人的 Vim 配置均继承自该 up 主的[VSCode 设置](https://github.com/ravenxrz/dotfiles/tree/master/vscode)

<div class="iframe-container">
  <iframe
    src="//player.bilibili.com/player.html?aid=811307930&bvid=BV1s34y1Y79u&cid=713241300&page=1"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
  >
    {' '}
  </iframe>
</div>

## 拿来主义

:::note 备注
对于Vim新手来说，学习Vim的过程是破而后立的；所以在没有形成自己的快捷键体系的情况下，完全可以从其他人那里“借来”一套完整的“使用习惯”。

别人的配置的背后，背书的是前人长期以来使用时遇到的问题，前人栽树我乘凉。
:::

我们可以在GitHub上找到别人的Vim配置，这里我随便放几个Star数比较多的配置仅供参考：

### Vim

[humiaozuzu/dot-vimrc](https://github.com/humiaozuzu/dot-vimrc)

[fisadev/fisa-vim-config](https://github.com/fisadev/fisa-vim-config)

### NeoVim

[theniceboy/nvim](https://github.com/theniceboy/nvim)

[rafi/vim-config](https://github.com/rafi/vim-config)

[AstroNvim/AstroNvim](https://github.com/AstroNvim/AstroNvim)

## 插件安装和配置（序章）

在开始配置之前，我们先要安装VSCode的Vim插件

![vim插件](https://files.catbox.moe/6kurii.png)

截至`1.24.1`版本，该插件提供了112项设置和78项命令，可以在扩展详情页的功能贡献分页中查看

![vim设置项](https://files.catbox.moe/v45t9r.png)

![vim命令](https://files.catbox.moe/6y6kom.png)

同时，[VSCodeVim](https://github.com/VSCodeVim/Vim)还提供了一个入口，让你可以像配置[`.vimrc`](https://github.com/VSCodeVim/Vim#vimrc-support)一样配置VSCodeVim

在后续的章节中，我将列举一些VSCode配合Vim插件进行设置的案例，用以抛砖引玉

## 使用GitHub管理配置文件

:::info 信息
在后续章节的设置中，会涉及到三个文件的改动，不如我们使用GitHub对其做版本管理

- `settings.json` - 默认存放在`%AppData%\Code\User`，VSCode设置相关
- `keybindings.json` - 默认存放在`%AppData%\Code\User`，VSCode快捷键相关
- `.vimrc` - 默认存放在`%HOMEPATH%`，vim设置相关

:::

我们发现，我们需要管理的几个文件分散，且都分布于系统目录下，这时`windows`系统可以使用[Link Shell Extension](https://schinagl.priv.at/nt/hardlinkshellext/linkshellextension.html#contact)在以上目录创建[符号链接](https://dev.to/iggredible/hard-link-vs-symbolic-link-360b)

其他系统下也有对应创建符号链接的方式

:::caution 注意
只能用符号链接，不能用硬链接，否则无法执行git push命令
:::

## 安装插件

![插件](https://files.catbox.moe/aawrth.png)

`multi-command`提供了再VSCode中类似于定义宏的接口，我们可以通过该插件将一个键映射成多个命令

`Which Key`提供了一个可自定义的菜单，使用文档参考[这里](https://vspacecode.github.io/docs/whichkey/)
