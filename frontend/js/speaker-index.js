
const main = document.querySelector('main')
fetch("http://localhost:3001/speakers")
    .then(response => response.json())
    .then(speakers => {
        speakers.map(speaker => {

            const speakerName = document.createElement("h2")


            speakerName.innerHTML = `
                <div class="card">
                    <a class="card_title" href='speaker-show.html?id=${speaker.id}'>${speaker.name}</a>
                    <p>Number of quotes: ${speaker.quotes.length}
                </div>
            `
            main.appendChild(speakerName)
             
        })
    })
