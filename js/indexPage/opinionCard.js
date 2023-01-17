const opinionCard = `
<a href="./article.html">
    <div class="opinions-card">
        <h5></h5>
        <div class="user-info">
            <img src="" alt="...">
            <span></span>
        </div>
    </div>
</a>
`


class OpinionCard extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = opinionCard
        this.querySelector("img").setAttribute('src',  this.getAttribute('src'))
        this.querySelector("a").setAttribute('href', this.getAttribute('href'))
        this.querySelector("h5").innerText = this.getAttribute('title')
        this.querySelector("span").innerText = this.getAttribute('user_name')
    }
}

window.customElements.define('opinion-card', OpinionCard);