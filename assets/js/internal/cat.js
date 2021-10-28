function ajax_get(e, t) {
    var a = new XMLHttpRequest;
    a.onreadystatechange = function () {
        if (4 == a.readyState && 200 == a.status) {
            console.log("responseText:" + a.responseText);
            try {
                var e = JSON.parse(a.responseText)
            } catch (e) {
                return void console.log(e.message + " in " + a.responseText)
            }
            t(e)
        }
    },
    a.open("GET", e, !0),
    a.send()
}
ajax_get("https://api.thecatapi.com/v1/images/search?size=small", function (e) {
    var t = '<img alt="Cute cat image courtesy of Cats as a Service" class="img-fluid rounded" src="' + e[0].url + '">';
    document.getElementById("cat-image").innerHTML = t
});
