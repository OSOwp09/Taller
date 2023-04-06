import Punto1 from "./exercises/punto1";
import Punto2 from "./exercises/punto2";
import Punto3 from "./exercises/punto3";
import Punto4 from "./exercises/punto4";
import Punto5 from "./exercises/punto5";
import Punto6 from "./exercises/punto6";
import Punto7 from "./exercises/punto7";
import Punto8 from "./exercises/punto8";
import Punto9 from "./exercises/punto9";
import Punto10 from "./exercises/punto10";
import Punto11 from "./exercises/punto11";
import Punto12 from "./exercises/punto12";

export default function PopUp({ estado, cambiarEstado }) {
	const ejerciciosArray = [
		<Punto1 />,
		<Punto2 />,
		<Punto3 />,
		<Punto4 />,
		<Punto5 />,
		<Punto6/>,
		<Punto7/>,
		<Punto8/>,
		<Punto9/>,
		<Punto10/>,
		<Punto11/>,
		<Punto12/>

	];
	if (estado > 0) {
		return (
			<>
				<container
					className=" 
                    bg-secondary-color 
                    bg-opacity-50 
                    backdrop-blur-sm 
                    h-screen w-screen
                    flex place-content-center place-items-center
					relative"
				>
					<div className="absolute">
						<div
							className="
							bg-primary-color 
							relative 
							first-letter:my-8 
							h-auto w-auto px-3
							max-w-2xl
							rounded 
							shadow-lg 
							grid place-content-center"
						>
							<button
								onClick={() => cambiarEstado(0)}
								className="
                                absolute 
                                right-0 
                                bg-white 
                                hover:bg-zinc-50 
                                h-6 w-6 m-4 
                                rounded 
                                shadow-sm hover:shadow-md 
                                text-zinc-300 hover:text-zinc-400 
                                grid place-content-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									fill="currentColor"
									className="bi bi-x"
									viewBox="0 0 16 16"
								>
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
								</svg>
							</button>
							<div
								className="
								my-12 min-w-xs 
								grid place-content-center "
							>
								{ejerciciosArray[estado - 1]}
							</div>
						</div>
					</div>
				</container>
			</>
		);
	}
}
