const commentCard = `
<div class="comment-card">
<div class="row">
  <div class="col-lg-2 col-3">
    <div class="user-photo">
      <img src="" alt="...">
    </div>
  </div>
  <div class="col-lg-10 col-9">
    <div class="comment-text">
      <span class="user-name">
      
      </span>
      <p>

      </p>
    </div>
  </div>
</div>
</div>
`

class CommentCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = commentCard;

        this.querySelector('img').setAttribute('src', this.getAttribute('user_img'))
        this.querySelector('span').innerText = this.getAttribute('user_name')
        this.querySelector('p').innerText = this.getAttribute('commentText')
    }
}

window.customElements.define('comment-card', CommentCard);