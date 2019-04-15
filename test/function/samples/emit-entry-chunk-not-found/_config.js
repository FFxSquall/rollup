module.exports = {
	description: 'Throws if an emitted entry chunk cannot be resolved',
	options: {
		input: 'main.js',
		plugins: {
			buildStart() {
				this.emitEntryChunk('not-found.js');
			}
		}
	},
	error: {
		code: 'UNRESOLVED_ENTRY',
		message: 'Could not resolve entry (not-found.js)'
	}
};
