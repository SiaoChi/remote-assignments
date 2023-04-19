const pool = require("../database");

const login = async (email, password) => {
  const [rows] = await pool.query(`SELECT * FROM user WHERE email = ?`, [email]);

  if (rows.length === 0) {
    throw new Error('Invalid email or password');
  }

  const user = rows[0];

  if (user.password !== password) {
    throw new Error('Invalid email or password');
  }
  const { id } = user

  return { id , email };
};

const signup = async (email, password) => {
  const [rows] = await pool.query(`SELECT * FROM user WHERE email = ?`, [email]);

  if (rows.length > 0) {
    throw new Error('The email has already been registered');
  }

  const [result] = await pool.query(`INSERT INTO user (email, password) VALUES (?, ?)`, [email, password]);

  const id = result.insertId;

  return { id, email };
};

const handleAuth = async (req, res) => {
  const { form, email, password } = req.body;

  try {
    let user;

    if (form === 'signIn') {
      user = await login(email, password);
    } else if (form === 'signUp') {
      user = await signup(email, password);
    } else {
      res.send('form is wrong')
    }

    req.session.user = user;

    res.redirect('/member');
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: error.message });
  }
};

const checkAuth = async(req, res) => {
    if(req.session.user){
        res.send('<h2>Login successful.</h2>')
    }else{
        res.redirect('/home')
    }
}

module.exports = { handleAuth , checkAuth };
