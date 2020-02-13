require "rest_client"
class QuotesController < ApplicationController

    def index
        @quotes = Quote.all 
        render json: @quotes, include: :speaker
    end

    def show
        @quote = Quote.find(params[:id])
        # @r = RestClient::Request.execute(method: :post, url: 'https://api.deepai.org/api/text-generator', timeout: 600,
        #     headers: {'api-key' => '16855905-0bfc-48c8-ab7a-0aba3ea45829'},
        #     payload: { 'text' => @quote.text }
        # )
        
        @r = {output: "Another test quote to add new insights (in addition to a bunch of previous ones) that you don't really need to think about, because that's a new idea.\n\nWhat is a test?\n\nIt's an idea. It's an idea that a piece of software is tested in. I don't mean testing in a textbook or otherwise.\n\nOne way to do that?\n\nI don't pretend to have all of the ideas in my head. If you do things for a programmer like an IDL, or a Web Developer, then you'll use them.\n\nHow's a tool to make a simple app?\n\nI don't know, but one big tool at a time, it's probably pretty intuitive and useful for a developer: to add your idea.\n\nThe idea is:\n\nCreate a service in your code.\n\nUse an interface:\n\nCreate a database.\n\nCreate a database for logging, a new user account, and an app.\n\nDon't be a developer, it'll probably really take you two hours to install on your computer, a very powerful UI, and a few minutes to do it before you're ready to start working on your project.\n\nThe idea is,\n\nMake a web app. It's a little crazy, it's incredibly simple.\n\nIt's also a system – you will be able to add features using your new system.\n\nUse a little part of it for example. In my example in a notebook, we're going to have a new folder. This folder, if it contains things but everything will have a single file named 'dub' called 'aub'. This folders will have a single .dub named 'dub'.\n\nWe'll keep testing of our app until we're ready to start testing it.\n\nWe've got a bunch of ideas about how to write a simple game for a simple server side app. They're all related to this goal, and all used to show up. We know it's one thing, and it's actually one thing – you will have a beautiful game at some point. There's no reason it doesn't work so well before the end of the project, but we've got it."}
        render json: { quote: @quote, api_text: @r}, include: :speaker
    end 

    def create
        @quote = Quote.create(
            text: params[:text],
            speaker_id: params[:speaker_id]
        )
        redirect_to "http://localhost:3000/"
    end

    def update
        @quote = Quote.find(params[:id])
        @quote.update(text: params[:text])
        redirect_to "http://localhost:3000/quote-index.html"
    end

    def destroy
        @quote = Quote.find(params[:id])
        @quote.destroy
        redirect_to "http://localhost:3000/quote-index.html"
    end
    

end
