module Api
  module V1
    class ReviewsController < ApiController
      before_action :authenticate_user!
      # protect_from_forgery with: :null_session
      # POST /api/v1/reviews
      def create
        # REVIEW: = current_user.reviews.new(review_params)
        review = airline.reviews.new(review_params)

        if review.save
          render json: serializer(review)
        else
          render json: errors(review), status: 422
        end
      end

      # DELETE /api/v1/reviews/:id
      def destroy
        # REVIEW: = current_user.reviews.find(params[:id])
        review = Review.find(params[:id])

        if review.destroy
          head :no_content
        else
          render json: errors(review), status: 422
        end
      end

      private

      def airline
        @airline ||= Airline.find(params[:airline_id])
      end

      # Strong params
      def review_params
        params.require(:review).permit(:title, :description, :score, :airline_id)
      end

      # fast_jsonapi serializer
      def serializer(records, options = {})
        ReviewSerializer
          .new(records, options)
          .serialized_json
      end

      def errors(record)
        { errors: record.errors.messages }
      end
    end
  end
end
