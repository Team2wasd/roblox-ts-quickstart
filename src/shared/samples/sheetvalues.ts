// https://github.com/tacheometry/rbxts-sheetvalues

import SheetValues from "@rbxts/sheetvalues";

// The type parameter represents the sheet
const sheet = new SheetValues<{
    Foo: {
        SomeKey: number;
        SomeOtherKey: string;
    };
    Bar: {
        SomeKey: number;
        SomeOtherKey: string;
    };
}>("Spread id extracted from the URL");

const a = sheet.Values.Foo.SomeKey; // 50
const b = sheet.Values.Bar.SomeOtherKey; // "test2"
