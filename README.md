<h1 align="center">Cluster Page</h1>

This is a mockup of a website for a future project.

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn how to use the web application.
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find it's tools and what utility these provide.
    -   #### Returning Visitor Goals

        1. As a Returning Visitor, i Want to be able qucikly use the website with minimal effort

        2. As a frequent user i want to feel like its a practical tool that saves me time to use

        3. as a frequent user i want to become used to it's utility and feel safe that all my information is safe

-   ### Design
    -   #### Colour Scheme
        -   Bootstrap secondary and plain white, inspired by brutalist architecture, digital brutalism.
    -   #### Typography
        -   used roboto for simple, familiar and contemporary feel. 
    -   #### Imagery
        -   the imagery is supposed to evoke a clustered dense and utilitarian feel. 

-   Wireframes can be found in the "assets/wireframes" folder in the github repo

## Features

-   Responsive on all device sizes

-   lightweight

-   GDPR compliant

-   Fast

-   simple

## Technologies Used

- emailJS (https://www.emailjs.com/)
- YouTube (https://www.youtube.com/)

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [javascript](https://en.wikipedia.org/wiki/JavaScript)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [PYTHON](https://en.wikipedia.org/wiki/Python_(programming_language)) [as part of the code institute template]

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to create the logo and editing photos for the website.
1. [GitPod:](https://gitpod.io/)
    - Gitpod was used to write the code and test the site, as well as the main compiler used.
1. [fullstack WebDev Template by code institute:](https://codeinstitute.net/)
    - the template was used to set up the project.

## testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/#validate_by_input) - [Results](assets/validationscreens)[folder in this github repo]
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results]((assets/validationscreens) folder in this github repo]

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn how to use it.

    1. Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice.
    2. The main pages of interest are naturally placed where users would instictivly look, especially the target audience of power users this toll is designed for.
    3. The user has 2 options, go to the guide and to manage the clusters.

2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

    1. The site has been designed to minimalist there is only so much to see and to access so you will eventually find your way to the guide.

-   #### Returning Visitor Goals

1. As a Returning Visitor, i Want to be able to use the site easily

    1. it will store the setups from previous sessions in local storage so it will remember what the user did.
    2. the main functionality is up front and intuative.
    3. the website is very lightweight to facilitate quick use

2. As a frequent user i want to feel like its a practical tool that saves me time to use

    1. the website is designed to be as quick and lightweight as possible so you will be able to use it with minimal effort once you have completed the initial setup

3. as a frequent user i want to become used to it's utility and feel safe that all my information is safe
    
    1. in the guide there is information on how to use the website and how to 

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Safari, and Firefox browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8, iPhoneX, OnePlus8T and Samsung Galaxy 4s.
-   A large amount of testing was done to ensure that all pages were linking correctly throughout every stage of development.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues, with special recognition to Alvin Zedendahl for QA testing.
-   At every step in the development the website was utilized constantly to see if any major errors where present. 

### Known Bugs

-   the FAVICON regularly returns a 404 error code. the source that triggers this has not been discovered, this is not present when testing on google Chrome. but has ocassionally been triggered when testing on the Internet Explorer, Microsoft Edge and Safari Browsers

-   Curing testing the code would run too fast for the DOM to initiate leading to a faliure to run JS functions. this bug should be solved by adding a js function that makes the script wait untill the dom is ready to run the scripts.

-   Currently the naming function is inconsistent at best at this time i am not sure why it works on some devices and not on others. 

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/HugoZedendahl/Cluster_Page)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/HugoZedendahl/Cluster_Page)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/HugoZedendahl/Cluster_Page)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/HugoZedendahl/Cluster_Page
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/HugoZedendahl/Cluster_Page
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code


-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project to make site responsive using the Bootstrap Grid System as well as styling through the inbuilt styling tools that Bootstrap 4 incorporates.


### Content

-   All content was written by the Hugo Zedendahl with exception to the emailJS related code wich was given on their website https://www.emailjs.com/.

### Media

-   logo Images were created by Alvin Zedendahl on comission by Hugo Zedendahl

### Acknowledgements

-   while the regex will prevent some malicios information from being submitted this is no replacement for proper encryption and 
    security measures. one clear weakness is that since the data is stored clientside there is a possibility that a user with malintent would be able to edit the localstorage and run malicious data on the launch function. what i would have done is to encrypt the data before storing it in the localstorage and doing all the regex checks outside of the end users access. 

-   there will be missing bug commits since this is a remake of the original repo to provide better documentation on the commits. 
    i am not sure how to go back and redo/edit commit history so i thought this would be the best solution. link to the original repo can be found here https://github.com/HugoZedendahl/Cluster_Page 

-   My Mentor for continuous helpful feedback.

-   My brother for intense QA testing and answering questions about javascript.

-   Tutor support at Code Institute for their support.
