(function($){
  var startX,touchX,posX,initX;
  var isSwipe = false;

  $.Event.prototype.getPageX = function() {
    var pageX = 0;
    if (this.originalEvent.touches) {
      pageX = this.originalEvent.touches[0].pageX;
    } else {
      pageX = this.pageX;
    }
    return pageX;
  }

  function swipe_move (selector){
    if (!isSwipe){
      return;
    }
    $(selector).css("left",posX);
    setTimeout(function(){swipe_move(selector)},1000 / 30);
  }

  $.fn.simple_swipe = function (options) {
    var selector = this.selector;
    var area = options.area || selector;
    $(area).bind({
        'touchstart mousedown': function(e) {
          startX = e.getPageX();
          posX = initX = $(selector).position().left; //domの初期位置
          isSwipe = true;
          swipe_move(selector);
        },
        'touchmove mousemove': function(e) {
          e.preventDefault();
          touchX = e.getPageX();
          posX = initX - (startX - touchX); //初期位置とタッチの移動量で移動先の位置
        },
        'touchend mouseup touchcancel': function(e) {
          isSwipe = false;
          touchX = 0;
        }
      });
  };
})(jQuery);
