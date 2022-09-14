import { g_ctx } from "../other/global_context.js";
import { levels } from "../other/levels.js";
import { Point, Line, Circle, Label, Polygon, Rectangle, Button, Square, Triangle, TileWithSections, Player } from "../other/game_objects.js";
import { intersect } from "../other/intersectFunctions.js";

class PlatformerGameScreen {
    constructor(){
        this.back_ground_need_update = false
    }

    draw() {
        if( !(g_ctx.level_as_been_drawed) || this.back_ground_need_update ){
            g_ctx.player.draw_hitboxes = false
            g_ctx.context_background.clearRect(0,0,512, 512)
            
            //draw back layer
            levels[g_ctx.current_level].back_layer.forEach(el => {
                let tmp_tile = new Image()
                tmp_tile.src = '../assets/decor/' + el.asset_path
                tmp_tile.style.transform = el.transform
                g_ctx.context_background.drawImage(tmp_tile, el.clipX, el.clipY, el.size, el.size, el.x, el.y, el.size, el.size)
            });

            //draw middle layer
            levels[g_ctx.current_level].middle_layer.forEach(el => {
                let tmp_tile = new Image()
                tmp_tile.src = '../assets/decor/' + el.asset_path
                tmp_tile.style.transform = el.transform
                g_ctx.context_background.drawImage(tmp_tile, el.clipX, el.clipY, el.size, el.size, el.x, el.y, el.size, el.size)
            });
            
            //draw spawn and set player coordinate to it
            let spawn = levels[g_ctx.current_level].spawn
            g_ctx.context_background.fillStyle = "red"
            let spawn_indicator = new Circle(spawn.x, spawn.y, 10).setLabel(new Label(-15, -13, "spawn")).setDrawingMode("fill")
            spawn_indicator.draw(g_ctx.context_background)
            g_ctx.context_background.fillStyle = "black"
            g_ctx.player.setX(spawn.x).setY(spawn.y)

            //draw exit
            let exit = levels[g_ctx.current_level].exit
            g_ctx.context_background.fillStyle = "blue"
            let exit_indicator = new Circle(exit.x, exit.y, 10).setLabel(new Label(-15, -13, "exit")).setDrawingMode("fill")
            exit_indicator.draw(g_ctx.context_background)
            g_ctx.context_background.fillStyle = "black"

            g_ctx.level_as_been_drawed = true
            this.back_ground_need_update = false
        }
        //update all objects
        g_ctx.player.update(g_ctx)

        //check for collisions
        g_ctx.player.check_for_collisions(levels[g_ctx.current_level].plateforms)

        //clearing foreground and background if needed
        

        g_ctx.context_foreground.clearRect(0,0,512, 512)

        //drawing foreground, character and background if needed
        g_ctx.player.draw(g_ctx.context_foreground)

        //drawing foreground elements then various overlays
        levels[g_ctx.current_level].front_layer.forEach(el => {
            let tmp_tile = new Image()
            tmp_tile.src = '../assets/decor/' + el.asset_path
            tmp_tile.style.transform = el.transform
            g_ctx.context_foreground.drawImage(tmp_tile, el.clipX, el.clipY, el.size, el.size, el.x, el.y, el.size, el.size)
        });
     
    }
}

export { PlatformerGameScreen }