
import goldStarIcon from '../../assets/gold-star.svg';

const MovieCard = () => {
  return (
    <div 
      className="shadow-lg w-1/3 mx-2 my-2 "
    >
      <div className="flex ">
        <img 
          src="https://m.media-amazon.com/images/M/MV5BZDhlZmRlNmMtYmMyYy00Zjg0LWI0ZmQtYzNiNWM5YTU4YTI3XkEyXkFqcGdeQXVyNjQ0NjY3MDY@._V1_SX300.jpg"
          className="h-60"
        />
       <div className="px-4 py-4">
        <div className="flex ">
          <h1 className="font-medium mb-2 flex-1 text-sm">Star Wars: Episode IV - A New Hope <span>(2013)</span></h1>
          <span className="bg-blue-500 text-white p-2 text-xs rounded">
            121 min
          </span>
        </div>
        <p className="text-xs">Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ..</p>
        <p className="text-xs my-3"> Cast: Mark Hamill, Harrison Ford, Carrie Fishe</p>
        <div className='flex'>
          <p className='flex-1'>English</p>
          <p>
            <img 
              className='w-6 inline pb-1'
              src={goldStarIcon} 
            />
            6.7
          </p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default MovieCard;