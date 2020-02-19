// export default class WebWorker {
//     constructor(worker) {
//         const code = worker.toString();
//         const blob = new Blob(["(" + code + ")()"]);

//         return (...args) => {
//             const worker = new Worker(URL.createObjectURL(blob));

//             return new Promise((resolve, reject) => {
//                 worker.postMessage(...args);

//                 worker.addEventListener("message", event => {
//                     resolve(event);
//                 });
//             });
//         };
//     }
// }

//
export default class WebWorker {
	constructor(worker) {
		const code = worker.toString();
		const blob = new Blob(['('+code+')()']);
		return new Worker(URL.createObjectURL(blob));
	}
}

//https://codesandbox.io/s/github/bmaniar/react-web-worker-client-side-sorting/tree/master/
// export default class WebWorker {
//     constructor(worker) {
//         let code = worker.toString();
//         code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
//         const blob = new Blob([code], { type: "application/javascript" });
//         return new Worker(URL.createObjectURL(blob));
//     }
// }