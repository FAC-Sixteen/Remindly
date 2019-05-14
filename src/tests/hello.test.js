const hello = require('./hello');

describe('hello', () => {
    it('should output byebye', () => {
        expect(hello()).toBe('byebye');
    });
});