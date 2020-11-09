const moment = require('moment');

const formattingGeneralDate = (date = new Date()) => moment(date).utcOffset('+07:00').format('YYYY-MM-DD');

const dayBefore = dayNumber => moment().subtract(dayNumber, 'days').utcOffset('+07:00')
  .format('YYYY-MM-DD');

module.exports = {
  formattingGeneralDate,
  dayBefore,
};
