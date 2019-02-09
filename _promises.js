/*Resolve->then
Reject->catch
(YE dono callback functions ka alternate hai~!!)
Sare functions ka ek catch mein kam chal jata hai!!
*/

function download(path){
	return new Promise(function(resolve,reject){
		if(!path.startsWith('http'))
			reject(new Error("Something went wrong!"));
		else
		{
			console.log("Downloading a file");
			setTimeout(function(){
				console.log("File has been downloaded!")
				resolve(path);
			},3000)
		}
	})
}

function resize(path){
	return new Promise(function(resolve,reject){
		if(!path.endsWith('jpg'))
			reject(new Error("Its not a jpg file!"));
		else
		{
			console.log("Resizing the file");
			setTimeout(function(){
				console.log("File has been resized!")
				resolve(path);
			},3000)
		}
	})
}

function upload(path){
	return new Promise(function(resolve,reject){
		console.log("Uploading file!");
		setTimeout(function(){
			resolve();
		},2000);
	})
}

//let kamal=download("http://nsvjjvlvn,");

download("http://nsvjjvlvn.jpg")
.then(resize)
.then(upload)
.then(function(){
	console.log("File has been Uploaded!")
})
.catch(function(err){
	console.error(err)
})
