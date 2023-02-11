import { FilterQuery, Model } from 'mongoose';
import { Movie, MovieDocument } from './schemas/movie.schema';
export declare class MovieRepository {
    private readonly movieModel;
    constructor(movieModel: Model<MovieDocument>);
    findOne(movieFilterQuery: FilterQuery<Movie>): Promise<Movie>;
    find(movieFilterQuery: FilterQuery<Movie>): Promise<Movie[]>;
    create(movie: Movie): Promise<Movie>;
    findOneAndUpdate(movieFilterQuery: FilterQuery<Movie>, movie: Partial<Movie>): Promise<Movie>;
}
