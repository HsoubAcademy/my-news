const swiperSlide = `
<a class="article-link">
    <div class="slide-img">
        <img alt="...">
        <i class="fa-solid fa-play"></i>
    </div>
    <div class="slide-text">
        <h5 class="article-title"></h5>
    </div>
</a>
`


class SwiperSlide extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = swiperSlide;
        this.classList.add("swiper-slide")
        this.querySelector("img").setAttribute('src',  this.getAttribute('src'))
        this.querySelector("a").setAttribute('href', this.getAttribute('href'))
        this.querySelector("h5").innerText = this.getAttribute('title')
    }
}

window.customElements.define('swiper-slide', SwiperSlide);