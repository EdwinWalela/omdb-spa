export interface LandingInitialState {
  searchTitle: string,
  isLoading: boolean,
  hasError: boolean,
  errorMessage:string,
  movies:Movie[]
}
 
export interface Movie {
  title:string,
  year:string,
  length:string,
  plot:string,
  cast:string,
  language:string,
  rating:number
}