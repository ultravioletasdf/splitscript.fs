const path = require('path');
const fs = require('fs');

let root =
	path.dirname(require.main.filename).replaceAll('\\', '/') + '/files/';

module.exports = {
	path: root,
	createDirs: function (filepath) {
		const dirs = filepath.split('/'); // List of all new folders/files in file path
		let isFile = []; // For checking if type is folder or file
		let prev = []; // For nesting folders
		let pth; // To return path of created folders

		// Check if is folder or file
		for (let dir of dirs) {
			isFile.push(dir.includes('.'));
			if (dir.includes('.')) break; // If file, stop
		}
		// Check end

		for (let i = 0; i < isFile.length; i++) {
			if (!isFile[i]) {
				// Check if is folder
				// Skip if folder exists already
				if (fs.readdirSync(root + prev.join('/')).includes(dirs[i])) {
					prev.push(dirs[i]);
					continue;
				}
				// Create directory
				fs.mkdirSync(root + prev.join('/') + '/' + dirs[i]);
				prev.push(dirs[i]);
			}
			pth = root + prev.join('/') + '/';
		}
		return pth;
	},
};
