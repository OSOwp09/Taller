import React, { useState } from "react";

function Punto7() {
	const [salaries, setSalaries] = useState([]);
	const [error, setError] = useState(null);
	const [newSalary, setNewSalary] = useState("");
	const [visible, setVisible] = useState(true);

	function addSalary() {
		if (salaries.length < 10) {
			const salary = parseFloat(newSalary);
			setSalaries([...salaries, salary]);
			setNewSalary("");
		} else {
			setError("No se pueden agregar más de 10 salarios");
		}
	}

	function handleInputChange(e) {
		setNewSalary(e.target.value);
		setError(null);
	}

	return (
		<div>
			<p className="text-xs flex flex-col gap-1">
				7. Elabore un programa que guarde exactamente 10 salarios e imprima en
				pantalla, en el momento que desee los 10 salarios con un aumento del 8%.
				Si no hay 10 salarios, debe mostrar un error en pantalla.
			</p>
			<hr className="my-3" />
			<label htmlFor="salaryInput">Ingrese salario:</label>
			<input
				type="number"
				id="salaryInput"
				value={newSalary}
				onChange={handleInputChange}
				className="mb-2 border ml-2"
			/>

			<button
				onClick={addSalary}
				className="border border-sky-300
				text-sky-300
				hover:bg-sky-300
				hover:text-white
				p-1 text-sm rounded-2xl "
			>
				Agregar salario
			</button>

			{error && <p className="text-xs text-red-300">{error}</p>}

			{visible
				? salaries.length > 0 && (
						<div>
							<h2>Salarios agregados:</h2>
							<ol>
								{salaries.map((salary, index) => (
									<li key={index}>
										{index + 1}. {salary.toFixed(2)}$
									</li>
								))}
							</ol>
						</div>
				  )
				: ""}

			{salaries.length === 10 && (
				<div>
					{visible ? (
						<>
							<button
								onClick={() => setVisible(false)}
								className="border border-sky-300
							text-sky-300
							hover:bg-sky-300
							hover:text-white
							p-1 text-sm rounded-2xl "
							>
								Calcular aumento
							</button>
						</>
					) : (
						""
					)}

					{!visible ? (
						<>
							<h2 className="mt-2">Salarios con aumento:</h2>
							<ol>
								{salaries.map((salary, index) => (
									<li key={index}>
										{index + 1}. {salary.toFixed(2)} -{" "}
										{(salary * 1.08).toFixed(2)}
									</li>
								))}
							</ol>
						</>
					) : (
						""
					)}
					<hr className="my-2" />
					<button
						onClick={() => {
							setSalaries([]), setVisible(true), setError("");
						}}
						className="border border-red-300
						text-red-300
						hover:bg-red-300
						hover:text-white	
						p-1 text-sm rounded-2xl "
					>
						Borrar lista de salarios
					</button>
				</div>
			)}
		</div>
	);
}

export default Punto7;
