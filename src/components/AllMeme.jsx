import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import MemeImages from "./MemeImages";

export const AllMeme = () => {
	const [allMeme, setAllMeme] = useState([]);
	// const randomNum = Math.floor(Math.random() * allMeme.length);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	// console.log(allMeme);

	// set search query to empty string
	const [searchQuery, setSearchQuery] = useState("");
	const [searchParam] = useState(["name", "id"]); // search by name or id

	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [memesPerPage] = useState(10); // 10 memes per page

	const indexOfLastMeme = currentPage * memesPerPage; // 1 * 10 = 10
	const indexOfFirstMeme = indexOfLastMeme - memesPerPage; // 10 - 10 = 0
	const currentMemes = allMeme.slice(indexOfFirstMeme, indexOfLastMeme); // current memes to display (0-10)
	const totalPages = Math.ceil(allMeme.length / memesPerPage); // 100 / 10 = 10 pages

	// change page number when clicked on pagination
	const paginate = (pageNumber) => {
		if (pageNumber < 1) pageNumber = 1; // if page number is less than 1, set it to the 1st page
		if (pageNumber > totalPages) pageNumber = totalPages; // if page number is greater than total pages, set it to the last page

		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		const getMemes = async () => {
			try {
				setIsLoading(true);
				const res = await axios.get("https://api.imgflip.com/get_memes");
				// console.log(res);
				setAllMeme(res.data.data.memes);
			} catch (error) {
				setError(error);
			}
		};
		getMemes();
	}, [currentPage]);

	const searchMemes = (memes) => {
		return memes.filter((meme) => {
			return searchParam.some((newItem) => {
				return (
					meme[newItem]
						.toString()
						.toLowerCase()
						.indexOf(searchQuery.toLowerCase()) > -1
				);
			});
		});
	};

	return (
		<>
			<Header />
			<section className="container mx-auto py-20">
				<div className="my-2">
					<label htmlFor="search-form">
						<input
							className="w-full p-2 border text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
							type="search"
							name="search-form"
							id="search-form"
							placeholder="Search for..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</label>
				</div>
				{error && <div> Error: {error.message} </div>}
				<div className="flex flex-col md:flex-row justify-between items-center gap-2 py-4">
					<div>
						<button
							type="button"
							onClick={() => paginate(currentPage - 1)}
							className="shadow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Previous
						</button>
					</div>
					{/* show page numbers */}
					<div className="flex flex-wrap gap-4">
						{Array.from(
							{ length: Math.ceil(allMeme.length / memesPerPage) },
							(_, i) => i + 1
						).map((number) => (
							<button
								type="button"
								key={number}
								onClick={() => paginate(number)}
								className="
						shadow bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
							>
								{number}
							</button>
						))}
					</div>
					<div>
						<button
							onClick={() => paginate(currentPage + 1)}
							className="shadow 
						bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Next
						</button>
					</div>
				</div>
				{!isLoading ? (
					<div>Loading...</div>
				) : (
					<div className="flex flex-col items-center justify-center md:grid grid-cols-4 place-items-center gap-4">
						{searchMemes(currentMemes).map((meme, index) => {
							return <MemeImages {...meme} key={index} />;
						})}
					</div>
				)}
			</section>
		</>
	);
};
