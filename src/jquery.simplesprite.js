(function($) {
  $.fn.simpleSprite = function(options){

    var settings, interval, count;

    settings = $.extend({}, $.fn.simpleSprite.defaults, options);
    count = 0;
    
    this.each(function() {
      var $this = $(this);

      if (settings.sprite !== '') {
        $(this).css({
          'overflow': 'hidden',
          'background-image': 'url(' + settings.sprite + ')',
          'width': settings.width,
          'height': settings.height
        });
      }

      if (settings.autoplay) {
        this.play();
      }
    });

    this.play = function() {
      var $this = $(this);
      interval = setInterval(function(){
        if (settings.direction == 'x') {
          $this.css('background-position', ((count * settings.width) * -1) + 'px 0px' );
        }
        else {
          $this.css('background-position', '0px ' + ((count * settings.height) * -1) + 'px' );
        }

        if (++count === settings.frame) {
          (settings.loop === false) ? clearInterval(interval) : count = 0;
        }
      }, 1000/settings.fps);
      
      return this;
    }

    this.stop = function() {
      if (typeof interval !== 'undefined'){
        clearInterval(interval);
      }
      return this;
    }
    
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

})(window.jQuery);