import React, { useState } from "react";

const Punto12 = () => {
	const [students, setStudents] = useState([
		{ nombre: "", nota1: "", nota2: "", nota3: "" },
	]);

	const handleCalculate = () => {
		let isError = false;
		students.forEach((student) => {
			const { nombre, nota1, nota2, nota3 } = student;
			if (
				nota1 < 0 ||
				nota1 > 5 ||
				nota2 < 0 ||
				nota2 > 5 ||
				nota3 < 0 ||
				nota3 > 5
			) {
				alert(`Error: Las notas de ${nombre} deben estar entre 0 y 5`);
				isError = true;
			}
			if (nombre === "") {
				alert("Error: Ingrese un nombre");
				isError = true;
			}
		});
		if (isError) return;

		const updatedStudents = students.map((student) => {
			const { nombre, nota1, nota2, nota3 } = student;
			const grades = [nota1, nota2, nota3];

			const average =
				grades.reduce((acc, grade) => parseInt(acc) + parseInt(grade), 0) /
				grades.length;
			//(parseInt(nota1) + parseInt(nota2)+ parseInt(nota3))/3 ;
			const status = average >= 3 ? "Aprueba" : "Reprueba";
			return {
				nombre,
				nota1,
				nota2,
				nota3,
				promedio: average,
				estado: status,
			};
		});

		setStudents(updatedStudents);
	};

	const handleAddStudent = () => {
		setStudents([...students, { nombre: "", nota1: "", nota2: "", nota3: "" }]);
	};

	const handleRemoveStudent = (index) => {
		const updatedStudents = [...students];
		updatedStudents.splice(index, 1);
		setStudents(updatedStudents);
	};

	const handleChangeStudent = (index, field, value) => {
		const updatedStudents = [...students];
		updatedStudents[index][field] = value;
		setStudents(updatedStudents);
	};

	return (
		<>
			<div>
				<p className="text-xs flex flex-col gap-1">
					12. Modifique el ejercicio anterior, en un nuevo componente, para que
					ahora realice lo mismo con un arreglo de estudiantes y sus respectivas
					notas.
				</p>
				<hr className="my-3" />
				<table>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Nota 1</th>
							<th>Nota 2</th>
							<th>Nota 3</th>
							<th>Promedio</th>
							<th>Estado</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{students.map((student, index) => (
							<tr key={index}>
								<td>
									<input
										type="text"
										value={student.nombre}
										onChange={(event) =>
											handleChangeStudent(index, "nombre", event.target.value)
										}
										className="border px-2 m-1"
									/>
								</td>
								<td>
									<input
										type="number"
										value={student.nota1}
										onChange={(event) =>
											handleChangeStudent(index, "nota1", event.target.value)
										}
										className="border px-2 m-1 w-14"
									/>
								</td>
								<td>
									<input
										type="number"
										value={student.nota2}
										onChange={(event) =>
											handleChangeStudent(index, "nota2", event.target.value)
										}
										className="border px-2 m-1 w-14"
									/>
								</td>
								<td>
									<input
										type="number"
										value={student.nota3}
										onChange={(event) =>
											handleChangeStudent(index, "nota3", event.target.value)
										}
										className="border px-2 m-1 w-14"
									/>
								</td>
								<td>{student.promedio}</td>
								<td>{student.estado}</td>
								<td>
									<button
										type="button"
										onClick={() => handleRemoveStudent(index)}
										className="border border-red-200
                                        text-red-200
                                        hover:bg-red-200
                                        hover:text-white
                                        p-1 text-sm rounded-2xl 
                                        m-2"
									>
										Eliminar
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<button
					type="button"
					onClick={handleAddStudent}
					className="border border-sky-300
                    text-sky-300
                    hover:bg-sky-300
                    hover:text-white
                    p-1 text-sm rounded-2xl 
                    m-2"
				>
					Agregar estudiante
				</button>
				<hr />
				<button
					type="button"
					onClick={handleCalculate}
					className="border border-sky-300
                    text-sky-300
                    hover:bg-sky-300
                    hover:text-white
                    p-1 text-sm rounded-2xl 
                    m-2"
				>
					Calcular promedios y estados
				</button>
			</div>
		</>
	);
};

export default Punto12;
