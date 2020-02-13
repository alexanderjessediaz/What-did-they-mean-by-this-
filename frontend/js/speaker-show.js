const searchParams = new URLSearchParams(document.location.search)
const query = searchParams.get('id')
const speakerUrl = `http://localhost:3001/speakers/${query}`
const speakerCard = document.querySelector(".speaker-card")


fetch(speakerUrl)
    .then(response => response.json())
    .then(speaker => {
        const speakerName = document.createElement('h1')
        const speakerPrompt = document.createElement("p")
        
        speakerName.innerText = speaker.name 
        speakerPrompt.innerText = "Edit or update this speaker's quotes"

        speakerCard.append(speakerName, speakerPrompt)

        speaker.quotes.map(quote => {
            console.log(quote)
            const deleteQuote = document.createElement("h2")
            const WDTMlinkableSpeakerQuote = document.createElement("p")
            const updateQuote = document.createElement("article")
            const speakerQuote = document.createElement("p")
            const WDTMlinkableSpeakerPrompt = document.createElement("p")
          

            WDTMlinkableSpeakerPrompt.textContent = "What did they mean when they said:"
            WDTMlinkableSpeakerQuote.innerHTML = `<a href='quote-show.html?id=${quote.id}'>"${quote.text}"</a>` 
            speakerQuote.textContent = `Speaker's Quote:"${quote.text}"`

            deleteQuote.innerHTML =  `<a href='quote-show.html?id=${quote.id}'>${quote.text}</a> 
                <form method="POST" action="http://localhost:3001/quotes/${quote.id}">
                <input type="submit" value="Delete this quote"/>
                <input type="hidden" name="_method" value="delete">
                </form>`

            updateQuote.innerHTML = `<form method="POST" action="http://localhost:3001/quotes/${quote.id}">
                <textarea name="text" rows="8" cols="50"></textarea>
                <input type="submit" value="Update this speaker's quote">
                <input type="hidden" name="_method" value="put">
                </form>`


                //update goes here instead of being redirected to the quote index page http://localhost:3001/quotes/4?text=hkjnk

            speakerCard.append(speakerQuote, updateQuote, deleteQuote, WDTMlinkableSpeakerPrompt,WDTMlinkableSpeakerQuote)
            
        })

    })


