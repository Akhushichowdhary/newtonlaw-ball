
        class Chain{
            constructor(body1,body2,offsetX,offsetY){
                this.offsetX = offsetX;
                this.offsetY = offsetY;
                var options={
                    bodyA:body1,
                    bodyB:body2,
                    pointB : {x :this.offsetX, y :this.offsetY }
                   // stiffness :.04,
                   // length:10
        
        
                }
                this.chain = Constraint.create(options);
                World.add(world,this.chain);
        
        
            }
        
        display(){
            strokeWeight(2);
            var pointA  = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;
        }
        }
    
