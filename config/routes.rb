Nys::Application.routes.draw do
  resources :participants


  root :to => "home#index", :as => :home_page

  get "sponsors" => "home#sponsors", :as => "sponsors"

  # This line mounts Refinery's routes at the root of your application.
  # This means, any requests to the root URL of your application will go to Refinery::PagesController#home.
  # If you would like to change where this extension is mounted, simply change the :at option to something different.
  #
  # We ask that you don't use the :as option here, as Refinery relies on it being the default of "refinery"
  mount Refinery::Core::Engine, :at => '/main'
end
