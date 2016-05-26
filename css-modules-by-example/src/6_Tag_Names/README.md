CSS Modules rewrite class names, but they don't touch tag names.

Selectors like `input`, `div`, or `h1` will be left alone.

In a selector like `.signup input`, the `signup` class will be renamed, but the `input` portion of the selector will be left alone and you get something like this: `.filename_signup_123 input`.

May I strongly suggest: Never use a selector that is JUST a tag name. Always specify a class name also.
