module Api
  module V1
    class QuestionsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        @questions = if params[:tags].present? && params[:tags] != 'All'
                       Question.where(tag: params[:tags])
                     else
                       Question.all
                     end
        render json: @questions.order(:created_at), status: :ok
      end

      def create
        @question = Question.new(question_params)
        if @question.save
          render json: { data: @question, status: :success }, status: :ok
        else
          render json: { data: @question.errors.full_messages, status: 'failure' }, status: :unprocessable_entity
        end
      end

      def update
        question.update!(question_params)
        render json: question, status: :ok
      end

      private

      def question
        @question ||= Question.find(params[:id])
      end

      def question_params
        params
          .require(:question)
          .permit(:title, :tag, :like_count, :dislike_count)
      end
    end
  end
end
