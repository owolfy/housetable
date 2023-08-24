exports.validateHouseInput = (req, res, next) => {
  const { address, currentValue, loanAmount } = req.body;

  if (!address || !currentValue || !loanAmount || address.trim().length === 0) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (
    isNaN(currentValue) ||
    isNaN(loanAmount) ||
    currentValue < 0 ||
    loanAmount < 0
  ) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  next();
};
