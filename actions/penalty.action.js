const { promisify } = require('util');
const { dayBefore } = require('../helpers/date');

const setTimeoutPromise = promisify(setTimeout);

const FIVE_DAY = 5;

const calculatePenalty = ({
  penaltyPercentage = 0, amount = 0,
}) => {
  const penaltyAmount = Math.round((amount * penaltyPercentage) / 100);
  const totalPaymentAmount = amount + penaltyAmount;
  return {
    penaltyAmount,
    totalPaymentAmount,
  };
};

const ruleStagePenalty = (dueDate) => {
  let percentage;
  switch (dueDate) {
    case dayBefore(FIVE_DAY):
      percentage = 1;
      break;
    default:
      percentage = 0;
      break;
  }
  return percentage;
};

const sendReminder = ({ email, totalPaymentAmount }) => new Promise((resolve) => {
  setTimeoutPromise(1200, {
    success: true,
    totalPaymentAmount,
  }).then((res) => {
    console.log('Sending Email to:', email);
    return resolve(res);
  });
});

module.exports = {
  calculatePenalty,
  ruleStagePenalty,
  sendReminder,
};
