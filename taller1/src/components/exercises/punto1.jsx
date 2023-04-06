import { useState } from "react";

export default function Punto1() {
	const [inputValue, setinputValue] = useState(
		"0 horas, 0 minutos, 0 segundos"
	);

	const onInputChange = (evt) => {
		displayTime(evt.target.value);
	};

	const displayTime = (evt) => {
		let seg = evt;
		let h = Math.floor(seg / 3600);
		seg = seg - h * 3600;
		let m = Math.floor(seg / 60);
		seg = seg - m * 60;

		setinputValue(`${h} horas, ${m} minutos, ${seg} segundos`);
	};
	return (
		<>
			<p className="text-xs">
				1. Elabore un componente que reciba una hora expresada en segundos y la
				convierta en horas, minutos y segundos.
			</p>
			<hr className="my-3"/>
			<h1
				className="text-xs 
                        text-zinc-400 
                        mb-1"
			>
				Ingrese un tiempo en segundos
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
