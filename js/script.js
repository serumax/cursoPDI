var js = {
    abrir: function (evento, item) {
        $("#js_open").slideDown();
        $("body").append('<div class="lb"></div>');
    },
    cerrar: function (evento, item) {
        $("#js_open").slideUp();
        $(".lb").remove();
    }
        
}
$(function () {
    $('[data-func="abrir"]').on("click", js.abrir)
    $('[data-func="cerrar"]').on("click", js.cerrar)
//    $(".evt").evt();
});

(function ($) {
//    $.fn.evt = function () {
//        $.each(this, function (i, item) {
//            if ($.isFunction(eval("js." + $(item).attr("data-func")))) {
//                var event = $(item).attr("data-event") == undefined ? "click" : $(this).attr("data-event");
//                if (event == "mouseenter" || event == "mouseleave") {
//                    $(item).on("mouseenter", function (e) {
//                        eval("js." + $(item).attr("data-func") + "(e, item, true)");
//                        e.preventDefault();
//                    }).on("mouseleave", function (e) {
//                        eval("js." + $(item).attr("data-func") + "(e, item, false)");
//                        e.preventDefault();
//                    });
//                }
//                else {
//                    $(item).on(event, function (e) {
//                        eval("js." + $(item).attr("data-func") + "(e, item)");
//                        e.preventDefault();
//                    });
//                }
//            }
//        });
//    }
    $.fn.atts = function (attr, val) {
        return val ? this.attr('data-' + attr, val) : this.attr('data-' + attr);
    }
})($);

