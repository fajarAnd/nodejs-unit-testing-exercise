const penaltyAction = require('../actions/penalty.action');

const reminderPenalty = async ({ dueDate, amount, email }) => {
  try {
    const penaltyPercentage = penaltyAction.ruleStagePenalty(dueDate);
    const { totalPaymentAmount } = penaltyAction.calculatePenalty({ penaltyPercentage, amount });
    return await penaltyAction.sendReminder({
      email,
      totalPaymentAmount,
    });
  } catch (e) {
    throw e;
  }
};

module.exports = {
  reminderPenalty,
};
