const RegisterStudent = require('./sceema')
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const { Name, Password } = req.body;
    try {
        const validateName = await RegisterStudent.findOne({ Name: Name })
        if (!Name || !Password) {
            res.status(400).json('please fill all the fields')
        }
        if (validateName) {
            res.status(409).json("user already exist")
        }
        if (Name && Password) {
            // Generate a salt
            const salt = await bcrypt.genSalt(10);
            // Hash the password with the salt
            const hashedPassword = await bcrypt.hash(req.body.Password, salt);
            const savep = RegisterStudent({
                Name: req.body.Name,
                Password: hashedPassword
            })
            const show = await savep.save()
            res.status(200).json(show)
        }
    } catch (error) {
        throw error
    }

};

const login = async (req, res) => {
    const { Name, Password } = req.body;

  try {
    // Retrieve the hashed password from the data store based on the username
    const user = await User.findOne({ Name });

    if (!user) {
      // User does not exist
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const storedHashedPassword = user.Password;

    // Compare the plain password with the stored hashed password
    const passwordMatch = await bcrypt.compare(Password, storedHashedPassword);

    if (passwordMatch) {
      // Passwords match, authentication successful
      return res.status(200).json({ message: 'Login successful' });
    } else {
      // Passwords do not match
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
// const retrive = async (req, res) => {
//     const Password = req?.body?.Password
//     const user = await persons.findOne({ Name: req.body.Name })
//     try {
//         if (!user) {
//             res.status(404).json('page not found')
//         }
//         const isPasswordMatch = await bcrypt.compare(Password, user?.Password);
//         console.log(isPasswordMatch)
//         if (isPasswordMatch) {
//             // Passwords match, authentication successful
//             res.status(200).json({ message: 'Authentication successful' });
//         } else {
//             // Passwords do not match, authentication failed
//             res.status(401).json({ error: 'Authentication failed' });
//         }
//     } catch (error) {
//         throw error
//     }

// };

// const personSet = async (req, res) => {
//     const getApp = await studentDetail.find();
//     res.set('Content-Type', 'application/json');
//     res.status(200).json(getApp)
// };

// const personPut = async (req, res) => {
//     const result = await persons.findByIdAndUpdate({ _id: req.params.id }, { $set: { Name: req.body.Name } }, { new: true })
//     res.status(200).json(result)
// };
// const personDelete = async (req, res) => {
//     const result = await persons.deleteOne({ _id: req.params.id })
//     res.status(200).json(result)
// };

module.exports = { login, register };