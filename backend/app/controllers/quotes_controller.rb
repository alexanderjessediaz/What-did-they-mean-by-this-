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

        @r = { output: 'Irure enim veniam ullamco non. Dolor ipsum dolore laborum nostrud occaecat laboris do velit ut veniam exercitation proident qui. 
        Aliqua consequat ipsum irure tempor aliqua consectetur. Irure nisi quis ullamco sunt exercitation ex nostrud occaecat ad. 
        Sunt aliquip duis eu consequat ut aliquip culpa excepteur tempor minim cillum. Do voluptate eu ea ut. Laboris nostrud pariatur adipisicing labore. 
        Aliqua tempor fugiat officia nostrud nisi reprehenderit enim enim duis anim cupidatat veniam. 

        Nulla elit officia eiusmod commodo eiusmod excepteur adipisicing sit non officia mollit. Irure enim veniam ullamco non. Dolor ipsum dolore laborum nostrud occaecat laboris do velit ut veniam exercitation proident qui. 
        Aliqua consequat ipsum irure tempor aliqua consectetur. Irure nisi quis ullamco sunt exercitation ex nostrud occaecat ad. 
        Sunt aliquip duis eu consequat ut aliquip culpa excepteur tempor minim cillum. Do voluptate eu ea ut. Laboris nostrud pariatur adipisicing labore. 
        Aliqua tempor fugiat officia nostrud nisi reprehenderit enim enim duis anim cupidatat veniam. 

        Nulla elit officia eiusmod commodo eiusmod excepteur adipisicing sit non officia mollit.Irure enim veniam ullamco non. Dolor ipsum dolore laborum nostrud occaecat laboris do velit ut veniam exercitation proident qui. 
        Aliqua consequat ipsum irure tempor aliqua consectetur. Irure nisi quis ullamco sunt exercitation ex nostrud occaecat ad. 

        Sunt aliquip duis eu consequat ut aliquip culpa excepteur tempor minim cillum. Do voluptate eu ea ut. Laboris nostrud pariatur adipisicing labore. 
        Aliqua tempor fugiat officia nostrud nisi reprehenderit enim enim duis anim cupidatat veniam. 

        Nulla elit officia eiusmod commodo eiusmod excepteur adipisicing sit non officia mollit.Irure enim veniam ullamco non. Dolor ipsum dolore laborum nostrud occaecat laboris do velit ut veniam exercitation proident qui. 
        Aliqua consequat ipsum irure tempor aliqua consectetur. Irure nisi quis ullamco sunt exercitation ex nostrud occaecat ad. 

        Sunt aliquip duis eu consequat ut aliquip culpa excepteur tempor minim cillum. Do voluptate eu ea ut. Laboris nostrud pariatur adipisicing labore. 
        Aliqua tempor fugiat officia nostrud nisi reprehenderit enim enim duis anim cupidatat veniam. 
        Nulla elit officia eiusmod commodo eiusmod excepteur adipisicing sit non officia mollit.Irure enim veniam ullamco non. Dolor ipsum dolore laborum nostrud occaecat laboris do velit ut veniam exercitation proident qui. 
        Aliqua consequat ipsum irure tempor aliqua consectetur. Irure nisi quis ullamco sunt exercitation ex nostrud occaecat ad. 
        Sunt aliquip duis eu consequat ut aliquip culpa excepteur tempor minim cillum. Do voluptate eu ea ut. Laboris nostrud pariatur adipisicing labore. 
        Aliqua tempor fugiat officia nostrud nisi reprehenderit enim enim duis anim cupidatat veniam. 

        Nulla elit officia eiusmod commodo eiusmod excepteur adipisicing sit non officia mollit.Irure enim veniam ullamco non. Dolor ipsum dolore laborum nostrud occaecat laboris do velit ut veniam exercitation proident qui. 
        Aliqua consequat ipsum irure tempor aliqua consectetur. Irure nisi quis ullamco sunt exercitation ex nostrud occaecat ad. 

        Sunt aliquip duis eu consequat ut aliquip culpa excepteur tempor minim cillum. Do voluptate eu ea ut. Laboris nostrud pariatur adipisicing labore. 
        Aliqua tempor fugiat officia nostrud nisi reprehenderit enim enim duis anim cupidatat veniam. 
        Nulla elit officia eiusmod commodo eiusmod excepteur adipisicing sit non officia mollit.Irure enim veniam ullamco non. Dolor ipsum dolore laborum nostrud occaecat laboris do velit ut veniam exercitation proident qui. 
        Aliqua consequat ipsum irure tempor aliqua consectetur. Irure nisi quis ullamco sunt exercitation ex nostrud occaecat ad. 
        Sunt aliquip duis eu consequat ut aliquip culpa excepteur tempor minim cillum. Do voluptate eu ea ut. Laboris nostrud pariatur adipisicing labore. 
        Aliqua tempor fugiat officia nostrud nisi reprehenderit enim enim duis anim cupidatat veniam. 
        
        Nulla elit officia eiusmod commodo eiusmod excepteur adipisicing sit non officia mollit.'}
        
        # JSON.parse(@r)

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
        @quote = Quote.find(parasms[:id])
        @quope.update(text: "text", quote: @quote)
        redirect_to "http://localhost:3000/html/quote-index.html"
    end

    def destroy
        @quote = Quote.find(params[:id])
        @quote.destroy
        redirect_to "http://localhost:3000/html/quote-index.html"
    end
    

end
