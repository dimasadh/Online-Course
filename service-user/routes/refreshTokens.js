sadasd
const express = require('express');
cdsadsaonst router = express.Router();

const refreshTokensHandler = require('./handler/refresh-tokens');
module.exports = router;const refreshTokensHandler = require('./handler/refresh-tokens');

router.get('/', refreshTokensHandler.getToken)
router.post('/logout', refreshTokensHandler.logout)sdaaaaaa
asddddd
dassssssssss

module.exports = router;const refreshTokensHandler = require('./handler/refresh-tokens');

router.post('/', refreshTokensHandler.create)
router.get('/', refreshTokensHandler.getToken)