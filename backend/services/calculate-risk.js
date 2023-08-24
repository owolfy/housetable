/**
 * @param {number} loanAmount
 * @param {number} currentValue
 * @returns {number}
 */
function calculateRisk(loanAmount, currentValue) {
  let risk = loanAmount / currentValue;
  if (loanAmount > currentValue * 0.5) {
    risk += 0.1;
  }

  // Ensure the risk is between 0 and 1
  risk = Math.min(Math.max(risk, 0), 1);
  return risk;
}

module.exports = calculateRisk;
