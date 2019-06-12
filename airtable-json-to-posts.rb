#!/usr/bin/env ruby

require 'erb'
require 'json'
require 'pry'

# setup:
# bundle install
# extract records from Airtable: 
# curl "https://api.airtable.com/v0/URBASE/til?maxRecords=100&view=learnings" -H "Authorization: Bearer YOUR_TOKEN" > til.json
# bundle exec SCRIPT til.json

class Record
  def initialize(hash)
    @fields = hash
  end

  def title
    @fields['Win'].gsub(/:/, '-') # colons not allowed in yaml front-matter
  end

  def date
    @fields['Date']
  end

  def tags
    @fields['Tools']
  end

  def clean_file_name
    title.gsub(/[^\w]/, '-').gsub(/-+/, '-').gsub(/^-/, '').gsub(/-$/, '').downcase + '.md'
  end

  def goal
    @fields['Supports']
  end

end

def main
  posts_path = 'content/learnings'
  json_path = ARGV[0] || 'daily-wins.json'
  file = File.read(json_path)
  data_hash = JSON.parse(file)

  data_hash['records'].each do |record|
    fields = record['fields']
    record = Record.new(fields)

    post_tmpl = template
    file_name = record.clean_file_name

    title   = record.title
    date    = record.date
    tags    = record.tags
    goal    = record.goal
    content = fields['Details']

    post = post_tmpl.result(binding)

    f = File.new(File.join(posts_path, file_name),  "w+")
    f.write(post)
    f.close
  end
end

def template
  ERB.new <<-EOF
---
title: <%= title %>
tags:  <%= tags %>
goal:  <%= goal %>
date:  <%= date %>
draft: false

---
<%= content %>

EOF
end


main
