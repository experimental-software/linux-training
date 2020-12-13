# Linux Training

This repository contains the code which is used to generate the website for the Linux Training course materials.

## Dependencies

The website is build using the following technologies:

- Hugo: Compiles the project website from Markdown and JSON to HTML.
- RevealJS: Enables to create presentations using plain HTML.
- claat: Compiles tutorials using the Google Codelabs tool to HTML.

## Content authoring

### Add a new presentation

To create a new presentation, copy the presentation template into a new directory.

```
PRESENTATION_KEY=example
cp -r presentations/_template presentations/${PRESENTATION_KEY}
```

Afterwards you can right away see the new presentation locally in your browser.
Then use the [RevealJS](https://revealjs.com) syntax to add the contents of your presentation to the `index.html` for your presentation.

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>

All documentation content of this project is licensed under the [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

All source code of this project is licensed under the [MIT Licsense](https://tldrlegal.com/license/mit-license).
