import { drawMesh } from './draw.js';

function buildPattern(){
  const pattern = document.createElement('canvas'),
    ctx = pattern.getContext('2d');

  pattern.width = 3;
  pattern.height = 3;

  ctx.strokeStyle = "#300";
  ctx.beginPath();
  ctx.moveTo(1, 0);
  ctx.lineTo(1, 3);
  ctx.stroke();

  ctx.strokeStyle = "#030";
  ctx.beginPath();
  ctx.moveTo(2, 0);
  ctx.lineTo(2, 3);
  ctx.stroke();

  ctx.strokeStyle = "#003";
  ctx.beginPath();
  ctx.moveTo(3, 0);
  ctx.lineTo(3, 3);
  ctx.stroke();

  return pattern;
}

function applyPattern( pattern, width, height){
  const wall = document.createElement('canvas'),
        ctx  = wall.getContext('2d');

  ctx.fillStyle = ctx.createPattern( pattern, "repeat");
  ctx.fillRect( 0, 0, width, height);

  return wall;
}


export function createRender( canvas){
  const context = canvas.getContext('2d');
  const pattern = applyPattern( buildPattern(), canvas.width, canvas.height);

  let pos = 0;

  return (scene, camera)=>{
    let x1 = Math.round(Math.random()*2);

    pos = (pos + 1) % canvas.height;
    context.clearRect( 0, 0, canvas.width, canvas.height);
    
    context.drawImage( pattern, x1, 0, canvas.width+x1, canvas.height);
    context.globalCompositeOperation = "color-dodge";
    
    context.drawImage( pattern, 0, pos, canvas.width, 100);

    scene.forEach(mesh => {
        drawMesh(mesh, camera, context);
    });


  }
}