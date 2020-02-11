class QuotesController < ApplicationController

    def index
        @quotes = Quote.all 
        render json: @quotes
    end

    def show
        @quote = Quote.find(params[:id])
        render json: @quote
    end

    def create
        @quote = Quote.create(
            text: params[:text],
            speaker_id: params[:speaker]
        )
    end

end
