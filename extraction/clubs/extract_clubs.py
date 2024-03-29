from bs4 import BeautifulSoup
import re

count = 0
with open('clubs_code.txt', 'w') as clubs:
    with open('List Of SA groups.html') as file:
        soup = BeautifulSoup(file, 'html.parser')
        for label in soup.find_all('label'):
            if label.get('for') and label.get('for').startswith('cb_club'):
                regex = re.compile(r'Select (.+?)\'s group')
                match = regex.search(label.get_text())
                print(match.group(1))
                count += 1
                clubs.write(label.get('for') + "," + match.group(1) + '\n')

            

print(count)
