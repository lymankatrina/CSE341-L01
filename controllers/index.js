const awesomeFunction = (req, res, next) => {
  res.json('Matthew Lyman');
};

const returnAnotherPerson = (req, res, next) => {
  res.json('Kylie Horsley');
};

module.exports = { 
  awesomeFunction, 
  returnAnotherPerson 
};