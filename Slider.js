import React from 'react'
import './Slider.css'

function Slider() {
    const slideIndex = 1;

    const plusSlides = (n) =>{
        showSlides(slideIndex +=n);
    };

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    };

    const showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }

    return (
        <div className='slider__container'>
            <div className='mySlide fade'>
                <img className='slider__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Xiaomi/Phase-4/9A/D18532030_Jupiter2020_Phase4_Redmi9A_DesktopHero_1500x600._CB416344028_.jpg" alt="amazon img" />
            </div>

            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Xiaomi/Phase-4/9A/D18532030_Jupiter2020_Phase4_Redmi9A_DesktopHero_1500x600._CB416344028_.jpg" alt="amazon img" />
                <div class="text">Caption Two</div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Xiaomi/Phase-4/9A/D18532030_Jupiter2020_Phase4_Redmi9A_DesktopHero_1500x600._CB416344028_.jpg" alt="amazon img" />
                <div class="text">Caption Three</div>
            </div>
            <a class="prev" onclick={() => plusSlides(1)}>&#10094;</a>
            <a class="next" onclick={plusSlides}>&#10095;</a>
        </div>
    )
}

export default Slider
