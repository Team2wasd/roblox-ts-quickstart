// https://github.com/OverHash/Roblox-TS-Libraries/blob/master/abbreviate/README.md

import Abbreviator from "@rbxts/abbreviate";

const abbreviator = new Abbreviator();
abbreviator.setSetting("suffixTable", ["k", "m", "b"]);
abbreviator.setSetting("decimalPlaces", 2);

print(abbreviator.stringToNumber("500")); // 500
print(abbreviator.stringToNumber("5k")); // 5000
print(abbreviator.stringToNumber("5m")); // 5000000
print(abbreviator.stringToNumber("1.23456m")); // 1234560

print(abbreviator.numberToString(999)); // 999
print(abbreviator.numberToString(1000)); // 1.00k
print(abbreviator.numberToString(1000000)); // 1.00m
print(abbreviator.numberToString(1234567)); // 1.23m
