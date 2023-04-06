import React, { useState } from "react";

function Punto10() {
	const [matrix, setMatrix] = useState([]);

	function generateRandomMatrix() {
		const numRows = Math.floor(Math.random() * 5) + 2;
		const numCols = Math.floor(Math.random() * 5) + 2;
		const newMatrix = [];
		for (let i = 0; i < numRows; i++) {
			const row = [];
			for (let j = 0; j < numCols; j++) {
				row.push(Math.floor(Math.random() * 10));
			}
			newMatrix.push(row);
		}
		setMatrix(newMatrix);
	}

	const sums = matrix.length ? Array(matrix[0].length).fill(0) : [];

	if (matrix.length) {
		matrix.forEach((row) => {
			row.forEach((cell, colIndex) => {
				sums[colIndex] += cell;
			});
		});
	}

	return (
		<div>
			<p className="text-xs flex flex-col gap-1">
				10. Dada una matriz de N x M, construya un componente que imprima dicha
				matriz en una tabla, y en la última fila, imprima la suma de valores de
				cada columna.
			</p>
			<hr className="my-3" />
			<div className="h-auto w-auto flex flex-col place-content-center place-items-center">
				<button
					onClick={generateRandomMatrix}
					className="border border-sky-300
                    text-sky-300
                    hover:bg-sky-300
                    hover:text-white
                    p-1 text-sm rounded-2xl 
                    mb-2"
				>
					Generar matriz
				</button>
				{matrix.length > 0 && (
					<table className="text-xs">
						<tbody>
							{matrix.map((row, rowIndex) => (
								<tr key={rowIndex}>
									{row.map((cell, colIndex) => (
										<td key={colIndex} className="border p-2">
											{cell}
										</td>
									))}
								</tr>
							))}
                            <h1>Suma</h1>
							<tr>
								{sums.map((sum, colIndex) => (
									<td key={colIndex} className="border p-2">
										{sum}
									</td>
								))}
							</tr>
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
}

export default Punto10;
