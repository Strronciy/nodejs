import TransformStream from "../ciphering-cli/transformStream";

test("Should cipher by caesar 'A' to 'B'", () => {
    const transform = new TransformStream();
    transform.cipher = "C";
    transform.shift = 1;
    transform.encoding = 1;
    expect(transform.transformByShift("A")).toBe("B");
});

test("Should cipher by atbash 'A' to 'Z'", () => {
    const transform = new TransformStream();
    expect(transform.transformAtbash("A")).toBe("Z");
});

test("Should cipher by ROT8 'A' to 'I'", () => {
    const transform = new TransformStream();
    transform.cipher = "R";
    transform.shift = 8;
    transform.encoding = 1;
    expect(transform.transformByShift("A")).toBe("I");
});
