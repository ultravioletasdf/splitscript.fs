# Simple module to manage files in a [`SplitScript.js`](https://www.npmjs.com/package/splitscript.js) project

All files are created in the `files/` directory in the root of your project.

# 🔗 Contents

1. [👨‍💻 API Reference](#reference)
1. [📜 Changelog](#changelog)

# 👨‍💻 API Reference <a id="reference"></a>

Files edited are like: `{project_root}/files/{filepath}.{filetype}`
Example file path: `folder1/folder2/filename`
Example file type: `js`

```js
const ssfs = require("splitscript.fs");
```

##&emsp;read

&emsp;&emsp;_Gets contents of an existing file_

```js
let txt = ssfs.read("FILEPATH.FILETYPE");
```

##&emsp;write
&emsp;&emsp;_Overwrites the contents of a file, or creates a new one_

```js
ssfs.write("FILEPATH.FILETYPE", "DATA/BUFFER");
```

##&emsp;append
&emsp;&emsp;_Adds data to the end of a file, or creates a new one_

```js
ssfs.append("FILEPATH.FILETYPE", "DATA/BUFFER");
```

##&emsp;delete
&emsp;&emsp;_Deletes a file_

```js
ssfs.delete("FILEPATH.FILETYPE");
```

##&emsp;rename
&emsp;&emsp;_Renames a file_

```js
ssfs.rename("FILEPATH.FILETYPE", "NEWFILEPATH.NEWFILETYPE");
```

# 📜 Changelog <a id="changelog"> </a>

| Version |            Description            |
| :-----: | :-------------------------------: |
|  0.0.1  |   All functions. Possibly Buggy   |
|  0.0.2  | Corrected incorrect variable name |
