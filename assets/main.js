var $ = $.noConflict();
$(document).ready(function () {
    "use strict";
//search trigger
    $('#search-trigger a, .fa-times').click(function () {
        $('.search-click').animate({height: 'toggle'}, 500);
    });
//shrink header
    $(function () {
        var shrinkHeader = 100;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.header-transparent').addClass('shrink');
            }
            else {
                $('.header-transparent').removeClass('shrink');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
//parallax
    $(window).stellar();
//Bootstrap DateTime Picker
    $('.make-datepicker').datetimepicker({
        format: 'MM/DD/YYYY',
        icons: {
            time: 'fa fa-time',
            date: 'fa fa-calendar',
            up: 'fa fa-chevron-up',
            down: 'fa fa-chevron-down',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-screenshot',
            clear: 'fa fa-trash',
            close: 'fa fa-remove'
        },
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'bottom'
        }

//        defaultDate: new Date()
    });
//set active nav item to actve
    $(".nav a").on("click", function(){
       $(".nav").find(".active").removeClass("active");
       $(this).parent().addClass("active");
    });
//gallery
    // $('i.fa-thumbs-up, i.fa-thumbs-down').click(function(){
    //     var $this = $(this),
    //     c = $this.data('count');
    //     if (!c) c = 0;
    //     c++;
    //     $this.data('count',c);
    //     $('#'+this.id+'-bs3').html(c);
    // });
    $('#galleryModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var imageURL = button.data('whatever')
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        var modal = $(this)
        modal.find('.modal-body img').attr('src',imageURL);
    });
});
