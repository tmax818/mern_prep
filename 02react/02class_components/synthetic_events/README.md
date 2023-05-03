# synthetic events

>There are a few key things to keep in mind about Reacts synthetic event system:
>- The event names are instead camelCased vs lowercase (i.e "onclick" becomes "onClick")
>- Returning false will not work with any event to prevent bubbling. You will need to manually call `event.stopPropagation()` or `event.preventDefault()` as necessary.
>- Events cannot be called asynchronously because of how React "pools" the Synthetic events