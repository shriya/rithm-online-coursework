# { Navigating in Terminal. }

### 1. What is the difference between / and ~? What do we call each of these directories?

/ is the root directory; the "topmost" directory of the machine
~ is the home directory; a shorthand for "/Users/yourusername"

### 2. What command do we use to change directories?

cd

### 3. What is the difference between an absolute and relative path?

relative path is how to reach a file or folder relative to your current "place", whereas absolute path is how to reach a file or folder from the root directory

# { Working with Files and Folders. }

### 1. Try renaming the file to rename.txt using the mv command. What does this tell you about the command?

the mv command takes a file, makes a copy of it called the target file (i.e. creates a new target file of that name if it didn't already exist, otherwise overwrites the existing into this new one), and deletes the original file

### 2. When using cp -r what is the -r called? What does it do?

the -r is a flag; this particular flag copies the whole directory plus its subfolders instead of just a file alone

# { Terminal Basics Exercises. }

## Part II

### 1. What does the man command do? Type in man rm. How do you scroll and get out?

man is the command to look at the "manual" / "man pages" and see what a certain command does plus which flags are available to be associated with that command, and how they modify it. scrolling can be done with the up or down keys, and typing q lets you quit.

### 2. Look at the man page for ls. What does the -l flag do? What does the -a flag do?

the -l flag gives you a "long output" for the ls command; you see the file sizes along with their list 

the -a flag includes "hidden" directories, or those that begin with a . 

### 6. How do you jump between words in the terminal?

Option + <--
Option + --> 

(Arrow keys left and right)

### 7. How do you get to the end of a line in terminal?

Ctrl + E 

### 8. How do you move your cursor to the beginning in terminal?

Ctrl + A

### 9. How do you delete a word (without pressing backspace multiple times) in terminal?

Ctrl + W (deletes backwards not forwards)

### 10. What is the difference between a terminal and shell?

The terminal is the environment where you input text and get output; this is why on a Mac the program you open in the Terminal - it's the interface. The shell is the actual interpreter; the shell is doing the heavy lifting of understanding and processing the commands. 

### 11. What is an absolute path?

absolute path is how to reach a file or folder from the root directory

### 12. What is an relative path?

relative path is how to reach a file or folder relative to your current "place"

### 13. What is a flag? Give three examples of flags you have used.

flags are like "sub commands" that can be attached to a command to specify a particular modification to the command.

we've used -r and -f for rm (flags can be combined as such: rm -rf), and -r for cp (cp -r) 

### 14. What do the r and f flags do with the rm command?

the -r flag removes the entire file hierarchy "below" & including the command's "argument" / "target"

the -f flag removes the file regardless of permissions


