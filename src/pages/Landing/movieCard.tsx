
import goldStarIcon from '../../assets/gold-star.svg';
import noPosterImg from '../../assets/no-poster.png';
import { Movie } from '../../types';

const MovieCard = (props:any) => {
  let posterUrl = props.movie.Poster;
  let posterStyle = 'h-60';
  if(posterUrl == 'N/A'){
    posterUrl = noPosterImg;
    posterStyle = 'h-43'
  } 
  return (
    <div 
      className="shadow-lg w-1/3 mx-2 my-2 "
    >
      <div className="flex ">
        <img 
          src={posterUrl}
          className={posterStyle}
        />
       <div className="px-4 py-4">
        <div className="flex ">
          <h1 className="font-medium mb-2 pt-1 flex-1 text-sm">{props.movie.Title} <span>({props.movie.Year})</span></h1>
          <span className="bg-blue-500 text-white p-2 text-xs rounded max-h-8">
          {props.movie.Runtime}
          </span>
        </div>
        <p className="text-xs mt-3">{props.movie.Plot}</p>
        <p className="text-xs my-3"> Cast: {props.movie.Actors}</p>
        <div className='flex'>
          <p className='flex-1 text-xs'>{props.movie.Language}</p>
          <p className='text-xs'>
            <img 
              className='w-6 inline pb-1 '
              src={goldStarIcon} 
            />
            {props.movie.imdbRating}
          </p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default MovieCard;