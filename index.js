const express = require('express');
const app = express();
app.use(express.static("public"))
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
  res.render('index', {
  });
})
app.get('*', function(req, res) {
  res.status(404).render("404")
});
app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
})

/*
CONNECT GITHUB:
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/AJK-14/<REPO-NAME>.git
    git push -u origin main
        TO COMMIT:
        git add .
        git commit -m "<commit name>"
CONNECT VERCEL:
    Add a vercel.json
    npm i -g vercel
    npm run start
*/