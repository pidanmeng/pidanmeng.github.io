---
sidebar_position: 2
sidebar_label: 快捷键映射
---

# 快捷键映射

根据个人的使用习惯，把高频的快捷键设置到舒适的区域，正是 Vim 哲学的一部分

:::caution 注意
本章节中只列举了本人比较常用的一些快捷键或命令，仅代表个人使用习惯，同时列举出的命令只是 Vim 众多命令中的冰山一角，若要查看所有命令，可以在 Vim 中使用`:help {query}`指令进行查询
:::

## leader 键

`<leader>`键作为 Vim 中的前缀键，使用频率比极高，默认的 leader 键是`backslash`，这里我把它设置成`;`

```vim title=".vimrc"
" 设置前导键
let mapleader = ";"
```

## 交换 ESC 键和大写锁定键

Vim 分为三个模式，我们有时需要频繁地从`Insert模式`切换到`Normal模式`，需要频繁地利用 ESC 键，由于键盘设计不甚合理，ESC 在我们难以触及的左上角，相反，几乎用不到的 CapsLock 键却占用了我们左手小拇指的关键区域，所以我把 ESC 键和 CapsLock 进行了重映射，在 MacOS 上可以通过键盘设置轻而易举地实现，但在 Windows 上却比较麻烦。

新建一个注册表文件，content 如下，保存并运行

```reg title="Switch_ESC_&_CapsLock.reg"
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]
"Scancode Map"=hex:00,00,00,00,00,00,00,00,03,00,00,00,3a,00,01,00,01,00,3a,00,00,00,00,00
```

## 文件操作

### 资源管理器

#### Focus 到资源管理器

Focus 资源管理器是比较常用的操作，我们可以通过 WhichKey 插件快速打开资源管理器面板

在此之前我们先要配置 WhichKey 的触发键

```json title="keybindings.json"
{ // 在normal模式下按下空格键打开WhichKey面板
	"key": "space",
	"command": "whichkey.show",
	"when": "vim.mode == 'Normal' && !suggestWidgetVisible && !inQuickOpen && editorTextFocus "
},
```

```json title="settings.json"
"vim.visualModeKeyBindings": [
	{ // 在visual模式下按下空格键打开WhichKey面板
		"before": [
			"<space>"
		],
		"commands": [
			"whichkey.show"
		]
	},
],
```

配置好插件快捷键之后，还需要告诉插件，当我们打开 WhichKey 面板后，按哪个键需要执行什么命令

这里我们按`e`打开 File Explorer

```json title="settings.json"
/*
 * 在settings.json 中，映射e键对应的command
 * 这里我们分了两种情况：
 * 当File Explorer已经在面板中展示时，我们可以通过 WhichKey 关闭面板
 * 否则会打开File Explorer
 */
{
  "whichkey.bindings": [
    {
      "key": "e",
      "name": "Show tree/explorer view",
      "type": "conditional",
      "bindings": [
        {
          "key": "",
          "name": "default",
          "type": "command",
          "command": "workbench.view.explorer"
        }
      ]
    }
  ]
}
```

```json title="keybindings.json"
{ // 当WhichKey面板和Explorer面板都在时，按E关闭Explorer
	"key": "e",
	"command": "whichkey.triggerKey",
	"when": "whichkeyVisible && sideBarVisible && explorerViewletVisible",
	"args": {
		"key": "e",
		"when": "sideBarVisible && explorerViewletVisible"
	},
},
```

:::tip 提示
当你在 VSCode 中 Focus 到资源管理器时，可以使用以下快捷键进行一些基本的操作
:::

#### 浏览 / 打开 / 关闭文件

- 浏览文件：可以用`j` / `k`向上 / 向下移动光标，用`o`预览文件内容
- 打开文件：`Enter`
- 关闭文件：Focus 在 Vim 编辑器内，normal 模式下输入命令`:q`退出文件，`:w`保存文件，`:wq`保存并退出

更改保存并关闭文件的快捷键

```vim title=".vimrc"
" 定义快捷键关闭当前分割窗口
nmap <Leader>q :q<CR>
" 定义快捷键保存当前窗口内容
nmap <Leader>w :w<CR>
```

之后，我们使用`;w`或`;q`即可保存或关闭文件

#### 展开 / 收起文件夹

- 当光标 Focus 到文件夹时：按`o`可以展开或收起文件夹
- 当光标 Focus 到任意文件或文件夹时：按`h`可以收起当前文件所在的文件夹

#### 新建 / 删除 / 重命名文件

- 新建文件：`a`
- 新建文件夹：`A`
- 重命名：`r`

### 窗口

#### 分屏

- 水平分屏：`:vsplit`
- 垂直分屏：`:split`

更改分屏快捷键

```vim title=".vimrc"
" 分屏
nmap <Leader>sv :vsplit<CR>
nmap <Leader>sh :split<CR>
```

#### 光标在不同窗口间快速切换

- 快速切换：`<C-W>h/j/k/l`

更改切换窗口快捷键

```json title="keybindings.json"
[
  {
    // window move down
    "key": "ctrl+j",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal' && !suggestWidgetVisible && !inQuickOpen",
    "args": {
      "after": ["<c-w>", "j"]
    }
  },
  {
    // window move up
    "key": "ctrl+k",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal' && !suggestWidgetVisible && !inQuickOpen && !panelFocus",
    "args": {
      "after": ["<c-w>", "k"]
    }
  },
  {
    // window move left
    "key": "ctrl+h",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal' && !suggestWidgetVisible && !inQuickOpen && !panelFocus",
    "args": {
      "after": ["<c-w>", "h"]
    }
  },
  {
    // window move right
    "key": "ctrl+l",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal' && !suggestWidgetVisible && !inQuickOpen",
    "args": {
      "after": ["<c-w>", "l"]
    }
  }
]
```

### 缓冲区

#### 搜索文件

使用 WhichKey 对文件进行搜索

```json title="settings.json"
"whichkey.bindings": [
	{
		"key": "e",
		"name": "Show tree/explorer view",
		"type": "conditional",
		"bindings": [
			{
				"key": "",
				"name": "default",
				"type": "command",
				"command": "workbench.view.explorer"
			},
			{
				"key": "when:sideBarVisible && explorerViewletVisible",
				"name": "Hide explorer",
				"type": "command",
				"command": "workbench.action.toggleSidebarVisibility"
			}
		],
	},
	// add-start
	{
		"command": "workbench.action.quickOpen",
		"key": "f",
		"name": "Find file",
		"type": "command"
	},
	// add-end
],
```

#### 查看缓冲区其他文件

使用`Alt+h`或`Alt+l`查看缓冲区中上一个或下一个编辑器

```json title="keybindings.json"
[
  {
    "key": "alt+h",
    "command": "workbench.action.previousEditor"
  },
  {
    "key": "alt+l",
    "command": "workbench.action.nextEditor"
  }
]
```

#### 关闭缓冲区其他文件

- 使用`q l`关闭右侧所有编辑器
- 使用`q h`关闭左侧所有编辑器
- 使用`q o`关闭其他所有编辑器
- 使用`q q`关闭当前编辑器

```json title="keybindings.json"
[
  {
    "key": "q l",
    "command": "workbench.action.closeEditorsToTheRight",
    "when": "editorFocus && vim.mode =~ /^(?!SearchInProgressMode|CommandlineInProgress).*$/"
  },
  {
    "key": "q h",
    "command": "workbench.action.closeEditorsToTheLeft",
    "when": "editorFocus && vim.mode =~ /^(?!SearchInProgressMode|CommandlineInProgress).*$/"
  },
  {
    "key": "q o",
    "command": "workbench.action.closeOtherEditors",
    "when": "editorFocus && vim.mode =~ /^(?!SearchInProgressMode|CommandlineInProgress).*$/"
  },
  {
    "key": "q q",
    "command": "workbench.action.closeActiveEditor",
    "when": "editorFocus && vim.mode =~ /^(?!SearchInProgressMode|CommandlineInProgress).*$/"
  }
]
```

我们重新设置了关闭当前编辑器的命令，这时可以删掉之前`<leader>q`的快捷键

```vim title=".vimrc"
// remove-start
" 定义快捷键关闭当前分割窗口
nmap <Leader>q :q<CR>
// remove-end
" 定义快捷键保存当前窗口内容
nmap <Leader>w :w<CR>
```

## 基础操作

### 光标移动

:::info 信息
以下快捷键仅在 Normal 模式和 Visual 模式下生效，不需要额外进行配置

- `h/j/k/l` - 向左/下/上/右移动光标
- `w/b` - 向后/前移动一个单词
- `e` - 移动到下一个单词的末尾
- `gg/G` - 移动到文件开头/末尾
- `{n}G` - 移动到第 n 行
- `%` - 跳转光标到`(), [], {}`的另一个括号上

值得一提的是，Vim 中的很多操作都是可以重复若干次的

比如`10j`代表向下移动光标 10 行，`50w`代表移动到后面的第 50 个单词
:::

#### 移动到行首/行尾

Vim 默认的快捷键是`^`和`$`，离手比较远，又不好记，我已我改成了`H`和`L`

```vim title=".vimrc"
" 定义快捷键到行首和行尾
noremap H ^
noremap L $
```

#### 快速上下移动光标

Vim 的默认快捷键是`<C-U>`和`<C-D>`，这两个快捷键一方面不好记，另一方面他们的效果是 PageDown 和 PageUp，一次跳过的行数太多了，我改成了`J`和`K`，每次只跳 5 行，这个数字可以根据自己习惯修改

```vim title=".vimrc"
" 定义快捷键快速翻页
noremap J 5j
noremap K 5k
```

### 查找和替换

VSCode 的查找和替换功能已经十分强大，直接修改 VSCode 的快捷键即可

- `<C-f>` - 全文搜索
- `Enter` - 向下搜索
- `Shift + Enter` - 向上搜索

使用`ctrl+d` / `ctrl+shift+d`选中下一个 / 上一个单词

```json title="keybindings.json"
[
  {
    // 取消vim默认的<C-D>快捷键
    "key": "ctrl+d",
    "command": "-extension.vim_ctrl+d",
    "when": "editorTextFocus && vim.active && vim.use<C-d> && !inDebugRepl"
  },
  {
    // 设置ctrl+shift+d为选择上一个搜索项
    "key": "ctrl+shift+d",
    "command": "editor.action.addSelectionToPreviousFindMatch"
  }
]
```

使用`ctrl+n` / `ctrl+shift+n`跳转到下一个 / 上一个单词

```json title="keybindings.json"
[
  {
    "key": "ctrl+shift+n",
    "command": "editor.action.moveSelectionToPreviousFindMatch"
  },
  {
    "key": "ctrl+n",
    "command": "editor.action.moveSelectionToNextFindMatch",
    "when": "editorFocus"
  }
]
```

设置后效果如下：

![查找和替换](https://files.catbox.moe/6i7qiy.gif)

## 常用模式切换操作

:::tip 提示
当你不知道自己到底处于什么模式下，
只需要不停的按 `<Esc>` 最终都会回到普通模式下。
:::

### 进入终端

使用 WhichKey 插件快速进入终端

```json title="settings.json"
[
  // ...
  "whichkey.bindings": [
    // ...
    // add-start
    {
      "key": "t",
      "name": "Terminal",
      "type": "command",
      "command": "workbench.action.terminal.toggleTerminal",
    },
    // add-end
    // ...
  ],
  // ...
],
```

- 切换到下一终端组: `alt + j`
- 切换到上一终端组: `alt + k`

### 切换到普通模式

一进入 vim 的时候，默认就处于普通模式下。 按键盘左上角的 `Esc` 键，就会从其他任意模式退回到普通模式。 普通模式用来浏览文本。

### 插入模式

按 `i, I, a, A, o, O` 键，就会从普通模式切换为插入模式。 处于插入模式时，在左下角会显示 `-- INSERT --`。 插入模式用来输入文本。 按 `Esc` 键，回到普通模式。

### VISUAL 模式

按 `v` 键，就会从普通模式切换为 VISUAL 模式。 处于 VISUAL 模式时，在左下角会显示 `-- VISUAL --`。 VISUAL 模式用来选择文本。 按 `Esc` 键，回到普通模式。

### 命令行模式

按 `:` 键，就会从普通模式切换为命令行模式。 你可以在 `cmdline` 的冒号后面输入命令。 `cmdline` 就是按了 `:` 之后的命令行，后面统一都叫 `cmdline`。 按 `Esc` 键，回到普通模式。

### VISUAL BLOCK 模式

按 `ctrl+v` 键，就会从普通模式切换为 VISUAL BLOCK 模式。 处于 VISUAL 模式时，在左下角会显示 `-- VISUAL BLOCK --`。 按 `Esc` 键，回到普通模式。

### 进入插入模式的几种方式

#### 在光标所在字符前面进入插入模式

```
i
```

#### 在光标所在字符后面进入插入模式

```
a
```

#### 在光标所在行的最开头插入

```
shift+I （大写的字母I）
```

#### 在光标所在行的末尾插入

```
shift+A
```

#### 在下一行插入

在光标所在行的下面插入新的一行，光标移动到新插入的这一行，并进入插入模式。

```
o （小写的字母o）
```

#### 在上一行插入

在光标所在行的上面插入新的一行，光标移动到新插入的这一行，并进入插入模式。

```
shift+O （大写的字母O）
```
