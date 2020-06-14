# rr-streamify
A novel OTT platform to show exciting web series and brand new movies.

This project is implemented using React. This SPA (Single Page Application) has 3 main pages: 
Home, Series & Movies. From the Home page the user can click on either Popular Series or Popular Movies link, to navigate to the respective pages. The data is fetched from a JSON web url.

Setup instructions:
1. Upon page launch the url reads: http://localhost:3000/ but it should ideally be http://localhost:3000/pages/home.
Please change it to this: http://localhost:3000/pages/home so that we can access the Home page, and from there Series and Movies links are under the images viz. Popular Movies, Popular Series
I am really sorry for this, as I could not resolve it at the last minute due to paucity of time.

How did you decide on the technical and architectural choices used as part of your solution?
The factors that influenced my technical and architectural choices were:
1. Keep it DRY. The series and movies pages were initially designed to be 2 separate components. As it was realized that both were essentially having identical data except for one attribute, the design was modified to make them derive from a single component.
2. Maximum efforts were made to keep the design simple and elegant. That is why I have used Routers. I wanted to use contextType for passing information about the current page that we are in, but it was presumed to be an overkill. I could achieve the same by passing the data simply through props.
3. All the latest features of React like pure functional components, hooks, Routers etc were used.

Are there any improvements you could make to your submission?
I have put my best efforts in this project. However, in retrospect, I feel that there would be ways in React to meet these requirements in a much simpler way. I shall look for the same. Infact, I plan to implemente this project , in a much simpler way from scratch, when I get some more understanding of the React features and design possibilities.

Little things, I would have made improvements upon are:
1. Better naming and probaly a single file for all css components, as it would help reduce response time.
2. Better look and design for css like a perfect layout that can me more web-responsive.
3. Implementing svg icons for social media to make them scalable and better web-responsive.

What would you do differently if you were allocated more time?
1. Given more time, I would have implemented test classes. I know that it is a glaring omission. I under estimated the efforts required for this project. The requirements seemed to be simple enough to be achieved quickly. But slowly things were taking more time. For instance, the movies were coming as an empty array when applying the filter for 21 entries. It was strange that even debugging could not resolve the issue. I had to do a work around for the same.

CSS requirement was challenging as always for developers. But this time, I was determined to conquer CSS, I have gone through tons of material on CSS grid management and web-responsive designs. Now I can proclaim myself to be reasonably good at CSS grid - thanks to this project for giving me the motivation to learn it. I always wanted to hone my skills on CSS, but the html design of this project offered good scope to learn it.

2. I would have written a better looking spinner with a cleaner code for the same.


