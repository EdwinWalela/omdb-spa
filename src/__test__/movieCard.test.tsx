import { render, screen } from '@testing-library/react';
import MovieCard from '../pages/Landing/movieCard';
import { Movie } from '../types';

describe("Movies",()=>{
  test('MovieCard renders correctly',()=>{
    let movie:Movie = {
      plot: "A captivating movie",
      title: "Avengers",
      year:"2023",
      language:"English",
      length:"121 min",
      cast:"Actor 1, Actor 2, Actor 3",
      rating:8.7,
      poster:"https://image.com/a.png",
    }
    render(<MovieCard movie={movie}/>);
    const titleElem = screen.queryByText(movie.title);
    const descriptionElem = screen.queryByText(movie.plot);
    const languageElem = screen.queryByText(movie.language);
  
    expect(descriptionElem?.textContent).toBe(movie.plot);
    expect(titleElem?.textContent).toBe(`${movie.title} (${movie.year})`)
    expect(languageElem?.textContent).toBe(movie.language);
  })
})
