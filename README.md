# NeoBank

Welcome to NeoBank — a web application for convenient credit applications, developed with React and TypeScript. The application allows users to:

- View information about the bank and its products
- Follow news and exchange rates
- Apply for loans

## Figma

Generated with Codia: https://www.figma.com/design/039QossFaiAFWwnsbNQRpo/Neobank

## Loan application logic

1. The user fills out a form (prescoring) on the loan page, and after submitting the data, a unique application id is created.
2. Prescoring processing begins, and if it passes, the user gets 4 offers to choose from (loanOffer) with different conditions (for example without insurance, with insurance, salary client, with insurance and salary client).
3. The user selects one of the offers and sends a request, after which their application is saved.
4. After creation, the user sees a message that they need to wait for the response by email.
5. The user receives an email with the text "Your application is pre-approved, complete the application."
6. In the email, the client goes to the loan/id page and fills out a second form with passport data and work information. After submitting the form, a message appears that the response will come by email. Also, immediately after submission, a 10-second timer starts, and if the status CC_DENIED arrives, the user is redirected to the main page and the application process ends.
7. Data scoring happens, the backend calculates all credit data (APR, payment schedule, etc.). After validation, the user receives an approval or denial email. If approved, the email contains a link to the request "Generate documents", loan/id/document.
8. After following the link, the user sees the payment schedule from the first to the last month; if the user agrees, they check a checkbox and submit the documents for generation. After that, the page shows a message that the user should check their email.
9. The user receives documents by email and a link to confirm acceptance of terms. By following the link loan/id/document/sign, the user checks a checkbox and submits documents for signing. The user can refuse or agree to the terms. After submitting, a message appears again suggesting to check the email.
10. If the user agrees, a confirmation code is sent by email. On loan/id/code, the user enters the code. If the entered code is incorrect, an error message is shown. If the code matches, a congratulation screen appears and the loan application process ends.

## Project launch

To run the project, do the following:

1. Clone the repository:
   ```bash 
   git clone https://github.com/ilyhan/Neobank.git
   ```

2. Go to the project folder:
   ```bash
   cd Neobank
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

After these commands, the app will be available at http://localhost:5173 and you can use it in the browser.

▎ Contacts

If you have any questions, contact:  

- By email: ilya.nesterov2003@yandex.ru  
- On Telegram: [@DJNest](https://t.me/DJN)

## Thank you for your interest in my project!