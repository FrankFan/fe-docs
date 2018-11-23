# Promise

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
