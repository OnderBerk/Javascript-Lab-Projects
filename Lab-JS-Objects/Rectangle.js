    // 
    // Constructor function to create Rectangle object/instances.
	// It determines how to create a Rectangle object.
	// pos is an object with "top" and "left" properties.
    function Rectangle( content , width , height , color , pos) {
        this.content = content ;
        this.width = width ;
        this.height = height;
        this.color = color ;
        this.pos = pos ;
        this.pos.bottom = pos.top + height ;
        this.pos.right = pos.left + width ;
    }

    // Another way to create prototype object for all Rectangle instances.
	// toHTMl() and isCollide() are methods for all rectangle instances.
    Rectangle.prototype = {
        toHTML : function() {
            var html = "<div style='background:" + this.color + "; width:" + this.width + "px; height:" + this.height + "px;" ;
            html += "position: absolute; top: " + this.pos.top + "px; left: " + this.pos.left + "px;'>";
            html += this.content + "</div>" ;

            return html;
        },
        isCollide : function (rect) {
			// NOT( this.left > rect.right OR this.right < rect.left OR this.top > rect.bottom OR this.bottom < rect.top)
			// this.left <= rect.right AND this.right >= rect.left AND this.top <= rect.bottom AND this.bottom >= rect.top
            if ( this.pos.left <= rect.pos.right && this.pos.right >= rect.pos.left &&
                 this.pos.top  <= rect.pos.bottom && this.pos.bottom >= rect.pos.top ) {
                     return true; // two rectangle intersects
            }            
            return false;
        }
    }

    // Static method or Class method
    Rectangle.random = function(content) {
        var w = Math.floor(Math.random() * 100) + 20 ;
        var h = Math.floor(Math.random() * 100) + 20 ;
        var rndLeft = Math.floor(Math.random() * 500)  ;
        var rndTop = Math.floor(Math.random() * 500)  ;
        var color = Color.random() ;
        color.a = 0.5 ;
        return new Rectangle(content , w, h, color.dec(), {'top' : rndTop, 'left' : rndLeft});
    }


