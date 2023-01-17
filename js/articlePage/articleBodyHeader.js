const articleBodyHeader = `
<div class="article-img">
    <img src="./images/picture-14.jpg" alt="...">
</div>
<div class="article-subtitle">
    <span>لوريم إيبسوم هو ببساطة نص شكلي</span>
</div>
<div class="article-datetime">
    <time datetime="01-01-2023">الأحد 01/01/2023</time>
</div>
`

class ArticleBodyHeader extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = articleBodyHeader
        this.querySelector("img").setAttribute('src',  this.getAttribute('src'))
        this.querySelector("span").innerText = this.getAttribute('subtitle')
        this.querySelector("time").innerText = this.getAttribute('date')
        this.querySelector("time").setAttribute('datetime', this.getAttribute('date'))
    }
}

window.customElements.define('article-body-header', ArticleBodyHeader)