import { Line, Point, Level, GO_Set, Tile } from "./game_objects.js"

console.log(new Level(new GO_Set([new Line(new Point(0 , 480), new Point(532, 480))]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32).to_str_eval());

localStorage.setItem('level_1', new Level(new GO_Set([new Line(new Point(0 , 480), new Point(532, 480))]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32))
localStorage.setItem('level_2', new Level(new GO_Set([new Line(new Point(0 , 480), new Point(532, 480))]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32))
localStorage.setItem('level_3', new Level(new GO_Set([new Line(new Point(0 , 480), new Point(532, 480))]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32))
localStorage.setItem('level_4', new Level(new GO_Set([new Line(new Point(0 , 480), new Point(532, 480))]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32))

const levels = {
    1  : localStorage.getItem('level_1') !== null ? eval(localStorage.getItem('level_1')) : new Level(new GO_Set([new Line(new Point(0 , 480), new Point(532, 480))]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    2  : localStorage.getItem('level_2') !== null ? eval(localStorage.getItem('level_2')) : new Level(new GO_Set([new Line(new Point(0 , 480), new Point(532, 480))]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    3  : localStorage.getItem('level_3') !== null ? eval(localStorage.getItem('level_3')) : new Level(new GO_Set([new Line(new Point(0 , 480), new Point(532, 480))]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
    4  : localStorage.getItem('level_4') !== null ? eval(localStorage.getItem('level_4')) : new Level(new GO_Set([new Line(new Point(0 , 480), new Point(532, 480))]),new GO_Set([]),new GO_Set([]),new GO_Set([]),new Point(250,460),new Point(0,0),32),
}

export { levels }