const articleBody = `
<article class="article_part_1">

</article>
<section class="suggested-stories">
    <h2 class="section-title">قصص مقترحة</h2>
    <div class="stories" id="stories">
    </div>
</section>
<article class="article_part_2">

</article>
<div class="keywords" id="keywords">

</div>
`

class ArticleBody extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = articleBody
        this.querySelector(".article_part_1").innerHTML = this.getAttribute('article_part_1')
        this.querySelector(".article_part_2").innerHTML = this.getAttribute('article_part_2')
    }
}

window.customElements.define('article-body', ArticleBody);