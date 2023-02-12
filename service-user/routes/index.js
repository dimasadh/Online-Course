var express = require('express');
var router = express.Router();


module.exports = router;const refreshTokensHandler = require('./handler/refresh-tokens');

router.post('/', refreshTokensHandler.create)
router.get('/', refreshTokensHandler.getToken)
router.post('/logout', refreshTokensHandler.logout)

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const refreshTokensHandler = require('./handler/refresh-tokens');

router.post('/', refreshTokensHandler.create)
router.get('/', refreshTokensHandler.getToken)
router.post('/logout', refreshTokensHandler.logout)

module.exports = router;const refreshTokensHandler = require('./handler/refresh-tokens');

router.post('/', refreshTokensHandler.create)
router.get('/', refreshTokensHandler.getToken)
router.post('/logout', refreshTokensHandler.logout)

module.exports = router;const refreshTokensHandler = require('./handler/refresh-tokens');

router.post('/', refreshTokensHandler.create)
router.get('/', refreshTokensHandler.getToken)
router.post('/logout', refreshTokensHandler.logout)

module.exports = router;
