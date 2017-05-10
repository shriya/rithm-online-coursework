import requests
import bs4

r = requests.get('http://www.imdb.com/list/ls055592025/')
soup = bs4.BeautifulSoup(r.text, 'html.parser')

for item in soup.select('.list_item .info b a'):
  print(item.text)


#print(r.text)