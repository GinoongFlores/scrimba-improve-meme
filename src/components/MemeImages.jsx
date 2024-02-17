import { Link } from "react-router-dom";

const MemeImages = ({ name, url, id }) => {
	return (
		<>
			<section className="container">
				<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<Link to={`/meme/${id}`}>
						<img
							className="rounded-t-lg object-cover w-full h-64"
							src={url}
							alt={`${name}`}
						/>
					</Link>

					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{name}
							</h5>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default MemeImages;
