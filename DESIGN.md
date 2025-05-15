# Design Guidelines

## Concept Phase

### Theme
The aim of our website to convey a sense of journey, adventure and travel, since adventuring and traveling is what one does with a rental car.
There is a balance in the design between playful and serious-business, in order to appear professional, but also approachable.


### Color Theme
- Driveo's primary color is #FFCA1E, which is a warm yellow color.
This color gives a feeling of happiness, liveliness, hope, curiosity and intelligence, which is how we want our company to be perceived.
- Accent colors and alternative colors will be chosen from the palette below. 
- These colors were selected with contrast and accessibility in mind, ensuring legibility of various content
#### Color pallet
![Image of color gradients from primary color](/assets/colors.jpg)

### Hierarchy and layout
Our base layout consists of a header at the top, page content at the center and footer at the bottom. 
- Header contains our logo and navigation, as well as a user icon if the user is logged in
- Page content contains the main content of the page
- Footer contains information, links and contact information

When loading the page the user is presented with a lander page. The primary focus of the page is the call to action / rent 
now button. The reason for this is that we want the users to easily navigate to choosing their car and renting, which is the most important part of the website.

The main and most important content will always be located towards the center, with navigation and extra elements around it.
The order of importance of elements is conveyed using different sizes, font boldness and colors. Important elements, such as action buttons, will be large, have a distinct color and have a higher font weight.
Certain forms will be placed in the center of the page, elevated above the other content, with the background dimmed (Known as a portal).
These measures ensure that the user is naturally guided towards seeing the most important content first.

### Images
Images sourced from finn and pixabay
Images used only by the frontend are located in the assets folder of the frontend application.

The images related to the cars are stored in the database. This decision was made to easily map between entities in the database and their respective images, ensuring semantic integrity.
However, this approach does entail a drawback. It takes longer for the images to load to the webpage.

For the landing page we have text on the image, since the image will act as a background. For the rest of the website the text will always be next to the images.

We use clear images to show the cars as best as possible.

### Icons
Icons will be used for navigation and informational seconds to create an understanding of what is being displayed, where textual information is inappropriate.

For the icon pack we will use Google material icons.
The icons will be gray scale or adhere to our primary color scheme, depending on which color results in better contrast.

### Typography
We decided to use Sans-serif because it is clean, simple, modern and is easy to read. The font we chose is Kantumruy Pro.
This font is clean and simple with a modern look, which is the standard approach in modern web design.
It is also easy to read and has a good balance between playful and serious.

The font will have rounded corners, which adheres to the intended playful design of the website.
It also gives off a modern look.

Headers and paragraphs have different font sizes and weights to create a clear hierarchy and make it easy to read

#### Headers
- Bold
- 32px+

#### Body
- thin
- 16-32px

### Border rounding
Borders will be slightly rounded to give a slightly playful design. We decided on all borders being rounded to 1rem.
This matches the rounding of our font well, and ensures that the design is consistent across the website.

### Shadows
Slight shadows will be used to emphasize important elements or elements that should stand out from the background.
We want to keep them minimal, since bold shadows clash with our flat, minimal design.

### Spacing
TODO
