var mysql = require('mysql');  
var client = mysql.createConnection({  
  user: 'root',  
  password: 'xuxu19950521',
});  
      
var TEST_DATABASE = 'nodejs_test';
//要创建的表名  
var CREATE_TABLE = 'UserRegist';  
var ifexistkey=0; 
//创建连接  
client.connect();
// TEST_DATABASE数据库已创建完成 
client.query('USE '+TEST_DATABASE);
//如果存在这个表，则删除重新建立
client.query(
'DROP TABLE IF EXISTS ' +CREATE_TABLE
);
//设置表头
client.query(  
  'CREATE TABLE '+CREATE_TABLE+  
  '(id INT(11) AUTO_INCREMENT, '+  
  'name VARCHAR(255), '+  
  'passwd VARCHAR(255), '+  
  'PRIMARY KEY (id))'  
);

function insertdata(dataname,datapasswd)
{
    var sql = 'insert into '+CREATE_TABLE+' set name = '+dataname+',passwd= '+ datapasswd;
client.query(sql, function(err, result)
{
   console.log(err);
});
   return;
}
  
function searchdata(dataname,datapasswd)
{
//插入之后，进行查询操作
  client.query(  
  'SELECT * FROM '+CREATE_TABLE,  
  function selectCb(err, results, fields)
  {  
    if (err) 
	{  
      throw err;  
    }  
      
      if(results)
      {
          for(var i = 0; i < results.length; i++)
          {
			  if(result[i].name==dataname)
				if(result[i].passwd==datapasswd)
{
	ifexistkey=1;
	return 1;
}
          }

      }    
    client.end();  
}  
);}
exports.insertdata=insertdata;
exports.searchdata=searchdata;
