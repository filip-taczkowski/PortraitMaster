const Photo = require('../models/photo.model');
const Voter = require('../models/Voter.model');

/****** SUBMIT PHOTO ********/

exports.add = async (req, res) => {

  try {
    const { title, author, email } = req.fields;
    const file = req.files.file;

    const fileName = file.path.split('/').slice(-1)[0]; // cut only filename from full path, e.g. C:/test/abc.jpg -> abc.jpg
    const fileExt = fileName.split('.').slice(-1)[0];
    const acceptedExt = ['jpg', 'gif', 'png'];

    const pattern = new RegExp(/(<\s*(strong|em)*>(([A-z]|\s)*)<\s*\/\s*(strong|em)>)|(([A-z]|\s|\.)*)/, 'g');
    const textMatched = title.match(pattern).join('');

    const validateEmail = email => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    if(title && author && email && file) { // if fields are not empty...
      if (!acceptedExt.includes(fileExt.toLowerCase())) {
        throw new Error('Wrong ext');
      } else if (title.length > 25 || author.length > 50 || textMatched.length < title.length) {
        throw new Error('Wrong input format');
      } else if (!validateEmail(email)){
        throw new Error('Wrong email format');
      } else {
        const newPhoto = new Photo({ title, author, email, src: fileName, votes: 0 });
        await newPhoto.save(); // ...save new photo in DB
        res.json(newPhoto);
      }
    } else {
      throw new Error('Wrong input!');
    }

  } catch(err) {
    res.status(500).json(err);
  }

};

/****** LOAD ALL PHOTOS ********/

exports.loadAll = async (req, res) => {

  try {
    res.json(await Photo.find());
  } catch(err) {
    res.status(500).json(err);
  }

};

/****** VOTE FOR PHOTO ********/

exports.vote = async (req, res) => {

  try {
    const voter = await Voter.findOne({ user: req.clientIp });
    const photoToUpdate = await Photo.findOne({ _id: req.params.id });
    console.log(voter);
    if (!photoToUpdate) res.status(404).json({ message: 'Not found' });
    else {
      if (voter) {
        if (voter.votes.includes(photoToUpdate._id)) {
          res.status(500).json(err);
        } else {
          voter.votes.push(photoToUpdate._id);
          photoToUpdate.votes++;
          photoToUpdate.save();
          res.send({ message: 'OK' });
        }
      } else {
        const newVoter = new Voter({
          user: req.clientIp,
          votes: [photoToUpdate._id]
        });
        await newVoter.save();
        photoToUpdate.votes++;
        photoToUpdate.save();
        res.send({ message: 'OK' });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
  
};
