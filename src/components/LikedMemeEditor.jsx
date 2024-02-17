import "../index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";

const LikedMemeEditor = () => {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [allMeme, setAllMeme] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function getMemes() {
			try {
				setIsLoading(true);
				const res = await axios.get("https://api.imgflip.com/get_memes");
				// console.log(res);
				setAllMeme(res.data.data.memes); // this changes the state of allMeme.
			} catch (error) {
				console.log(error);
			}
		}
		getMemes();

		const savedMeme = localStorage.getItem("meme");
		if (savedMeme) {
			setMeme(JSON.parse(savedMeme));
		}
	}, []);

	const { id } = useParams();
	const memeId = allMeme.find((memeId) => memeId.id === id); // find the meme with the id
	// console.log(memeId);
	// memeId && setMeme((prevMeme) => ({ ...prevMeme, randomImage: memeId.url }));

	useEffect(() => {
		if (memeId) {
			setMeme((prevMeme) => ({ ...prevMeme, randomImage: memeId.url }));
		}
	}, [memeId]);

	const getMemeImg = () => {
		const randomNumber = Math.floor(Math.random() * allMeme.length); // random number between 1 and 100
		let url = allMeme[randomNumber].url; // url of the meme at the random position
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	};
	return (
		<>
			<Header />
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
						Get a new meme image 🖼️
					</button>

					<div className="meme">
						{!isLoading ? (
							<div>Loading...</div>
						) : (
							<img
								src={meme.randomImage}
								alt="image meme"
								className="meme-img"
							/>
						)}
						<h2 className="meme--text top">{meme.topText}</h2>
						<h2 className="meme--text bottom">{meme.bottomText}</h2>
					</div>
				</form>
			</main>
		</>
	);
};

export default LikedMemeEditor;
