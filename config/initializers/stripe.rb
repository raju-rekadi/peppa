Rails.configuration.stripe = {
  :publishable_key => 'pk_test_b7rFGDulZ60u34alWArXc7Jp003hSjCv9S',
  :secret_key      => 'sk_test_H08zkmnIznSmJXsoIo4lQoNq00wffz5m5T'
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]