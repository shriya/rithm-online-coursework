import requests
import bs4
import csv

r = requests.get('http://www.imdb.com/search/title?title_type=feature&num_votes=10000,&sort=boxoffice_gross_us,desc')
soup = bs4.BeautifulSoup(r.text, 'html.parser')

with open('biz_movies.csv', 'w') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(('Rank', 'Title', 'Year', 'Rating', 'Mins', 'Genres', 'Stars'))
    
    for item in soup.select('.list_item .info'):
        title = item.select('b a')[0].text
        year = item.select('b .year_type')[0].text[1:5] # remove the () around the year
        rating = item.select('div.rating span.rating-rating span.value')[0].text
        director = item.select('div.secondary a')[0].text

        if item.select('.item_description span') != []:
            mins = item.select('.item_description span')[0].text[1:-7] 
        else: 
            mins = "unknown"

        writer.writerow((title, year, rating, director, mins))