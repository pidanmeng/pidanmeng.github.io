---
sidebar_position: 3
sidebar_label: 奇技淫巧
---

# 奇技淫巧

:::note 备注
Vim的学习曲线是在使用中不断遇到问题，然后找到更简化的解决方案。
本章节会持续更新，记录我在使用Vim的过程中遇到的麻烦和解法。
:::

## 浏览代码

### 分屏并跳转到源码

![分屏并跳转到源码](https://files.catbox.moe/wbpiyp.gif)

```vim title=".vimrc"
// add-start
" 定义快速跳转
nmap <Leader>t <C-]>
" 定义快速跳转回退
nmap <Leader>T <C-t>
// add-end
" 分屏
nmap <Leader>sv :vsplit<CR>
nmap <Leader>sh :split<CR>
```

## 编辑代码

### [使用字符包裹字符串](https://github.com/VSCodeVim/Vim#vim-surround)

基于 [surround.vim](https://github.com/tpope/vim-surround)，用于处理括号、方括号、引号和 XML 标签等周围字符。

| surround | 说明 |
| -------------------------- | -------------------------------------------------------- |
| `ys <motion> <desired>` | 在 `<motion>` 定义的文本周围添加 `desired` 环绕 |
| `ds <existing>` | 删除`existing`环绕 |
| `cs <existing> <desired>` | 将 `existing` 环绕更改为 `desired` |
| `S <desired>` | 在Visual模式下surround|

一些例子：

- `test` 光标在单词前，输入`ysw"`以`"test"`结束
- `"test"` 光标在引号内，输入 `cs"'` 以 `'test'` 结束
- `"test"` 光标在引号内，输入 `ds"` 以 `test` 结束
- `test` Visual模式下，光标选中`test`，输入 `St` 并输入 `123>` 以 `<123>test</123>` 结束

![vim-surround](https://files.catbox.moe/1vk8t6.gif)
