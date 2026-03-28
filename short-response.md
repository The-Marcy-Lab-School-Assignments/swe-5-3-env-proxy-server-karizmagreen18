# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will each be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content per question.

---

## Question 1:

Why is it unsafe to make requests to a third-party API (like Giphy) directly from frontend JavaScript code? What specific risk does this create, and how can a malicious user exploit it?

**Your answer here**:

--- 
It is unsafe to make requests to a third-party API directly from frontend JavaScript because your API key has to be included in the code, which makes it visible to anyone using the browser. This creates a security risk because a malicious user can inspect the code, steal the API key, and abuse it to make their own requests. 

## Question 2:

What is the proxy server strategy? How does it help avoid exposing API Keys in client-side code while still providing access to APIs that require keys?

**Your answer here**:

---
The proxy server strategy is when the frontend sends requests to your backend server instead of directly to a third-party API. The backend (proxy server) then makes the API request using the API key and sends the data back to the frontend. This helps avoid exposing API keys because the key is stored securely on the server, not in the client-side where users can see it.

## Question 3:

What is an environment variable, and why do we store API keys in a .env file instead of directly in source code? What role does .gitignore play in this setup, and what could go wrong if the .env file were accidentally committed to GitHub?

**Your answer here**:

---
An environment variable is a value stored outside of your source code that your application can access, such as an API key. We store API keys in a .env file instead of directly in the code to keep them private and prevent them from being exposed to users. The .gitignore file is used to make sure the .env file is not uploaded to GitHub. This protects sensitive information from being publicly shared. If the .env file were accidentally committed, anyone could see and use the API keys, which could lead to misuse.