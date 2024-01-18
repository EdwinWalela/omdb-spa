import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
		<div className="flex shadow-md md:px-5 py-3">
			<div>
				<h1 className="text-2xl md:pl-0 pl-3 text-blue-500 font-medium">
					<Link to="/">Movix</Link>
				</h1>
			</div>
		</div>
	);
}

export default NavBar;