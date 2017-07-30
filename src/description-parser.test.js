const parser = require('./description-parser');
const sampleText = `
Some other text
Lounge 12' 3" x 13' 11" (3.73m x 4.24m )
Kitchen / Dining Room 17' 3" x 8' 3" (5.26m x 2.51m )
Ground Floor Bathroom 6' 0" x 5' 7" (1.83m x 1.7m )
Bedroom 15' 3" x 11' 9" (4.65m x 3.58m )
Bedroom 12' 7" x 8' 5" (3.84m x 2.57m )
Bedroom 8' 4" x 6' 5" (2.54m x 1.96m )
Double glazed window to rear, radiator, laid to carpet
Garden 11' 0" x 16' 0" (3.35m x 4.88m )`;

describe('description parser', () => {
  let result;
  beforeEach(() => {
    result = parser.parse(sampleText)
  });

  it('should find all rows with dimensions', () => {
    expect(result.items.length).toBe(7)
  });

  it('should return correct measures', () => {
    expect(result.items).toMatchSnapshot();
  });

  it('should return correct sum', () => {
    expect(result.sum).toBe(79.971)
  });
});
