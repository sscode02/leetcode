1. http报文
    http由组成
    请求行 GET/http/1.1
    请求头 {
            cache-control:--
          }
    请求体 {body}

2. http请求头

3. http 各个版本之间的差异
http0.9 
    在http0.0之中只有get/index.html 没有请求头

http1.0
    在http0.9的基础上增加了
        1. 版本协议 get/html/1.0
        2. 状态码会在响应时先发送
        3. 引入了请求头
        4. 借助请求头 具备除了传输纯文本html文件 还可以传输其他文档文件
            content-type: text/html
            content-type: text/gif
        

http1.1
    在http1.0的基础上增加了
        1.连接复用 多个请求使用一个tcp请求
            connection:false 可以关闭
        2.增加管线化技术 允许在第一个请求应答前  发送第第二个请求
        3.增加host 可以使多域名指向同一个IP地址
http2
http3

//
    文件上传duan dianduandian
    bfc？
    widith

routrt 原理

// css方面
    bfc 
    清除浮动
    rem/em 
    

