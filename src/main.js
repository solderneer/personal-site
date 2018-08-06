// Simple handler to update post data
var httpRequest = new XMLHttpRequest();
var htmlParser = new DOMParser();

if(!httpRequest) {
    console.log("Cannot create an XMLHTTP instance");
}

httpRequest.onreadystatechange = updatePosts;
httpRequest.open('GET', ghost.url.api('posts', {limit: 2}));
httpRequest.send();

function updatePosts() {
    if(httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200) {
            // console.log(httpRequest.responseText);
            res = JSON.parse(httpRequest.responseText);
            document.querySelector('#blog-post-header-1').innerText = res.posts[0].title;
            document.querySelector('#blog-post-header-2').innerText = res.posts[1].title;
            
            var post1_dom = htmlParser.parseFromString(res.posts[0].html, 'text/html');
            var post2_dom = htmlParser.parseFromString(res.posts[1].html, 'text/html');

            // TODO: write a better summarization thingy
            document.querySelector('#blog-post-text-1').innerText = post1_dom.querySelector('p').innerText.substr(0, 200) + '...';
            document.querySelector('#blog-post-text-2').innerText = post2_dom.querySelector('p').innerText.substr(0, 200) + '...';

            document.querySelector('#blog-post-link-1').href = "https://blog.solderneer.me/" + res.posts[0].slug + '/'
            document.querySelector('#blog-post-link-2').href = "https://blog.solderneer.me/" + res.posts[1].slug + '/'

        } else {
            console.log("An error has occurred with the response")
        }
    }
}