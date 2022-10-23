createScene();

imanol = new Child();

function animate(t) {
  scene.rotation.y = rad(45 * sin(t / 2));
}
