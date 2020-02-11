const searchParams = new URLSearchParams(document.location.search)
const query = searchParams.get('id')
const quotesUrl = `http://localhost:3001/quotes/${query}`

// const api_url = 'https://api.deepai.org/api/text-generator'
// const options = {
//     method: 'POST',
//     body: JSON.stringify({text: "testing",}),
//     headers: {
//         'api-key': '16855905-0bfc-48c8-ab7a-0aba3ea45829'
//     }
// }

// fetch(api_url,options)
//     .then(console.log("butts"))
//     .then(response => response.json())
//     .then(console.log)

    

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
