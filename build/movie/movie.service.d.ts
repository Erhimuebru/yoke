import { Movie } from './schemas/movie.schema';
import { MovieRepository } from './movie.repository';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MovieService {
    private readonly movieRepository;
    constructor(movieRepository: MovieRepository);
    getMovieById(id: string): Promise<Movie>;
    getMovies(): Promise<Movie[]>;
    createMovie(title: string, image: string): Promise<Movie>;
    updateMovie(id: string, movieUpdates: UpdateMovieDto): Promise<Movie>;
}
