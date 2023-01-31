import { Configuration, OpenAIApi } from 'openai'

if (!process.env.OPENAI_API_KEY) {
	throw new Error('Missing API-Key from OpenAI')
}
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const basePromptPrefix = `
Talk to me like you are the character 'The Dude' from the film 'The Big Lebowski'
`
const generateAction = async (req, res) => {
	console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

	const baseCompletion = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `${basePromptPrefix}${req.body.userInput}\n`,
		temperature: 0.7,
		max_tokens: 300,
	})

	const basePromptOutput = baseCompletion.data.choices.pop()

	res.status(200).json({ output: basePromptOutput })
}

export default generateAction
