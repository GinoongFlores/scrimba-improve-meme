import { Link } from "react-router-dom";

import "../index.css";
const Header = () => {
	// console.log(Link);
	return (
		<>
			<header className="flex items-center w-full justify-between text-white">
				<div className="flex items-center">
					<img
						src="/img/troll-face.png"
						alt="troll face"
						className="header--image"
					/>
					<h2 className="header--title">Meme Generator</h2>
				</div>

				<ul className="flex gap-4">
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"/all"}>Lists of Memes</Link>
					</li>
				</ul>

				<div className="flex">
					<h4 className="header--project">React Course - Project 3 </h4>
				</div>
			</header>
		</>
	);
};

export default Header;
