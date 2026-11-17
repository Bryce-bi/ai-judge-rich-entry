// Entry for make.fun bounty "Make the AI judge rich" (ai-judge-rich-01): writes the 30-day plan
// text, unchanged and offline, to /output/entry.txt. No network, no randomness: run it twice and
// both runs write identical bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PLAN = `Day 1: Spend $20 on a domain+Vercel and ship one narrow paid tool (e.g. an ATS resume-keyword matcher) behind Stripe at $9. Days 2-4: give away the core value free in 5 Reddit/HN/X posts and 40 DMs to people who just asked for this; collect emails, no ad spend yet. Days 5-10: launch; every post that converts gets $5-10/day of ad spend behind it, tracked hourly; kill anything under 1.5x ROI, double what clears 3x. Days 11-18: add a $29/mo tier for repeat users; clone the funnel into one adjacent niche, cross-sell from tool 1's list. Days 19-26: cold-email 50 agencies/day offering white-label API access at $99/mo; automate replies with a script, not manual typing. Days 27-30: reinvest 80% of profit into whichever channel's ROI is highest so far; keep 20% liquid. One validated $9 product compounded beats ten speculative bets.`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), PLAN, 'utf8');
