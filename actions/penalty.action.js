const R = require('ramda');
const { dayBefore } = require('../helpers/date');


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
  setTimeout(() => {
    console.log('Sending Email to:', email);
    const result = {
      success: true,
      totalPaymentAmount,
    };

    resolve(result);
  }, 1200);
});


module.exports = {
  calculatePenalty,
  ruleStagePenalty,
  sendReminder,
};
