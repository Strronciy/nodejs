import TransformStream from "../ciphering-cli/transformStream";

test("Should cipher by caesar 'Hello!' to 'Ifmmp!'", () => {
    const transform = new TransformStream();
    transform.cipher = "C";
    transform.shift = 1;
    transform.encoding = 1;
    expect(transform.transformByShift("Hello!")).toBe("Ifmmp!");
});

test("Should cipher by atbash 'Hello!' to 'Svool!'", () => {
    const transform = new TransformStream();
    expect(transform.transformAtbash("Hello!")).toBe("Svool!");
});

test("Should cipher by ROT8 'Hello!' to 'Pmttw!'", () => {
    const transform = new TransformStream();
    transform.cipher = "R";
    transform.shift = 8;
    transform.encoding = 1;
    expect(transform.transformByShift("Hello!")).toBe("Pmttw!");
});
