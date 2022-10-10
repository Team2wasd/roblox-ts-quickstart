import RotatedRegion3 from "@rbxts/rotatedregion3";

const myRegion = new RotatedRegion3(new CFrame(10, 0, 5), new Vector3(5, 10, 5));
const parts = myRegion.FindPartsInRegion3();

parts.forEach((part) => {
	print(`${part.Name} was inside the region!`);
});
