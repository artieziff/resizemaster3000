(function ( $ ) {
         
            $.fn.resizeMaster3000 = function( options ) {
               var settings = $.extend({
                    minimum : 960,
                    maximum : 1200,
                    minFont : 12,
                    maxFont : 18,
                    lineRatio : 1,
               },options),


               resizeType = function(el){
                    if (settings.minFont>=settings.maxFont){
                        console.error("resizeMaster3000: The minFont value can't be bigger or equal to the maxFont value.");
                        return;
                    }else if(settings.minimum>=settings.maximum){
                        console.error("resizeMaster3000: The minimum value can't be bigger or equal to the maximum value.");
                        return;
                    }else{
                        var $el = $(el),
                        Window = $(window),
                        width = Window.width(),
                        n = settings.maximum-settings.minimum,
                        d = (settings.maxFont-settings.minFont)/(n-1),
                        n2,fontSize;
                        if(width>=settings.minimum && width<=settings.maximum){
                            n2= width-settings.minimum;
                            fontSize = settings.minFont+(n2*d);
                            lineHeight = fontSize*settings.lineRatio;
                        }else if(width<settings.minimum){
                            fontSize = settings.minFont;
                            lineHeight = fontSize*settings.lineRatio;
                        } else if(width>settings.maximum){
                            fontSize = settings.maxFont;
                            lineHeight = fontSize*settings.lineRatio;
                        }
                        $el.css({
                            'font-size':fontSize+ 'px',
                            'line-height':lineHeight+ 'px',
                        });
                    }
               };


               return this.each(function() {
                    var that = this;
                    resizeType(this);
                    $(window).resize(function(){resizeType(that);});
              });
         
            };
         
        }( jQuery ));