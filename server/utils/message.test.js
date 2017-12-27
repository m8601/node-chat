const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Rob';
    var latitude = 39;
    var longitude = 52;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.from).toBe('Rob');
    expect(message.url).toBe('https://www.google.com/maps?q=39,52');
    expect(message.createdAt).toBeA('number');
  });
});
