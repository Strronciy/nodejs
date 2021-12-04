import { checkArgsForDoubles } from "../ciphering-cli/checkArgsForDoubles";

test("Should exit with code 1", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const args = ["-c", "--config"];
    checkArgsForDoubles(args);
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
});

test("Should exit with code 2", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const args = ["-i", "--input"];
    checkArgsForDoubles(args);
    expect(mockExit).toHaveBeenCalledWith(2);
    mockExit.mockRestore();
});

test("Should exit with code 3", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const args = ["-o", "--output"];
    checkArgsForDoubles(args);
    expect(mockExit).toHaveBeenCalledWith(3);
    mockExit.mockRestore();
});
