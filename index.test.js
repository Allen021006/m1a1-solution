const { execSync } = require('child_process');

describe('Activity 1', () => {
  test('Hello World prints "Hello, World!" to the console', () => {
    const output = execSync('node index.js').toString().trim();
    expect(output).toBe('Hello, World!');
  });
});

describe('Student info (student.json)', () => {
  const student = require('./student.json');

  test('classCode is filled in', () => {
    expect(student.classCode).toBeTruthy();
  });
  test('fullName is filled in', () => {
    expect(student.fullName).toBeTruthy();
  });
  test('studentNumber is filled in', () => {
    expect(student.studentNumber).toBeTruthy();
  });
  test('studentEmail is filled in', () => {
    expect(student.studentEmail).toBeTruthy();
  });
  test('personalEmail is filled in', () => {
    expect(student.personalEmail).toBeTruthy();
  });
  test('githubAccount is filled in', () => {
    expect(student.githubAccount).toBeTruthy();
  });
});
