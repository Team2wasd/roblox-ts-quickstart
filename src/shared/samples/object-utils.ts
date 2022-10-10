//https://npm.io/package/@rbxts/object-utils
import Object from "@rbxts/object-utils";

// now use Object like you could before!
const v = Object.assign({}, { x: 1 }, { y: 2 }, { z: 3 });
print(v.x, v.y, v.z);
