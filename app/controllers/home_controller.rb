class HomeController < ApplicationController
  layout "default"

  def index
  end

  def sponsors
    @page = nil
    @path = "sponsors"
  end
end
