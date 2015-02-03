js-jquery-simple-swipe
=======================

javascript jquery plugin

index.html
----------
    <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="./jquery.simple.swipe.js"></script>

    <script>
    $(function() {
        $('.swipe').simple_swipe({
             area:".touch_area" //(optional)
          });
        });
    </script>

    <body>
    <div class="touch_area" style="position:relative;">
      <div class="swipe" style="position:relative;">
      </div>
    </div>
    </body>

DEMO
----
    http://jsdo.it/i47_rozary/teFj
