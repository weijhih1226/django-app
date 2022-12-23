document.addEventListener('DOMContentLoaded' , function(){
    // fetch(document.querySelector("#rain>img").src, {method: 'get'})
    // .then(function(response) {
    //     console.log(response)
    // }).catch(function(err) {
    //     console.log(err)
    // })

    // var xhr = new XMLHttpRequest();

    // xhr.open('GET', homeCWB + "rainfall/" + filenameG + ".QZJ8.jpg");
    // // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    // // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.setRequestHeader('Content-Type', 'image/jpeg');
    // xhr.responseType = "image";
    // xhr.send(null);
    // console.log(xhr)
    // try { // statements to try
    //     document.querySelector("#rain>img").src = homeCWB + "rainfall/" + filenameG + ".QZJ81.jpg";
    // }
    // catch (e) {
    //     console.log(e); // 將例外傳至例外處理機制
    // }
    

    // console.log(NetPing(document.querySelector("#rain>img").src))
    // console.log(getHttpRequest(document.querySelector("#rain>img").src))
})

// function CheckStatus(url){
//     xh = new ActiveXObject("Microsoft.XMLHTTP")
//     xh.open("HEAD" , url , false)
//     xh.send()
//     return XMLHTTP.status==200
// }

// function NetPing(){
//     return CheckStatus(url);
// }

function getHttpRequest(url) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET' , url , true)
    // xhr.onload = function() {
    //     if (xhr.status >= 200 && xhr.status < 400) {
    //       console.log(xhr.responseText);    // Success!
    //     }
    // };
    xhr.send(null)
    return xhr;
}


function NetPing(url) {
    $.ajax({
        type: "GET",
        cache: false,
        url: url,
        data: "",
        success: function() {
            Done(1);
        },
        error: function() {
            Done(0);
        }
    });
}