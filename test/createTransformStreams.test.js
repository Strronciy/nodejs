import { createTransformStreams } from "../ciphering-cli/createTransformStreams";

test("Should return array", () => {
    const streams = createTransformStreams("C1");
    expect(Array.isArray(streams)).toBe(true);
});
