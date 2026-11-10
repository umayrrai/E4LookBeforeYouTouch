export type Kind = "drone" | "dart" | "turret" | "lancer";
export type Formation = "line" | "vee" | "column" | "pincer";

export interface Wave {
  at: number;
  kind: Kind;
  count: number;
  formation: Formation;
  xCol: number;
}

export interface Sector {
  name: string;
  subtitle: string;
  length: number;
  waves: Wave[];
}

export const GRACE_TICKS = 240;

export const STATS: Record<
  Kind,
  {
    hp: number;
    score: number;
    radius: number;
    dropChance: number;
    canShoot: boolean;
  }
> = {
  drone: { hp: 2, score: 100, radius: 13, dropChance: 0.015, canShoot: true },
  dart: { hp: 1, score: 150, radius: 12, dropChance: 0.015, canShoot: false },
  turret: { hp: 12, score: 400, radius: 19, dropChance: 0.3, canShoot: true },
  lancer: { hp: 4, score: 250, radius: 15, dropChance: 0.06, canShoot: true },
};

const wave = (
  at: number,
  kind: Kind,
  count: number,
  formation: Formation,
  xCol?: number,
): Wave => ({ at, kind, count, formation, xCol });

export const SECTORS: Sector[] = [
  {
    name: "Outer Drift",
    subtitle: "Scouts ahead",
    length: 1560,
    waves: [
      wave(60, "drone", 4, "line"),
      wave(360, "drone", 5, "vee", 168),
      wave(660, "drone", 5, "vee", 312),
      wave(960, "drone", 6, "line"),
      wave(1200, "drone", 4, "column", 120),
      wave(1260, "drone", 4, "column", 360),
    ],
  },
  {
    name: "Shatter Belt",
    subtitle: "Divers incoming",
    length: 1800,
    waves: [
      wave(60, "drone", 6, "vee"),
      wave(300, "dart", 4, "line"),
      wave(600, "dart", 5, "column", 144),
      wave(720, "dart", 5, "column", 336),
      wave(1020, "drone", 7, "line"),
      wave(1140, "dart", 5, "vee"),
      wave(1440, "dart", 6, "line"),
    ],
  },
  {
    name: "Gun Lanes",
    subtitle: "Turrets online",
    length: 1920,
    waves: [
      wave(60, "turret", 1, "line"),
      wave(240, "drone", 6, "vee"),
      wave(540, "turret", 2, "line"),
      wave(840, "dart", 6, "column", 240),
      wave(1080, "turret", 2, "line"),
      wave(1140, "drone", 6, "line"),
      wave(1500, "turret", 3, "line"),
    ],
  },
  {
    name: "Lancer Gate",
    subtitle: "Crossfire",
    length: 1920,
    waves: [
      wave(60, "lancer", 4, "pincer"),
      wave(360, "dart", 6, "vee"),
      wave(600, "lancer", 6, "pincer"),
      wave(780, "turret", 2, "line"),
      wave(1140, "lancer", 6, "pincer"),
      wave(1260, "drone", 8, "vee"),
      wave(1560, "dart", 8, "line"),
    ],
  },
  {
    name: "Last Approach",
    subtitle: "Everything they have",
    length: 2040,
    waves: [
      wave(60, "turret", 3, "line"),
      wave(180, "lancer", 6, "pincer"),
      wave(540, "dart", 6, "column", 120),
      wave(540, "dart", 6, "column", 360),
      wave(900, "drone", 9, "vee"),
      wave(1020, "turret", 2, "line"),
      wave(1320, "lancer", 8, "pincer"),
      wave(1560, "dart", 8, "vee"),
    ],
  },
];
