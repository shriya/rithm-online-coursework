# { Git Basics Exercises. }

mkdir learn_git_again
cd learn_git_again
touch third.txt
git init
touch third.txt
git add .
git commit -m "adding third.txt"
git log
(q)
touch fourth.txt
git add . 
git commit -m "adding fourth.txt"
rm third.txt
git add .
git commit -m "removing third.txt"
git log
(q)
git config --global core.pager cat
git config --global --list






