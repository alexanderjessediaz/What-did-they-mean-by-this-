const searchParams = new URLSearchParams(document.location.search)
const query = searchParams.get('id')
const speakerUrl = `http://localhost:3001/speakers/${query}`

fetch(speakerUrl)
    .then(response => response.json())
    .then(speakers => {
        console.log(speakers)
    })
