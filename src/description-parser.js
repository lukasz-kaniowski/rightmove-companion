function parse(text) {
  const rows = text.split('\n');
  const result = { items: [] };
  rows.forEach(row => {
    const match = row.match(/(\w*\s*[a-zA-Z]*).*(\d+\.\d+).*m.*(\d+\.\d+).*m/);
    if (match) {
      const a = match[2];
      const b = match[3];
      const size = a * b;

      result.items.push({
        name: match[1].trim(),
        a,
        b,
        size
      })
    }
  });
  result.sum = result.items.reduce((sum, b) => sum + b.size, 0);
  return result;
}

module.exports = { parse };
