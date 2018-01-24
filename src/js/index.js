import { square, doubleSquare, cube, pyramid} from './model.js';
import { toMesh} from './mesh.js';
import  Camera from './camera.js';
import {createRender} from './render.js';


function animate(time){
  camera.pos.z += 0.1;

  scene.forEach(mesh => mesh.update(time));
  render(scene, camera);

  requestAnimationFrame(animate);
}

const canvas         = document.getElementById('paper'),
      scene          = [],
      render         = createRender( canvas),
      cubeMesh       = toMesh( cube),
      cubeMesh2      = toMesh( cube),
      pyramidMesh    = toMesh( pyramid),
      camera         = Camera({z:200}, 12);

cubeMesh.color = '#F00';
cubeMesh.update = function( time){

  this.position.x = Math.sin(time / 300) * 40;
  this.position.y = Math.sin(time / 1000) * 80;
  this.rotation.y += .01;
  this.rotation.x -= .01;

};

cubeMesh2.color = '#0F0';
cubeMesh2.update = function( time){

  this.position.x = Math.sin(time / 100) * 10;
  this.position.y = Math.sin(time / 800) * 100;
  this.rotation.y -= .05;
  this.rotation.x += .05;
  this.rotation.z -= .05;

};

pyramidMesh.color = '#F0F';
pyramidMesh.update = function( time){
  this.position.x = Math.sin(time / 500) * 20;
  this.position.y = Math.sin(time / 600) * 100;
  this.position.z = Math.sin(time / 600) * 100;
  this.rotation.y += .01;
};

scene.push( cubeMesh);
scene.push( cubeMesh2);
scene.push( pyramidMesh);

animate(0);
