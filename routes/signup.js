const express = require('express');

const router = express.Router();

const DB = require('../database/util');

const state = require('../store');

const { signupValidator } = require('../middlewares/validators');

router.post('/', signupValidator());

router.post('/', async (req, res) => {
  const { pwCheck, ...user } = req.body;

  await DB.addUser(user);

  state.setSignupModal(false).setLoginModal(true).setPopup('회원가입 성공, 로그인을 해주세요.');

  res.redirect('/');
});

module.exports = router;
