# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Creating Questions'

questions_list = [
  {
    title: 'How to check if a key is present in a hash?',
    tag: 'Ruby'
  },
  {
    title: 'What is the difference between strings and symbols?',
    tag: 'Ruby'
  },
  {
    title: 'What happens if you add keys with the same name in a hash?',
    tag: 'Ruby'
  },
  {
    title: 'How to delete a given key from a hash?',
    tag: 'Ruby'
  },
  {
    title: 'How do you check is two hashes are the same?',
    tag: 'Ruby'
  },
  {
    title: 'How do you combine two hashes in ruby?',
    tag: 'Ruby'
  },
  {
    title: 'How do you get the unique keys from two hashes?',
    tag: 'Ruby'
  },
  {
    title: 'What do the has_key?, key?, member? and include? methods do?',
    tag: 'Ruby'
  },
  {
    title: 'What are blocks in ruby?',
    tag: 'Ruby'
  },
  {
    title: 'Does the order of keys matter to compare two hashes?',
    tag: 'Ruby'
  }
]

questions_list.each do |question|
  Question.find_or_create_by(title: question[:title], tag: question[:tag])
end

puts 'Questions Created!'
