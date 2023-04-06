import React, { useState } from "react";

function Punto8() {
	const [randomNumbers, setRandomNumbers] = useState(
		Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
	);
	const [position, setPosition] = useState("");
	const [error, setError] = useState(null);
	const [result, setResult] = useState([]);

	function handlePositionChange(e) {
		setPosition(e.target.value);
		setError(null);
	}

	function divideNumbers() {
		const pos = parseInt(position);
		if (Number.isNaN(pos) || pos < 1 || pos > 10) {
			setError("Ingrese una posición válida (1-10)");
			return;
		}

		const divisor = randomNumbers[pos - 1];
		const result = randomNumbers.map(
			(number) =>
				`${number} / ${divisor} = ${parseFloat((number / divisor).toFixed(2))}`
		);

		setResult(result);
	}

	return (
		<div>
			<p className="text-xs flex flex-col gap-1">
				8. Dado un arreglo de 10 números aleatorios. Divida e imprima en
				pantalla todos sus elementos entre el elemento que ocupa la posición que
				usted digite sobre un campo de texto (Tenga en cuenta que se puede
				digitar cualquier número, incluso negativo y esto generaría un error de
				no ser controlado).
			</p>
			<hr className="my-3" />
			<p>Arreglo aleatorio de 10 números: </p>
			<ol className="flex flex-col h-[140px] flex-wrap">
				{randomNumbers.map((number, index) => (
					<li key={index}>
						{index + 1}. {number}
					</li>
				))}
			</ol>

			<label htmlFor="positionInput">Ingrese la posición del divisor:</label>
			<input
				type="number"
				value={position}
				onChange={handlePositionChange}
                className="border"
                
			/>

			<button onClick={divideNumbers}
            className="border border-sky-300
            text-sky-300
            hover:bg-sky-300
            hover:text-white
            p-1 text-sm rounded-2xl ">Dividir</button>

			{error && <p>{error}</p>}

			{result.length > 0 && (
				<div>
					<p>Resultados:</p>
					<ul className="flex flex-col h-[140px] flex-wrap">
						{result.map((item, index) => (
							<li key={index}>{index + 1}. {item}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default Punto8;
