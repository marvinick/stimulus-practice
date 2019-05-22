class CommentsController < ApplicationController
  def new
  end

  def create
    @comment = Comment.create(comment_params)
  end

  def index
    @comment = Comment.new
    @comments = Comment.all

  end

  private

  def comment_params
    params.require(:comment).permit(:post)
  end
end
