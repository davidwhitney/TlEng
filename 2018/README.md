# 2018

Apologies for the messy code, some things of note: 

## Updating Talk Titles/Descriptions

- Update `talks.json` where necessary.
- Re-run `talksToHTML.js` (`node talksToHTML.js`).
- Copypasta the generated HTML into the `index.html` file.
- Be happy :smile:

:warning: Talk Descriptions (to populate the modals) are saved in `assets/js/sched.js` - edit them there (we'll probably `#notoil` this at some point).

## The Pretty Colo(u)rs

Colors and # of rows are saved in `partials/variables`, gotta compile the scsss in order for changes to take effect. (VSCode has some plugins to do that).