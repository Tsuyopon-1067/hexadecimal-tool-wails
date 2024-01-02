export interface ValueData {
    value: HexDecBin;
    complementValue: HexDecBin;
}

export interface HexDecBin {
    hex: string;
    dec: string;
    bin: string;
}

export const defaultValueData: ValueData = {
    value: {
        hex: "",
        dec: "",
        bin: "",
    },
    complementValue: {
        hex: "",
        dec: "",
        bin: "",
    },
};
