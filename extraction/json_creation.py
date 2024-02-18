import json

# We are going to read the file and write to a json file
# the file is formatted like this:
# % Question
#     ^ General Category 1
#     ^ General Category 2
#     ^ General Category 3
#     ^ General Category 4
#     ^ General Category 5
# # General Category:
#     @ Subcategory:
#         * Item 1
#         * Item 2
#             $ Subitem 1
#             $ Subitem 2
#         * Item 3
#     @ Subcategory 2:
#         * Item 1
#         * Item 2
#             $ Subitem 1
#             $ Subitem 2
#         * Item 3
# # General Category 2:
#     @ Subcategory:
#         * Item 1
#         * Item 2
#             $ Subitem 1
#             $ Subitem 2
#         * Item 3
#     @ Subcategory 2:
#         * Item 1
#         * Item 2
#             $ Subitem 1
#             $ Subitem 2
#         * Item 3



with open('.md', 'r') as file:
    lines = file.readlines()

data = {}

stack = []

for line in lines:
    if line[0] == '%':
        data['Question'] = line[2:].strip()
    elif line[0] == '^':
        data[line[2:].strip()] = {}
    elif line[0] == '#':
        stack.append(line[2:].strip())
        data[stack[-1]] = {}
    elif line[0] == '@':
        stack.append(line[2:].strip())
        data[stack[-2]][stack[-1]] = []
    elif line[0] == '*':
        data[stack[-2]][stack[-1]].append(line[2:].strip())
    elif line[0] == '$':
        data[stack[-2]][stack[-1]][-1] = (data[stack[-2]][stack[-1]][-1], line[2:].strip())
    elif line[0] == '\n':
        stack = []
    else:
        print(f'Error: {line}')

with open('data.json', 'w') as file:
    json.dump(data, file, indent=4)
