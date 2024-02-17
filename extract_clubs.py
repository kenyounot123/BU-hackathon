# Parse an HTMl file and extract the name of every club in the file
# Its a label with for="cb_club..."

from bs4 import BeautifulSoup
import re

count = 0
with open('List Of SA groups.html') as file:
    soup = BeautifulSoup(file, 'html.parser')
    for label in soup.find_all('label'):
        if label.get('for') and label.get('for').startswith('cb_club'):
            regex = re.compile(r'Select (.+?)\'s group')
            match = regex.search(label.get_text())
            print(match.group(1))
            count += 1

print(count)
