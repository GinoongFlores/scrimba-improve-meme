import { Link } from "react-router-dom";

const MemeImages = ({ name, url, id }) => {
	return (
		<>
			<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full w-full">
				<div className="w-full h-[250px] relative">
					<Link to={`/meme/${id}`}>
						<img
							className="rounded-t-lg absolute top-0 left-0 w-full h-full object-cover"
							src={url}
							alt={`${name}`}
						/>
					</Link>
				</div>

				<div className="p-5">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{name}
						</h5>
					</a>
				</div>
			</div>
		</>
	);
};

export default MemeImages;
