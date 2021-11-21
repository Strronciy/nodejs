import TransformStream from "./transformStream.js";

export const createTransformStreams = (config) => {
    const streams = [];
    const streamConfigs = config.split("-");
    streamConfigs.forEach((streamConfig) => {
        const cipher = streamConfig[0];
        const encoding = Number(streamConfig[1]);
        let shift;
        switch (cipher) {
            case "C":
                shift = 1;
            case "R":
                shift = 8;
        }
        streams.push(new TransformStream(cipher, shift, encoding));
    });
    return streams;
};
