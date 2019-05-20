const hello = require('./hello');

describe('hello', () => {
    test('should output byebye', () => {
        expect(hello()).toBe('byebye');
    });
});