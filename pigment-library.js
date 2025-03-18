/*document.addEventListener("DOMContentLoaded", function(){
    const firstimage = document.getElementById("pigment");

    function handleScroll(){
        const imagePosition = firstimage.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (imagePosition < screenHeight * 0.8) {
            firstimage.classList.add("show");
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener ("scroll", handleScroll);

});*/

document.addEventListener("DOMContentLoaded", function () {
    const firstimage = document.getElementById("pigment");

    firstimage.classList.add("show");

    void firstimage.offsetWidth;

    firstumage.classList.add("show");
});