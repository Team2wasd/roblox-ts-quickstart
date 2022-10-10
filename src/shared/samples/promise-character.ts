// https://github.com/Validark/Roblox-TS-Libraries/tree/master/promise-character

import { promiseR6, promiseR15, CharacterRigR15, CharacterRigR6 } from "@rbxts/promise-character";

import { Players } from "@rbxts/services";
import { promiseChildOfClass } from "@rbxts/promise-child";

function doStuffWithR15(rig: CharacterRigR15) {
	rig.RightFoot.Destroy();
}

function doStuffWithR6(rig: CharacterRigR6) {
	rig["Left Arm"].Destroy();
}

async function handleCharacterModel(model: Model) {
	const rigType = (await promiseChildOfClass(model, "Humanoid")).RigType.Name;

	if (rigType === "R15") {
		const rig15 = await promiseR15(model);
		rig15.Head.Neck.Destroy(); // R15 specific logic :)
		doStuffWithR15(rig15);
	} else if (rigType === "R6") {
		const rig6 = await promiseR6(model);
		rig6.Torso.Destroy(); // R6 specific logic :)
		doStuffWithR6(rig6);
	} else {
		throw `${model.Name} has an unknown rig type! ${rigType}`;
	}
}

Players.PlayerAdded.Connect(({ Name, Character, CharacterAdded }) => {
	print(`Welcome, ${Name}`);
	if (Character) handleCharacterModel(Character);
	CharacterAdded.Connect(handleCharacterModel);
});
