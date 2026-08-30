import { SupportedLocale } from '../config/i18n';
import trCommon from '../locales/tr/common.json';
import enCommon from '../locales/en/common.json';
import frCommon from '../locales/fr/common.json';
import deCommon from '../locales/de/common.json';

const dictionaries: Record<SupportedLocale, typeof trCommon> = {
  tr: trCommon,
  en: enCommon,
  fr: frCommon,
  de: deCommon,
};

export class I18nService {
  private static instance: I18nService;

  public static getInstance(): I18nService {
    if (!I18nService.instance) {
      I18nService.instance = new I18nService();
    }
    return I18nService.instance;
  }

  public t(path: string, locale: SupportedLocale = 'tr', fallback: string = ''): string {
    const dict = dictionaries[locale] || dictionaries['tr'];
    const keys = path.split('.');
    let current: any = dict;

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return fallback || path;
      }
    }

    return typeof current === 'string' ? current : fallback || path;
  }

  public getRoleName(roleCode: string, locale: SupportedLocale = 'tr'): string {
    return this.t(`roles.${roleCode}`, locale, roleCode);
  }

  public getDepartmentName(deptCode: string, locale: SupportedLocale = 'tr'): string {
    return this.t(`departments.${deptCode}`, locale, deptCode);
  }
}

export const i18n = I18nService.getInstance();
