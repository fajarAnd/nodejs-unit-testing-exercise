const userDummy = require('../data/user');

const getDetailUser = ({ userId }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const User = userDummy.user;
    if (userId !== 1) {
      return reject(new Error('User Not Found'));
    }
    return resolve(User);
  }, 800);
});

const getRulePointReward = ({ userStatus, amount }) => {
  let point;
  if (userStatus !== 'premium') {
    point = 0;
    return point;
  }

  if ((amount > 10000) && (amount < 30000)) {
    point = 1;
  } else if (amount > 30000) {
    point = 2;
  } else {
    point = 0;
  }
  return point;
};

const insertPointRewardUser = ({ userId, point }) => new Promise((resolve) => {
  setTimeout(() => {
    const result = {
      success: true,
      data: {
        userId,
        point,
      },
    };
    return resolve(result);
  }, 800);
});

module.exports = {
  getDetailUser,
  getRulePointReward,
  insertPointRewardUser,
};
