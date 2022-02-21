https://gecko-api-exercise.netlify.app/

CMOM Technical Test
Summary
This test should take no more than 1-2 hours to complete. It would be preferable to use
React, but vanilla JS is also acceptable. Please push your code to Github to review once
complete with any instructions needed to run the application.
Implementation
CoinGecko API
Using the Coin Gecko API. You need to return the list of the coins markets and coin by ID
https://www.coingecko.com/api/documentations/v3#/
Procedure
a. /coins/markets
Make a call to the following endpoint to return the coins ordered by market_cap_desc,
using the vs_currency as EUR. You can limit the per_page to show only ten results.
b. Render this list on the UI showing the following information
● Image
● Name
● Symbol
● Current Price
● High 24 hour Price
● Low 24 hour Price
c. /coins/{id}
Each item in this list should be clickable which will in return make another call to the API
to return the following information about this coin.
● Name
● Symbol
● Hashing algorithm
● Description
● Market cap in Euro
● Homepage
● Genesis Date
Materials & Resources
It's OK to use an IDE, Stack Overflow, or whatever else you'd use when you're usually coding.
You can use whatever 3rd party libraries you wish to make HTTP requests or add some styling
via a component library. It is not OK to copy code verbatim or consult a friend. Finally, we ask you
not to share the details of this project with others.
Assessment
We evaluate your submission based on the following things:
● First and foremost, if you complete the project and deliver what was asked.
● Does the UI look good? We’re looking for someone with an eye for detail.
● Is your code commented and tested.
● Finally, the quality of the code you submit. We're looking for simplicity, clarity and
readability over cleverness or flexibility.

npm install react-bootstrap bootstrap@4.6.0

npm install axios

npm install react-router-dom
(edited)

import in index.js -> import 'bootstrap/dist/css/bootstrap.min.css';
