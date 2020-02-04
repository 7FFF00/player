const timeFormat = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const secondsLeadingZeroes = seconds < 10 ? 0 : '';
  return `${minutes}:${secondsLeadingZeroes}${seconds}`;
};

export default timeFormat;
