function combineRows(a, b) {
  let l = Math.max(a.length, b.length);

  for (let i = 1; i < l; i++) {
    if (!a[i]) {
      a[i] = b[i];
    } else if (typeof a[i] === 'number') {
      a[i] += b[i];
    }
  }
}

module.exports = function combineTables(tables) {
  let tableCount = tables.length;
  let master = tables.shift();
  let len = master.length;

  for (let i = 0; i < len; i++) {
    let masterRow = master[i];

    for (let j = 0; j < tables.length; j++) {
      let row = tables[j][i];

      if (masterRow[0] !== row[0]) {
        throw new Error("Table Mismatch!");
      } else {
        combineRows(masterRow, row);
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 1; j < master[i].length; j++) {
      let v = master[i][j];

      if (typeof v === 'number') {
        master[i][j] = v / tableCount;
      }
    }
  }

  return master;
};
