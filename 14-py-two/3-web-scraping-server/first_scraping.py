import requests
import bs4

r = requests.get('https://news.google.com')
soup = bs4.BeautifulSoup(r.text, "html.parser")

all_headlines = soup.select(".esc-diversity-article-wrapper a")

# title_list = [title.select("span.titletext") for title in all_headlines]

title_list = [title.select("span.titletext")[0].text for title in all_headlines]
url_list = [url["href"] for url in all_headlines]

# titles = soup.select("span.titletext")
# urls = soup.select(".esc-diversity-article-wrapper a")
# url_list = [url["href"] for url in urls]

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
