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
            console.log(httpRequest.responseText);
            res = JSON.parse(httpRequest.responseText);
            document.querySelector('#blog-post-header-1').innerText = res.posts[0].title;
            document.querySelector('#blog-post-header-2').innerText = res.posts[1].title;
            
            var post1_text = res.posts[0].plaintext;
            var post2_text = res.posts[1].plaintext;

            document.querySelector('#blog-post-text-1').innerText = post1_text.substr(0, 100);
            document.querySelector('#blog-post-text-2').innerText = post2_text.substr(0, 100);

        } else {
            console.log("An error has occurred with the response")
        }
    }
}