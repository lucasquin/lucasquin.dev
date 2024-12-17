import { derived, writable } from 'svelte/store';
import type { Writable, Readable } from 'svelte/store';
import translations from './translations';
import type { LocaleCode, TranslationKey, TranslationVars } from './translations';

type TranslationFunction = (key: TranslationKey, vars?: TranslationVars) => string;

export const locale: Writable<LocaleCode> = writable('en');

export const locales: LocaleCode[] = Object.keys(translations) as LocaleCode[];

function translate(locale: LocaleCode, key: TranslationKey, vars: TranslationVars = {}): string {
	if (!key) {
		throw new Error('No key provided to $t()');
	}

	if (!locale) {
		throw new Error(`No translation for key "${key}"`);
	}

	const text = translations[locale]?.[key];

	if (!text) {
		throw new Error(`No translation found for ${locale}.${key}`);
	}

	return Object.keys(vars).reduce((acc, k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		return acc.replace(regex, String(vars[k]));
	}, text);
}

export const t: Readable<TranslationFunction> = derived(
	locale,
	($locale) =>
		(key: TranslationKey, vars: TranslationVars = {}) =>
			translate($locale, key, vars)
);
