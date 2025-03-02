import { derived, writable } from 'svelte/store';
import type { Writable, Readable } from 'svelte/store';
import translations, { type LocaleCode, type TranslationKey, type TranslationVars } from './translations';

type TranslationFunction = (key: TranslationKey, translate?: boolean, vars?: TranslationVars) => string;

export const locale: Writable<LocaleCode> = writable('en');

export const locales: LocaleCode[] = Object.keys(translations) as LocaleCode[];

function translate(locale: LocaleCode, key: TranslationKey, shouldTranslate: boolean = true, vars: TranslationVars = {}): string {
	if (!key) {
		throw new Error('No key provided to $t()');
	}

	if (!shouldTranslate) {
		return key;
	}

	if (!locale) {
		throw new Error(`No translation for key "${key}"`);
	}

	const keyParts = key.split('.');

	let text: any = translations[locale];
	for (const part of keyParts) {
		text = text[part];
		if (text === undefined) {
			throw new Error(`No translation found for ${locale}.${key}`);
		}
	}

	return Object.keys(vars).reduce((acc, k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		return acc.replace(regex, String(vars[k]));
	}, text);
}

export const t: Readable<TranslationFunction> = derived(
	locale,
	($locale) =>
		(key: TranslationKey, shouldTranslate: boolean = true, vars: TranslationVars = {}) =>
			translate($locale, key, shouldTranslate, vars)
);
