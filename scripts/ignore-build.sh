#!/bin/bash
# Vercel Ignored Build Step Script for builtbyanthony.tech
#
# Rules:
# - Exit code 0: Skip / Cancel build (does not consume build minutes)
# - Exit code 1: Proceed with build
#
# Goals:
# 1. Only build production on 'main' branch.
# 2. Skip preview builds on 'develop' and feature branches to save build minutes.
# 3. Skip if commit message contains [skip vercel] or [skip ci].

echo "--- Vercel Ignore Build Check (builtbyanthony.tech) ---"
echo "Target Branch (VERCEL_GIT_COMMIT_REF): '${VERCEL_GIT_COMMIT_REF}'"
echo "Previous SHA (VERCEL_GIT_PREVIOUS_SHA): '${VERCEL_GIT_PREVIOUS_SHA}'"
echo "Current SHA (VERCEL_GIT_COMMIT_SHA):   '${VERCEL_GIT_COMMIT_SHA}'"

# 0. Autonomous Agent / Manual Skip Filter: Check for [skip vercel] or [skip ci]
COMMIT_MSG="${VERCEL_GIT_COMMIT_MESSAGE}"
if [ -z "$COMMIT_MSG" ]; then
  COMMIT_MSG=$(git log -1 --pretty=%B 2>/dev/null || echo "")
fi

COMMIT_MSG_LOWER=$(echo "$COMMIT_MSG" | tr '[:upper:]' '[:lower:]')

if echo "$COMMIT_MSG_LOWER" | grep -Eq "\[skip vercel\]|\[vercel skip\]|\[skip ci\]|\[ci skip\]|\*\*\*no_ci\*\*\*|chore:"; then
  echo "🛑 [SKIP BUILD] Commit message contains skip flag. Skipping build to conserve build minutes."
  exit 0
fi

# 1. Branch filter: Only 'main' should ever build on Vercel
if [ -n "$VERCEL_GIT_COMMIT_REF" ] && [ "$VERCEL_GIT_COMMIT_REF" != "main" ]; then
  echo "🛑 [SKIP BUILD] Branch '${VERCEL_GIT_COMMIT_REF}' is not 'main'. Skipping build on develop/feature branch to save build minutes."
  exit 0
fi

echo "✅ [BUILD] Target branch is 'main'. Proceeding with production build."
exit 1
