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

const ruleStagePenalty = R.cond([
  [R.equals(dayBefore(FIVE_DAY)), R.always(2)],
  [R.T, R.always(0)],
]);

const sendReminder = ({ email, totalPaymentAmount }) => {
  setTimeout(() => {
    console.log('Sending Email to:', email);
    const result = {
      success: true,
      totalPaymentAmount,
    };

    return Promise.resolve(result);
  }, 2000);
};


module.exports = {
  calculatePenalty,
  ruleStagePenalty,
  sendReminder,
};
