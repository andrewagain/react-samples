In this example there are style rules that only apply to elements that contain two class names: 'button' and 'disabled'.

You can see that both classnames are returned separately. In your component, you must add both class names in order for the styles to take effect.

NOTE: CSS Modules will NOT combine `.button.disabled` into a single rule. It will return class names for both `button` and `disabled`.

NOTE: We are using the [classnames](https://github.com/JedWatson/classnames) package here to combine classnames. In this situation it just adds a space between the two classnames.
