# Basic-Todo-List
A very basic and simple Todo List web application

Features:
- Use of CSS selectors to limit the creation of event handlers.
- Use of local storage to handle data storage.
- Clean interface.
- Use of the revealing Modual method to keep code private and stick to good coding practices.

Features Not available:
- Editing entries.

Issues that need addressing in the futur:
- Local storage is currently being written to on each interaction, perhaps this could be avoided by writting to the storage only on window/tab close. (Resource optimization).
- Perhaps a function to assign new event handlers to each element would be more ressource efficient then using a single handler which is then subjected to a filter function to determine the accurate target.
