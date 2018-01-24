import { drawMesh } from './draw.js';

export function createRender( canvas){
  const context = canvas.getContext('2d');

  return (scene, camera)=>{
    context.clearRect( 0, 0, canvas.width, canvas.height);

    scene.forEach(mesh => {
      drawMesh(mesh, camera, context);
    });
  }
}