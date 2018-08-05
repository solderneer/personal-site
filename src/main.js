// Simple handler to update post data
var httpRequest = new XMLHttpRequest();

if(!httpRequest) {
    console.log("Cannot create an XMLHTTP instance");
}

httpRequest.onreadystatechange = updatePosts;
httpRequest.open('GET', ghost.url.api('posts', {limit: 2}));
httpRequest.send();

function updatePosts() {
    if(httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200) {
            console.log(httpRequest.responseXML);
        } else {
            console.log("An error has occurred with the response")
        }
    }
}
