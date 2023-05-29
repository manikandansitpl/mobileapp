const studentDetail = require('./sceema')
const bcrypt = require('bcrypt');




const personPost = async (req, res) => {
    const { Name, Password } = req.body;
    if (!Name || !Password) {
        res.status(400).json('please fill all the fields')
    }
    if (Name && Password) {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(req.body.Password, salt);
        const savep = studentDetail({
            Name: req.body.Name,
            Password: hashedPassword
        })
        const show = await savep.save()
        res.status(200).json(show)
    }
};


const sirsPost = async (req, res) => {
        const savep = sirs({
            Name: req.body.Name
        })
        const show = await savep.save()
        res.status(200).json(show)
        
};


const personSet1 = async (req, res) => {
    const data = req.params.id
    const getApp = await persons.find();
    const reult = getApp.filter(e => e.id === data)
    res.status(200).json(reult)
};
const retrive = async (req, res) => {
    const Password = req?.body?.Password
    const user = await persons.findOne({ Name: req.body.Name })
    try {
        if (!user) {
            res.status(404).json('page not found')
        }
        const isPasswordMatch = await bcrypt.compare(Password, user?.Password);
        console.log(isPasswordMatch)
        if (isPasswordMatch) {
            // Passwords match, authentication successful
            res.status(200).json({ message: 'Authentication successful' });
        } else {
            // Passwords do not match, authentication failed
            res.status(401).json({ error: 'Authentication failed' });
        }
    } catch (error) {
        throw error
    }

};

const personSet = async (req, res) => {
    const getApp = await studentDetail.find();
    res.set('Content-Type', 'application/json');
    res.status(200).json(getApp)
};

const personPut = async (req, res) => {
    const result = await persons.findByIdAndUpdate({ _id: req.params.id }, { $set: { Name: req.body.Name } }, { new: true })
    res.status(200).json(result)
};
const personDelete = async (req, res) => {
    const result = await persons.deleteOne({ _id: req.params.id })
    res.status(200).json(result)
};

module.exports = { personSet, personSet1, personPost, retrive  , sirsPost};