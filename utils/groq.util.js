const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROK_API });
exports.generateResponse = async (prompt) => {
    const chatCompletion = await groq.chat.completions.create({
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ],
        "model": "llama3-8b-8192",
        "temperature": 0,
        "max_tokens": 8192,
        "top_p": 1,
        "stream": false,
        "stop": null
    });

    return chatCompletion.choices[0].message.content;
}