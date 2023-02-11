const express = require('express');
const router = express.Router();

const refreshTokensHandler = require('./handler/refresh-tokens');

router.post('/', refreshTokensHandler.create)
router.get('/', refreshTokensHandler.getToken)
router.post('/logout', refreshTokensHandler.logout)

module.exports = router;
