    //Swiper slider
    var swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000, // Change slide every 5 seconds
      },
    });
    var swiper2 = new Swiper(".bg-slider", {
        loop: true,
        spaceBetween: 30,
        thumbs: {
            swiper: swiper,
        },
    });

    //Navigation bar effects on scroll
    window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    });
    
    //menu toggle
    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");
    
    menuBtn.addEventListener("click", () => {
        navigation.classList.add("active");
    });
    
    closeBtn.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
