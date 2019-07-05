#!/usr/bin/env ruby
require 'vips'
require 'pry'

puts `vips --version` # vips-8.6.2-Wed Jan 31 20:39:14 UTC 2018

test_img = '../static/img/mies-plano-winter.jpg'

img = Vips::Image.new_from_file(test_img)
img = img.invert
test_xform_filename = File.basename( test_img ).gsub( /.jpg/, "-invert.jpg" )
img.write_to_file test_xform_filename
puts "wrote #{test_xform_filename}"
puts `file #{test_xform_filename}`
