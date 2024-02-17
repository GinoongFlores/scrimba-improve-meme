import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AllMeme } from "./components/AllMeme.jsx";
import LikedMemeEditor from "./components/LikedMemeEditor.jsx";
import ErrorPage from "./ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/all",
		element: <AllMeme />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/meme/:id",
		element: <LikedMemeEditor />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
