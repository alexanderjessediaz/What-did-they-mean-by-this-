console.log("hih")

fetch("http://localhost:3001/quotes")
    .then(response => response.json())
    .then(quotes => {
        quotes.map(quote => {
            const quoteText = document.createElement("h2")

            quoteText.innerHTML = `<a href="quote-show.html?id=${quote.id}">${quote.text}</a> by: <a href="speaker-show.html?id=${quote.speaker.id}">${quote.speaker.name}</a>`

            document.body.appendChild(quoteText)

        })
    })