import { useState } from "react";

export default function Punto2() {
	const [inputValue, setinputValue] = useState("0 pesos");

	const onInputChange = (evt) => {
		displayCost(evt.target.value);
	};

	const displayCost = (evt) => {
		if (evt <= 3) {
			setinputValue(`100 pesos`);
		}
		if (evt == 0) {
			setinputValue(`0 pesos`);
		}
		if (evt > 3) {
			setinputValue(`${100 + (evt - 3) * 50} pesos`);
		}
	};
	return (
		<>
			<p className="text-xs flex flex-col gap-1">
				2. Elabore un componente que determine la cantidad total a pagar por una
				llamada telefónica de acuerdo con:
				<p className="px-4">
					a. Toda llamada que dure menos de 3 minutos tiene un coste de 100
					pesos.
				</p>
				<p className="px-4">
					b. Cada minuto adicional a partir de los 3 primeros cuesta 50 pesos.
				</p>
			</p>
			<hr className="my-3" />
			<h1
				className="text-xs 
                        text-zinc-400 
                        mb-1"
			>
				Duración de la llamada en minutos
			</h1>
			<input
				className="mb-4 border"
				type="number"
				onChange={(event) => onInputChange(event)}
			/>
			<p>{inputValue}</p>
		</>
	);
}
