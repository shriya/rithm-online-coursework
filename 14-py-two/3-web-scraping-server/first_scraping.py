import requests
import bs4

r = requests.get('https://news.google.com')
soup = bs4.BeautifulSoup(r.text, "html.parser")

titles = soup.select("span.titletext")

# print(titles)

# for title in titles:
#     print("{} \n".format(title.text))

# Then, write a function called find_headline_by_keyword which lets you search through those headlines for keywords, and returns to you a list of all of the headlines that match all the keywords you provide.

def find_headline_by_keyword(keyword):
    headlines = []
    for title in titles:
        full_title = list(title)[0]
        split_title = full_title.split(" ")
        # print(split_title)
        if keyword in split_title:
            headlines.append(' '.join(split_title))
    return headlines

print(find_headline_by_keyword("Mars"))