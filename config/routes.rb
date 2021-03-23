Rails.application.routes.draw do
  root 'static_pages#home'
  get 'static_pages/help'

  resource :time_attack, only: [:show]
end
