import React, { useState } from "react";

function Punto5() {
	const [numbers, setNumbers] = useState([]);
	const [newNumber, setNewNumber] = useState("");

	function handleAddNumber() {
		const parsedNumber = parseInt(newNumber);
		if (!isNaN(parsedNumber)) {
			setNumbers([...numbers, parsedNumber].sort((a, b) => a - b));
			setNewNumber("");
		}
	}

	function handleInputChange(e) {
		setNewNumber(e.target.value);
	}

	return (
		<div>
			<p className="text-xs flex flex-col gap-1">
				5. Elabore un componente que reciba un nuevo número e imprima la lista
				ordenada de menor a mayor
			</p>
			<hr className="my-3" />
			<h1
				className="text-xs 
                        text-zinc-400 
                        mb-1"
			>
				Nuevo número:
			</h1>
			<input
				type="number"
				value={newNumber}
				onChange={handleInputChange}
				className="border mr-2"
			/>

			<button
				onClick={handleAddNumber}
				className="border border-sky-300
				text-sky-300
				hover:bg-sky-300
				hover:text-white
				p-1 text-sm rounded-2xl "
			>
				Agregar número
			</button>

			{numbers.length > 0 && (
				<ul>
					{numbers.map((num, index) => (
						<li key={index}>{num}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Punto5;
