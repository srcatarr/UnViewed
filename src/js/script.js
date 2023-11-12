function getParam(name)  {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

document.querySelector("#launch").addEventListener("click", function() {
    window.location.href += "/app";
})

document.querySelector("#download").addEventListener("click", function() {
    window.location.href += "/download";
})