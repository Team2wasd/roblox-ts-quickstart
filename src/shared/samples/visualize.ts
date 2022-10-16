// https://github.com/FireTS/rbxts-visualize#readme
// Imports the global Visualizer.
// Disabling the global Visualizer will disable all Visualizers.
import { Visualize } from "@rbxts/visualize";

// You can also create a new Visualizer with separate settings.
import { Visualizer } from "@rbxts/visualize";
const visualizer = new Visualizer({
    alwaysOnTop: false,
});

// Visualizations are cleared after 1 frame automatically.
game.GetService("RunService").Heartbeat.Connect(() => {
    // Visualize white (default color) point
    Visualize.point(new Vector3(0, 2, 0));

    // Visualize red line
    Visualize.line(new Vector3(0, 2, 0), new Vector3(2, 0, 0), new Color3(1, 0, 0));

    // Visualize green CFrame
    Visualize.cframe(new CFrame(0, 3, 0), new Color3(0, 1, 0));

    // Visualize blue vector
    Visualize.vector(new Vector3(0, 2, 0), new Vector3(0, 1, 0), new Color3(0, 0, 1));
});
