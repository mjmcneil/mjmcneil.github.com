function reqListener () {
	console.log(this.responseText);
}
function getEpisodes() {
    var show = document.getElementById("showName").value;
	var url = "http://thetvdb.com/api/GetSeries.php?seriesname=".concat(show);
	
	var xhr = createCORSRequest('GET', url);
	if (!xhr) {
		throw new Error('CORS not supported');
	}
	// Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
	
	//var oReq = new XMLHttpRequest();
	//oReq.onload = reqListener;
	//oReq.open("get", url, true);
	//oReq.send();
	
	document.getElementById("demo").innerHTML = "http://thetvdb.com/api/GetSeries.php?seriesname=".concat(show);
	//document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("Overview")[0].childNodes[0].nodeValue;
	
	//document.write(xmlDoc.getElementsByTagName("Overview")[0].childNodes[0].nodeValue);
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // Otherwise, CORS is not supported by the browser.
    xhr = null;
  }
  return xhr;
}