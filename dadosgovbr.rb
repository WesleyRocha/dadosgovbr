require 'sinatra'
require 'erb'

get '/' do
  response.headers["Access-Control-Allow-Origin"] = "*"
  response.headers["Access-Control-Allow-Methods"] = "GET, POST, HEAD"
  body erb :index 
end