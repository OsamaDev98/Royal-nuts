import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  // 'as-needed' means the default locale (ar) has no prefix → visiting / renders Arabic
  localePrefix: 'as-needed'
});

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
