
Speaker.destroy_all
Quote.destroy_all

gw = Speaker.create(
    name: "George Washington"
)

Quote.create(
    text: "My mother was the most beautiful woman I ever saw.",
    speaker: gw
)