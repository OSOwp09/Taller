import Card from "./components/card";
import Button from "./components/button";
import PopUp from "./components/popUp";
import { useState } from "react";

export default function App() {
	const [estadoModal, cambiarEstadoModal] = useState("0");

	return (
		<>
			<div
				className="
			h-screen w-screen
			flex
			place-content-center place-items-center"
			>
				<div
					className="h-[500px] w-auto
					overflow-auto
					flex flex-col gap-1
					place-items-center
					rounded-2xl
					shadow-lg
					relative"
				>
					<div
						className="
							h-auto w-full bg-white
							flex place-items-center place-content-center
							py-2 rounded-2xl shadow-sm
							sticky top-0"
					>
						<h1
							className="
							font-semibold text-3xl mb-2"
						>
							Taller 1
						</h1>
					</div>
					<div className="flex flex-col gap-2 px-3">
						<Button
							cambiarEstado={cambiarEstadoModal}
							number="1"
							text={
								"Elabore un componente que reciba una hora expresada en segundos y la convierta en horas, minutos y segundos."
							}
						/>

						<Button
							cambiarEstado={cambiarEstadoModal}
							number="2"
							text={`Elabore un componente que determine la cantidad total a pagar por una llamada telefónica de acuerdo con:
							a.	Toda llamada que dure menos de 3 minutos tiene un coste de 100 pesos.
							b.	Cada minuto adicional a partir de los 3 primeros cuesta 50 pesos.`}
						/>

						<Button
							cambiarEstado={cambiarEstadoModal}
							number="3"
							text={`Elabore un componente que pida su nombre y la hora.
                			Una vez usted lo escriba, responda en pantalla un mensaje ‘Buenos días, NOMBRE’, ‘Buenos tardes, NOMBRE’, ‘Buenas noches, NOMBRE’ según la hora que usted ingresó.`}
						/>

						<Button
							cambiarEstado={cambiarEstadoModal}
							number="4"
							text={`Elabore un componente que reciba tres números e indique cuantos de esos 3 son el mismo número`}
						/>

						<Button
							cambiarEstado={cambiarEstadoModal}
							number="5"
							text={`Elabore un componente que reciba un nuevo número e imprima la lista ordenada de menor a mayor`}
						/>

						<Button
							cambiarEstado={cambiarEstadoModal}
							number="6"
							text={`Elabore un componente que imprima los números impares menores que un número que usted haya ingresado.`}
						/>

						<Button
							cambiarEstado={cambiarEstadoModal}
							number="7"
							text={`Elabore un programa que guarde exactamente 10 salarios e imprima en pantalla, en el momento que desee los 10 salarios con un aumento del 8%. Si no hay 10 salarios, debe mostrar un error en pantalla.`}
						/>

						<Button
							cambiarEstado={cambiarEstadoModal}
							number="8"
							text={`Dado un arreglo de 10 números aleatorios. Divida e imprima en pantalla todos sus elementos entre el elemento que ocupa la posición que usted digite sobre un campo de texto (Tenga en cuenta que se puede digitar cualquier número, incluso negativo y esto generaría un error de no ser controlado).`}
						/>

						<Button
							cambiarEstado={cambiarEstadoModal}
							number="9"
							text={`Dado un valor de N filas y M columnas que usted puede digitar, dibuje una tabla en HTML con el número de filas y columnas ingresadas, en cada celda, escriba la posición de la fila y la columna.`}
						/>

						<Button
							cambiarEstado={cambiarEstadoModal}
							number="10"
							text={`Dada una matriz de N x M, construya un componente que imprima dicha matriz en una tabla, y en la última fila, imprima la suma de valores de cada columna.`}
						/>

						<Button
							cambiarEstado={cambiarEstadoModal}
							number="11"
							text={`Construya un componente que pida el nombre y las 3 notas de un alumno, y le imprima en pantalla el nombre del alumno y si gana o no gana la materia. Haga uso de objetos para este caso`}
						/>

						<Button
							cambiarEstado={cambiarEstadoModal}
							number="12"
							text={`Modifique el ejercicio anterior, en un nuevo componente, para que ahora realice lo mismo con un arreglo de estudiantes y sus respectivas notas.`}
						/>
					</div>
				</div>
				<div className="absolute">
					<PopUp estado={estadoModal} cambiarEstado={cambiarEstadoModal} />
				</div>

				{/* <div className="absolute top-0 left-0 h-full">
					<div className="sticky top-0 left-0">
						<PopUp estado={estadoModal} cambiarEstado={cambiarEstadoModal} />
					</div>
				</div> */}
			</div>
		</>
	);
}
