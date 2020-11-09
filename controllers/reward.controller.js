const pointRewardAction = require('../actions/point-reward.action');

const reward = async ({ userId, amount }) => {
  try {
    const user = await pointRewardAction.getDetailUser({ userId });
    const point = pointRewardAction.getRulePointReward({ userStatus: user.status, amount });
    return await pointRewardAction.insertPointRewardUser({ userId, point });
  } catch (e) {
    throw e;
  }
};

module.exports = { reward };
