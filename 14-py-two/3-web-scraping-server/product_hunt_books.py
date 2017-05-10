import requests
import bs4

r = requests.get('https://www.producthunt.com/topics/books?order=most-upvoted')
soup = bs4.BeautifulSoup(r.text, 'html.parser')

for item in soup.select('ul.postsList_b2208'):
  book_title = item.select('li div a div:nth-of-type(2) div:nth-of-type(1)')
  print(book_title)