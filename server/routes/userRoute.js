import express from 'express';
import User from '../models/userModel';
import { getToken } from '../util';

const router = express.Router();

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const signinUser = await User.findOne({
    email: email,
    password: password,
  });

  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send();
  }
});

router.get('/createadmin', async (req, res) => {
  try {
    const user = new User({
      name: 'Akey',
      email: 'email@email.com',
      password: 'password',
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default router;
