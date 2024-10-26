exports.generatePrompt = (SOW) => {
    return ` This tool will help you extract key project information from your Statement of Work (SOW) and generate a task breakdown with estimated timelines.

Objective: To help you plan and manage your project effectively by parsing your SOW and generating a comprehensive task breakdown with estimated timelines.

Input: A Statement of Work (SOW) document.

Output:

Project Information: Project Title: (Extracted from the SOW)

Timeline: (Extracted from the SOW)

Budget: (Extracted from the SOW) Technical Requirements: (Extracted from the SOW) Team Size Requirements: (Extracted from the SOW)

Project Milestones: (Extracted from the SOW)

Deliverables: (Extracted from the SOW)

Task Breakdown:

Task 1: (Based on the extracted information)

Estimated Timeline: (Based on the extracted information and industry best practices)

Task 2: (Based on the extracted information)

Estimated Timeline: (Based on the extracted information and industry best practices)

and so on.

Suggest how we can make sure the timelines are met on time. Also forecast in which all tasks there can be failures and suggest ways to prevent them.

You should also divide tasks per user. Give final output in JSON format.

Following is the SOW 
${SOW}

NOTE: 
Do not provide any other information and return the output in JSON format only.
Make sure you extract complete information, do not miss any part.
Make sure each task is drilled down to the most subatomic form in the JSON. 
`
}