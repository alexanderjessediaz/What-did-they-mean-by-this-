class SpeakersController < ApplicationController

    def index
        @speakers = Speaker.all 
        render json: @speakers
    end

    def show
        @speaker = Speaker.find(params[:id])
        render json: @speaker, include: :quotes
    end

    def create
        @speaker = Speaker.create(
            name: params[:name]
        )
        redirect_to "http://localhost:3000/"
    end

end
