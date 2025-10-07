# **FAQ App**

**FAQ App** is a Node.js application for managing frequently asked questions (FAQs) with multi-language translation support. This application provides a RESTful API to create, retrieve, update, and delete FAQs, with automatic translations into English, Hindi, and Bengali. It uses MongoDB (via MongoDB Atlas) for storage, Redis for caching, and includes unit tests using Mocha and Chai.


## **Features**
- **FAQ Model:** Store FAQs with a question and an HTML-formatted answer.
- **Multi-Language Translation:** Automatic translation into English, Hindi, and Bengali.
- **WYSIWYG Editor:** Integrated with CKEditor for rich text editing in the admin panel.
- **RESTful API:** Endpoints for creating, retrieving, updating, and deleting FAQs.
- **Caching:** Redis is used to cache translated FAQs for improved performance.
- **Unit Testing:** Comprehensive unit tests written with Mocha and Chai.
- 
## **Installation**
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/EdukondaluJoga/FAQ.git
   cd FAQ

## **Configuration**
  1.  **Environment Variables:**
Create a .env file in the root directory with the following content (replace with your actual credentials).
  2.	**MongoDB & Redis:**
	•	MongoDB: Ensure your MongoDB Atlas cluster (or local MongoDB) is running.
	•	Redis: Ensure Redis is installed and running on your machine or use a Redis cloud service.

## **Access the admin panel:**
Open your browser and navigate to http://localhost:3000/admin to create FAQs.

## API Endpoints

## Retrieve all FAQs
**GET** `/api/faqs?lang=en|hi|bn`  
Returns all FAQs in the selected language.  

## Retrieve a single FAQ by ID
**GET** `/api/faqs/:id?lang=en|hi|bn`  
Returns a single FAQ based on the provided ID and language.  

## Create a new FAQ  
**POST** `/api/faqs`  

**JSON Body:**  
```json
{
  "question": "Your question",
  "answer": "Your answer in HTML format"
}
```
## Update an existing FAQ
**PUT** `/api/faqs/:id`  
Updates an existing FAQ based on the provided ID.  

## Delete a FAQ
**DELETE** `/api/faqs/:id`  
Deletes the FAQ with the specified ID.  

## Running Unit Tests
Unit tests are written using Mocha and Chai and are located in the tests folder.

**To run all tests:** npm bash

## Test Structure

### API Endpoint Tests  
📌 **File:** `tests/api.test.js`  

- ✅ Create FAQ  
- ✅ Retrieve all FAQs  
- ✅ Retrieve FAQ by ID  
- ✅ Update FAQ  
- ✅ Delete FAQ  

### Model Tests  
📌 **File:** `tests/model.test.js`  

- ✅ Tests for the `getTranslation` method of the FAQ model  

**Note:**  
If any test times out (e.g., due to a slow update operation), consider increasing the timeout in your test file by using a traditional function (not an arrow function) and calling:  

```js
this.timeout(10000);
