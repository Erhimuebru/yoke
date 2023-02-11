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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const movie_repository_1 = require("./movie.repository");
let MovieService = class MovieService {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async getMovieById(id) {
        return this.movieRepository.findOne({ id });
    }
    async getMovies() {
        return this.movieRepository.find({});
    }
    async createMovie(title, image) {
        return this.movieRepository.create({
            title,
            image,
            id: undefined,
        });
    }
    async updateMovie(id, movieUpdates) {
        return this.movieRepository.findOneAndUpdate({ id }, movieUpdates);
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [movie_repository_1.MovieRepository])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map