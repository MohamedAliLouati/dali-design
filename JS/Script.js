var xReq = new XMLHttpRequest();
xReq.open("GET", "../JSON/Works.json", true);
xReq.onload = function () {
    w = JSON.parse(xReq.responseText);
    console.log(w);
    works = "";
    for (let i = 0; i < w.length; i++) {
        works =
            works +
            "<div class='work col-sm-12 col-md-12 col-lg-2 col-xl-2'><a href='FichePortfilio.html?Titre={$"
            + w[i].Titre + "}' ><img src='Image/" +
            w[i].Img +
            "' alt=''></a><div class='titreWork'>" +
            w[i].Titre +
            "</div><div class='desc'>" +
            w[i].Desc +
            "</div></div>";
    }
    document.querySelector(".BoxWorks").innerHTML = works;
};
xReq.send();

var xReq1 = new XMLHttpRequest();
xReq1.open("GET", "../JSON/Links.json", true);
xReq1.onload = function () {
    l = JSON.parse(xReq1.responseText);
    links = "";
    for (let i = 0; i < l.length; i++) {
        links =
            links +
            "<div class='BOX'><a href='" +
            l[i].link +
            "' target='_blank' alt=''>" +
            l[i].icon +
            "</a></div>";
    }
    document.querySelector(".BOXCONTACT").innerHTML = links;
};
xReq1.send();

function PagePortfolio() {
    myURL = new URL(window.location.href);
    s = myURL.search;
    titre = s.substring(s.indexOf('$') + 1, s.indexOf('}')).replaceAll('%20', ' ');
    var xReq2 = new XMLHttpRequest();
    xReq2.open("GET", "../JSON/Portfolio.json", true);
    xReq2.onload = function () {
        p = JSON.parse(xReq2.responseText);
        let i = -1
        do {
            i++;
        } while (i < p.length && p[i].Titre != titre);
        if (p[i].Titre == titre) {
            document.querySelector(".container").innerHTML = "<img src='Image/" + p[i].Img + "' alt=''>";
        }
    };
    xReq2.send();
}
