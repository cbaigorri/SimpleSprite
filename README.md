# SimpleSprite

A simple sprite animation plugin for jQuery

## Instalation

Include script *after* the jQuery library:

    <script src="/path/to/jquery.simplesprite.js"></script>

## Usage

Initialize the sprite animation:

    var monster = $('#example1')
      .simpleSprite({
        fps:10,
        frames:10,
        width:64,
        height:64,
        sprite:'img/MonsterARun.png',
        autoplay: false,
        loop:true
      });

Start the animation:

    monster.play();

Stop the animation:

    monster.stop();

## Options

    fps: 30

Default: 30

The number of frames per second.

    frames: 10

Default: 10

The number of frames in the animation.

    width: 64

Default: 0
The width of the bounding box.

    height: 64

Default: 0

The height of the bounding box.

    sprite: 'img/monster.png'

Default: ''

The path to the sprite.

    autoplay: false

Default: true

Boolean to start the animation right away.

    autoplay: loop

Default: true

Boolean to loop the animation.

    direction: 'x'

Default: 'x'

The direction you want to animate the sprite.

## Changelog

## Development

- Source hosted at [GitHub](https://github.com/cbaigorri/SimpleSprite)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/cbaigorri/SimpleSprite/issues)

## Authors

[Chris Baigorri](https://github.com/cbaigorri)

