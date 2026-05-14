
function createDate(value: Date): Date;

function createDate(value: number): Date;

function createDate(value: string): Date;

function createDate(value: Date | number | string): Date {
  return new Date(value);
}
