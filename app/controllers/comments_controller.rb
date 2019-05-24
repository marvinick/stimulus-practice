class CommentsController < ApplicationController

  def create
    @comment = Comment.create(comment_params)
    render @comment
  end

  def index
    @comments = Comment.all
  end

  private

  def comment_params
    params.require(:comment).permit(:post)
  end
end
 
