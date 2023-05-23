import Bard, { askAI } from "bard-ai";

export const init = async (sessionID) => await Bard.init(sessionID);

export const extractText = async (prompt) => {
    prompt += `
        \n\n
        Return your response as a JSON with key 'response'. The value associated should be a single string with your answer. ONLY return that JSON and nothing else. Be accurate and concise.
    `;

    let response = await askAI(prompt)
    let match = response.match(/"response": "([^"]*)"/);
    if (match) return match[1].trim()
    else return response;
}

export const extractCode = async (prompt) => {
    prompt += `
        \n\n
        Return your response in a codeblock.
    `;

    let response = await askAI(prompt)
    let match = response.match(/```([a-zA-Z]+)?(.*?)```/s);
    if (match) return match[2].trim();
    else return response;
}

export default { init, extractText, extractCode };