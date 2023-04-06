import { useState } from "react";

export default function Punto3() {
	const [time, SetTime] = useState("");
	const [name, SetName] = useState("");

	const onInputNameChange = (evt) => {
		const inputName = evt.target.value;
		SetName(inputName);
	};

	const onInputTimeChange = (evt) => {
		const inputTime = evt.target.value.split(":")[0];
		console.log(inputTime);

		if (12 > inputTime && inputTime >= 4) {
			SetTime("Buenos dias, ");
		}
		if (19 > inputTime && inputTime >= 12) {
			SetTime("Buenas tardes, ");
		}
		if (
			(24 >= inputTime && inputTime >= 19) ||
			(4 > inputTime && inputTime >= 0)
		) {
			SetTime("Buenas noches, ");
		}
	};

	return (
		<>
			<p className="text-xs flex flex-col gap-1">
				3. Elabore un componente que pida su nombre y la hora. Una vez usted lo
				escriba, responda en pantalla un mensaje ‘Buenos días, NOMBRE’, ‘Buenos
				tardes, NOMBRE’, ‘Buenas noches, NOMBRE’ según la hora que usted
				ingresó.
			</p>
			<hr className="my-3" />
			<h1
				className="
                        text-xs 
                        text-zinc-400 
                        mb-1"
			>
				Nombre
			</h1>
			<input
				className="mb-4 border"
				type="text"
				onChange={(event) => onInputNameChange(event)}
			/>
			<h1
				className="text-xs 
                        text-zinc-400 
                        mb-1"
			>
				Hora
			</h1>
			<div className="flex">
				<input
					className="
                mb-4
                border"
					type="time"
					onChange={(event) => onInputTimeChange(event)}
				/>
			</div>
			<p>
				{time}
				{name}
			</p>
		</>
	);
}
