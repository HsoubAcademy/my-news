const slider = `
<div class="carousel-item">
    <a href="">
    <img src="" class="d-block w-100" alt="...">
    <div class="carousel-text">
        <h3></h3>
    </div>
    </a>
</div>
`

class SliderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = slider;
        this.querySelector('h3').innerText = this.getAttribute('text')
        this.querySelector('img').setAttribute('src', this.getAttribute('src'))
        this.querySelector('a').setAttribute('href', this.getAttribute('href'))
    }
}

window.customElements.define('slider-component', SliderComponent)