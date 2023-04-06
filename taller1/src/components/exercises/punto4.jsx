import { useState } from "react";

export default function Punto4() {
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");
	const [num3, setNum3] = useState("");
	const [numEqual, setNumEqual] = useState("");

	function handleCheckEqual() {
		const numbers = [num1, num2, num3];
		if (!numbers.includes("")) {
			const equalNumbers = numbers.filter(
				(num, index, arr) => arr.indexOf(num) !== index
			);	
			if (equalNumbers.length <= 0) {
				setNumEqual(`${0} número(s) son iguales`);
				return;
			}
			setNumEqual(`${equalNumbers.length + 1} número(s) son iguales`);
		}
	}

	return (
		<>
			<p className="text-xs flex flex-col gap-1">
				4. Elabore un componente que reciba tres números e indique cuantos de
				esos 3 son el mismo número
			</p>
			<hr className="my-3" />
			<h1
				className="text-xs 
                        text-zinc-400 
                        mb-1"
			>
				Ingrese tres numeros
			</h1>
			<div className="mb-4 flex flex-col gap-2">
				<input
					className=" border"
					type="number"
					onChange={(e) => setNum1(parseInt(e.target.value))}
				/>
				<input
					className=" border"
					type="number"
					onChange={(e) => setNum2(parseInt(e.target.value))}
				/>
				<input
					className=" border"
					type="number"
					onChange={(e) => setNum3(parseInt(e.target.value))}
				/>
				<button onClick={handleCheckEqual}>Determinar números iguales</button>
				<p>{numEqual}</p>
			</div>
		</>
	);
}
