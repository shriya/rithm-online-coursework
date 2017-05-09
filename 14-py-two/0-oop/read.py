file = open('first.txt', 'r')
print(file.read())
print(file.read())
print(file.seek(0)) # move the cursor back to the beginning
print(file.read()) # there it is!
file.closed # False
file.close()
file.closed # True