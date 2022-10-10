import { Flamework, Modding } from "@flamework/core";
import Log, { Logger } from "@rbxts/log";

Log.SetLogger(
    Logger.configure()
        .WriteTo(Log.RobloxOutput()) // WriteTo takes a sink and writes to it
        .EnrichWithProperty("Version", _VERSION) // Will add "Version" to the event data
        .Create()
);

Modding.registerDependency<Logger>(ctor => {
    return Log.ForContext(ctor); // will register this under the given DI class
});

Flamework.addPaths("src/server/components");
Flamework.addPaths("src/server/services");
Flamework.addPaths("src/shared/components");

Flamework.ignite();
