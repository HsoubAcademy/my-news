import {API_URL} from './../urls.js'


async function fetchSearch() {
    let response = await fetch(API_URL + 'search-article')
    let data = await response.json()

    data.map(article => {
        const articleCard = document.createElement('article-card')

        articleCard.setAttribute('src', article.img_uri)
        articleCard.setAttribute('title', article.title)
        articleCard.setAttribute('excerpt', article.paragraph)
        articleCard.setAttribute('date', moment(parseInt(article.date)).format('dddd') + '، ' + moment(parseInt(article.date)).format('LL'))

        document.getElementById('search-articles').append(articleCard)
    })


}

fetchSearch();