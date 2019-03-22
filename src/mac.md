# 安装Mac


## 安装软件神器

```
brew search
brew list
brew install xxx
brew cask install xxx
brew cask install shadowsocksx charles wechat visual-studio-code
```


## zsh关键字高亮插件 zsh-syntax-highlighting

```
brew install zsh-syntax-highlighting
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

## zsh-autosuggestions 自动提示插件

`https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh`


## iTerm2启用词语选择

Enable word jumps and word deletion, aka natural text selection

By default, word jumps (option + → or ←) and word deletions (option + backspace) do not work. To enable these, go to "iTerm → Preferences → Profiles → Keys → Load Preset... → Natural Text Editing → Boom! Head explodes"

![](https://ws4.sinaimg.cn/large/006tNbRwgy1fxgx7y7hm1j31hv0u0187.jpg)

## iPic

图床工具

## nvm

```bash
指定默认版本
nvm alias default 11.2.0
```

## npm install xxx报 EACCESS,mkdir错误

~/.npm目录权限问题，

```bash
sudo chown -R $USER:$GROUP ~/.npm
npm cache clean
```


# Linux 文件权限


## 查看权限

$ ls -l

-rw-r--r--

共10位，
第一位，表示文件类型，
- 文件
d 目录
l 软链接文件


剩下9个3位一组，
第一组表示u所有者，第二组表示g所有者，第三组表示other所有者。

其中，r代表读，  w代表写， x代表执行


## 修改权限

chomd [选项] 模式 文件名/目录
- 选项
  * -R 递归
- 模式
  * [ugoa] [+-=] [rwx]
  * [mode=421]


```bash
$ chmod u+x ccangls.av

$ chmod g+w,o+w furong.av

$ chmod a=rwx fengjie.av

```

以上这种方式不够简便，在实际应用中很少使用。

推荐使用权限的数字表示方式：
r -- 4
w -- 2
x -- 1

rwxr-xr-x
7  5  5   只读权限

rw-r--r--
6  4  4    普通文件权限


rwxrwxrwx
7  7  7    最高权限
