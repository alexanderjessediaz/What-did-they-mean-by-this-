console.log("hih")
fetch("http://localhost:3001/speakers")
    .then(response => response.json())
    .then(speakers => {
        speakers.map(speaker => {
            const speakerName = document.createElement("h2")
            speakerName.innerHTML = `<a href='speaker-show.html?id=${speaker.id}'>${speaker.name}</a>`
            document.body.appendChild(speakerName)
            // here I think we can get creative and maybe put in some images with the speakers. 
            // one idea I have is maybe we can somehow implement a element that searches for an image based on the speakers name.
            // for instance just a google search for whatever the name of the speaker is and put it somewhere beside the name.
            //not sure if this is something worth our time, but maybe it isn't that hard to do. 
        })
    })
