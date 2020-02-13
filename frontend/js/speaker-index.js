console.log("hih")
fetch("http://localhost:3001/speakers")
    .then(response => response.json())
    .then(speakers => {
        speakers.map(speaker => {
            const speakerName = document.createElement("h2")
            speakerName.innerHTML = `<a href='speaker-show.html?id=${speaker.id}'>${speaker.name}</a>`
            document.body.appendChild(speakerName)
        })
    })
