# Linux Training

This repository contains the code which is used to generate the website for the Linux Training course materials.

- Presentation: Slides and speaker notes for explaining the context for a particular topic.
- Tutorials: Step-by-step guides to achieve a particular goal.

## Dependencies

The website is build using the following technologies:

- Hugo: Compiles the project website from Markdown and JSON to HTML.
- RevealJS: Enables to create presentations using plain HTML.
- claat: Compiles tutorials using the Google Codelabs tool to HTML.

## Content authoring

### Add a new presentation

To create a new presentation, copy the presentation template into a new directory.

```
PRESENTATION_FOLDER=example
cp -r presentations/_template presentations/${PRESENTATION_FOLDER}
```

Afterwards you can right away see the new presentation locally in your browser.
Then use the [RevealJS](https://revealjs.com) syntax to add the contents of your presentation to the `index.html` for your presentation.


### Add a new tutorial

Use the [Codelabs Markdown syntax](https://github.com/googlecodelabs/tools/tree/master/claat/parser/md) to add the contents to the `index.md` for your tutorial

Run the following command to compile a tutorial from Markdown to HTML:

```
TUTORIAL_FOLDER=terminal-navigation
claat export -o tutorials/ -ga "" tutorials/${TUTORIAL_FOLDER}/index.md
```

Like this you can then start a small local webserve to check that the tutorial was rendered like expected:

```
claat serve
```

## References

- [Publish Technical Tutorials in Google Codelab Format](https://medium.com/@zarinlo/publish-technical-tutorials-in-google-codelab-format-b07ef76972cd)
- [Markdown syntax](https://daringfireball.net/projects/markdown/syntax)

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>

All documentation content of this project is licensed under the [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

All source code of this project is licensed under the [MIT Licsense](https://tldrlegal.com/license/mit-license).
