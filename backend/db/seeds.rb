# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Speaker.destroy_all

gw = Speaker.create(
    name: "George Washington"
)

Quote.create(
    text: "My mother was the most beautiful woman I ever saw.",
    speaker: gw
)