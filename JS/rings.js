
window.addEventListener('scroll', function(e) {

    const target =  document.querySelectorAll('.scroll')
    
    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos =  window.pageYOffset * target[index].dataset.rate;

        target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
    }

});

/* Image 1 */

function hideAll() {
    document.body.style.backgroundColor = "#988780";
    document.getElementById("maintitle").style.color = "#e3e3de";
    var sidebar = document.getElementsByClassName("maintext");
    var index = 0;
    length = sidebar.length;
    for (index; index < length; index++) {
        sidebar[index].style.color = "#e3e3de";
    }
}

function showAll() {
    document.body.style.backgroundColor = "#e3e3de";
    document.getElementById("maintitle").style.color = "#265935";
    var sidebar = document.getElementsByClassName("maintext");
    var index = 0;
    length = sidebar.length;
    for (index; index < length; index++) {
        sidebar[index].style.color = "#2B4B42";
    }
}

function hide1(x) {
    document.getElementById("l_img_1").style.opacity = "0";
    hideAll();
}

function show1(x){
    document.getElementById("l_img_1").style.opacity = "1";
    showAll();
}

/* Image 2 */

function hide2(x) {
    document.getElementById("l_img_2").style.opacity = "0";
    hideAll();
}

function show2(x){
    document.getElementById("l_img_2").style.opacity = "1";
    showAll();
}

/* Image 3 */

function hide3(x) {
    document.getElementById("l_img_3").style.opacity = "0";
    hideAll();
}

function show3(x){
    document.getElementById("l_img_3").style.opacity = "1";
    showAll();
}

/* Image 4 */

function hide4(x) {
    document.getElementById("l_img_4").style.opacity = "0";
    hideAll();
}

function show4(x){
    document.getElementById("l_img_4").style.opacity = "1";
    showAll();
}

/* Image 5 */

function hide5(x) {
    document.getElementById("l_img_5").style.opacity = "0";
    hideAll();
}

function show5(x){
    document.getElementById("l_img_5").style.opacity = "1";
    showAll();
}

/* Image 6 */

function hide6(x) {
    document.getElementById("l_img_6").style.opacity = "0";
    hideAll();
}

function show6(x){
    document.getElementById("l_img_6").style.opacity = "1";
    showAll();
}

/* Image 7 */

function hide7(x) {
    document.getElementById("r_img_1").style.opacity = "0";
    hideAll();
}

function show7(x){
    document.getElementById("r_img_1").style.opacity = "1";
    showAll();
}

/* Image 8 */

function hide8(x) {
    document.getElementById("r_img_2").style.opacity = "0";
    hideAll();
}

function show8(x){
    document.getElementById("r_img_2").style.opacity = "1";
    showAll();
}

/* Image 9 */

function hide9(x) {
    document.getElementById("r_img_3").style.opacity = "0";
    hideAll();
}

function show9(x){
    document.getElementById("r_img_3").style.opacity = "1";
    showAll();
}

/* Image 10 */

function hide10(x) {
    document.getElementById("r_img_4").style.opacity = "0";
    hideAll();
}

function show10(x){
    document.getElementById("r_img_4").style.opacity = "1";
    showAll();
}




