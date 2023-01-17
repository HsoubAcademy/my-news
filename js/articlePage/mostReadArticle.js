const mostReadArticle = `
<a href="" class="article-link">
<div class="most-read-article">
  <img src="" alt="...">
  <div class="most-read-text">
    <h4 class="article-title">
      
    </h4>
    <time datetime=""></time>
  </div>
</div>
</a>
`

class MostReadedArticle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = mostReadArticle;

        this.querySelector('img').setAttribute('src', this.getAttribute('src'))
        this.querySelector('a').setAttribute('href', this.getAttribute('href'))
        this.querySelector('h4').innerText = this.getAttribute('title')
        this.querySelector('time').innerText = this.getAttribute('date')
        this.querySelector('time').setAttribute('datetime', this.getAttribute('date'))
    }
}

window.customElements.define('most-read-article', MostReadedArticle);