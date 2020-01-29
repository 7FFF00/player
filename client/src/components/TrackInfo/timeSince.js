const ms = {
  years: 31557600000,
  months: 2629800000,
  weeks: 604800000,
  days: 86400000,
  hours: 3600000,
  minutes: 60000,
  seconds: 1000,
  milliseconds: 1,
};

const timeSince = (dateTimeString) => {
  const currDate = new Date();
  const prevDate = new Date(dateTimeString);
  const deltaTime = currDate.getTime() - prevDate.getTime();

  let deltaTimeFrame = 'milliseconds';

  if (deltaTime < ms.weeks) {
    deltaTimeFrame = 'days';
  } else if (deltaTime < ms.months) {
    deltaTimeFrame = 'weeks';
  } else if (deltaTime < ms.years) {
    deltaTimeFrame = 'months';
  } else {
    deltaTimeFrame = 'years';
  }

  const deltaTimeFormatted = Math.floor(deltaTime / ms[deltaTimeFrame]);
  const deltaTimeFrameFormatted = deltaTimeFormatted > 1
    ? deltaTimeFrame
    : deltaTimeFrame.substr(0, deltaTimeFrame.length - 1);

  return `${deltaTimeFormatted} ${deltaTimeFrameFormatted} ago`;
};

export default timeSince;
