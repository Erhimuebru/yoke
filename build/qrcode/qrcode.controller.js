"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrcodeController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const qrcode = require("qrcode");
let QrcodeController = class QrcodeController {
    constructor() {
        this.updateMovie();
        setInterval(() => {
            this.updateMovie();
        }, 10000);
    }
    async generateQRCode(text) {
        return await qrcode.toBuffer(text);
    }
    getMovie() {
        const movieList = [
            'mongodb+srv://erhimuebru:dftS6ew21jiATWHi@cluster0.lye52ec.mongodb.net/movies',
        ];
        const randomMovies = [];
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * movieList.length);
            randomMovies.push(movieList[randomIndex]);
            movieList.splice(randomIndex, 1);
        }
        return randomMovies;
    }
    updateMovie() {
        this.movie = this.getMovie();
    }
    async generateQRCod(res) {
        const text = 'http://localhost/5000/movie/';
        const qrCode = await this.generateQRCode(text);
        res.contentType('image/png');
        res.send(qrCode);
    }
    getMoviePage(res) {
        res.render('movies', { movies: this.movie });
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_2.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QrcodeController.prototype, "generateQRCod", null);
__decorate([
    (0, common_1.Get)('/movies/:timestamp'),
    __param(0, (0, common_2.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QrcodeController.prototype, "getMoviePage", null);
QrcodeController = __decorate([
    (0, common_1.Controller)('qrcode'),
    __metadata("design:paramtypes", [])
], QrcodeController);
exports.QrcodeController = QrcodeController;
//# sourceMappingURL=qrcode.controller.js.map