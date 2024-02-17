import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<div className="text-center">
				<h1 className="text-red-500">Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p className="text-red-500">
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
		</div>
	);
};

export default ErrorPage;
