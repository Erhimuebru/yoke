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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const qrcode = require("qrcode");
let MoviesController = class MoviesController {
    async getMovies() {
        const response = await fetch('http://localhost/5000/movie');
        const movies = await response.json();
        return movies;
    }
    async getQRCode() {
        const movieList = await this.getMovies();
        const randomMovies = [];
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * movieList.length);
            randomMovies.push(movieList[randomIndex]);
            movieList.splice(randomIndex, 1);
        }
        const text = 'http://localhost/5000/movie' + Date.now();
        const qrCode = await qrcode.toDataURL(text);
        return qrCode;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getMovies", null);
__decorate([
    (0, common_1.Get)('qrcode'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getQRCode", null);
MoviesController = __decorate([
    (0, common_1.Controller)('movies')
], MoviesController);
exports.MoviesController = MoviesController;
//# sourceMappingURL=movies.controller.js.map