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