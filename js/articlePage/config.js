import {API_URL} from '../urls.js'

async function articleBodyFetch() {
    let response = await fetch(API_URL + 'articles')
    let data = await response.json()
    console.log(data);
    // جلب بيانات العنوان والفئة في المقالة
    
    const articleHeader = document.createElement('article-header')

    articleHeader.setAttribute('category', data.category)
    articleHeader.setAttribute('subject', data.subject)
    articleHeader.setAttribute('title', data.title)

    document.getElementById("article-header").append(articleHeader)


    // جلب بيانات ترويسة المقالة والتي هي الصورة والعنوان الجانبي والتاريخ

    const articleBodyHeader = document.createElement('article-body-header')

    articleBodyHeader.setAttribute('src', data.img_uri)
    articleBodyHeader.setAttribute('subtitle', data.subtitle)
    articleBodyHeader.setAttribute('date', moment(data.date).format('dddd') + '، ' + moment(data.date).format('LL'))

    document.getElementById("article-body-header").append(articleBodyHeader)


    // جلب بيانات جسم الصفحة الجزء الأول والثاني

    const articleBody = document.createElement('article-body')

    articleBody.setAttribute('article_part_1', data.article_part_1)
    articleBody.setAttribute('article_part_2', data.article_part_2)

    document.getElementById('article-body').append(articleBody)


    // جلب وإظهار بيانات الكلمات المفتاحية

    data.keywords.map(keyword => {
        const element = document.createElement('span')
        element.classList.add('keyword', 'me-3')
        element.innerText = keyword
        document.getElementById('keywords').append(element)
    })


    // جلب بيانات التعليقات

    data.comments.map(comment => {
        const commentCard = document.createElement('comment-card');

        commentCard.setAttribute('user_img', comment.user_img)
        commentCard.setAttribute('user_name', comment.user_name)
        commentCard.setAttribute('commentText', comment.text)

        document.getElementById('comment-cards').append(commentCard)
    })


    // جلب بيانات المقالات ذات الصلة

    data.related_articles.map(article => {
        const relatedArticles = document.createElement('article-component');

        relatedArticles.setAttribute('src', article.img_uri)
        relatedArticles.setAttribute('title', article.title)
        relatedArticles.setAttribute('category', article.category)
        relatedArticles.classList.add('col-sm-4')

        document.getElementById('related-articles').append(relatedArticles)
    })
}


async function suggestedArticleFetch() {
    let response = await fetch(API_URL + 'suggested-articles')
    let data = await response.json()

    console.log(data);
    // جلب بيانات القصص المقترحة

    data.map(article => {
        const suggestedArticle = document.createElement('suggested-article')

        suggestedArticle.setAttribute('src', article.img_uri)
        suggestedArticle.setAttribute('href', article.link)
        suggestedArticle.setAttribute('title', article.title)

        document.getElementById('stories').append(suggestedArticle)
    })
}


async function mostReadArticles() {
    let response = await fetch(API_URL + 'most-read')
    let data = await response.json()

    data.map(article => {
        const mostReadedArticle = document.createElement('most-read-article');

        mostReadedArticle.setAttribute('src', article.img_uri)
        mostReadedArticle.setAttribute('title', article.title)
        mostReadedArticle.setAttribute('date', moment(data.date).format('LL'))
        mostReadedArticle.setAttribute('href', article.link)

        document.getElementById('most-read').append(mostReadedArticle)
    })
}


articleBodyFetch();
suggestedArticleFetch();
mostReadArticles();