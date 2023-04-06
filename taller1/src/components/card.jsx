export default function Card({children, title}) {
    
	return (
		<>
			<div className="my-8 h-auto w-96 rounded overflow-hidden shadow-lg">
				<div className="mb-px-6 py-4 grid place-items-center">
					<h1 className="w-72 pb-2 font-bold text-xl mb-8 border-b grid place-items-center" >{title}</h1>
                    <div className="grid gap-3">
                        {children}
                    </div>
				</div>
			</div>
		</>
	);
}
