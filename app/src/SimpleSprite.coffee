###
  Simple Sprite, Simply animates a sprite along an x or y axis.

  Copyright (c) 2012 Chris Baigorri

  Under MIT and GPL licenses:
  http://www.opensource.org/licenses/mit-license.php
  http://www.gnu.org/licenses/gpl.html
###
$ = jQuery

$.fn.simpleSprite = (options) ->
  settings = $.extend({}, $.fn.simpleSprite.defaults, options)
  count = 0
  interval = this
  @each ->
    if settings.sprite != ""
      $(this).css({
        'overflow': 'hidden',
        'background-image': 'url(' + settings.sprite + ')',
        'width': settings.width,
        'height': settings.height
      })
    
    if settings.autoplay
      @play()
  
  @play = () ->
    $this = this
    interval = setInterval ->
      if settings.direction == 'x'
        $this.css('background-position', ((count * settings.width) * -1) + 'px 0px' )
      else
        $this.css('background-position', '0px ' + ((count * settings.height) * -1) + 'px' )
      
      if ++count == settings.frames
        if !settings.loop then clearInterval(interval) else count = 0
      @
    ,(1000/settings.fps)
    @
  
  @stop = () ->
    if typeof interval isnt 'undefined' then clearInterval(interval)
    @
    
  @
  
$.fn.simpleSprite.defaults = 
  fps: 30
  frames: 10
  width: 0
  height: 0
  sprite: ''
  autoplay: true
  loop: true
  direction: 'x'