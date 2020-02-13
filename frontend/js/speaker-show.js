const searchParams = new URLSearchParams(document.location.search)
const query = searchParams.get('id')
const speakerUrl = `http://localhost:3001/speakers/${query}`
const mainHead = document.querySelector('h1')

fetch(speakerUrl)
    .then(response => response.json())
    .then(speaker => {

        mainHead.innerText = speaker.name 

        speaker.quotes.map(quote => {
            const speakerQuote = document.createElement('p')

            speakerQuote.innerHTML = `<a href='quote-show.html?id=${quote.id}'>${quote.text}</a>` 

            document.body.append(speakerQuote)
        })

    })


