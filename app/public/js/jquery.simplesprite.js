
/*
  Simple Sprite, Simply animates a sprite along an x or y axis.

  Copyright (c) 2012 Chris Baigorri

  Under MIT and GPL licenses:
  http://www.opensource.org/licenses/mit-license.php
  http://www.gnu.org/licenses/gpl.html
*/

(function() {
  var $;

  $ = jQuery;

  $.fn.simpleSprite = function(options) {
    var count, interval, settings;
    settings = $.extend({}, $.fn.simpleSprite.defaults, options);
    count = 0;
    interval = this;
    this.each(function() {
      if (settings.sprite !== "") {
        $(this).css({
          'overflow': 'hidden',
          'background-image': 'url(' + settings.sprite + ')',
          'width': settings.width,
          'height': settings.height
        });
      }
      if (settings.autoplay) return this.play();
    });
    this.play = function() {
      var $this;
      $this = this;
      interval = setInterval(function() {
        if (settings.direction === 'x') {
          $this.css('background-position', ((count * settings.width) * -1) + 'px 0px');
        } else {
          $this.css('background-position', '0px ' + ((count * settings.height) * -1) + 'px');
        }
        if (++count === settings.frame) {
          if (!settings.loop) {
            clearInterval(interval);
          } else {
            count = 0;
          }
        }
        return this;
      }, 1000 / settings.fps);
      return this;
    };
    this.stop = function() {
      if (typeof interval !== 'undefined') clearInterval(interval);
      return this;
    };
    return this;
  };

  $.fn.simpleSprite.defaults = {
    fps: 30,
    frame: 10,
    width: 0,
    height: 0,
    sprite: '',
    autoplay: true,
    loop: true,
    direction: 'x'
  };

}).call(this);
