import { CV } from "./data";

export const BOOT_LINES = [
  'xeptore-portfolio v1.0.0  ·  warm-dark tui',
  'loading profile ........... ok',
  'mounting /experience (9) .. ok',
  'indexing /skills .......... ok',
  "ready. type 'help' for commands.",
];

export const COMMANDS = ['about', 'experience', 'skills', 'stack', 'education', 'stats', 'contact', 'help', 'all', 'clear'];

export const HINTS = [
  ['about', 'who I am'],
  ['experience', `${CV.experience.length} roles`],
  ['skills', 'what I do'],
  ['stack', 'tools'],
  ['education', 'degrees'],
  ['contact', 'reach me'],
] as [string, string][];


export const ROWS = [
  ['about', 'intro + summary'],
  ['experience', `work history (${CV.experience.length} roles)`],
  ['skills', 'capabilities by area'],
  ['stack', 'tools & technologies'],
  ['education', 'degrees + languages'],
  ['stats', 'the numbers'],
  ['contact', 'email · github · phone'],
  ['all', 'print everything'],
  ['clear', 'wipe the scrollback'],
  ['help', 'this list'],
] as [string, string][];
