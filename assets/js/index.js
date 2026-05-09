let JsAll = (e)=> document.querySelectorAll(e),
    Js = (e)=> document.querySelector(e),
listLink = JsAll(".nav-links a");

function limparList() {
    listLink.forEach(item => {
        if (item.className == 'this') item.classList.remove("this");
    });
}

listLink.forEach(btn => {
    btn.addEventListener('click', function(e) {
        limparList();
        e.preventDefault();
        var tag = btn.getAttribute("href").replace("#", "");
        document.title = (tag == "inicio") ? "Portfólio | Tomas Manuel" : tag.replace(tag.charAt(0), tag.charAt(0).toLocaleUpperCase()) + ' | Tomas Manuel';
        Js(btn.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        btn.classList.add("this");
    });
});

console.clear();
