# 跨境电商数据库表

1. User 用户表

|   字段   |     说明     |     类型     |   默认   |   描述    |        举例        |
| :------: | :----------: | :----------: | :------: | :-------: | :----------------: |
|    id    |     主键     |     int      | NN,PK,UQ | 主键,自增 |       0,1,2        |
| username |    用户名    | varchar(12)  |    NN    |   账号    |     aqwerad123     |
| password |     密码     | varchar(18)  |    NN    |   密码    |      a123456       |
| nickname |     昵称     | varchar(20)  |    NN    |   昵称    |       小明2        |
|  power   |     权限     |  varchar(2)  |    NN    | 角色权限  | 消费者.经销商,厂商 |
|   info   | 个人附加信息 | varchar(256) |    NN    | 附加信息  |   身份证,国籍等    |
|  status  |     状态     |  varchar(2)  |    NN    |账号状态|1/0|
