function Model(modelData)
{
        this.data = modelData;
        this.movement = 8;
        this.createDrawable();
}

Model.prototype = {
    drawable: null,
    movementCircle: null,
    createDrawable: function() {
        var base = new createjs.Shape();

        base.graphics
            .beginFill(this.data.colour)
            .drawEllipse(0, 0, Measure.mm(this.data.baseSize.width), Measure.mm(this.data.baseSize.height));

        base.addEventListener("mouseover", this.mouseover.bind(this));
        base.addEventListener("mouseout", this.mouseout.bind(this));
        base.on("pressmove", this.pressmove.bind(this));
        //base.addEventListener("click", this.click.bind(this));
        this.drawable = base;
        return base;
    },
    pressmove: function(evt) {
        evt.target.x = evt.stageX;
        evt.target.y = evt.stageY;
        if (this.movementCircle != null) {
            this.movementCircle.x = this.drawable.x - (Measure.inch(this.movement) / 2);
            this.movementCircle.y = this.drawable.y - (Measure.inch(this.movement) / 2);
        }
        Globals.stage.update();
    },
    getMovementCircle: function() {
        var base = new createjs.Shape();
        base.x = this.drawable.x - (Measure.inch(this.movement) / 2);
        base.y = this.drawable.y - (Measure.inch(this.movement) / 2);
        base.graphics
            .beginFill("black")
            .drawEllipse(0, 0, 
                Measure.mm(this.data.baseSize.width) + Measure.inch(this.movement),
                Measure.mm(this.data.baseSize.height) + Measure.inch(this.movement)
            );
        base.alpha = 0.4;
        return base;
    },
    mouseover: function(){
            this.movementCircle = this.getMovementCircle();
            Globals.stage.addChild(this.movementCircle);
            Globals.stage.update();
    },
    mouseout: function()  {
            Globals.stage.removeChild(this.movementCircle);
            this.movementCirlce = null;
            Globals.stage.update();
    },
    click: function(e)
    {
        Globals.selected = this;
    }
};