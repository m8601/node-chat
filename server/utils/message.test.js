const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message', () => {
    var res = generateMessage('Robert', 'test');
    expect(res.from).toBe('Robert');
    expect(res.text).toBe('test');
    // expect(res).toInclude({
    //   from: 'Robert',            //To samo co 2 linie wyzej
    //   text: 'test'
    // })
    expect(res.createdAt).toBeA('number');
  });
});
