export const validate = (config) => {
    if (!config) {
        process.exit(5);
    } else {
        const ciphers = config.split("-");

        ciphers.forEach((cipher) => {
            const X = cipher[0];
            const Y = cipher.slice(1);
            ["C", "R", "A"].includes(X) || process.exit(8);
            ["C", "R"].includes(X) &&
                !["0", "1"].includes(Y) &&
                process.exit(9);
            X === "A" && Y && process.exit(4);
        });

        ciphers.forEach((cipher) => {
            if (!["C0", "C1", "R0", "R1", "A"].includes(cipher)) {
                process.exit(5);
            }
        });
    }
};
