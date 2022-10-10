import { Bin } from "@rbxts/bin";

const bin = new Bin();
const part = bin.add(new Instance("Part"));
bin.add(part.Touched.Connect(() => print("Touched!")));

// later..

// both `part` and the connection are cleaned up!
bin.destroy();
