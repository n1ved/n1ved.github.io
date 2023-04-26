
function navbarselected(screen) {

    var colors = [
        "#1e1e1e",
        "#0000003a"
    ]
    var navlinks = document.querySelectorAll('.navlink');
    console.log(navlinks);
    navlinks.forEach(navlink => {
        var x = document.getElementById(navlink.id);
        if (navlink.id == screen) {
            x.style.color = colors[0];
        }
        else {
            x.style.color = colors[1];
        }
    });
}
