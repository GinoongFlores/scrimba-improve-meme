import { useState, useEffect } from "react";

export default function PracticeApiCalls() {
	const [starWarsData, setStarWarsData] = useState({});
	const [count, setCount] = useState(1);

	useEffect(() => {
		console.log("useEffect ran");
		fetch(`https://swapi.dev/api/people/${count}`)
			.then((res) => res.json())
			.then((data) => setStarWarsData(data));
	}, [count]); // determines when and how many times useEffect runs. If you leave the array empty, it will run only once. If you put a state variable in the array, it will run every time that variable changes. If you put multiple variables in the array, it will run every time one of those variables changes.
	return (
		<>
			<div>
				<h2>{count}</h2>
				<button onClick={() => setCount((prevState) => prevState + 1)}>
					Add
				</button>
				<pre>{JSON.stringify(starWarsData, null, 2)}</pre>
			</div>
		</>
	);
}
