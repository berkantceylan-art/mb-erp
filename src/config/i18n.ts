export type SupportedLocale = 'tr' | 'en' | 'fr' | 'de';
export type SupportedCurrency = 'TRY' | 'EUR' | 'USD';

export const SUPPORTED_LOCALES: { code: SupportedLocale; name: string; nativeName: string; flag: string }[] = [
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
];

export const SUPPORTED_CURRENCIES: { code: SupportedCurrency; symbol: string; name: string }[] = [
  { code: 'TRY', symbol: '₺', name: 'Türk Lirası' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
];

export const DEFAULT_LOCALE: SupportedLocale = 'tr';
export const DEFAULT_CURRENCY: SupportedCurrency = 'TRY';
