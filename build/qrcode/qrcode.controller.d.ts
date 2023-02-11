/// <reference types="node" />
export declare class QrcodeController {
    private movie;
    constructor();
    generateQRCode(text: string): Promise<Buffer>;
    getMovie(): string[];
    updateMovie(): void;
    generateQRCod(res: any): Promise<void>;
    getMoviePage(res: any): void;
}
