const Employee = require('./lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Alex');
});

test('id', () => {
    const testValue = 555;
    const e = new Employee('Alex', testValue);
    expect(e.id).toBe(testValue);
});

test('email', () => {
    const testValue = 'name@gmail.com';
    const e = new Employee('Alex', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('role', () => {
    const testValue = 'Employee';
    const e = new Employee('Alex', 1, 'name@gmail.com');
    expect(e.getRole()).toBe(testValue);
});