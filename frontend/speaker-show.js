const searchParams = new URLSearchParams(document.location.search)
const query = searchParams.get('id')
const speakerUrl = `http://localhost:3001/speakers/${query}`
const updateCard = document.querySelector(".update-card")
const deleteCard = document.querySelector(".delete-card")
const speakerCard = document.querySelector(".speaker-card")

fetch(speakerUrl)
    .then(response => response.json())
    .then(speaker => {
        const speakerName = document.createElement('h1')
        const speakerPrompt = document.createElement("p")
        
        console.log(speaker)
        speakerName.innerText = speaker.name 
        speakerPrompt.innerText = "Edit or update this speaker's quotes"

        speakerCard.append(speakerName, speakerPrompt)

        speaker.quotes.map(quote => {
            const deleteQuote = document.createElement("h2")
            const updateQuote = document.createElement("div")
            const updateQuoteText = document.createElement("p")
            // I think a cleanish way to display all of our quotes on this

            deleteQuote.innerHTML =  `<a href='quote-show.html?id=${quote.id}'>${quote.text}</a> 
            <form method="POST" action="http://localhost:3001/quotes/${quote.id}">
            <input type="submit" value="Delete this quote"/>
            <input type="hidden" name="_method" value="delete">
            </form>`

            updateQuote.innerHTML =  `<form method="POST" action="http://localhost:3001/quotes/${quote.id}">
            <input type="text" placeholder="update this quote"/>
            <input type="submit" value="Update"/>
            <input type="hidden" name="_method" value="update">
            </form>`
            updateQuoteText.textContent = quote.text 
            // maybe this could be colored differently? We can do something similar to the home page where both the update and delete are seperated on each side of the page.
            
           

            updateCard.append(updateQuote, updateQuoteText)
            deleteCard.append(deleteQuote)
            const speakerQuote = document.createElement('p')

            speakerQuote.innerHTML = `<a href='quote-show.html?id=${quote.id}'>${quote.text}</a>` 

            document.body.append(speakerQuote)
        })

    })


