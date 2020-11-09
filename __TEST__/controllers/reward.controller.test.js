/* global describe beforeEach afterEach it */
const { assert } = require('chai');
const sinon = require('sinon');
const rewardController = require('../../controllers/reward.controller');
const pointRewardAction = require('../../actions/point-reward.action');
const userDummy = require('../../data/user');

describe('Reward Test', () => {
  let sandbox;
  let mock;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    mock = sandbox.mock(pointRewardAction);
  });
  afterEach(() => {
    sandbox.restore();
  });

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

      mock.expects('getDetailUser').withArgs({ userId: payload.userId }).resolves(userDummy.user);
      mock.expects('insertPointRewardUser').withArgs(expectedResult.data).resolves(expectedResult);

      await rewardController.reward(payload);

      mock.verify();
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

      mock.expects('getDetailUser').withArgs({ userId: payload.userId }).resolves(userDummy.user);
      mock.expects('insertPointRewardUser').withArgs(expectedResult.data).resolves(expectedResult);

      await rewardController.reward(payload);

      mock.verify();
    } catch (e) {
      assert.ifError(e);
    }
  });
});
