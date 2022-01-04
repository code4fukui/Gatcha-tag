import 'https://unpkg.com/konva@8/konva.min.js';
    
class Gatcha extends HTMLElement{
    static WIDTH = 100;
    static HEIGHT = 173;
    
    #stage;
    #base;
    #meter;
    #proportion;
    
    constructor(){
        super();
        
        const that = this;
        this.#proportion = this.getAttribute('proportion');

        let width = parseInt(this.style.width);
        let height = parseInt(this.style.height);

        if(isNaN(width)) width=height*Gatcha.WIDTH/Gatcha.HEIGHT;
        if(isNaN(height)) height=width*Gatcha.HEIGHT/Gatcha.WIDTH;

        this.#stage = new Konva.Stage({
            container: this,
            width: isNaN(width) ? Gatcha.WIDTH : width,
            height: isNaN(height) ? Gatcha.HEIGHT : height,
        });
        
        const layer = new Konva.Layer();
        this.#stage.add(layer);

        const rect0 = new Konva.Rect({
            x: layer.width()*10/Gatcha.WIDTH,
            y: layer.height()*24/Gatcha.HEIGHT,
            width: layer.width()*80/Gatcha.WIDTH,
            height: layer.height()*90/Gatcha.HEIGHT,
            fill: '#eeeeee',
        });
        layer.add(rect0);
        this.#base = rect0;
        
        const rect1 = new Konva.Rect({
            x: this.#base.x(),
            y: this.#base.y()+this.#base.height()-(this.#base.height()*this.#proportion),
            width: this.#base.width(),
            height: this.#base.height()*this.#proportion,
            fill: '#ddaaaa',
        });
        layer.add(rect1);
        this.#meter = rect1;
        
        const img0 = new Image();
        img0.onload = function(){
            const kimg0 = new Konva.Image({
                x: 0,
                y: 0,
                image: img0,
                width: layer.width(),
                height: layer.height(),
            });
            
            layer.add(kimg0);
        };
        img0.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc8AAAMlCAYAAAAVOHjmAAAACXBIWXMAAA3YAAAN2AE05jViAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAFZxJREFUeJzt3b2vZdddx+G1zr3jmTvj8XjeUhAJBQmIRIcsiigpRiICRSilI0RBTUdBA1VSU1FiUSAjkUTjAkWR0rrhH0Cio+AtUhBOQmyP8zIzd2+KEIkgouR7znrZ+97n6RLpnn3Gzef81tnnt0sBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2rB7zR7/2hfWP1rL+Ses3AwCj1FL/6p+e1j8/5m/Pj/mjtZQHpZRfPeZvAWALlro8OvZvDy3fCABcB+IJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEDo/6q9q+X5Zy3fTP3vt4vn9Wtd61DUB4P/x/g9u/ldZy5r+XV3LR8dec2jIlm++/ayUcmfkNQG42urhxuP6S3/w7ZHXdGwLACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuez38AJvrfW8pez3wQAmbqW3y+lfGL2+zjFjuNZv3v28T/8s9nvAoDM8s23f6vsPJ6ObQEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4AEBJPAAiJJwCExBMAQuIJACHxBICQeAJASDwBICSeABASTwAIiScAhMQTAELiCQAh8QSAkHgCQEg8ASAkngAQEk8ACIknAITEEwBC4gkAIfEEgJB4AkBIPAEgJJ4A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';

        const img1 = new Image();
        img1.onload = function(){
            const kimg1 = new Konva.Image({
                x: layer.width()*32/Gatcha.WIDTH + layer.width()*35/Gatcha.WIDTH/2,
                y: layer.height()*125/Gatcha.HEIGHT + layer.height()*35/Gatcha.HEIGHT/2,
                image: img1,
                width: layer.width()*35/Gatcha.WIDTH,
                height: layer.height()*35/Gatcha.HEIGHT,
                offsetX: layer.width()*35/Gatcha.WIDTH/2,
                offsetY: layer.height()*35/Gatcha.HEIGHT/2,
            });

            kimg1.on('mouseenter', function(){
                that.#stage.container().style.cursor = 'pointer';
            });
            
            kimg1.on('mouseleave', function(){
                that.#stage.container().style.cursor = 'default';
            });
            
            kimg1.on('click tap', function(){
                (new Konva.Animation(function(frame){
                    if(kimg1.rotation() < 360){
                        kimg1.rotate( frame.timeDiff * 180 / 1000 );
                    }else{
                        this.stop();
                        kimg1.rotation(0);
                        (new Function(that.getAttribute('ongatcha'))).call(that);
                    }
                })).start();
            });
            
            layer.add(kimg1);
        };
        img1.src = "data:image/png;base64,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";
    }
    
    set proportion(value){
        this.#proportion = value;
        this.#meter.y( this.#base.y()+this.#base.height()-(this.#base.height()*this.#proportion) );
        this.#meter.height( this.#base.height()*this.#proportion );
    }
    
    get proportion(){
        return this.#proportion;
    }
}

customElements.define('cff-gatcha', Gatcha);
