/* global describe  it */
const { assert } = require('chai');
const rewardController = require('../../controllers/reward.controller');

describe('Reward Test', () => {
  it('Got 1 point reward', async () => {
    try {
      const payload = {
        userId: 1,
        amount: 20000,
      };
      const expectedResult = {
        success: true,
        data: {
          userId: payload.userId,
          point: 1,
        },
      };

      const result = await rewardController.reward(payload);

      assert.deepEqual(result, expectedResult);
    } catch (e) {
      assert.ifError(e);
    }
  });

  it('Got 2 point reward', async () => {
    try {
      const payload = {
        userId: 1,
        amount: 50000,
      };
      const expectedResult = {
        success: true,
        data: {
          userId: payload.userId,
          point: 2,
        },
      };

      const result = await rewardController.reward(payload);

      assert.deepEqual(result, expectedResult);
    } catch (e) {
      assert.ifError(e);
    }
  });
});
