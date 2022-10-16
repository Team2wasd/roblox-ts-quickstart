// https://github.com/memothelemo/rbxts-binder/#readme
import Binder from "@rbxts/binder";

class Disco {
    constructor(public readonly instance: Instance) {
        assert(classIs(instance, "Part"), "Invalid argument #1, Part expected");
    }

    Update() {
        (this.instance as Part).BrickColor = BrickColor.random();
    }

    Destroy() {}
}

const discoBinder = new Binder("Disco", Disco);
discoBinder.Start();

// have some party!
game.GetService("RunService").Heartbeat.Connect(() => {
    for (const object of discoBinder.GetAll()) {
        object.Update();
    }
});
