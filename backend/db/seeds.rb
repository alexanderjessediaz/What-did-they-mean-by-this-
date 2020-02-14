Quote.destroy_all

Speaker.destroy_all

sp1 = Speaker.create(
    name: "Kyle"
)
sp2 = Speaker.create(
    name: "Damon"
)
sp3 = Speaker.create(
    name: "Ahmed"
)


Quote.create(
    text: "Leeeetttssss get it sttaaaarrtteeeeeeeeeedddd!!!!!",
    speaker: sp1
)
Quote.create(
    text: "Today I want you to think about all that you are instead of all that you are not.",
    speaker: sp3
)
Quote.create(
    text: "I'm good. The sun is out!",
    speaker: sp2
)