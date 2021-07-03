const Intern = require('../lib/Intern')

test('Can instantiate intern instance', () => {
    const e = new Intern('name', 'email', 'id', 'school');
    expect(e).toEqual(expect.any(Object));
});