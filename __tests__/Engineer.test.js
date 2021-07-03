const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')
test('Can instantiate engineer instance', () => {
    const e = new Engineer('name', 'email', 'id', 'github');

    expect(e).toEqual(expect.any(Object));
});