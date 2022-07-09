
<!-- <html>
  <head>
    <meta charset="utf-8">
    <title>{{ page.title }}</title>
  </head>
  <body>
    
    {{ content }}
  </body>
</html> -->

<!-- <nav style="background-color:coral">
    {% include navigation.yml %}
</nav>
 -->
<nav>
  <a href="/" {% if page.url == "/" %}style="color: red;"{% endif %}>
    Home
  </a>
  <a href="/about/" {% if page.url == "/about/" %}style="color: red;"{% endif %}>
    About
  </a>
</nav>


Hello there! I am a biomedical engineer currently living and working the in San Francisco Bay Area. I am currently working at Prodeon Medical as an Research and Development Engineer, focused on designing and developing nitinol implants, associated catheter systems, and test methods. 

In my spare time, I am an amateur data analyst/scientist, with my current interest in researching how ideas spread, how those ideas might influence behavior, and the practical applications of such models in fields such as marketing. My other interests include machine learning, investing, video games, and tinkering to create artsy projects.

Feel free to [contact me on LinkedIn](https://www.linkedin.com/in/kennethcchang/) if you want to talk.

![My helpful screenshot](/assets/WhiteFlowerBloom.gif)

