## Structure Directory

### backend-mlgc

```
src
├── exceptions
│   ├── ClientError.js
│   └── InputError.js
├── server
│   ├── handler.js
│   ├── routes.js
│   └── server.js
└── services
    ├── inferenceService.js
    ├── modelService.js
    └── firestoreService.js
config
└── app_credentials.json
models
└── model.json
.env
DockerFile
package.json
README.md
```

### frontend-mlgc

```
src
├── images
│   ├── bg.png
│   └── waiting.svg
├── scripts
│   ├── api.js
│   ├── main.js
│   └── utils.js
└── styles
    ├── responsive.css
    └── styles.css
config
└── app_engine.json
app.yaml
favicon.png
index.html
package.json
```

## How to refactor code

```
# Replace the following sentence according to your google service &
[PROJECT ID]    = YOUR PROJECT ID
[MODEL URL]     = YOUR MODEL URL
[BACKEND URL]   = YOUR BACKEND URL
```