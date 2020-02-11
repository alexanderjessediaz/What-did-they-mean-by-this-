const searchParams = new URLSearchParams(document.location.search)
const query = searchParams.get('id')
const speakerUrl = `http://localhost:3001/speakers/${query}`

fetch(speakerUrl)
    .then(response => response.json())
    .then(speaker => {
        const speakerName = document.createElement('h1')
        
        console.log(speaker)
        speakerName.innerText = speaker.name 

        document.body.append(speakerName)

        speaker.quotes.map(quote => {
            const speakerQuote = document.createElement('p')

            speakerQuote.innerHTML = `<a href='quote-show.html?id=${quote.id}'>${quote.text}</a>` 

            document.body.append(speakerQuote)
        })

    })


