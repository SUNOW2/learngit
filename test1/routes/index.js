
/*
 * GET home page.
 */
sql=require("./sql.js");
exports.index = function(req, reg)
{
	  res.render('index', {title: '注册' });
};

exports.login=function(req,reg)
{
	client = usr.connect();
	sql.selectFun(req.body.name,req.body.passwd);
	if(ifexistkey=1)
	{
		ifexistkey=0;
	}
	else
	{
        throw err;
		console.log('用户名不存在');
	}
	
};
exports.register=function(req,reg)
{
	console.log(req.body.name);
	sql.insertdata(req.body.name,req.body.passwd);
    if(err)
		throw err;
	res.send("注册成功!");
	else
	{
		 res.send('注册失败')
	}
}
