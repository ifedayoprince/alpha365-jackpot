let errorMap = {
	UNKNOWN: "An unexpected error occurred."
}

export function executeProneRoute({req, res}, route) {
	try {
		route(req, res);
	} catch (e) {
		console.log('ERROR: ', e.mesage);
		res.status(500).send(e.message);
	}
}
