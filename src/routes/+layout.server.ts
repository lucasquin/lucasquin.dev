import type { IHeader } from '$lib/types';

export function load() {
	const header: IHeader = {
		title: 'common.lucasquinDev'
	};

	return {
		header
	};
}
