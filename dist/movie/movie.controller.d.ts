import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './schemas/movie.schema';
import { MovieService } from './movie.service';
export declare class MovieController {
    private readonly MovieService;
    movies: any;
    constructor(MovieService: MovieService);
    getMovie(id: string): Promise<Movie>;
    getMovies(): Promise<Movie[]>;
    createMovie(createMovieDto: CreateMovieDto): Promise<Movie>;
    updateMovie(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie>;
}
