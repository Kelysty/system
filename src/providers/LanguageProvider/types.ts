/**
 * `KELYSTY`: This is a type that represents language name
 * throughout the application; For example 'english' or 'spanish';
 */
export type LanguageName = string;

/**
 * `KELYSTY`: This is a a type that represents language code
 * throughout the application; For example 'en' for english
 * or 'es' for spanish;
 */
export type LanguageCode = string;

/**
 * `KELYSTY`: This is a structure that represents one language:
 * - `name` - name of the language (ex 'spanish')
 * - `code` - code of the language (ex 'es')
 */
export interface Language {
  name: LanguageName;
  code: LanguageCode;
}
