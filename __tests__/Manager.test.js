const Manager = require('../lib/Manager')

test('Can instantiate manger instance', () => {
    const e = new Manager('name', 'email', 'id', 'officeNumber');
    expect(e).toEqual(expect.any(Object));
});