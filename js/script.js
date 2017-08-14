/**
 * Created by KostyaGromov on 14.08.2017.
 */
var bird;

function setup () {
    createCanvas(400, 600);
    bird = new Bird();
}

function Draw () {
    background(0);
    bird.show();
}
