# { Web Scraping Exercises. }

## Part 1 - Web Scraping

Write a Python program that uses BeautifulSoup to go to https://news.google.com and prints out all of the headlines on the page. Then, write a function called find_headline_by_keyword which lets you search through those headlines for keywords, and returns to you a list of all of the headlines that match all the keywords you provide.

_(first_scraping.py)_ 

## Part 2 - Web Scraping + File IO

This Wikipedia page has a table with data on all of the US Presidential elections. Our goal is to use Beautiful Soup to scrape some of this data into a CSV file. The columns of the CSV should be: order, year, winner, winner electoral votes, runner-up, and runner-up electoral votes. Use commas as the delimiter. For instance, after the header row, the first row of data should look like this:

`1st,1788–1789,George Washington,69,John Adams,34`

(Hint: use the pdb debugger! Setting break points is a great way to experiment with your code to make sure that you're selecting the right elements and correctly targeting the text that you're interested in.)

_(presidents.py)_ - not working

## Part 3 - Server Side Requests

Using the requests module and the OMDB API, build an application that prompts the user for two pieces of information, the name of an actor/actress and a movie. Your program should tell the user if that actor or actress was in that movie (this will only work for leading actors and actresses). As a bonus, add functionality to tell users who the director and writer of a movie were.



## In-Class Exercises:

For D3 Visualization: 

-- Top US Grossing feature films w/ 10K+ votes
http://www.imdb.com/search/title?title_type=feature&num_votes=10000,&sort=boxoffice_gross_us,desc 

-- By Genre:
> Drama
http://www.imdb.com/search/title?genres=drama&title_type=feature&num_votes=1000,&sort=boxoffice_gross_us,desc

> Fantasy
http://www.imdb.com/search/title?genres=fantasy&title_type=feature&num_votes=1000,&sort=boxoffice_gross_us,desc

> Romance
http://www.imdb.com/search/title?genres=romance&title_type=feature&num_votes=1000,&sort=boxoffice_gross_us,desc

> Comedy
http://www.imdb.com/search/title?genres=comedy&title_type=feature&num_votes=1000,&sort=boxoffice_gross_us,desc

> Sci-Fi
http://www.imdb.com/search/title?genres=sci_fi&title_type=feature&num_votes=1000,&sort=boxoffice_gross_us,desc