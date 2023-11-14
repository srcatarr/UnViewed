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
});document.querySelector("#launch0").addEventListener("click", function() {
    window.location.href += "/app";
})

document.querySelector("#download").addEventListener("click", function() {
    window.location.href += "/download";
})

document.querySelector("#select-lang").addEventListener("change", function() {
    window.localStorage.setItem(
        "language", document.querySelector("#select-lang").value
    ); window.location.href = window.location.href.replace(
        window.location.pathname, ""
    )
})

document.querySelector("#hide-banner").addEventListener("click", function() {
    document.querySelector("#banner").style.display = "none";
    document.querySelector("#hide-banner").style.display = "none";
    document.querySelector("#show-banner").style.display = "block";
    window.localStorage.setItem("hide-banner", true);
})

if (window.localStorage.getItem("hide-banner")) {
    document.querySelector("#banner").style.display = "none";
    document.querySelector("#hide-banner").style.display = "none";
    document.querySelector("#show-banner").style.display = "block";
} else {
    document.querySelector("#banner-setter").style.display = "none";
}

document.querySelector("#show-banner").addEventListener("change", function() {
    const chckBox = document.querySelector("#show-banner");
    let p = chckBox.checked;

    if (p)
        window.localStorage.setItem("hide-banner", "");
    else
        window.localStorage.setItem("hide-banner", true);
})