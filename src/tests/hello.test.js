// import { helloa } from './hello';
const hello = require('./hello.js');

describe('hello', () => {
    it('should output byebye', () => {
        expect(hello()).toBe('byebye');
    });
});