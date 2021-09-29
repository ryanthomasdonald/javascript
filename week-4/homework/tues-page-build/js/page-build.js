function createDivWithStyles(classStyles){
    var div = document.createElement("div");
    div.setAttribute("class", classStyles);
    return div
}
function createAnchor(classStyles, href, innerText){
    var anchor = document.createElement("a");
    a.setAttribute("class", classStyles);
    a.setAttribute("href", href);
    a.textContent = innerText;
    return anchor
}
function createNavbar(classStyles){
    var nav = document.createElement("nav");
    nav.setAttribute("class", classStyles);
    return nav;
}
function createUL(classStyles){
    var ul = document.createElement("ul");
    ul.setAttribute("class", classStyles);
    return ul;
}