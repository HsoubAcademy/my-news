const articleHeader = `
<div class="container">
    <div class="header-category">
        <span class="me-1"></span> | <span class="ms-1"></span>
    </div>
    <div class="header-title">
        <h2>
            
        </h2>
    </div>
</div>
`

class ArticleHeader extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = articleHeader

        this.querySelector(".me-1").innerText = this.getAttribute('category')
        this.querySelector(".ms-1").innerText = this.getAttribute('subject')
        this.querySelector("h2").innerText = this.getAttribute('title')
    }
}

window.customElements.define('article-header', ArticleHeader);