import { validate } from "../ciphering-cli/validate";

test("Should exit with code 5", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    validate(undefined);
    expect(mockExit).toHaveBeenCalledWith(5);
    mockExit.mockRestore();
});

test("Should exit with code 5", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    validate("C2-A");
    expect(mockExit).toHaveBeenCalledWith(5);
    mockExit.mockRestore();
});

test("Should exit with code 4", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    validate("A11");
    expect(mockExit).toHaveBeenCalledWith(4);
    mockExit.mockRestore();
});

test("Should exit with code 8", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    validate("E1");
    expect(mockExit).toHaveBeenCalledWith(8);
    mockExit.mockRestore();
});
