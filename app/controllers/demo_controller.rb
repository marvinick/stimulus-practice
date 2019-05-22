class DemoController  < ApplicationController
  def demo
    @comments = Comment.all
    @comment = Comment.new(comment_params)
  end
end
