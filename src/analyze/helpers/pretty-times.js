module.exports = function prettyTimes({row, stats}) {
  for (let i = 0; i <stats.length; ++i) {
    let stat = stats[i];

    if (stat.transform) {
      row[i + 1] = stat.transform(row[i + 1], row.count || 1);
    } else if (/time/i.test(stat.name)) {
      if (row[i + 1]) {
        row[i + 1] = `${row[i + 1].toFixed(2)} ms`;
      } else {
        row[i + 1] = 'N/A';
      }
    }
  }
  return row;
};
