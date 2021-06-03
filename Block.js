class Block{
    constructor(x,y,width,height){
        var options = {
            'restitution' :0.4,
            'friction' :1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        Push ();
        //translate(this.body.position.x,this.body.position.y);
        var pos = this.body.position;
        rectMode(CENTRE);
        fill (rgb(49, 29, 161));
        rect(pos.x, pos.y, this.width, this.height);

        pop();


    
    }
}