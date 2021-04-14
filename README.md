# simple-chat-bot

**To run locally:**

1. Create knowledgebase in Azure QnA Maker
2. Create new .env file in project root and add knowledge base authorization key and URL to file (see below)

    CHATBOT_API_KEY=EndpointKey ***********************
    
    CHATBOT_URL=HOST/knowledgebases/*********/generateAnswer
    
3. In public/app.js change fetch url (line 23) to http instead of https
4. Run node index.js from terminal
5. Go to http://localhost:3000




**Example**

![image](https://user-images.githubusercontent.com/61024078/114739926-41f5e080-9d41-11eb-9489-d42ccf10d162.png)
