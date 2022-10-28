---
sidebar_position: 2
sidebar_label: 快捷键映射
---

# 快捷键映射

根据个人的使用习惯，把高频的快捷键设置到舒适的区域，正是Vim哲学的一部分

:::caution 注意
本章节中只列举了本人比较常用的一些快捷键或命令，仅代表个人使用习惯，同时列举出的命令只是Vim众多命令中的冰山一角，若要查看所有命令，可以在Vim中使用`:help {query}`指令进行查询
:::

## leader键

`<leader>`键作为Vim中的前缀键，使用频率比极高，默认的leader键是`backslash`，这里我把它设置成`;`

```vim title=".vimrc"
" 设置前导键
let mapleader = ";"
```

## 交换ESC键和大写锁定键

Vim分为三个模式，我们有时需要频繁地从`Insert模式`切换到`Normal模式`，需要频繁地利用ESC键，由于键盘设计不甚合理，ESC在我们难以触及的左上角，相反，几乎用不到的CapsLock键却占用了我们左手小拇指的关键区域，所以我把ESC键和CapsLock进行了重映射，在MacOS上可以通过键盘设置轻而易举地实现，但在Windows上却比较麻烦。

新建一个注册表文件，content如下，保存并运行

```reg title="Switch_ESC_&_CapsLock.reg"
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]
"Scancode Map"=hex:00,00,00,00,00,00,00,00,03,00,00,00,3a,00,01,00,01,00,3a,00,00,00,00,00
```

## 基础操作

### 光标移动

:::info 信息
以下快捷键仅在Normal模式和Visual模式下生效，不需要额外进行配置
- `h/j/k/l` - 向左/下/上/右移动光标
- `w/b` - 向后/前移动一个单词
- `e` - 移动到下一个单词的末尾
- `gg/G` - 移动到文件开头/末尾
- `{n}G` - 移动到第n行
- `%` - 跳转光标到`(), [], {}`的另一个括号上

值得一提的是，Vim中的很多操作都是可以重复若干次的

比如`10j`代表向下移动光标10行，`50w`代表移动到后面的第50个单词
:::

#### 移动到行首/行尾

Vim默认的快捷键是`^`和`$`，离手比较远，又不好记，我已我改成了`H`和`L`

```vim title=".vimrc"
" 定义快捷键到行首和行尾
noremap H ^
noremap L $
```

#### 快速上下移动光标

Vim的默认快捷键是`<C-U>`和`<C-D>`，这两个快捷键一方面不好记，另一方面他们的效果是PageDown和PageUp，一次跳过的行数太多了，我改成了`J`和`K`，每次只跳5行，这个数字可以根据自己习惯修改

```vim title=".vimrc"
" 定义快捷键快速翻页
noremap J 5j
noremap K 5k
```

## 常用模式切换操作

## 常用文件操作
