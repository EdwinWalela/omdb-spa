const Footer = () =>{
  const year = new Date().getFullYear();
  return (
		<footer className="p-4  shadow md:px-6 md:py-8 bg-gray-900">
			<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
				Movix © {year}<br/>
				<a href="https://edwinwalela.netlify.com/" target="_blank" className="hover:underline">Edwin Walela</a>
			</span>
		</footer>
	);
}

export default Footer;