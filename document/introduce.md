## 3.2开发环境与操作系统
* 开发环境

&emsp;&emsp;本程序在开发过程中，使用的集成开发环境为IntelliJ IDEA与微信Web开发工具，其可视化的界面操作按钮，功能操作一键式完成，配置文件修改也比较简单简单。应用VsCode为主要的代码编辑器，集合的丰富的工具类插件,大幅提高开发效率，拥有对多种软件开发的技术支持，快捷强大的代码提示，编码效率直线上升。采用Git作为版本控制工具,代码存放在GitHub上创建的代码仓库中。

* 操作系统

Windows10。

## 3.5 系统操作设计
* 总体链接结构示意图
  
  ![总体连接示意图](http://pmx5em04h.bkt.clouddn.com/%E7%B3%BB%E7%BB%9F%E6%80%BB%E4%BD%93%E8%AE%BE%E8%AE%A1%E5%9B%BE%E7%89%87.png "总体链接示意图")

* 数据库链接操作
  
  &emsp;&emsp;当前端操作反馈需要读取数据库中的数据时，前端页面并不支持直接访问，可通过wx.request请求，SpringMVC 其拦截请求，通过MyBatis操作数据库。

* 通信请求处理
  
  &emsp;&emsp;微信小程序request方法不需要考虑跨域访问问题，因为微信小程序的做法是由他们的后台取访问我们的后台，所以实际的“跨域问题”已经在我们的小程序与微信后台交流的时候解决了。直接通过wx.request方法向后端服务器发送请求。

## 4 数据字段设计

   1. 用户表
   
   |   key    | meaning  |   datatype   | remark |  description   |
   | :------: | :------: | :----------: | :----: | :------------: |
   |    id    |    ID    |     int      | PK,AI  |  表的自增主键  |
   | username |  用户名  | varchar(20)  |   NN   | 用户的登录账号 |
   | password |   密码   | varchar(20)  |   NN   | 用户的登录密码 |
   |   info   | 个人信息 | varchar(256) |  NULL  | 用户的个人信息 |

