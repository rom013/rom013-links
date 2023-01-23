import { ListLinks } from "./components/ListLinks"

function App() {
	return (
		<>
			<div
				className="flex flex-col items-center flex-1 max-w-2xl w-full mx-auto px-6 py-16 relative"
			>
				<div className="flex flex-col items-center text-white">
					<div className="w-32 md:w-44 rounded-full overflow-hidden border-2 border-[#8F00FF] mb-6">
						<img src="https://github.com/rom013.png" alt="@rom013" className="object-cover"/>
					</div>
					<strong className="text-lg">@rom013</strong>
					<div className="mt-4 flex flex-col items-center">
						<strong className="text-base font-normal">Front-end</strong>
						<strong className="text-base font-normal">Desenvolvimento de sistemas - 2/3</strong>
					</div>
				</div>
				
				<ListLinks/>

				<footer className="text-white text-sm bottom-0">
					Feito com ♥ por @rom013
				</footer>
			</div>
		</>
	)
}

export default App
