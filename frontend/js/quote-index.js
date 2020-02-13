const quoteList = document.querySelector(".quote-list")
fetch("http://localhost:3001/quotes")
    .then(response => response.json())
    .then(quotes => {
        quotes.map(quote => {
            quoteText = document.createElement("article")
            quoteSpeaker = document.createElement("h1")

            quoteSpeaker = `${quote.speaker.name}:`
            quoteText.innerText = `"${quote.text}"`
            
            quoteList.append(quoteSpeaker,quoteText)
            
            })

        })
   