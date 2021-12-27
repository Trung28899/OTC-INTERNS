1. 2 ways of linking JavaScript File in HTML:

   - Internal
   - External

2. Difference between having <script> within <head> tag vs at the end of <body> tag:

   - Background information:
     +, Browser only render <body> tag after it completely render <head> tag

     +, We Usually ran JavaScript for 2 reasons:
     -> Manipulate HTML elements
     -> Loading external codes

   - If we manipulate HTML elements, we have to put the script tag at the end of the
       <body> tag, otherwise the browser will render something that is not there

   - If we are loading external codes, we want to have it load at the <head> tag

=> oftenly we put external javascript file that we write at the end of the <body> tag
=> we put script tag at the head tag when we need to load some external library

See this video for further explanation:
https://www.youtube.com/watch?v=EeN0y6GzG1g&ab_channel=CodingwithDG
