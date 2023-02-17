# loop throw a directory called shapes and list all the files in it

import os
import json

shapes = []

# get the current working directory
cwd = os.getcwd()
path = cwd + "/shapes/"
print(path)



# get the list of files in the directory
files = os.listdir(path)
print(files)

for file in files:
    print(cwd+file)
    #open the file
    with open(path+file, "r") as f:
    # read the file
        data = f.read()
        print(data)
        # save the data into a list
        shapes.append(data)

# write the list into a json file
with open("shapes.json", "w") as f:
    json.dump(shapes, f)