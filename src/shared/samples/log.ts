//https://github.com/roblox-aurora/rbx-log

import Log, { Logger } from "@rbxts/log";
Log.SetLogger(
    Logger.configure()
        .WriteTo(Log.RobloxOutput()) // WriteTo takes a sink and writes to it
        .Create() // Creates the logger from the configuration
);

Log.Info("Hello, Log!");
// The main power of this library comes from the structured event data logging:

const startPoint = new Vector2(0, 0);
const position = new Vector2(25, 134);
const distance = position.sub(startPoint).Magnitude;

Log.Info("Walked to {@Position}, travelling a distance of {Distance}", position, distance);
