
import goldStarIcon from '../../assets/gold-star.svg';
import noPosterImg from '../../assets/no-poster.png';
import { Movie } from '../../types';

const MovieCard = (props:{movie:Movie}) => {
  let posterUrl = props.movie.poster;
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
          <h1 className="font-medium mb-2 pt-1 flex-1 text-sm">{props.movie.title} <span>({props.movie.year})</span></h1>
          <span className="bg-blue-500 text-white p-2 text-xs rounded max-h-8">
          {props.movie.length}
          </span>
        </div>
        <p className="text-xs mt-3">{props.movie.plot}</p>
        <p className="text-xs my-3"> Cast: {props.movie.cast}</p>
        <div className='flex'>
          <p className='flex-1 text-xs'>{props.movie.language}</p>
          <p className='text-xs'>
            <img 
              className='w-6 inline pb-1 '
              src={goldStarIcon} 
            />
            {props.movie.rating}
          </p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default MovieCard;