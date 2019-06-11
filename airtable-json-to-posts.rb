#!/usr/bin/env ruby

require 'json'
require 'pry'

file = File.read('daily-wins.json')
data_hash = JSON.parse(file)
data_hash['records'].each do |record|
  fields = record['fields']
  %x( hugo new fields['Win'] )
  binding.pry
end
