export const checkArgsForDoubles = (args) => {
    const count = (elements, args) => {
        return args.filter((arg) => elements.includes(arg)).length;
    };

    if (count(["-c", "--config"], args) > 1) process.exit(1);
    if (count(["-i", "--input"], args) > 1) process.exit(2);
    if (count(["-o", "--output"], args) > 1) process.exit(3);
};
