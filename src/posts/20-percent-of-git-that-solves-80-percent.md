---
title: 20% of git that solves 80% of cases
date:  03/07/2024
published: true 
---

# 20% of git that solves 80% of cases

Explaining my commands of Git that I use of 80% of the time and because they make
sense in the context of my every day life

## Start of the day

Start my PC and I want check and uptade my local branches with remote branches, so:

```shell
git status
git fetch --prune
git branch -a

```

## Start working

I go to start job, and I need create a new branch for new task,
so checkout main brnach for get actualy code and create a new
branch from main:

```shell
git checkout main
git pull
git checkout -b <branch-name>
```

## Ending task

After ending task, I made the commit and <F6>
