import React, { useState } from "react";

function Punto6() {
	const [maxNumber, setMaxNumber] = useState("");
	const [oddNumbers, setOddNumbers] = useState([]);

	function handleButtonClick() {
		const parsedNumber = parseInt(maxNumber);
		if (!isNaN(parsedNumber)) {
			const newOddNumbers = [];
			for (let i = 1; i < parsedNumber; i += 2) {
				newOddNumbers.push(i);
			}
			setOddNumbers(newOddNumbers);
		}
	}

	function handleInputChange(e) {
		setMaxNumber(e.target.value);
	}

	return (
		<div>
			<p className="text-xs flex flex-col gap-1">
				6. Elabore un componente que imprima los números impares menores que un
				número que usted haya ingresado.
			</p>
			<hr className="my-3" />
			<h1
				className="text-xs 
                        text-zinc-400 
                        mb-1"
			>
				Ingresa un número:
			</h1>
			<input
				type="number"
				value={maxNumber}
				onChange={handleInputChange}
				className="mb-2 border mr-2"
			/>

			<button
				onClick={handleButtonClick}
				className="border border-sky-300
			text-sky-300
			hover:bg-sky-300
			hover:text-white
			p-1 text-sm rounded-2xl "
			>
				Mostrar números impares
			</button>

			{oddNumbers.length > 0 && (
				<ul>
					{oddNumbers.map((num, index) => (
						<li key={index}>{num}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Punto6;
