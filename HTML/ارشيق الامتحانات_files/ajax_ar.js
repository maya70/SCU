// JavaScript Document
var myxmlhttp;
function voteset(){
	if(document.getElementById('rd_value').value==""){
		alert('Please choose an answer');
		return false;
	}
	var rd_value = document.getElementById('rd_value').value;
	doRequest('voteAjax.php?action=set&ch='+rd_value);
}
function doRequest (url) {
	myxmlhttp = CreateXmlHttpReq(resultHandler);
	if (myxmlhttp) {
		XmlHttpGET(myxmlhttp, "templates/includes/ar/"+url);
	} else {
		alert("An error occured while attempting to process your request.");
	}
}

function resultHandler () {
	if (myxmlhttp.readyState == 4) {
		if(myxmlhttp.status == 200) {
			document.getElementById("vote_div").innerHTML = myxmlhttp.responseText;
		}else{
			alert("There was a problem retrieving the data:\n" + req.statusText);
		}
	}
}

function CreateXmlHttpReq(handler) {
	var xmlhttp = null;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			//alert('we found this exception: '+e);
		}
	}
	if (xmlhttp){
		xmlhttp.onreadystatechange =handler;
	}
	return xmlhttp;
}
function XmlHttpGET(xmlhttp, url) {
	try {
		xmlhttp.open("GET", url, true);
		xmlhttp.send(null);
	}catch(e){
		//alert('we found this exception: '+e);
	}
}

//////////////////////////////////////////////////////////////////////////

function addtofav(id){
	doRequestfav('addtofav.php?action=add&n_id='+id);
}
function delfromfav(id){
	doRequestfav('addtofav.php?action=del&n_id='+id);
}
function doRequestfav (url) {
	myxmlhttp1 = CreateXmlHttpReq1(resultHandler1);
	if (myxmlhttp1) {
		XmlHttpGET(myxmlhttp1, "n_fav/"+url);
	} else {
		alert("„‰ ›÷·ﬂ Õ«Ê· „—Â √Œ—Ï.");
	}
}

function resultHandler1 () {
	if (myxmlhttp1.readyState == 4) {
		if(myxmlhttp1.status == 200) {
			document.getElementById("n_fav").innerHTML = myxmlhttp1.responseText;
		}else{
			alert("ÕœÀ Œÿ√ „«, ·« Ì„‰ «” —Ã«⁄ «·»Ì«‰« :\n" + req.statusText);
		}
	}
}

function CreateXmlHttpReq1(handler) {
	var xmlhttp = null;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			//alert('we found this exception: '+e);
		}
	}
	if (xmlhttp){
		xmlhttp.onreadystatechange =handler;
	}
	return xmlhttp;
}
function XmlHttpGET1(xmlhttp, url) {
	try {
		xmlhttp.open("GET", url, true);
		xmlhttp.send(null);
	}catch(e){
		//alert('we found this exception: '+e);
	}
}
