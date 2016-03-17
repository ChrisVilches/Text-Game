# Text Game

Compile using the ```tsc``` command (Typescript compiler.)

Silly text-based game. It gets a JSON file as input (currently it's actually a Javascript object, because JSON files can't be loaded locally, due to web browser security) which contains a conversation.

The conversation has a ```next``` button similar to an RPG or Pokemon game, and sometimes it has option buttons. These options can branch into different parts of the conversation, and some of these buttons will mark a boolean value as true. This boolean is specified as a string, for example a ```dont-like-ramen``` boolean condition. 

Instead of using a number ID for each message, it uses a string to identify it, such as ```hello-my-name```. That way it's easy to see which message it links to (such as ```Hello my name is Carlos```). These strings are used for ```next``` buttons as well.

*(Not implemented yet)* These booleans make the program acquire knowledge about the user, which can result in more branching.

*(Not implemented yet)* It also has a composer module with a GUI to make conversations and generate its code, since making a JSON file can be tedious.

# Ways to improve it

1. When the program gets the JSON input for the first time, check for consistency, to verify the dialog is a valid one.