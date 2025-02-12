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
- the tags like ```<header> <article> <section>``` are known as ***semantic elements*** and are used in the places where the mean the same
- there are places which the elements doesnt mean anything or need css and js to act upon so there comes ***non-semantic elements***

### tags not used yet
- tags like ```<span> <div>``` are used with proper class names where the semantic elements doesn't work.
- To create quotes in the inline or multiple line we use ```<q>``` and in order to create a block quote we can use the tag ```<Blockquote>```
- the date and time can be expressed using the ```<time>``` in order to use common format for the computer to understand the time format
- to make the link to open in new tab you can use ```<a href="https:/google.com" target="_blank">link </a>```. There is a problem where the link has the access to js using the ***windows.opener*** so the attribute of the rel should ne noopener
- to make a download link we can use ```<a href="hello.pdf" download>download</a>```