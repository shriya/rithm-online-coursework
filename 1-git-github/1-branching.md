# { Checkout and Reset. }

mkdir destruction
cd destruction
git init
touch done.txt
git clean -df done.txt
touch stage_me.txt
git add stage_me.txt
git rm ---cached stage_me.txt
git add stage_me.txt
git checkout stage_me.txt
touch commit_me.txt
git add commit_me.txt
git commit -m "adding commit_me.txt"
touch second.txt
git add second.txt
git commit -m "adding second.txt"
git log --oneline
git reset --soft 65e3a93
git add second.txt 
git commit -m "Trying to commit again"
git reset --soft 65e3a93
git add .
git commit -m "Trying to commit again and again"
git reset --hard 65e3a93

# { Branching. }

mkdir branch_time
cd branch_time 
git init
touch first.txt
git add .
git commit -m "first"
git checkout -b amazing_feature
touch best.txt
git add .
git commit -m "added best.txt"
git checkout master
git merge amazing_feature 
git branch -D amazing_feature 

# { Branching and Merging Exercises. }

## Part I

### 1. What does git clean do?

Removes untracked files from the working tree

### 2. What do the -d and -f flags for git clean do?

-d flag removes untracked directories in addition to files

-f forces git clean to run if "clean.requireForce" is set to "true", and doesn't run without this flag if set to "false"

### 3. What git command creates a branch?

git checkout -b NAME_OF_BRANCH

### 4. What is the difference between a fast-forward and recursive merge?

fast-forward merges are when git can stack up more recent changes after/on top of older changes, recrusive is when git uses an algorithm to merge the different commits

### 5. What git command changes to another branch?

git checkout NAME_OF_BRANCH

### 6. How do you remove modified or deleted files from the working directory?

git checkout 

### 7. What git command deletes a branch?

git branch -D NAME_OF_BRANCH

### 8. What does the git diff command do?

shows you the changes between two commits

### 9. How do you remove files from the staging area?

git rm --cached NAME_OF_FILE

### 10. How do merge conflicts happen?

If you commit changes to the same file on two different branches and then try to merge them, a merge conflict will happen if git can't tell which changed file you want to "keep"














