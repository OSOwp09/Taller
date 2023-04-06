import React, { useState } from "react";

const Punto11 = () => {
	const [grades, setGrades] = useState(["", "", ""]);

	const [alumno, setAlumno] = useState({
		nombre: "",
		nota1: "",
		nota2: "",
		nota3: "",
	});

	const handleCalculate = () => {
		const { nombre, nota1, nota2, nota3 } = alumno;
		setGrades([nota1, nota2, nota3]);

		if (
			nota1 < 0 ||
			nota1 > 5 ||
			nota2 < 0 ||
			nota2 > 5 ||
			nota3 < 0 ||
			nota3 > 5
		) {
			alert("Error: las notas deben estar entre 0 y 5");
			return;
		}
		if (nombre == "") {
			alert("Error: Ingrese un nombre");
			return;
		}

		const average =
			grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
		const status = average >= 3 ? "Aprueba" : "Reprueba";

		alert(
			`El alumno ${nombre} tiene un promedio de ${average.toFixed(
				2
			)} y ${status} la materia.`
		);
	};

	return (
		<div>
			<p className="text-xs flex flex-col gap-1">
				11. Construya un componente que pida el nombre y las 3 notas de un
				alumno, y le imprima en pantalla el nombre del alumno y si gana o no
				gana la materia. Haga uso de objetos para este caso
			</p>
			<hr className="my-3" />
			<label htmlFor="name">Nombre:</label>
			<input
				type="text"
				id="name"
				value={alumno.nombre}
				onChange={(e) => setAlumno({ ...alumno, nombre: e.target.value })}
				className="mx-2 px-2 border"
			/>

			<br />

			<label htmlFor="grade1">Nota 1: </label>
			<input
				type="number"
				value={alumno.nota1}
				onChange={(e) => setAlumno({ ...alumno, nota1: e.target.value })}
				className="mx-2 px-2 border"
			/>

			<br />

			<label htmlFor="grade2">Nota 2: </label>
			<input
				type="number"
				value={alumno.nota2}
				onChange={(e) => setAlumno({ ...alumno, nota2: e.target.value })}
				className="mx-2 px-2 border"
			/>

			<br />

			<label htmlFor="grade3">Nota 3: </label>
			<input
				type="number"
				value={alumno.nota3}
				onChange={(e) => setAlumno({ ...alumno, nota3: e.target.value })}
				className="mx-2 px-2 border"
			/>

			<br />

			<button
				onClick={handleCalculate}
				className="border border-sky-300
                text-sky-300
                hover:bg-sky-300
                hover:text-white
                p-1 text-sm rounded-2xl 
                mb-2"
			>
				Calcular
			</button>
		</div>
	);
};

export default Punto11;
