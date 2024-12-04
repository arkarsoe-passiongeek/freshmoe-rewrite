import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export type LanguageCodes = 'en' | 'mm' | 'th' | 'ar' | 'cn';

const languageOptions: { [key in LanguageCodes]: string } = {
  en: 'English',
  mm: 'မြန်မာ',
  th: 'ภาษาไทย',
  ar: 'العربية',
  cn: '中文',
};

export const getLanguageName = (code: LanguageCodes) => {
  return languageOptions[code];  // TypeScript now knows that 'code' is a valid key of 'languageMap'
}