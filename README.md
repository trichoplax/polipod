# :octopus: Polipod

Demo using [wasm](https://webassembly.org/) for multiple programming languages on the front end (client side only / browser based)

## [View in your browser here (desktop / laptop / phone)](https://trichoplax.github.io/polipod)

## Running locally for development

Due to CORS (Cross Origin Resource Sharing) rules, the JavaScript modules cannot be accessed when opening the `index.html` page in a web browser directly from the local file system. Instead it must be viewed by serving it from a local server.

For example, if you have Python 3 installed you can run the following from the `docs` folder:

```
python -m http.server
```

Visiting the following address in your web browser will then show the `index.html` page with JavaScript modules imported successfully:

```
http://0.0.0.0:8000
```

If port 8000 is already in use on your machine, you can specify a port of your choice as follows:


```
python -m http.server 12345
```

Then view at the corresponding address:


```
http://0.0.0.0:12345
```
