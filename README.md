litmus-frontend
===============

Litmus for frontend work on Alien Adventures



Problem Statement part 1 - create a responsive html
===================================================

Using AngularJs , create a typehead - search widget, with the view as shown in the screen shot attached in this email.
The view should scale for mobile to desktop devices
You could use bootstrap and also look into media queries for responsive design  
Note that we have 4 types of searches on the screenshot, icons (air, water, land, snow), location, duration and cost. The search happens only when you press GO. The icons should be highlighted on being selected, and vice versa. 

FYI Location is a free text screen, with a dynamic dropdown, whereas price and duration are static dropdowns of suitable integers.


Problem Statement part 2 - search functionality
===============================================
Other than the typehead, please implement a search for the icons (air, water, land, snow) on top of the screenshot.
As mentioned above, the Search Widget should have 4 categories that could be searched from - Air, Water, Snow and Land. Its been provided as buttons on the top of the search box in the screen shot.
On selecting any of the icons (multiple can be selected) and pressing GO, the search resultset should be populated with the related offers. For example, if I click on water - it should search for water based offers in our database
You will have to create a sample dataset to work with (about 30 searchable entries.), something as follows: 
     Air - sky diving - new zealand 
     Air - sky diving - australia 
    Water - scuba - andaman 

Make assumptions on DB schema that your search call should search and find the offer IDs.
