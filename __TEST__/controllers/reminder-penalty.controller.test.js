/* global describe beforeEach afterEach it */
const { assert } = require('chai');
const sinon = require('sinon');
const reminderPenaltyController = require('../../controllers/reminder-penalty.controller');
const penaltyAction = require('../../actions/penalty.action');

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

      const stub = sandbox.stub(penaltyAction, 'sendReminder');
      const args = {
        email: payload.email,
        totalPaymentAmount: 1010000, // as expected result from calculation penalty
      };
      const expectedResult = { success: true, totalPaymentAmount: args.totalPaymentAmount };
      stub.withArgs(args).resolves(expectedResult);

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

      const stub = sandbox.stub(penaltyAction, 'sendReminder');
      const args = {
        email: payload.email,
        totalPaymentAmount: 1000000, // as expected result from calculation penalty
      };
      const expectedResult = { success: true, totalPaymentAmount: args.totalPaymentAmount };
      stub.withArgs(args).resolves(expectedResult);

      const result = await reminderPenaltyController.reminderPenalty(payload);

      assert.isDefined(result);
      assert.deepEqual(result, expectedResult);
    } catch (e) {
      assert.ifError(e);
    }
  });
});
