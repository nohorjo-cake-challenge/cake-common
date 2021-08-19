import {
  ICake,
  validateCakeName,
  validateCakeComment,
  validateYumFactor,
  validateCake,
} from '..';

describe('validateCakeName', () => {
  it('should return false for no name', () => {
    expect(validateCakeName('')).toBe(false);
  });

  it('should return false for long name', () => {
    expect(validateCakeName('123456789.123456789.123456789.1')).toBe(false);
  });

  it('should return true for name length 1', () => {
    expect(validateCakeName('1')).toBe(true);
  });

  it('should return true for name length 15', () => {
    expect(validateCakeName('123456789.12345')).toBe(true);
  });

  it('should return true for name length 30', () => {
    expect(validateCakeName('123456789.123456789.123456789.')).toBe(true);
  });
});

describe('validateCakeComment', () => {
  it('should return false for no comment', () => {
    expect(validateCakeComment('')).toBe(false);
  });

  it('should return false for long comment', () => {
    expect(validateCakeComment(Array(201).fill('x').join(''))).toBe(false);
  });

  it('should return true for comment length 1', () => {
    expect(validateCakeComment('1')).toBe(true);
  });

  it('should return true for comment length 100', () => {
    expect(validateCakeComment(Array(100).fill('x').join(''))).toBe(true);
  });

  it('should return true for comment length 200', () => {
    expect(validateCakeComment(Array(200).fill('x').join(''))).toBe(true);
  });
});

describe('validateYumFactor', () => {
  it('should return false for value too low', () => {
    expect(validateYumFactor(0)).toBe(false);
  });

  it('should return false for value too high', () => {
    expect(validateYumFactor(6)).toBe(false);
  });

  it('should return true for value 1', () => {
    expect(validateYumFactor(1)).toBe(true);
  });

  it('should return true for value 3', () => {
    expect(validateYumFactor(3)).toBe(true);
  });

  it('should return true for value 5', () => {
    expect(validateYumFactor(5)).toBe(true);
  });
});

describe('validateCake', () => {
  it('should return false for no id', () => {
    expect(validateCake({
      imageUrl: 'url',
      name: 'name',
      comment: 'comment',
      yumFactor: 3,
    } as ICake)).toBe(false);
  });

  it('should return false for no imageUrl', () => {
    expect(validateCake({
      id: 0,
      name: 'name',
      comment: 'comment',
      yumFactor: 3,
    } as ICake)).toBe(false);
  });

  it('should return false for no name', () => {
    expect(validateCake({
      id: 0,
      imageUrl: 'url',
      comment: 'comment',
      yumFactor: 3,
    } as ICake)).toBe(false);
  });

  it('should return false for no comment', () => {
    expect(validateCake({
      id: 0,
      imageUrl: 'url',
      name: 'name',
      yumFactor: 3,
    } as ICake)).toBe(false);
  });

  it('should return false for no yumFactor', () => {
    expect(validateCake({
      id: 0,
      imageUrl: 'url',
      name: 'name',
      comment: 'comment',
    } as ICake)).toBe(false);
  });

  it('should return true for valid cake', () => {
    expect(validateCake({
      id: 0,
      imageUrl: 'url',
      name: 'name',
      comment: 'comment',
      yumFactor: 3,
    } as ICake)).toBe(true);
  });
});
