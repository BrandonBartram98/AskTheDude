export default function Header() {
	return (
		<div className="flex text-left justify-between items-center">
			<div className="flex flex-col text-left">
				<div className="flex">
					<h1 className="font-bold tracking-wide text-lebowski text-3xl sm:text-4xl">Ask The Dude</h1>
				</div>
				<div className="flex">
					<h2 className="font-medium tracking-wide text-white text-sm sm:text-md">A Chat-GPT Bot</h2>
				</div>
			</div>

			<div className="flex gap-3 justify-end">🎳</div>
		</div>
	)
}
