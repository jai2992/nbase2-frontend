# How websites are loaded
- when we click the link the files are downloaded, the DOM is created using the downloaded HTML file and the CSSOM is created using the CSS file. Then the js file is loaded.

# Structure and tag
- ***meta tag*** contains the charset, name=viewport width=device-width
- ***void tag*** is the tag that doesnt need any end tag, it is used to embed the elements like the image etc...
- ***boolean attributes*** are attributes without the values. If the attribute is mentioned then it is true else the attribute take the false.
    - ```<input type="text" disabled>``` gives the true for disabled and the input is disabled
    - ```<input type="text" disabled="disabled">``` same true for the attribute disabled
    - ``` <input type="text"> ``` gives the false for the attribute disabled
- To use ```""``` inside the quotes we can use ```&quote```.
- These are known as special characters ```< > " ' &``` these can be inserted using the ```&lt &gt &quot &apos &amp```.
- ```<em>``` emphasis is the tag used to give a stress to a word which is italic in the browser but the screen reader reads with a different tone.
- ```<strong>``` this also gives another tone to the screen reader.
### Semantic element and non-semantic element
- The tags like ```<header> <article> <section>``` are known as ***semantic elements*** and are used in the places where the mean the same
- There are places which the elements doesnt mean anything or need css and js to act upon so there comes ***non-semantic elements***
- Tags like ```<span> <div>``` are used with proper class names where the semantic elements doesn't work.
### tags not used yet
- To create quotes in the inline or multiple line we use ```<q>``` and in order to create a block quote we can use the tag ```<Blockquote>```
- The date and time can be expressed using the ```<time>``` in order to use common format for the computer to understand the time format
- To make the link to open in new tab you can use ```<a href="https:/google.com" target="_blank">link </a>```. There is a problem where the link has the access to js using the ***windows.opener*** so the attribute of the rel should ne noopener
- To make a download link we can use ```<a href="hello.pdf" download>download</a>```
### HTML IMAGES
- Specifying the ```width``` and ```height``` of the image tag reserves the space for that image which doesn't make any changes to the screeen still the contents will be in the same place
- Audio and video can be embedded using the ```<audio>``` and ```<video>``` tag with the controls attribute.



### HTML table
- Use ```colspan``` and ```rowspan``` to ***join two blocks*** in the table.
- The border styling is ***width + type + color*** ex ```1px solid black```
- Use ```border-collapse``` attribute with the ```collapsed``` value to make the table look good without any ***non-overlapping*** borders.
- The ```id``` is given to the table header ```<th>``` and the table data ```<td>``` is mention with the ```header``` to know to which header it present which has the values as the id of the header tag ```<th>```

### HTML forms
- Forms are created using the tags such as ```<form>``` ```<label>``` ```<input>``` and ```<select>```.