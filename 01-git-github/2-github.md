# { GitHub Exercises. }

## Part I

### 1. Create a local repository and add and commit some files

~~~~
mkdir new_repo
cd new_repo 
touch first.txt
touch second.txt
echo "stuff" > first.txt
echo things > second.txt
git init
git add .
git commit -m "initial commit"
~~~~

### 2. Create a remote repository and push your code from the local repo to the remote

git push --set-upstream git@github.com:shriya/practice-repo.git master

### 3. Fork the repo https://github.com/rithmschool/git_practice - clone it and submit a pull request

_(done in github)_

### 4. Create a new branch locally and push it to GitHub

~~~~
git checkout -B shriya_branch
touch file-in-branch.txt
git add .
git commit -m "branch"
git push --set-upstream origin shriya_branch
~~~~

### 5. Submit a pull request with your new branch against the master branch on the git_practice repo.

_(done in github)_

# Part II - Command Line Murder Mystery

_(not done yet)_





