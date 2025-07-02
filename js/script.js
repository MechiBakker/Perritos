if (window.innerWidth >= 768) {
  window.addEventListener('load', function(){
    let opciones = {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: ".puntos",
      rewind: true,
      arrows: {
        prev: ".prev",
        next: ".next"
      }
    };
  
    slider = new Glider(document.querySelector(".lista"), opciones);
    let actual = 0;
    const conteo = slider.track.childElementCount;
    let timeout = null;
    slider.scrollItem(actual);
    function deslizar(milisegs){
      timeout = setTimeout(()=>{
        if(actual<conteo-1) actual++;
        else actual = 0;
        slider.scrollItem(actual);
      }, milisegs);
    }
  
    slider.ele.addEventListener("glider-animated", function(){
      actual = slider.slide;
      window.clearInterval(timeout);
      deslizar(5000);
    });
  });

} if (window.innerWidth < 768) {
  window.addEventListener('load', function(){
    let opciones = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: ".puntos",
      rewind: true,
      arrows: {
        prev: ".prev",
        next: ".next"
      }
    };
  
    slider = new Glider(document.querySelector(".lista"), opciones);
    let actual = 0;
    const conteo = slider.track.childElementCount;
    let timeout = null;
    slider.scrollItem(actual);
    function deslizar(milisegs){
      timeout = setTimeout(()=>{
        if(actual<conteo-1) actual++;
        else actual = 0;
        slider.scrollItem(actual);
      }, milisegs);
    }
  
    slider.ele.addEventListener("glider-animated", function(){
      actual = slider.slide;
      window.clearInterval(timeout);
      deslizar(5000);
    });
  });  
}


document.getElementById("boton-ir-transito").onclick = function() {
    window.location.href = "https://docs.google.com/forms/d/1psmwmUdoamfKHZjbwkPfinvq_X7pGGP71w30lCrDdCk/";
  };

  document.getElementById("boton-ir-adopcion").onclick = function() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSf-7KHtM4XVTRmee_uYTcW3GlZPY6XmX1rlYN5Q6QrGmFh8-w/viewform";
  };

  const slider = document.getElementById("slider-collage");

  slider.addEventListener("scroll", () => {
    const scrollLeft = slider.scrollLeft;
    const scrollWidth = slider.scrollWidth;
    const clientWidth = slider.clientWidth;

    // Cuando llega al final
    if (scrollLeft + clientWidth >= scrollWidth - 1) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    }

    // Si querés también volver al final al llegar al principio:
    // if (scrollLeft === 0) {
    //   slider.scrollTo({ left: scrollWidth, behavior: "smooth" });
    // }
  });

    document.getElementById("logo").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

    const logo = document.getElementById("logo");

  logo.addEventListener("click", () => {
    if (window.innerWidth > 750) { // solo en desktop
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

