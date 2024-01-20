import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
   <>
    <div className="text-center flex-grow p-20">
      <h1>Page Not Found</h1>
      <Link 
      to="/" 
      className="bg-blue-500 lg:w-1/6 max-w-40 mx-auto text-white p-3 rounded my-10 block">
        Return Home
        </Link>
    </div>
   </>
  )
}

export default NotFoundPage;