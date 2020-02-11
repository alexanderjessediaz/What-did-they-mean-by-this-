const searchParams = new URLSearchParams(document.location.search)
const query = searchParams.get('id')
const quotesUrl = `http://localhost:3001/quotes/${query}`
    

fetch(quotesUrl)
    .then(response => response.json())
    .then(quoteResponse => {
        const headText = document.createElement('h1')
        const quoteText = document.createElement('h1')
        const apiText = document.createElement('p')
        console.log(quoteResponse)


        headText.innerText = `This is what ${quoteResponse.quote.speaker.name} could have meant when they said:`
        quoteText.innerText = `"${quoteResponse.quote.text}"`
        apiText.innerText = quoteResponse.api_text.output

        document.body.appendChild(headText)
        document.body.appendChild(quoteText)
        document.body.appendChild(apiText)

    })
