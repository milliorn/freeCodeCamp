import { promises } from "fs";
const { readFile, writeFile } = promises;

const start = async () => {
	try {
		const first = await readFile("./content/first.txt", "utf8");
		const second = await readFile("./content/second.txt", "utf8");
		await writeFile(
			"./content/result-mind-grenade.txt",
			`Hello Node! : ${first} ${second}`
		);
		console.log(first, second);
	} catch (error) {
		console.log(error);
	}
};

const getText = (path) => {
	return new Promise((resolve, reject) =>
		readFile(path, "utf8", (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		})
	);
};

start();
