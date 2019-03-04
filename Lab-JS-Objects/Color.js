    // CLASS Color, Color is called "Constructor" function
    // It is an object instantiated from "Function" class.
    // It also creates associative "prototype" object, it is 
    // initially empty, and it references to prototype object 
    // of Object (base object in javascript)
    function Color(r, g, b, a=1) {
        // OWN properties, instance properties
        this.r = r ;
        this.g = g ;
        this.b = b ;
        this.a = a ;
    } 
    // Methods shared by all object instances.
    // INHERITED properties/methods
    // Color to string conversion in hexadecimal notation 
    Color.prototype.hex = function() {
            // Nested function, its scope is limited by hex()
            function hx(x) {
                var str = x.toString(16) ;
                return str.length == 1 ? "0" + str : str ;
            }
            return "#" + hx(this.r) + hx(this.g) + hx(this.b) ;
    }
    // Color to string conversion in decimal notation 
    Color.prototype.dec = function() {
            return "rgba(" + this.r + "," + this.g + 
                   "," + this.b + "," + this.a +")" ;
    }
    // STATIC/Class method.
    Color.random = function () {
        var r = Math.floor(Math.random() * 256) ;
        var g = Math.floor(Math.random() * 256) ;
        var b = Math.floor(Math.random() * 256) ;
        return new Color(r,g,b) ;
    }
            


