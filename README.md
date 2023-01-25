# berlin-parliament-seat-calculator
<strong>Berlin Parliament Seat Calculator</strong>

Seats to the Berlin state parliament (Abgeordnetenhaus von Berlin) are determined by a system of proportional representation. The election law is similar to the federal election laws in requiring a 5% minimum threshold for parties to enter parliament. It differs from federal law in one key aspect: parties are allowed to chose whether they participate in the elections with a single state-wide list (Landesliste) - or alternatively with 12 separate district lists (Bezirkslisten), corresponding to Berlin's 12 districts.

Of the 6 parties currently represented in the Berlin state parliament, the SPD, CDU and FDP use district lists while BÜNDNIS 90 / DIE GRÜNEN, Die Linke as well as the AfD use state-wide lists.

This calculator allows the user to simulate the effect of a party switching from a state-wide-list to district lists and vice versa. Because the overall size of parliament is often dependent on the number of so called overhang seats (directly won seats above the number of seats allocated by proportional representation alone), parliament's size would change and this is accounted for in the calculator.

At present, the calculator allows the user to estimate the effects based on the 2016 and 2021 election results. Further data can, however, be easily added. 

The output table summarizes the situation at the overall level by party. It gives further detail on the type of seats won by each party. E.g. how many have been won directly and how many were allocated via lists. Further detail is given on overhang (Überhangmandate) and compensation (Ausgleichsmandate) type of seats. 

What is more, the output table shows the situation on the district level for each party - that is the number of directly won seats by party in each district and the number of district levels seats (if applicable). If a party has won 1 or more seats in a given district, the summary cell is displayed with a <div color:"green">green</div> background. The background is displayed in <div color:"red">red</div> if a party has not won seats in a district either via directly won seats nor district lists. Note: this analysis does NOT take into account an analysis of the association of members of parliaments by dristict of the state-wide lists (for parties with this type of list), because this would require a qualitative assessments of those state-wide lists.

<strong>Running the Code</strong>

The calculator works as a simple HTML document (seat_calculator.html) supplied by a Javascript file for the seat calculation (seat_calculator.js) as well as the data (data_2016.js and data_2021.js). A CSS file adjusts the HTML for easier accessiblity. 

To run the calculator, simply copy the files to a web environment making sure the files sit in the same directory.

<strong>File Overview</strong>
<ul>
<li>seat_calculator.html: summary table of the results</li>
<li>seat_calculator.css: CSS file to make the HTML table look nice</li>
<li>seat_calculator.js: determines the number of seats by party</li>
<li>data_2016.js: data for the 2016 Berlin state election</li>
<li>data_2021.js: data for the 2021 Berlin state election</li>
</ul>
<strong>Screenshot of the calculator in action</strong>

<img width="1261" alt="image" src="https://user-images.githubusercontent.com/3532451/214544128-e2d70fa8-9bc5-4707-8e89-f727bf7c77e5.png">