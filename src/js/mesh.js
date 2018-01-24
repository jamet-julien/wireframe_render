
function Vecteur(x, y, z) {
  return {
    x, y, z
  }
}


function offset(point, position) {
  point.x += position.x;
  point.y += position.y;
  point.z += position.z;
}

function rotate(point, rotation) {
  const sin = Vecteur(
    Math.sin(rotation.x),
    Math.sin(rotation.y),
    Math.sin(rotation.z)
  );

  const cos = Vecteur(
    Math.cos(rotation.x),
    Math.cos(rotation.y),
    Math.cos(rotation.z)
  );

  let temp1, temp2;
  temp1 = cos.x * point.y + sin.x * point.z;
  temp2 = -sin.x * point.y + cos.x * point.z;
  point.y = temp1;
  point.z = temp2;

  temp1 = cos.y * point.x + sin.y * point.z;
  temp2 = -sin.y * point.x + cos.y * point.z;
  point.x = temp1;
  point.z = temp2;

  temp1 = cos.z * point.x + sin.z * point.y;
  temp2 = -sin.z * point.x + cos.z * point.y;
  point.x = temp1;
  point.y = temp2;
}


function transform( point){
  rotate( point, this.rotation);
  offset( point, this.position);
}

function Mesh( polygon, color){
  let _public = {
    polygon,
    color    : '#fff',
    position : Vecteur(0, 0, 0),
    rotation : Vecteur(0, 0, 0),
    transform,
    update : (time)=>{}
  }

  return _public;
}


function toPoint(arr) {
  let [x, y, z] = arr;
  return { x, y, z }
}


function toPolygon(shape) {
  return shape.map(toPoint);
}

export function toMesh(model) {
  return Mesh(model.map(toPolygon));
}
