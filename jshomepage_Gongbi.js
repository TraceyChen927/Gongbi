document.addEventListener("DOMContentLoaded", function(){
    const firstimage = document.getElementById("first-image");

    function handleScroll(){
        const imagePosition = firstimage.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (imagePosition < screenHeight * 0.8) {
            firstimage.classList.add("show");
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener ("scroll", handleScroll);

});