# 跨境电商数据库表

* User 用户表

|   字段    |     说明     |     类型     |   默认   |   描述    |        举例        |
| :-------: | :----------: | :----------: | :------: | :-------: | :----------------: |
|    id     |     主键     |     int      | NN,PK,UQ | 主键,自增 |       0,1,2        |
| username  |    用户名    | varchar(12)  |    NN    |   账号    |     aqwerad123     |
| password  |     密码     | varchar(18)  |    NN    |   密码    |      a123456       |
| nickname  |     昵称     | varchar(20)  |    NN    |   昵称    |       小明2        |
| headphoto |     头像     | varchar(40)  |   NULL   |   头像    |      一个图片      |
|   power   |     权限     |     int      |    NN    | 角色权限  | 消费者.经销商,厂商 |
|   info    | 个人附加信息 | varchar(256) |    NN    | 附加信息  |   身份证,国籍等    |
|  status   |     状态     |     int      |    NN    | 账号状态  |        1/0         |


* goods 货物/商品表

|   字段   |   说明   |     类型     |   默认   |     描述     |                举例                |
| :------: | :------: | :----------: | :------: | :----------: | :--------------------------------: |
|    id    |   主键   |     int      | NN,PK,UQ |  主键,自增   |               0,1,2                |
| username |  用户名  | varchar(12)  |    NN    | 发布者的账号 |              aqwed123              |
|   name   |   名称   | varchar(64)  |    NN    |  商品的名称  |               小米10               |
|   type   |   类型   | varchar(12)  |    NN    |  商品的类型  | 数码产品,电子产品,服饰,鞋袜,自行车 |
|  price   |   价格   |    float     |    NN    |  商品的价格  |              1999.99               |
|  detail  |   简介   | varchar(512) |    NN    |  商品的简介  |             aqwerad123             |
| version  |   型号   | varchar(32)  |   NULL   |  商品的型号  |                mi-8                |
|  images  | 商品图片 | varchar(512) |    NN    |   图片数组   |          ["url1","url2"]           |
|   date   |   时间   |   datetime   |    NN    |   发布时间   |       "2019-01-01 12:31:23"        |
|   sold   |   销量   |     int      |    NN    |     销量     |                123                 |
|  stock   |   库存   |     int      |    NN    |   剩余件数   |                 12                 |


* communicate 小论坛交流内容表

|   字段   |  说明  |     类型     |   默认   |     描述     |         举例          |
| :------: | :----: | :----------: | :------: | :----------: | :-------------------: |
|    id    |  主键  |     int      | NN,PK,UQ |  主键,自增   |         0,1,2         |
| username | 用户名 | varchar(12)  |    NN    | 发布者的账号 |       aqwed123        |
|   type   |  类型  | varchar(12)  |    NN    |   话题类型   |    交流,求购,答疑     |
|   text   |  内容  | varchar(512) |    NN    |  发布的内容  |      aqwerad123       |
|  images  |  图片  | varchar(512) |   NULL   |   图片urls   |    ["url1","url2"]    |
|   date   |  时间  |   datetime   |    NN    |   发布时间   | "2019-01-01 12:31:23" |

* comment 交流评论/消息回复


|  字段  |         说明          |     类型     |   默认   |         描述          |         举例          |
| :----: | :-------------------: | :----------: | :------: | :-------------------: | :-------------------: |
|   id   |         主键          |     int      | NN,PK,UQ |       主键,自增       |         0,1,2         |
| msgid  | 交流信息/消息信息的id |     int      |    NN    | 交流信息/消息信息的id |          123          |
|  type  |         类型          | varchar(12)  |    NN    |       回复/评论       |   reply  /  comment   |
|  text  |         内容          | varchar(512) |    NN    |      发布的内容       |      aqwerad123       |
| images |         图片          | varchar(512) |   NULL   |       图片urls        |    ["url1","url2"]    |
|  date  |         时间          |   datetime   |    NN    |       发布时间        | "2019-01-01 12:31:23" |
|  read  |       是否阅读        |  varchar(6)  |    NN    |       是否阅读        |      true/false       |

* message 交流评论/消息回复

|  字段   |  说明  |     类型     |   默认   |     描述     |         举例          |
| :-----: | :----: | :----------: | :------: | :----------: | :-------------------: |
|   id    |  主键  |     int      | NN,PK,UQ |  主键,自增   |         0,1,2         |
| putrole | 发送者 | varchar(12)  |    NN    | 发送者用户名 |          123          |
| getrole | 接受者 | varchar(12)  |    NN    | 接收者用户名 |   reply  /  comment   |
|  text   |  内容  | varchar(512) |    NN    |  发布的内容  |      aqwerad123       |
| images  |  图片  | varchar(512) |   NULL   |   图片urls   |    ["url1","url2"]    |
|  date   |  时间  |   datetime   |    NN    |   发布时间   | "2019-01-01 12:31:23" |

* shopping 购物车

|  字段   |  说明  |    类型     |   默认   |    描述    |         举例          |
| :-----: | :----: | :---------: | :------: | :--------: | :-------------------: |
|   id    |  主键  |     int     | NN,PK,UQ | 主键,自增  |         0,1,2         |
| goodsid | 商品id |     int     |    NN    |   商品id   |         12342         |
|  buyer  |  买家  | varchar(12) |    NN    |  买家账号  |        account        |
| counts  |  数量  |     int     |    NN    | 加入的数量 |          12           |
|  date   |  时间  |  datetime   |    NN    |  发布时间  | "2019-01-01 12:31:23" |

* order 订单

|  字段   |  说明  |    类型     |   默认   |    描述    |          举例           |
| :-----: | :----: | :---------: | :------: | :--------: | :---------------------: |
|   id    |  主键  |     int     | NN,PK,UQ | 主键,自增  |          0,1,2          |
| goodsid | 商品id |     int     |    NN    |   商品id   |          12342          |
|  buyer  |  买家  | varchar(12) |    NN    |  买家账号  |         account         |
| counts  |  数量  |     int     |    NN    | 加入的数量 |           12            |
|  date   |  时间  |  datetime   |    NN    |  购买时间  |  "2019-01-01 12:31:23"  |
| status  |  状态  |     int     |    NN    |    状态    | 取消/待发货/待收货/完成等 |