export function getDailyQuestions<T>(
  items: T[],
  count = 20,
  offset = 0
): T[] {

  const seed =
    Math.floor(
      Date.now() /
      (1000 * 60 * 60 * 24)
    ) + offset;

  const jumps = [
    0,
    17,
    31,
    53,
    71,
    97,
    113,
    137,
    151,
    173,
    191,
    211,
    233,
    257,
    281,
    307,
    331,
    353,
    379,
    401,
    431,
    457,
    487,
    521,
    557,
    593,
    631,
    673,
    719,
    761,
  ];

  return jumps
    .slice(0, count)
    .map(
      jump =>
        items[
          (seed + jump) %
          items.length
        ]
    );
}