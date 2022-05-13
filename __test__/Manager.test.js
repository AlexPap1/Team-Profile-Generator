const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

test('manager object', () => {
    const manager = new Manager('Alex');
});

test('number', () => {
    const testValue = 100;
    const e = new Manager('Alex', 1, 'name@gmail.com', testValue);
    expect(e.number).toBe(testValue);
});

test('get office number with getOfficeNumber() method', () => {
    const testValue = 100;
    const e = new Manager('Alex', 1, 'name@gmail.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

// Test if the getRole() value is Manager
test('getRole() return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Alex', 1, 'name@gmail.com', 100);
    expect(e.getRole()).toBe(testValue);
});