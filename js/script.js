var js = {
    abrir: function (evento, item) {
        $("#js_open").slideDown();
        $("body").append('<div class="lb"></div>');
        var noticia = $(item).atts("news");
        $.ajax({
            dataType: "html",
            url: "ajax"+noticia+".html",
        }).done(function (element) {
            $("#js_open").append(element);
            $('[data-func="cerrar"]').on("click", js.cerrar)            
        });
    },
    cerrar: function (evento, item) {
        $("#js_open").slideUp();
        $("#js_open").html("");
        $(".lb").remove();
    }

}
$(function () {
    $(".evt").evt();
});

(function ($) {
    $.fn.evt = function () {
        $.each(this, function (i, item) {
            if ($.isFunction(eval("js." + $(item).attr("data-func")))) {
                var event = $(item).attr("data-event") == undefined ? "click" : $(this).attr("data-event");
                if (event == "mouseenter" || event == "mouseleave") {
                    $(item).on("mouseenter", function (e) {
                        eval("js." + $(item).attr("data-func") + "(e, item, true)");
                        e.preventDefault();
                    }).on("mouseleave", function (e) {
                        eval("js." + $(item).attr("data-func") + "(e, item, false)");
                        e.preventDefault();
                    });
                }
                else {
                    $(item).on(event, function (e) {
                        eval("js." + $(item).attr("data-func") + "(e, item)");
                        e.preventDefault();
                    });
                }
            }
        });
    }
    $.fn.atts = function (attr, val) {
        return val ? this.attr('data-' + attr, val) : this.attr('data-' + attr);
    }
})($);

