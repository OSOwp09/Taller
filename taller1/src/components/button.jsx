export default function Button({ number, text, cambiarEstado, cambiarNume }) {

    const newText = text.split('\n').map(str => <p className="mb-1">{str}</p>);
    
	return (
		<>
			<button
                onClick={()=>cambiarEstado(number)}
				className="
				bg-primary-color
				shadow-sm
				hover:shadow-md
				text-black 
				py-2 
				px-4 
				rounded
				max-w-sm min-h-[100px]"
			>
				<div className="grid grid-cols-3">
					<p className="w-14 place-self-center grid place-items-center text-5xl border-r">{number}</p>
					<p className="grid place-items-center text-xs text-left col-span-2 my-0">{newText}</p>
				</div>
			</button>
		</>
	);
}
