// FIDE rating history for Sebastian M. David.
//
// Source: FIDE ratings profile https://ratings.fide.com/profile/42271835
// (Info, Progress and Stats tabs), transcribed from the October 2026 list.
//
// One row per monthly FIDE rating list. To update, add the newest list as a
// new row (order does not matter, the page sorts by period) and bump `asOf`.
// Use null where FIDE shows no rating for that list.
//
//   [ period,   standard, std games, rapid, rapid games, blitz, blitz games ]
window.ELO_DATA = {
  player: {
    name: "Sebastian M. David",
    fideId: "42271835",
    federation: "Romania",
    birthYear: 2014,
    title: null,
    photo: null,          // e.g. "images/sebastian.jpg" (square); null shows initials
  },
  asOf: "2026-10",
  inactive: [],
  // Ranks among active players (and all players) on the asOf list.
  // Not shown on FIDE's Info tab yet; add them like this once they appear:
  //   national: { label: "Romania", active: 926, all: 3241 },
  ranks: {},
  // Win / draw / loss by colour from the FIDE Stats tab ("Total Games"),
  // all rated games so far. Update it together with the monthly row.
  record: {
    white: { w: 2, d: 0, l: 1 },
    black: { w: 1, d: 1, l: 1 },
  },
  // Oddities in FIDE's own figures, reproduced as published.
  notes: [
    "FIDE's Progress tab counts 5 rapid games on the October 2026 list, while its Stats tab shows 6 rated rapid games (3 with White, 3 with Black). Both figures are shown as published.",
  ],
  lists: [
    ["2026-10", null, null, 1569, 5, null, null],
  ],
};
