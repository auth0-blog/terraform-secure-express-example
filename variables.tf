variable "auth0_domain" {
  description = "The auth0 domain"
}

variable "auth0_client_id" {
  description = "Client_id of an API with access to the Auth0 Management API"
}

variable "auth0_client_secret" {
  description = "The secret for the same API"
}

variable "auth0_admin_user_password" {}

variable "terraform-express-api-identifier" {
  type    = string
  default = "https://terraform-express-resource-server"
}
