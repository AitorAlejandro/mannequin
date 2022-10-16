createScene();

imanol = new Child();
imanol.position.x = 50;
imanol.position.z = -50;

aitor = new Male();
aitor.position.x = -50;

imanol.turn = 230;

aitor.turn = 300;
aitor.torso.turn = 20;
aitor.pelvis.turn = 10;
aitor.head.turn = 50;


function animate(t) {
  scene.rotation.y = rad(10 * sin(t / 2));
}

