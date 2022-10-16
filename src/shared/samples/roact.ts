// https://github.com/roblox-ts/rbx-roact

import Roact from "@rbxts/roact";

const LocalPlayer = game.GetService("Players").LocalPlayer as Player;
const PlayerGui = LocalPlayer.FindFirstChildOfClass("PlayerGui");

const tree = Roact.createElement(
    'ScreenGui',
    {},
    {
        Label: Roact.createElement("TextLabel", {
            Text: "Hello, World!",
            Size: new UDim2(1, 0, 1, 0),
        }),
    }
);

Roact.mount(tree, PlayerGui, "HelloWorld");
