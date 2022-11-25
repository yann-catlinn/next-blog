# project next react

- Create packageJSON
  {
  "name": "next-blog",
  "private": "true",
  }

- npm install next react react-dom

- to know commands npx next --help

- npx next dev

- mkdir "pages" in root
- include in package.json

{
"name": "next-blog",
"private": "true",
"scripts":{
"dev": "next dev"
},
}

- cd "pages" touch "index.js"

- function HomePage(){
  return(
  <main>
  <h1>Title</h1>
  </main>
  );
  }

export default HomePage;

- cd ..
- touch .gitignore
  /.next/
  /node_modules/

- but normally to create a react project
  npx create-react-app react-blog
  npm start
