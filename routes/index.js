var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SAMUEL MARTIN' });
});

/* GET home page from link click. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'SAMUEL MARTIN' });
});

/* GET menuPage page. */
router.get('/menuPage', function(req, res, next) {
  res.render('menuPage', { title: 'SAMUEL MARTIN' });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'SAMUEL MARTIN' });
});

/* GET projectsPage page. */
router.get('/projectsPage', function(req, res, next) {
  res.render('projectsPage', { title: 'SAMUEL MARTIN' });
});

/* GET contactPage page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'SAMUEL MARTIN' });
});

/* GET menu2 page. */
router.get('/menu2', function(req, res, next) {
  res.render('menu2', { title: 'SAMUEL MARTIN' });
});


/* GET cert page. */
router.get('/cert', function(req, res, next) {
  res.render('cert', { title: 'SAMUEL MARTIN' });
});


/* GET credits page. */
router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'SAMUEL MARTIN' });
});

/* GET closePage page. */
router.get('/closePage', function(req, res, next) {
  res.render('closePage', { title: 'SAMUEL MARTIN' });
});
module.exports = router;
