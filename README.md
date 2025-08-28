1. getElementById is used to select a single element by its unique ID.

getElementsByClassName is used to select all elements that have the same class name, and it returns them as an HTMLCollection.

querySelector is used to select the first element that matches a given CSS selector (it can be an ID, class, or tag).

querySelectorAll is used to select all elements that match a given CSS selector (it can be an ID, class, or tag), and it returns them as a NodeList.


2. I do use to create and insert a new element in the DOM by using document.createElement and then appendChild() to the parent div.
3. Event Bubbling means that when an event happens on a child element, the event also propagates upward through its parent elements one by one.
4. Event delegation in JavaScript is a technique where I attach an event listener to a parent element, and that listener manages events triggered on its child elements.
5. preventDefault() stops the browser’s default action, like preventing a form from submitting or a link from opening. stopPropagation() stops the event from bubbling up to parent elements.
