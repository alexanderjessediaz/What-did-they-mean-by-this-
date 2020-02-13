console.log("hih")

fetch("http://localhost:3001/quotes")
    .then(response => response.json())
    .then(quotes => {
        console.log(quotes)
        quotes.map(quote => {
            const quoteText = document.createElement("h2")
            const form = document.createElement("form")

            quoteText.innerHTML =  `<a href='quote-show.html?id=${quote.id}'>${quote.text}</a> 
            <form method="POST" action="http://localhost:3001/quotes/${quote.id}">
            <input type="submit" value="Delete"/>
            <input type="hidden" name="_method" value="delete">
            </form>
            `

            document.body.appendChild(quoteText)

        })
    })