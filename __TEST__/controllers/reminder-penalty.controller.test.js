/* global describe beforeEach afterEach it */
const { assert } = require('chai');
const sinon = require('sinon');
const reminderPenaltyController = require('../../controllers/reminder-penalty.controller');

describe('Reminder Penalty Test', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.useFakeTimers({
      now: 1605418568000, // November 15, 2020 12:36:08 PM GMT+07:00
    });
  });
  afterEach(() => {
    sandbox.restore();
  });

  it('Penalty 5 Day', async () => {
    try {
      const payload = {
        dueDate: '2020-11-10',
        amount: 1000000,
        email: 'dumm@gmail.com',
      };

      const expectedResult = { success: true, totalPaymentAmount: 1010000 };

      const result = await reminderPenaltyController.reminderPenalty(payload);

      assert.isDefined(result);
      assert.deepEqual(result, expectedResult);
    } catch (e) {
      assert.ifError(e);
    }
  });

  it('Free Penalty', async () => {
    try {
      const payload = {
        dueDate: '2020-11-20',
        amount: 1000000,
        email: 'dumm@gmail.com',
      };
      const expectedResult = { success: true, totalPaymentAmount: 1000000 };

      const result = await reminderPenaltyController.reminderPenalty(payload);

      assert.isDefined(result);
      assert.deepEqual(result, expectedResult);
    } catch (e) {
      assert.ifError(e);
    }
  });
});
