import { JetBrains_Mono, Kanit, Roboto_Condensed } from 'next/font/google';

const fontSans = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const fontHeading = Kanit({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '700'],
});

export const fonts = [
  fontSans.variable,
  fontMono.variable,
  fontHeading.variable,
];
