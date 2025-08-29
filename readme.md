What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
- getElementById('id'): Returns one element by its ID.
- getElementsByClassName('class'): Returns a list of elements with that class.
- querySelector('selector'): Returns the first element that matches the CSS selector.
- querySelectorAll('selector'): Returns all matching elements (as a NodeList).



How do you create and insert a new element into the DOM?
Ans:
-Use document.createElement() to create the element.
-Add text, attributes, or classes.
-Use appendChild() or append() to add it to the page.

What is Event Bubbling and how does it work?
ans: Event bubbling means when an event happens on a child element, it also goes up to its parent elements. The event "bubbles" from the inside to the outside.

What is Event Delegation in JavaScript? Why is it useful?
ans:
Event delegation means putting the event listener on a parent, and using it to handle events from children. It is useful when you have many child elements or dynamic elements.

What is the difference between preventDefault() and stopPropagation() methods?
ans:
-preventDefault(): Stops the default action (e.g., stop a link from opening).
-stopPropagation(): Stops the event from bubbling up to parent elements.