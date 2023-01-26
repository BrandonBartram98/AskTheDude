'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useState } from 'react'

export default function Home() {
	const [userInput, setUserInput] = useState('')

	const [apiOutput, setApiOutput] = useState('')
	const [isGenerating, setIsGenerating] = useState(false)

	const callGenerateEndpoint = async () => {
		setIsGenerating(true)

		console.log('Calling OpenAI...')
		const response = await fetch('/api/generate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ userInput }),
		})

		const data = await response.json()
		const { output } = data
		console.log('OpenAI replied...', output.text)

		setApiOutput(`${output.text}`)
		setIsGenerating(false)
	}

	const onUserChangedText = (event) => {
		setUserInput(event.target.value)
	}

	return (
		<main className="h-screen">
			<div className="max-w-3xl sm:px-10 items-center justify-center mx-6 sm:mx-auto text-center pt-6 font-manrope">
				<Header />
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 justify-center mt-6">
					<img
						className="rounded-md mx-auto sm:mx-none w-48 sm:w-full"
						src="https://media0.giphy.com/media/hzrvwvnbgIV6E/giphy.gif?cid=ecf05e47i5030s2u857ucu7atwf99lsm7uqkpqxdh2i4nhia&rid=giphy.gif&ct=g"
						alt="The Dude"
					/>

					<div className="flex flex-col text-left bg-white px-6 py-8 bg-opacity-10 rounded-md overflow-y-auto">
						<div className="font-bold text-white mb-1">
							<p>The Dude Says:</p>
						</div>
						{!apiOutput ? (
							<></>
						) : (
							<div className="text-lebowski text-md">
								<p>{apiOutput}</p>
							</div>
						)}
					</div>
				</div>

				<div className="flex-col mx-auto justify-center items-center mt-4">
					<textarea
						maxLength={255}
						placeholder="ask me something, man..."
						value={userInput}
						onChange={onUserChangedText}
						className="flex-col resize-none w-full border-2 border-white text-white bg-white bg-opacity-10 border-opacity-10 p-4 rounded-md h-28"
					/>
				</div>
				<button
					onClick={callGenerateEndpoint}
					className="flex w-full bg-lebowski hover:bg-lebowski/60 transition-colors rounded-md justify-center mt-2 py-2 px-3 text-center"
				>
					{isGenerating ? (
						<span className="loader">
							<svg className="h-6 w-6 animate-spin stroke-black" viewBox="0 0 256 256">
								<line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
								<line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
								<line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
								<line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
								<line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
								<line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
								<line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
								<line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
							</svg>
						</span>
					) : (
						<p>Ask</p>
					)}
				</button>
				<Footer />
			</div>
		</main>
	)
}
