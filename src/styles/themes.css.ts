import { createGlobalTheme, } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  zIndex: {
    bottom: '1',
    middle: '2',
    high: '3',
    top: '4',
  },
  // spacing: {
  //   none: '0',
  //   xxs: '1rem',
  //   xs: '1.2rem',
  //   s: '1.4rem',
  //   m: '1.6rem',
  //   xxl: '2rem',
  //   xl: '2.2rem',
  //   l: '2.4rem',
  //   ll: '2.6rem',
  // },
  color: {
    background: 'background',
    foreground: 'foreground',
    purple: '#6659ff',
    purple2: '#a39cff',
    purple3: '#e0deff',
    mint: '#35bcb3',
    yellow: '#d2f35c',
    red: '#ff005c',
    blue: '#3b73fa',
    orange: '#ff5722',
    white: '#ffffff',
    wg: '#f9fafb',
    wg2: '#d7d7d7',
    lg1: '#f3f4f6',
    lg2: '#e7eaf2',
    mg1: '#b6b6b6',
    mg2: '#9ba1b4',
    mg3: '#a2a7b0',
    mg4: '#797979',
    mg5: '#222734',
    mg6: '#161c24',
    dg: '#2a2a2a',
    bg: '#101217',
    black: '#000000',
    transparent_purple2_50: 'rgba(163, 156, 255, 0.50)',
    transparent_black_50: 'rgba(14, 16, 20, 0.90)',
    gradi_card: 'linear-gradient(271deg, rgba(14, 16, 20, 0.90) -12.2%, rgba(33, 37, 46, 0.00) 99.36%)',
    gradi_BG: 'radial-gradient(96.85% 96.85% at 50% 3.15%, rgba(163, 156, 255, 0.80) 0%, rgba(16, 18, 23, 0.00) 100%)',
  },
  font: {
    'head1-b-20': {
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '28px',
      letterSpacing: '-0.2px',
    },
    'head1-sb-20': {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '28px',
      letterSpacing: '-0.3px',
    },
    'head1-m-20': {
      fontSize: '20px',
      fontWeight: '500',
      lineHeight: '28px',
      letterSpacing: '-0.2px',
    },
    'head2-b-18': {
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '26px',
      letterSpacing: '-0.1px',
    },
    'head2-sb-18': {
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '26px',
      letterSpacing: '-0.1px',
    },
    'head2-m-18': {
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '26px',
      letterSpacing: '-0.1px',
    },
    'body1-r-16': {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '24px',
      letterSpacing: '-0.2px',
    },
    'body1-m-16': {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      letterSpacing: '-0.2px',
    },
    'body2-r-14': {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '22px',
      letterSpacing: '-0.2px',
    },
    'body2-m-14': {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '22px',
      letterSpacing: '-0.2px',
    },
    'caption-r-12': {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '18px',
      letterSpacing: '-0.1px',
    },
    'caption-m-12': {
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '18px',
      letterSpacing: '-0.1px',
    },
  },
});
