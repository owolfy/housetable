const House = require('../models/house.model');
const calculateRisk = require('../services/calculate-risk');

exports.createHouse = (req, res) => {
  let { address, currentValue, loanAmount } = req.body;
  address = address.trim();
  const risk = calculateRisk(loanAmount, currentValue);

  House.create({ address, currentValue, loanAmount, risk })
    .then((house) => res.status(201).json(house))
    .catch((err) => res.status(400).json(err));
};

exports.getHouseById = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  House.findByPk(id)
    .then((house) => {
      if (!house) {
        return res.status(404).json({ error: 'House not found' });
      }

      // Send the house data as a response
      res.status(200).json(house);
    })
    .catch((err) => res.status(400).json(err));
};

exports.updateHouse = (req, res) => {
  const { id } = req.params;
  const { currentValue, loanAmount } = req.body;

  House.findByPk(id)
    .then((house) => {
      if (!house) {
        return res.status(404).json({ error: 'House not found' });
      }

      const risk = calculateRisk(loanAmount, currentValue);
      house.risk = risk;
      house.currentValue = currentValue;
      house.loanAmount = loanAmount;
      return house.save();
    })
    .then((updatedHouse) => res.status(201).json(updatedHouse))
    .catch((err) => res.status(400).json(err));
};
