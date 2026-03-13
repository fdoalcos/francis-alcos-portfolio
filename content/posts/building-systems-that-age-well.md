---
title: Building Systems That Age Well
date: 2026-03-11
excerpt: Reliability usually comes from narrowing the number of things a system is allowed to do, not expanding them.
tags: systems, reliability, architecture
published: true
coverImage: https://lh3.googleusercontent.com/aida-public/AB6AXuA45TvKrHM2enxvjc5UjgKSnLieHivlrw7gzXPWiLEAzJwOz7pe5J9vtuMglMTWCfpEBtKFjl9XmK08hXOU_QJSiKdXWItDB4SKbIGPWrlP8FDpxA0TR-E-Z1y8IqFe73kBVKWrNHJVJTA2MW88IdnsujCsygKGiKQQh6836P6xBarRgJnjs4c5t3BxaUoARjA5hfTNZtPI4h4W29lZU5Br0MPg00sm62xsGmGvHYFzNINVUrkabjMhqZc2q-whgNyZ7z-wGbQhPCQ
---
# Building Systems That Age Well

Most software feels simple in the first week and expensive in the second year. The difference is usually not raw complexity. It is how many moving parts the system is forced to coordinate under stress.

I keep coming back to one bias: optimize for systems that are easy to understand during a bad day.

## What that changes

- Prefer explicit boundaries over clever abstractions.
- Bias toward tools that are boring enough to be debugged quickly.
- Reduce optionality when optionality will become policy later.

When a service gets more traffic, the main question is rarely whether the architecture is theoretically elegant. The real question is whether someone can still diagnose a failure at `2:13 AM` without reconstructing the whole codebase in their head.

## A useful filter

Before I add a new dependency or pattern, I try to ask a very plain question:

> Will this still feel like a good trade in twelve months when the team is tired and the incident queue is real?

That question removes a lot of unnecessary novelty.
