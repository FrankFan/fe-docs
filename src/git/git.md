# git
----

## git config

git 配置分为全局和本地两种。

显示所有的配置
```bash
git config --list
```

添加全局配置
```bash
git config --global user.name xxx
git config --global user.email xxx@gmail.com
```

为本地的工程里面添加单独的配置，可以使用不同的用户名和密码。

```bash
git config --local user.name xxx
git config --local user.email xxx@gmail.com
```
Mac下全局配置的路径: `~/.gitconfig`

local配置的路径: `$Project_dir/.git/config`
