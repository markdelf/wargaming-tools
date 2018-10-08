function Measure() {
    
}

Measure.inch = function(unit) {
    return (unit / Globals.board.width) * Globals.stage.canvas.width;
}

Measure.mm = function(unit) {
    return (unit / (Globals.board.width * 25.4)) * Globals.stage.canvas.width;
}