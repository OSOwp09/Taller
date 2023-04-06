import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div
			className="
      w-screen
      flex place-items-center place-content-center"
		>
			<App />
		</div>
	</React.StrictMode>
);