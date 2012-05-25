fs     = require 'fs'
{exec} = require 'child_process'

appFiles  = [
  # omit src/ and .coffee to make the below lines a little shorter
  'SimpleSprite'
]

task 'build', 'Build single application file from source files', ->
  appContents = new Array remaining = appFiles.length
  for file, index in appFiles then do (file, index) ->
    fs.readFile "app/src/#{file}.coffee", 'utf8', (err, fileContents) ->
      throw err if err
      appContents[index] = fileContents
      process() if --remaining is 0
  process = ->
    fs.writeFile 'app/public/js/jquery.simplesprite.coffee', appContents.join('\n\n'), 'utf8', (err) ->
      throw err if err
      exec 'coffee --compile app/public/js/jquery.simplesprite.coffee', (err, stdout, stderr) ->
        throw err if err
        console.log stdout + stderr
        fs.unlink 'app/public/js/jquery.simplesprite.coffee', (err) ->
          throw err if err
          console.log 'Done.'