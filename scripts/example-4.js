createScene();

imanol = new Child();
imanol.r_arm.straddle = 90;
imanol.r_arm.turn = 90

function animate(t) {
  imanol.head.turn = 20 * sin(t / 2 - 20);
  imanol.torso.tilt = 10 * sin(t / 2 - 20);

  imanol.r_elbow.bend = 45 - 45* sin(t / 2);
}
