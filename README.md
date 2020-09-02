# rr-streamify
A novel OTT platform to show exciting web series and brand new movies.

This project is implemented using React. This SPA has 3 Web Responsive pages i.e. Home, Series & Movies. The data is fetched from external API.
![Live Link](https://safe-escarpment-90366.herokuapp.com/pages/home)

![Alt Link](https://github.com/venky4c/rr-streamify/blob/master/dist/src/RRStreamify.gif)


The reasons for the architectural choices were:
1. Keep it DRY. The series and movies pages were initially designed to be 2 separate components. As it was realized that both were essentially having identical data except for one attribute, the design was modified to make them derive from a single component.
2. All the latest features of React like pure functional components, hooks, Routers etc were used.


