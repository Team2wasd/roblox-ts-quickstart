// https://github.com/Validark/Roblox-TS-Libraries/tree/master/promise-child

import { promiseChildOfClass } from "@rbxts/promise-child";

game.GetService("Players").PlayerAdded.Connect((plr) => {
	plr.CharacterAdded.Connect(async (char) => {
		const humanoid = await promiseChildOfClass(char, "Humanoid");
		switch (humanoid.RigType.Name) {
			case "R6": {
				//makeR6Ragdoll(char);
				break;
			}
			case "R15": {
				//makeR15Ragdoll(char);
				break;
			}
			default:
				error("A player spawned with an unsupported RigType");
		}
	});
});
