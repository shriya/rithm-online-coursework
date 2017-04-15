# { Intermediate Terminal Exercises. }

## Part I

### 1. Create an environment variable called FIRST_NAME and set it equal to your first name (this does not need to be permanent)

export FIRSTNAME=Shriya

### 2. Print the FIRST_NAME variable

echo $FIRSTNAME

### 3. Print out the $PATH variable

echo $PATH

### 4. What is the $PATH variable?

PATH is an environment variable that specifies a set of directories where executable programs are located

### 5. Why would you want to create an environment variable?

With environment variables, you can refer to OS-specific values or locations 

### 6. How do you permanently save environment variables?

You add an environment variable defintion to the config file for your shell (ex. .zshrc or .bash_profile)

### 7. What is a process?

A process is a program on your computer that is currently running

### 8. How do you list all processes running on your machine?

With the ps command in the terminal (can use flags -a or -u or -x)

### 9. What is a PID?

The "process ID" which refers to a particular process

### 10. How do you terminate a process?

With the kill command

### 11. What is the difference between kill and kill -9?

kill -9 will kill the process even if it's frozen or can't be terminated with kill alone

### 12. What grep flag allows for case insensitive search?

-i

### 13. What grep flag allows for a certain number of lines before the match?

-B

### 14. What grep flag allows for a certain number of lines around the match?

-C

### 15. What grep flag allows for a certain number of lines after the match?

-A

### 16. What grep flag allows for full word search?

-w

### 17. What grep flag shows you the line number of a match?

-n

## Part II

_Write the following terminal commands to do the following (assume that instructors.txt is an imaginary file):_

### 1. Find all files inside the Desktop folder that have a name of "learn."

cd Desktop
find . -name "learn.*"

### 2. Find all files inside the Desktop folder that start with a "P."

cd Desktop
find . -name "P*"

### 3. Find all files inside the Desktop folder that end with .txt.

cd Desktop
find . -name "*.txt"

### 4. Find all files inside the Desktop/views folder that have the name data somewhere in their filename.

cd Desktop/views
find . -name "*data*"

### 5. Inside of the instructors.txt file, output the number of times the word "Elie" appears.

grep "Elie" instructors.txt

### 6. Inside of the instructors.txt file, list all matches for any full word that starts with a capital "P."

grep -w "P.*" instructors.txt

### 7. Inside of the instructors.txt file, list all the line numbers for any full word that starts with a "z" (it should match regardless of upper or lower case).

grep -niw "z.*" instructors.txt



















