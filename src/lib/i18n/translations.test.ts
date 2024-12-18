import { describe, it } from 'vitest';
import translations from './translations';

describe('Translation System', () => {
	it('should have matching keys in all languages', () => {
		const locales = Object.keys(translations);
		const errors: string[] = [];

		const allKeys = new Set<string>();
		locales.forEach((locale) => {
			Object.keys(translations[locale]).forEach((key) => allKeys.add(key));
		});

		locales.forEach((locale) => {
			allKeys.forEach((key) => {
				if (!translations[locale][key]) {
					errors.push(`Missing translation for key "${key}" in locale "${locale}"`);
				}
			});
		});

		if (errors.length > 0) {
			console.error('\nTranslation Errors:');
			errors.forEach((error) => console.error(`- ${error}`));
			throw new Error(`Found ${errors.length} translation issues`);
		}
	});

	it('should have all values as non-empty strings', () => {
		const errors: string[] = [];

		Object.entries(translations).forEach(([locale, localeTranslations]) => {
			Object.entries(localeTranslations).forEach(([key, value]) => {
				if (typeof value !== 'string') {
					errors.push(
						`Invalid type for key "${key}" in locale "${locale}": expected string, got ${typeof value}`
					);
				} else if (value.trim() === '') {
					errors.push(`Empty string for key "${key}" in locale "${locale}"`);
				}
			});
		});

		if (errors.length > 0) {
			console.error('\nValidation Errors:');
			errors.forEach((error) => console.error(`- ${error}`));
			throw new Error(`Found ${errors.length} validation issues`);
		}
	});
});
