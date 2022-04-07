
export function moneyToPennyOrThrow(value: number): number {

  // noinspection SuspiciousTypeOfGuard
  if (typeof value !== 'number') {
    throw new Error(`Value must be a number`);
  }

  return Math.round(value * 100); // Fix error 10.20*100=1019 !?!?!

}

export function moneyFromPennyOrThrow(value: number): number {

  // noinspection SuspiciousTypeOfGuard
  if (typeof value !== 'number') {
    throw new Error(`Value must be a number`);
  }

  return Math.floor(value) / 100;

}
