/**
 * Created by Administrator on 2016/12/7.
 */
//引入path内置模块
var path = require('path');
//引入express依赖模块，用来启动静态服务器
var express = require('express');
/*console.log(__dirname);*/
var proxy = require('http-proxy-middleware');
//实例化express
var app = express();

app.use('/api',proxy({
    target:'http://122.10.30.153:9901',
    pathRewriter:{
        '^/api':'/'
    }
}));

//指定访问页面路径
app.use('/',express.static(path.join(__dirname,'views')));
app.use('/public',express.static(path.join(__dirname,'public')));
//指定端口号，建议3000以上,回调函数可以不写
app.listen(169031,function (){
    console.log('server run at port 169031')
});

//模块导出
module.expotrs = app;