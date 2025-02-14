# CSS - Cascading Style Sheets

- The loading of the website is started by creating a ***DOM (Document Object Model)*** which is like a tree like model which converts the HTML file into a tree like structure which contains nodes (parent, child and sibbling).
- After the DOM is generated the css file is parsed and the styles are applied to the nodes in the DOM.
- The DOM now is called ***renderer tree*** which finally renders the website.

- ***Shorthand properties***: these should be set with multiple values. example ```font``` ```background``` ```padding``` ```border``` and ```margin```.
- ***Selectors***:
    - *Type selector*: this is the element or tag
    - *Class selector*: class is created and used with ```.```
    - *Id selector* ```#``` is used to use id selector. Id should be unique.
- Used this [like to practice the selectors](https://flukeout.github.io/)
- Use this to [check the feature works with the browser or not](https://caniuse.com/)

## Grid
- Used this [link to learn the grid](https://cssgridgarden.com/)
- ```grid-column-start``` : where the grid starts
- ```grid-column-end``` : where the grid ends
- The above 2 can get the values in both positive and negative
- Not sure where it ends use ```span``` to use number. eg 
```
    grid-column-start:2; 
    grid-column:end:span 2;

    #also we can use it for start

    grid-column-start : span 2;
    grid-column-end : 6;
```
- Instead of using the ***gird-column-start*** and ***grid-column-end*** we can use ```grid-column:start/end``` eg ```grid-column:2/4;``` also **span** works here as well eg ```grid-column:2/span 3;```
- Same is used for the ```grid-row```
- Instead of row and column we can use the ```grid-area```
```
grid-area : grid-row-start / grid-column-start / grid-row-end / grid-column-end ;
```
- ```grid-template-column:20% 20% 20% 20% 20%;``` creates the grid of 5 column with 20% of the total width
- ```grid-template-row:20% 20% 20% 20% 20%;``` creates the grid of 5 row with 20% of the total height
- Instead of using the percentages repeatedly we can use ```repeat(5,20%)```
- not only percentages it also accepts the values in pixels and em also.
- This also can be done in fractions like ```grid-template-columns:1fr 3fr;``` total grid is divided into 4 parts where the first part is take by the first element and the remaining 3 parts are taken by the second element.
- Not only the fr we can also use the pixel or rem values and fr take the remaining space ex ```grid-template-columns:50px 1fr 4fr 50px;``` here the last two grid columns take the space of 50px and the remaining space is divided into 5 parts which the second element takes the one part and remaining four parts are taken by the 3rd element.
- Similar way we can use the``` grid-template: row / column;```

## Display:flex
- when given display flex css is the block and the attributes.
- ```justify-content``` with the values as ```flex-start, flex-end, center, space-around and space-between``` are used to place items in the column fashion
- ```align-items``` with the values as ```flex-start, flex-end, center, space-around and space-between``` are used to place items in the row fashion
- ```flex-direction``` can have values as ```row, row-reverse, column and column-reverse```.
- ```order``` is used to rearrange the element which by default has the value of ```0``` and can have the values from ```negative to positive```.
- ```align-self``` also works like same as the align-items but can be used for individuals inside the flex
- ```flex-wrap``` is also an attribute to wrap the contents inside the flex with the values as ```nowarp, warp and warp-reverse```
- ```flex-direction``` and ```flex-warp``` are combined in the``` flex-flow ```attribute which has the values of the flex-direction and flex-warp seperated by space between them.
- ```align-content``` are for the space between the line whereas the ```align-items``` position all the items in the container

## Text styling
- The text styling has the following attributes namely ```font-style, font-weight, font-size, text-decoration```

## Position, float
- float is used to place images.
- position is used to 