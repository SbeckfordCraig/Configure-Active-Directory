export type SubmissionCategory = "Games" | "Art" | "Animation";

export type Submission = {
  id: string;
  title: string;
  author: string;
  category: SubmissionCategory;
  description: string;
  plays: number;
  rating: number; // out of 5
  thumbnailGradient: string; // tailwind gradient classes, stands in for a real image
  daysAgo: number;
};

export const sampleSubmissions: Submission[] = [
  {
    id: "1",
    title: "Goblin Dungeon Crawler",
    author: "pixelforge",
    category: "Games",
    description: "A roguelike dungeon crawler with permadeath and procedural levels.",
    plays: 18420,
    rating: 4.6,
    thumbnailGradient: "from-emerald-500 to-teal-700",
    daysAgo: 2,
  },
  {
    id: "2",
    title: "Neon Drift",
    author: "vapor.exe",
    category: "Games",
    description: "Arcade racer with a synthwave soundtrack and drift physics.",
    plays: 9310,
    rating: 4.2,
    thumbnailGradient: "from-fuchsia-500 to-indigo-700",
    daysAgo: 5,
  },
  {
    id: "3",
    title: "Spirit of the Forest",
    author: "inkandbrush",
    category: "Art",
    description: "Digital painting exploring a guardian spirit deep in the woods.",
    plays: 3220,
    rating: 4.9,
    thumbnailGradient: "from-lime-500 to-green-800",
    daysAgo: 1,
  },
  {
    id: "4",
    title: "Robot Boxing League",
    author: "scrapyard_dev",
    category: "Games",
    description: "Build and customize fighting robots, then battle online.",
    plays: 24110,
    rating: 4.4,
    thumbnailGradient: "from-orange-500 to-red-700",
    daysAgo: 8,
  },
  {
    id: "5",
    title: "Falling Asleep",
    author: "moonliner",
    category: "Animation",
    description: "A short hand-drawn animation about insomnia and dreams.",
    plays: 5640,
    rating: 4.7,
    thumbnailGradient: "from-sky-500 to-blue-800",
    daysAgo: 3,
  },
  {
    id: "6",
    title: "Cyber Heist",
    author: "nullbyte",
    category: "Games",
    description: "Top-down stealth game set in a corporate megacity.",
    plays: 14750,
    rating: 4.1,
    thumbnailGradient: "from-purple-500 to-violet-900",
    daysAgo: 6,
  },
  {
    id: "7",
    title: "Portrait Study #12",
    author: "graphite_jane",
    category: "Art",
    description: "Charcoal portrait study, part of an ongoing daily practice series.",
    plays: 1890,
    rating: 4.8,
    thumbnailGradient: "from-stone-500 to-neutral-800",
    daysAgo: 1,
  },
  {
    id: "8",
    title: "The Last Bus",
    author: "framebyframe",
    category: "Animation",
    description: "A bittersweet 2-minute short about missing the last bus home.",
    plays: 7120,
    rating: 4.5,
    thumbnailGradient: "from-amber-500 to-orange-800",
    daysAgo: 11,
  },
  {
    id: "9",
    title: "Block Bound",
    author: "tetrominoes",
    category: "Games",
    description: "A falling-block puzzler with a twist: gravity changes direction.",
    plays: 31980,
    rating: 4.3,
    thumbnailGradient: "from-cyan-500 to-blue-700",
    daysAgo: 14,
  },
];
