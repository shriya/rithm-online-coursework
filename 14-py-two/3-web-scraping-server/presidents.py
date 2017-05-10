import requests
import bs4

r = requests.get('https://en.wikipedia.org/wiki/United_States_presidential_election')
soup = bs4.BeautifulSoup(r.text, 'html.parser')

## get the data i want
pres_list = soup.select("#bodyContent table.wikitable tbody")

## put that data in a csv
with open('presidents.csv', 'w') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow( ('Order', 'Year', 'Winner', 'Winner Electoral Votes', 'Runner Up', 'Runner Up Electoral Votes') )
    for pres in pres_list:
        order = None
        year = None
        winner = None
        winner_votes = None
        runner = None
        runner_votes = None
        # order, year, winner, winner electoral votes, runner up, runner up electoral votes
        writer.writerow((order, year, winner, winner_votes, runner, runner_votes))