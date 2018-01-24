
function drawPolygon(shape, context) {
  shape.forEach(point => {
    offSetToCenter(point, context.canvas);
  });

  const first = shape[0];
  context.beginPath();

  context.moveTo(first.x, first.y);
  shape.forEach(point => {
    context.lineTo(point.x, point.y);
  });
  context.lineTo(first.x, first.y);

  context.stroke();
}


function offSetToCenter(point, canvas) {
  point.x += canvas.width / 2;
  point.y += canvas.height / 2;
}


export function drawMesh(mesh, camera, context) {

  context.strokeStyle = mesh.color;
  mesh.polygon.forEach(shape => {

    const projectedShape = shape.map(point => ({ ...point }));

    projectedShape.forEach(point => {
      mesh.transform(point);
      camera.transform(point);
    });

    drawPolygon(projectedShape, context)
  })
}
