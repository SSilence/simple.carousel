/**
 * Simple Carousel
 * Copyright (c) 2010 Tobias Zeising, http://www.aditu.de
 * Licensed under the MIT license
 * 
 * http://code.google.com/p/simple-carousel/
 * Version 0.4
 */
(function($){
$.fn.simplecarousel = function( params ) {
    // set config
    var defaults = {
        width: 700,
        height: 500,
        next: false,
        prev: false,
        vertical: false,
        auto: false,
        fade: false,
        slideitems: 1,
        
        items: 0,
        slidespeed: 600,
        visible: 1,
        pagination: false
    };
    var config = $.extend(defaults, params);
    
    
    // configure carousel ul and li
    var ul = $(this);
    var li = ul.children('li');
    
    config.items = li.length;
    
    var height = config.height;
    var width = config.width;
    if(config.visible>1) {
        if(config.vertical)
            height = height*config.visible;
        else
            width = width*config.visible;
    }
    
    
    // generate frame for the carousel
    ul.wrap('<div class="carousel-frame" style="width:'+width+'px;height:'+height+'px;overflow:hidden">');
    var container = ul.parent('.carousel-frame');
    if(!config.vertical) {
        ul.width(config.items*config.width);
        ul.height(config.height);
    } else {
        ul.width(config.width);
        ul.height(config.items*config.height);
    }
    ul.css('overflow','hidden');
    ul.css('list-style', 'none');
    
    li.each(function(i,item) {
        $(item).width(config.width);
        $(item).height(config.height);
        if(!config.vertical)
            $(item).css('float','left');
    });
    
    
    // function for sliding the carousel
    var slide = function(dir, click) {
        if(typeof click == "undefined" & config.auto==false)
            return;
    
        // parse int given delta
        slideitems = config.slideitems;
        if((parseFloat(dir) == parseInt(dir)) && !isNaN(dir)) {
            slideitems = Math.abs(dir);
            dir = (dir<0 ? "prev" : "next");
        }
    
        // vertical or horizontal
        var css = new Object;
        var cssMargin = config.vertical ? "marginTop" : "marginLeft";
        css[cssMargin] = -1.0*slideitems*config.width;
        
        // prev
        if(dir=="prev") {
            for(var i=0;i<slideitems;i++)
                ul.prepend(ul.find("li:last"));
            ul.css(cssMargin, -1.0*slideitems*config.width);
            css[cssMargin] = 0;
        } 
        
        // function for reorder after next
        var reorganizeAfterNext = function() {
            if(dir!="prev") {
                for(var i=0;i<slideitems;i++)
                    ul.append(ul.find('li:first'));
            }
            ul.css(cssMargin, 0);
        };
        
        // fade
        if(config.fade!=false) {
            ul.fadeOut(config.fade, function() {
                ul.css(css);
                ul.fadeIn(config.fade, reorganizeAfterNext);
            });
            
        // slide
        } else {
            ul.animate(css, config.slidespeed, 'swing', reorganizeAfterNext);
        }
        
        // set pagination
        if(config.pagination != false) {
            var pagination = container.next('.carousel-pagination');
            var current = pagination.find('li.carousel-pagination-active').removeClass('carousel-pagination-active');
            var index = pagination.find('li').index(current) + 1;
            index = (dir=="prev" ? index - slideitems : index + slideitems);
            if(index<=0)
                index = config.items + index;
            if(index>config.items)
                index = index - config.items;
            pagination.find('li:nth-child('+index+')').addClass('carousel-pagination-active');
        }
     
        if(typeof click != "undefined")
            config.auto = false;
        
        if(config.auto!=false)
            setTimeout(function() {
                slide('next');
            }, config.auto);
    }
    
    
    // include pagination
    if(config.pagination != false) {
        container.after('<ul class="carousel-pagination"></ul>');
        var pagination = container.next('.carousel-pagination');
        for(var i=0;i<config.items;i++) {
            if(i==0)
                pagination.append('<li class="carousel-pagination-active"></li>');
            else
                pagination.append('<li></li>');
        }
        
        pagination.find('li').each(function(index, item) {
            $(this).click(function() {
                // get delta (for backward or forward sliding
                var current = pagination.find('li.carousel-pagination-active');
                var delta = index - pagination.find('li').index(current);
                slide(delta,true);
             });
        });
    }
    
    
    // set event handler for next and prev
    if(config.next!=false)
        config.next.click(function() {
            slide('next',true);
        });
        
        
    if(config.prev!=false)
        config.prev.click(function() {
            slide('prev',true);
        });
    
    // start auto sliding
    if(config.auto!=false)
        setTimeout(function() {
            slide('next');
        }, config.auto);
}
})(jQuery);