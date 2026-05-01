const fs = require('fs/promises');
const path = require('path');
const ContactMessage = require('../models/mainModels');

exports.getCV = async (req, res) => {
  try {
    // Ścieżka do folderu data
    const dataPath = path.join(__dirname, '../data');

    // Równoległe czytanie plików
    const [skills, education, experience] = await Promise.all([
      fs.readFile(`${dataPath}/skills.json`, 'utf-8'),
      fs.readFile(`${dataPath}/education.json`, 'utf-8'),
      fs.readFile(`${dataPath}/experience.json`, 'utf-8'),
    ]);

    // Parsowanie JSON
    const skillsData = JSON.parse(skills);
    const educationData = JSON.parse(education);
    const experienceData = JSON.parse(experience);

    res.status(200).render('index', {
      skills: skillsData,
      education: educationData,
      experience: experienceData,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getContactForm = async (req, res) => {
  try {
    res.status(200).render('contactMe');
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createMessage = async (req, res, next) => {
  try {
    const { firstname, surname, email, message } = req.body;

    await ContactMessage.create({ firstname, surname, email, message });

    res.redirect('/AleksKaczmarczyk/CV/contact?success=true');
  } catch (err) {
    next(err);
  }
};

exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await ContactMessage.find();

    res.status(200).json({
      status: 'success',
      results: messages.length,
      data: messages,
    });
  } catch (err) {
    next(err);
  }
};
