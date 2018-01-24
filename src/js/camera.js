
function perspective(point, distance) {
  let fov = point.z + distance;
  point.x /= fov;
  point.y /= fov;
}

function zoom(point, factor) {
  const scale = Math.pow(factor, 2);
  point.x *= scale;
  point.y *= scale;
  point.z *= scale;
}


function transform(point) {
  perspective(point, this.pos.z);
  zoom( point, this.zoom);
}

function Camera( pos, zoom) {
  let _public = {
    pos , zoom,
    transform
  }

  return _public
}

export default Camera;