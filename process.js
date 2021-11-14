const { stderr } = process;

export const processOn = () => {
    process.on("exit", (code) => {
        switch (code) {
            case 0:
                break;
            case 1:
                stderr.write(
                    `Duplicates of the "-c" ("--config") flag! Error code ${code}`
                );
                break;
            case 2:
                stderr.write(
                    `Duplicates of the "-i" ("--input") flag! Error code ${code}`
                );
                break;
            case 3:
                stderr.write(
                    `Duplicates of the "-o" ("--output) flag! Error code ${code}`
                );
                break;
            case 4:
            case 5:
            case 8:
            case 9:
                stderr.write(`Config invalid! Error code ${code}`);
                break;
            case 6:
                stderr.write(
                    `Input file doesn't exist or unaccessible! Error code ${code}`
                );
                break;
            case 7:
                stderr.write(
                    `Output file doesn't exist or unaccessible! Error code ${code}`
                );
                break;
            case 10:
                stderr.write(`readableStream invalid. Error code ${code}`);
                break;
            case 11:
                stderr.write(`writableStream invalid. Error code ${code}`);
                break;
            case 12:
                stderr.write(`pipeline invalid. Error code ${code}`);
                break;
            default:
                stderr.write(`Error code ${code}`);
        }
    });
};
