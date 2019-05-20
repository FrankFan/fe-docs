# 命令操作

## Linux 文件权限


### 查看权限

```bash
$ ls -l

-rw-r--r--
```

共10位，
第一位，表示文件类型，
* `-` 代表文件
* `d` 代表目录
* `l` 代表软链接文件


剩下9个3位一组，
第一组表示`u`所有者，
第二组表示`g`所有者，
第三组表示`other`所有者。

其中，`r`代表读，`w`代表写， `x`代表可执行。


## 修改权限

```bash
chomd [选项] 模式 文件名/目录
- 选项
  * -R 递归
- 模式
  * [ugoa] [+-=] [rwx]
  * [mode=421]
```

```bash
$ chmod u+x file1

$ chmod g+w,o+w file2

$ chmod a=rwx filex

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

## 常用命令

```bash
# 查看硬盘使用空间
$ du -d 1 -h
```


## 实现终端命令行CLI翻墙效果

配置：
修改`~/.zshrc`配置文件，增加以下2行

```bash
# proxy list
alias proxy='export all_proxy=socks5://127.0.0.1:1080'
alias unproxy='unset all_proxy'
```

测试：

```bash
# 未运行 proxy 命令前
$ curl cip.cc
IP	: 58.247.11.227
地址	: 中国  上海
运营商	: 联通

数据二	: 上海市 | 联通

数据三	: 中国上海上海市 | 联通

URL	: http://www.cip.cc/58.247.11.227

# 运行 proxy 命令
$ proxy
$ curl cip.cc
IP	: 3.16.15.181
地址	: 美国  美国

数据二	: 美国 | Amazon EC2服务器

数据三	: 美国华盛顿 | 亚马逊

URL	: http://www.cip.cc/3.16.15.181

# 翻墙成功，尽情的npm install吧
```



## 常用Linux命令

### scp
```bash
# 登录跳板机
$ jump
$ mkdir /tmp/hybird
# 回到本机，scp到远程服务器的tmp目录
$ scp your_local_file root@172.19.15.8:/tmp/workspace
$ ssh root@172.19.15.8
```


### 查看size
```bash
# 查看目录大小：
$ du -h -d 1 ~/gitlab
# 查看磁盘容量
$ df -h
```

## 常用git命令


### 删除分支
```bash
# 删除远程分支的方法：
$ git push origin --delete feature/test1
$ git push origin :feature/test1

删除本地分支：
$ git branch -d feature/test
```


```bash
# 删除未track的目录以及文件
$ git clean -fd

# 强制清除本地改动
$ git checkout -f

# 把别的commit id 合并到当前分支
$ git cherry-pick [commit id]
```



