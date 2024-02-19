import { Link } from "react-router-dom";

import "../index.css";
const Header = () => {
	return (
		<>
			<header className="flex flex-col items-center justify-center md:grid grid-cols-3 place-content-center place-items-center w-full text-white">
				<div className="flex items-center md:gap-0 gap-2">
					<img
						src="/img/troll-face.png"
						alt="troll face"
						className="header--image"
					/>
					<h2 className="header--title">Meme Generator</h2>
				</div>

				<div className="flex">
					<h4 className="header--project">React Course - Project 3 </h4>
				</div>

				<ul className="flex gap-4">
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"/all"}>Lists of Memes</Link>
					</li>
				</ul>
			</header>
		</>
	);
};

export default Header;
