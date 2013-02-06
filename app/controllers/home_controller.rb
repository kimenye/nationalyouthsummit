class HomeController < ApplicationController

  layout "default"

  def index
  end

  def sponsors
    @title = "National Youth Summit : Sponsors of the Summit"
    @page = nil
    @path = "summit"
  end

  def partners
    @title = "National Youth Summit : Partners of the Summit"
    @page = nil
    @path = "summit"
  end

end
