Rails.application.routes.draw do
  root 'static_pages#home'
  get 'static_pages/help'

  namespace :game do
    root 'games#index'
    resources :line_operations, only: [:index]
  end
end
