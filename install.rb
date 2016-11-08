#!/usr/bin/ruby

packages = [
  'autoprefixer-sandbox',
  'context-callback',
  'css-modules-by-example',
  'twemoji-sandbox',
  'yargs-sandbox',
];
puts 'Which package would you like to install?'
puts ''
packages.each_with_index do |p, i|
  puts "#{i + 1}. #{p}"
end
input = STDIN.gets.strip
package = nil
begin
  num = Integer(input)
  package = packages[num - 1]
  if !package
    throw RuntimeError('Number outside range')
  end
rescue Exception
  puts "Only a number 1-#{packages.length} is accepted."
  exit
end

puts "Downloading #{package}..."

def download_command(package)
  tmpDir = "tmp#{rand.to_s.sub('0.', '')}"
  return `
  mkdir #{tmpDir}
  cd #{tmpDir}
  git init
  git remote add -f origin https://github.com/ahfarmer/react-samples.git
  git config core.sparseCheckout true
  echo #{package} >> .git/info/sparse-checkout
  git pull origin master
  mv #{package} ..
  cd ..
  rm -rf #{tmpDir}
  `
end

download_command(package)

puts ""
puts "Created #{package} within the current working directory"
