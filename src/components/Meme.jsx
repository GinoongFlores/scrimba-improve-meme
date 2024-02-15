import "../index.css";
// import memesData from "../memesData"; no need to import this as we are fetching the data from the api
import { useEffect, useState } from "react";

const Meme = () => {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [allMeme, setAllMeme] = useState([]);

	useEffect(() => {
		async function getMemes() {
			try {
				const res = await fetch("https://api.imgflip.com/get_memes");
				const data = await res.json();
				setAllMeme(data.data.memes); // this changes the state of allMeme.
			} catch (error) {
				console.log(error);
			}
		}
		getMemes();

		// fetch("https://api.imgflip.com/get_memes")
		// 	.then((res) => res.json())
		// 	.then((data) => setAllMeme(data.data.memes)); // this changes the state of allMeme.
	}, []);

	function getMemeImg() {
		const randomNumber = Math.floor(Math.random() * allMeme.length); // random number between 1 and 100
		let url = allMeme[randomNumber].url; // url of the meme at the random position
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	return (
		<main>
			<form className="form">
				<input
					type="text"
					name="topText"
					value={meme.topText}
					placeholder="Top Text"
					className="form--input"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="bottomText"
					value={meme.bottomText}
					placeholder="Bottom Text"
					className="form--input"
					onChange={handleChange}
				/>
				<button type="button" onClick={getMemeImg} className="form--button">
					Get a new meme image 🖼
				</button>
				<div className="meme">
					<img src={meme.randomImage} alt="image meme" className="meme-img" />
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>
			</form>
		</main>
	);
};

export default Meme;
