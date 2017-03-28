/**
 * Created by chaoyue on 2017/3/20.
 */
/*
(function($){
    var $search_trigger= $("#search_trigger");
    var $search_box=$("#search_box");
    $search_trigger.on('click',function(){
        console.log("fwefwe")
        if(!$search_box.hasClass("scale")){
            $search_box.addClass("scale")
            console.log("fwefwe")
        }
    })
})(jQuery);
*/

/*function(t) {
    var e = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: "",
        responsiveWidth: !1
    }
        , i = t(window)
        , o = t(document)
        , n = []
        , s = i.height()
        , a = function() {
        for (var e = i.scrollTop(), a = o.height(), r = a - s, l = e > r ? r - e : 0, c = 0; c < n.length; c++) {
            var d = n[c]
                , h = d.stickyWrapper.offset().top
                , u = h - d.topSpacing - l;
            if (u >= e)
                null !== d.currentTop && (d.stickyElement.css("position", "").css("top", ""),
                    d.stickyElement.trigger("sticky-end", [d]).parent().removeClass(d.className),
                    d.currentTop = null);
            else {
                var p = a - d.stickyElement.outerHeight() - d.topSpacing - d.bottomSpacing - e - l;
                0 > p ? p += d.topSpacing : p = d.topSpacing,
                d.currentTop != p && (d.stickyElement.css("position", "fixed").css("top", p),
                "undefined" != typeof d.getWidthFrom && d.stickyElement.css("width", t(d.getWidthFrom).width()),
                    d.stickyElement.trigger("sticky-start", [d]).parent().addClass(d.className),
                    d.currentTop = p)
            }
        }
    }
        , r = function() {
        s = i.height();
        for (var e = 0; e < n.length; e++) {
            var o = n[e];
            "undefined" != typeof o.getWidthFrom && o.responsiveWidth === !0 && o.stickyElement.css("width", t(o.getWidthFrom).width())
        }
    }
        , l = {
        init: function(i) {
            var o = t.extend({}, e, i);
            return this.each(function() {
                var i = t(this)
                    , s = i.attr("id")
                    , a = (s ? s + "-" + e.wrapperClassName : e.wrapperClassName,
                    t("<div></div>").attr("id", s + "-sticky-wrapper").addClass(o.wrapperClassName));
                i.wrapAll(a),
                o.center && i.parent().css({
                    width: i.outerWidth(),
                    marginLeft: "auto",
                    marginRight: "auto"
                }),
                "right" == i.css("float") && i.css({
                    "float": "none"
                }).parent().css({
                    "float": "right"
                });
                var r = i.parent();
                r.css("height", i.outerHeight()),
                    n.push({
                        topSpacing: o.topSpacing,
                        bottomSpacing: o.bottomSpacing,
                        stickyElement: i,
                        currentTop: null,
                        stickyWrapper: r,
                        className: o.className,
                        getWidthFrom: o.getWidthFrom,
                        responsiveWidth: o.responsiveWidth
                    })
            })
        },
        update: a,
        unstick: function(e) {
            return this.each(function() {
                for (var e = t(this), i = -1, o = 0; o < n.length; o++)
                    n[o].stickyElement.get(0) == e.get(0) && (i = o);
                -1 != i && (n.splice(i, 1),
                    e.unwrap(),
                    e.removeAttr("style"))
            })
        }
    };
    window.addEventListener ? (window.addEventListener("scroll", a, !1),
        window.addEventListener("resize", r, !1)) : window.attachEvent && (window.attachEvent("onscroll", a),
        window.attachEvent("onresize", r)),
        t.fn.sticky = function(e) {
            return l[e] ? l[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : l.init.apply(this, arguments)
        }
        ,
        t.fn.unstick = function(e) {
            return l[e] ? l[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : l.unstick.apply(this, arguments)
        }
        ,
        t(function() {
            setTimeout(a, 0)
        })
}(jQuery),*/

$(function(){
    var nt = !1;
    var $header_main_wrapper = $("#header_main_wrapper"),
        $menuicon = $(".menuicon"),
        $search_trigger= $("#search_trigger"),
        $search_box=$("#search_box"),
        $sea_close_trigger = $("#search_close_trigger");

    $menuicon.on('click',function(){
        $("html").toggleClass("gc-noscroll");
    })

    $(window).bind("scroll",
        function() {
            nt = nt ? nt: $header_main_wrapper.offset().top;
            var st = $(document).scrollTop();//往下滚的高度
            // document.title=st;
            if (nt < st) {
                $header_main_wrapper.addClass("is-sticky");
            } else {
                $header_main_wrapper.removeClass("is-sticky");
            }
        });

    $search_trigger.on('click',function(){
        if(!$search_box.hasClass("scale")){
            $search_box.addClass("scale")
        }
    });
    $sea_close_trigger.on('click',function(){
        if($search_box.hasClass("scale")){
            $search_box.removeClass("scale");
        }
    })
})