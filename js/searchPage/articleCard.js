const articleCard = `
<div class="article-card">
<a href="" class="article-link">
  <div class="row">
    <div class="col-md-4">
      <img src="" alt="...">
    </div>
    <div class="col-md-8">
      <h4></h4>
      <p></p>
      <time datetime=""></time>
    </div>
  </div>
</a>
</div>
`

class ArticleCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = articleCard;

        this.querySelector('img').setAttribute('src', this.getAttribute('src'))
        this.querySelector('a').setAttribute('href', this.getAttribute('href'))
        this.querySelector('h4').innerText = this.getAttribute('title')
        this.querySelector('p').innerText = this.getAttribute('excerpt')
        this.querySelector('time').innerText = this.getAttribute('date')
        this.querySelector('time').setAttribute('datetime', this.getAttribute('date'))
    }
}

window.customElements.define('article-card', ArticleCard);