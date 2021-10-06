# vmr-crux-gpt

VMR GPT Client Assets Builder and Deployment Workflow

## CDN

Minified
```
<script src="https://cdn.vmrcommunications.com/dist/js/vmr-crux-gpt.min.js"></script>
```

Un-minified
```
<script src="https://cdn.vmrcommunications.com/dist/js/vmr-crux-gpt.js"></script>
```

## Local development

### 1. Clone this repository

```
git clone https://github.com/danurbanowicz/vmr-gpt-assets.git vmr-gpt-assets
```

### 2. Navigate to the directory

```
cd /my/path/to/vmr-gpt-assets
```

### 3. Install dependencies locally

```
npm install
```

### 4. Build files

```
npx @11ty/eleventy
```

Or serve during development

```
npx @11ty/eleventy --serve
```

