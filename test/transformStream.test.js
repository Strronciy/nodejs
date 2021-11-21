import TransformStream from "../ciphering-cli/transformStream";

test("Should cipher by caesar 'A' to 'B'", () => {
    const transform = new TransformStream();
    expect(transform.transformByShift("A")).toBe("B");
});
