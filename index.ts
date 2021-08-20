import isUrl from 'is-url';

export interface ICake {
  id: number;
  name: string;
  comment: string;
  imageUrl: string;
  yumFactor: number;
}

export function validateCakeName(name: string): boolean {
  return !!name && name.length <= 30;
}

export function validateCakeComment(comment: string): boolean {
  return !!comment && comment.length <= 200;
}

export function validateYumFactor(factor: number): boolean {
  return factor > 0 && factor <= 5;
}

export function validateImageUrl(url: string): boolean {
  return isUrl(url);
}

export function validateCake(cake: Omit<ICake, 'id'>): boolean {
  return !!(
    validateImageUrl(cake.imageUrl)
    && validateCakeName(cake.name)
    && validateCakeComment(cake.comment)
    && validateYumFactor(cake.yumFactor)
  );
}
