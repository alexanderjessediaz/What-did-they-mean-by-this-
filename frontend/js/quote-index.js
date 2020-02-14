const main = document.querySelector("main")
fetch("http://localhost:3001/quotes")
    .then(response => response.json())
    .then(quotes => {
        quotes.map(quote => {

            const content = document.createElement("h2")
            content.setAttribute(name="class", value="card")

            // quoteSpeaker = `${quote.speaker.name}:`
            // quoteText.innerText = `"${quote.text}"`
            // main.append(quoteSpeaker,quoteText)

            content.innerHTML = `
                <div class="card">
                    <a class="card_title" href='speaker-show.html?id=${quote.speaker.id}'>${quote.speaker.name}:</a>
                    <p>"${quote.text}"</p>
                    <a class="button" href='quote-show.html?id=${quote.id}'>find the true meaning!</a>
                </div
            `

            main.appendChild(content)
        
            })

        })
   