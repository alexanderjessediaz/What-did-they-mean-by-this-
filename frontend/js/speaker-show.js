const searchParams = new URLSearchParams(document.location.search)
const query = searchParams.get('id')
const speakerUrl = `http://localhost:3001/speakers/${query}`
const speakerObject = document.querySelector("main")
const title = document.querySelector("h1")


fetch(speakerUrl)
    .then(response => response.json())
    .then(speaker => {

        title.innerText = `Edit or delete ${speaker.name}'s quotes!`
            
        speaker.quotes.map(quote => {

            const updateContainer = document.createElement("div")
            const deleteQuote = document.createElement("h2")
        
            deleteQuote.innerHTML =  `
                <div class="card delete">
                    <p>Quote:"${quote.text}"</p>
                    <p>Do you want to delete this?</p>
                    <form method="POST" action="http://localhost:3001/quotes/${quote.id}">
                        <input class="button" type="submit" value="Delete this quote"/>
                        <input type="hidden" name="_method" value="delete">
                    </form> 
                </div>
            `

            updateContainer.innerHTML = `
                <div class="card update">
                    <h2>Quote:"${quote.text}"</h2>
                    <form method="POST" action="http://localhost:3001/quotes/${quote.id}">
                        <textarea name="text" rows="8" cols="42"></textarea>
                        <input class="button" type="submit" value="Update this speaker's quote">
                        <input type="hidden" name="_method" value="put">
                    </form>
                </div>
            `

            speakerObject.append(updateContainer, deleteQuote)
         
        })

    })


