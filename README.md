The [Trivia Quest]() is a quiz that consists of ten sets of questions designed to test your general knowledge. Each set of questions covers various topics, including geography, authors and lots more. The quiz is interactive and user-friendly, allowing a user select an answer for each question. Once the user answers a question, the user can proceed to the next one. At the end of the quiz, the total score will be calculated based on the number of correct answers the user has provided. The questions are carefully crafted to be challenging yet informative, offering an opportunity to learn and expand your knowledge while enjoying the quiz. The topics covered in the questions are diverse, ensuring a well-rounded quiz experience. Whether you are playing for fun, to test your knowledge, or to compete with friends, the Trivia Quest provides an engaging and educational platform to enhance your general knowledge and have an enjoyable time.


# UX
## Goals
### Visitor Goals

**The target audience for Trivia Quest**
- Individuals who want to gain geographical and general knowledge.
- Indiviuals who want to have fun and still learn.

**User goals are**
- Increase in knowledge while playing.
- Play a fun quiz game while simultaneously learning.

**The Trivia Quiz objectives**
- Expanding knowledge while participating in the quiz.
- Interactive and enjoyable experience where individuals can have fun while answering questions and competing with others.

### Business Goals
- Drive User Engagement by creating an engaging trivia quiz.

**User stories**
- As a user, I want to be able to play a fun and engaging quiz with a variety of interesting questions so that I can test my knowledge and have an enjoyable experience.
- As a user, I want the quiz to be easy to understand and navigate so that I can quickly start playing and have an increase in knowledge after the quiz is over.
- As a user interested in playing a quiz, I expect to see how many answers i got correct.

## Visual Design 
I chose my font from [Google Fonts](https://fonts.google.com/specimen/Kurale) website. I selected the Kurale font from the Google Fonts website because I found it to be a perfect fit for the style and tone of my project.

## The Colours 
Blue is often associated with qualities like trust, reliability, and professionalism. It can also evoke feelings of calmness and serenity. White, on the other hand, is often associated with purity, simplicity, and cleanliness. By choosing blue and white, I aimed to create a sense of trustworthiness, professionalism, and a clean aesthetic for my website.

# Features
## Wireframes 
![Screenshot 2023-06-01 164559](https://github.com/Issam-Allymis/Trivia-Quest/assets/126810074/6afa9f62-cd7a-4ab2-a3d9-f4d060b087f1)

![Screenshot 2023-06-01 164612](https://github.com/Issam-Allymis/Trivia-Quest/assets/126810074/1e1e5c4d-009e-499e-baf7-ce2f15d86f2f)

![Screenshot 2023-06-01 164628](https://github.com/Issam-Allymis/Trivia-Quest/assets/126810074/69ac638c-f9d9-4a64-b125-5cb2e5234f6c)


## Page Elements
### The Header 
![Screenshot 2023-05-31 013321](https://github.com/Issam-Allymis/Trivia-Quest/assets/126810074/0ab89a52-4e61-48f1-8da2-f82091e56068)

I created a simple heading design that is consistent throughout the quiz.

### The Game Section
![Screenshot 2023-05-31 013517](https://github.com/Issam-Allymis/Trivia-Quest/assets/126810074/714690a3-aa13-45cd-b5bb-2fe3b475d97e)

The game is simple, there is a question followed by three answers, one of which is correct. If the question is answered correctly, it is shown in green, if answered incorrectly, it is shown in red. Above the question and answers is where the quit button will be located if the user wishes to discontinue playing.

### The Final Scores Section
![Screenshot 2023-05-27 151333](https://github.com/Issam-Allymis/Trivia-Quest/assets/126810074/800c3d9a-e869-4085-9db2-bd768e329e74)

Once the user has answered all the questions, the final score is revealed as well as a restart button if the user wishes to play again.

# Technologies Used
## Languages
- HTML
- CSS
- JavaScript

## Libraries
- [Google Fonts](https://fonts.google.com/specimen/Kurale)

## Platforms 
- [GitHub](https://github.com/)
- [Gitpod](https://gitpod.io/login/)

# Other Tools
## Testing 
I have tested the [Trivia Quest]() on both desktop and mobile screens using the ***Lighthouse*** tool, and it is designed to be responsive, adapting to different screen sizes. Here are the test results below:
### Desktop 
![Screenshot 2023-06-01 172840](https://github.com/Issam-Allymis/Trivia-Quest/assets/126810074/28644b4d-1330-4393-90c1-b91c1d2da620)

### Mobile 
![Screenshot 2023-06-01 172904](https://github.com/Issam-Allymis/Trivia-Quest/assets/126810074/b8227c0d-92d1-4799-9f64-6a0fe6551527)

## General Testing
- During the development process, I regularly tested my code using the developer tools. This allowed me to assess the impact of the code on various elements and promptly identify any errors that occurred in the console.

## Methods
1. HTML has been validated through [W3C HTML5 Validator](https://validator.w3.org/)
2. CSS has been validated through [W3C CSS Validator](https://jigsaw.w3.org/css-validator/
3. JavaScript has been validated through [JShint](https://jshint.com/).
4. Ive used [Stack Overflow](https://stackoverflow.com/) [W3Schools](https://www.w3schools.com/) I have included references and tutorials throughout my project to assist me whenever I encountered difficulties or needed a refresher on how to write specific sections of code.

#Bugs
- I faced challenges when implementing the timeout function in my code to transition to the next question. Despite my efforts, I couldn't get the game to start properly, and I struggled to identify the root cause of this issue.
- I encountered another issue where, upon selecting the quit button in the game, only the first question would appear below the start button. I struggled to resolve this bug and couldn't determine the underlying cause of the issue.

# Deployment 
## GitHub
 **This this site was deployed using GitHub Pages following these steps listed below**:
 1. Log into GitHub and [GitHub Repository](https://github.com/Issam-Allymis?tab=repositories). This is where the project is located.
 2. Find the project's navbar and select the 'Settings' tab.
 3. In the settings page on the left hand side of the page, find "pages" under "Code and  automation" 
 4. At the Branch it is labelled as "none", click the dropdown menu and select "main" after hit save.
 5. The page will then automatically refresh.
 6. A link to the deployed site will appear after receiving a pop-up notification at the top of the page.


## **Clone Repository Steps**
1. Log into Your GitHub account and locate to [GitHub Repository](https://github.com/Issam-Allymis?tab=repositories).
2. In the repository page, find and click **code**.
3. There are several ways of doing this next step:
   - Clone the repository using HTTPs, under "Clone with HTTPS", then click the 'copy' icon.
   - Clone a repository using GitHub CLI, click 'Use GitHub CLI', then ckick the 'copy' icon.
   - Clone the repository using SSH key, click 'Use SSH', then click the 'copy' icon. 
4. Open GitBash in the terminal.
5. Navigate to the directory where you want to clone a repository, you can use the "cd" command followed by the directory path. This will change the current working directory to the desired location.
6. Type "git clone" command followed by the URL you copied.
7. Press Enter.

# Credit 
- I took [Wed Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k) ideas to come up with the questions and answers array.

Happy coding
