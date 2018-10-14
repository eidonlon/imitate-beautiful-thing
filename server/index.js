
var router = function(app){
	var fs = require("fs");
	var path = require("path");
	var bodyParser = require("body-parser");
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extend:false}));

	var file = path.join(__dirname,'data/pictoral.json');
	var fileData = '';

	fs.readFile(file,'utf-8',function(error,data){
		if(error){
			console.log("读取文件失败")
		}else{
			fileData = JSON.parse(data);
		}
	});

	app.post("/pictoral",function(req,res){
		var list = [];
		if(fileData){
			for(var i in fileData){
				var _num = Math.floor(Math.random()*4);
				var temp = {};
				var _arts =fileData[i].arts[_num];

				temp.title = fileData[i].title;
				temp.icon = fileData[i].icon;
				temp.genre = fileData[i].genre;
				temp.img = _arts.img;
				temp.originate = _arts.originate;
				list.push(temp);
			}
			list = list.concat(list); // 数据太少不够演示，这里重复使用之前的数据
			res.send({"list":list,"code":200,"msg":""});
		}else{
			res.send({"list":[],"code":10001,"msg":"获取数据失败,请重试."});
		}
	});

	app.post("/designer",function(req,res){
		var _random = Math.floor(Math.random()*4),
			author = req.body.author,
			id = req.body.id,
			list = [],
			data = [];

		if(fileData){
			for(var i in fileData){
				var type = fileData[i].title.split("/")[1];
				var _num = '';
				list.map(function(val,index){
					if(type == val.text){
						_num = index;
						return;
					}
				});

				if(String(_num).length > 0){
					list[_num].dataList.push({
							id:i,
							icon:fileData[i].icon,
							author:fileData[i].title.split("/")[0],
							origin:fileData[i].genre,
							img:fileData[i].arts[_random].img
						}
					);
				}else{
					list.push({
						text:type,
						portrait:fileData[i].portrait,
						dataList:[{
							id:i,
							icon:fileData[i].icon,
							author:fileData[i].title.split("/")[0],
							origin:fileData[i].genre,
							img:fileData[i].arts[_random].img
						}]
					});
				}

				data = list;
			}

			if(author || author === 0){
				list = data[author].dataList;
			}
			if(id){
				list = fileData[id];
			}
			res.send({"list":list,"code":200,"msg":""});
		}else{
			res.send({"list":[],"code":10001,"msg":"获取数据失败,请重试."});
		}
	});

	app.post("/things",function(req,res){
		var _random = Math.floor(Math.random()*4),
			author = req.body.author,
			id = req.body.id,
			list = [],
			data = [];
			
		if(fileData){
			for(var i in fileData){
				var type = fileData[i].title.split("/")[0];
				var _num = '';

				list.forEach(function(val,index){
					if(type == val.text){
						_num = index;
						return index;
					}
				});
				if(String(_num).length > 0){
					list[_num].dataList.push({
							id:i,
							likeNum:0,
							dislikeNum:0,
							icon:fileData[i].icon,
							author:fileData[i].title,
							origin:fileData[i].genre,
							img:fileData[i].arts[_random].img
						}
					);
				}else{
					list.push({
						text:type,
						dataList:[{
							id:i,
							likeNum:0,
							dislikeNum:0,
							icon:fileData[i].icon,
							author:fileData[i].title,
							origin:fileData[i].genre,
							img:fileData[i].arts[_random].img
						}]
					});
				}
				data = list;
			}

			if(author || author === 0){
				list = data[author].dataList;
			}
			if(id){
				list = fileData[id];
			}
			res.send({"list":list,"code":200,"msg":""});
		}else{
			res.send({"list":[],"code":10001,"msg":"获取数据失败,请重试."});
		}
	});
}
module.exports = router;
