export const percentageCalc = (voteCount, totalVotes) => {
  const result = (voteCount / totalVotes) * 100;
  return Math.round(result * 100) / 100;
};
