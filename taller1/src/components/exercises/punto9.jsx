import React, { useState } from "react";

function Punto9() {
	const [rows, setRows] = useState("");
	const [cols, setCols] = useState("");
	const [tableData, setTableData] = useState([]);

	function handleRowsChange(e) {
		setRows(e.target.value);
	}

	function handleColsChange(e) {
		setCols(e.target.value);
	}

	function generateTable() {
		const numRows = parseInt(rows);
		const numCols = parseInt(cols);

		if (Number.isNaN(numRows) || Number.isNaN(numCols)) {
			setTableData([]);
			return;
		}

		const data = [];

		for (let i = 1; i <= numRows; i++) {
			const row = [];
			for (let j = 1; j <= numCols; j++) {
				row.push(`${i},${j}`);
			}
			data.push(row);
		}

		setTableData(data);
	}

	return (
		<div>
			<p className="text-xs flex flex-col gap-1">
				9. Dado un valor de N filas y M columnas que usted puede digitar, dibuje
				una tabla en HTML con el número de filas y columnas ingresadas, en cada
				celda, escriba la posición de la fila y la columna.
			</p>
			<hr className="my-3" />
			<label htmlFor="rowsInput">Número de filas:</label>
			<input
				type="number"
				value={rows}
				onChange={handleRowsChange}
				className="border mx-2"
			/>
			<hr className="invisible my-1" />
			<label htmlFor="colsInput">Número de columnas:</label>
			<input
				type="number"
				className="border mx-2"
				value={cols}
				onChange={handleColsChange}
			/>
			<button
				onClick={generateTable}
				className="border border-sky-300
                text-sky-300
                hover:bg-sky-300
                hover:text-white
                p-1 text-sm rounded-2xl 
                my-2"
			>
				Generar tabla
			</button>

			{tableData.length > 0 && (
				<>
					<hr className="mb-2" />
					<div
						className="
                    flex place-content-center place-items-center
                    max-h-96  max-w-[350px] overflow-auto
                    shadow"
					>
						<table className="text-xs">
							<tbody className="">
								{tableData.map((row, rowIndex) => (
									<tr key={rowIndex} className="">
										{row.map((cell, colIndex) => (
											<td
												key={`${rowIndex},${colIndex}`}
												className="border p-2"
											>
												{cell}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</>
			)}
		</div>
	);
}

export default Punto9;
