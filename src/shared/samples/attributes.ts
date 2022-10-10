import Attributes from "@rbxts/attributes";

const MyPart = new Instance("Part");
const PartData = Attributes<{ Message: string }>(MyPart);

PartData.Message = "Hello World!";
print(PartData.Message);
