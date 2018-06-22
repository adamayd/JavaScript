document.getElementById('loadbutton').onclick = function() {
	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	} // if (windows.XMLHttpRequest)
	request.open('GET', 'data.json');
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			var items = JSON.parse(request.responseText);
			var output = '<ul>';
			for (var key in items) {
				output += '<li><h3>' + items[key].reknown + '<em> - ' + items[key].name + '</em></h3>' + items[key].bio + '</li>';
			} // for (var key in items)
			output += '</ul>';
			document.getElementById('update').innerHTML = output;
		} // if((request.readyState......))
	} // request.onreadystatechange = function()
	request.send();
}  // .onclick = function()
