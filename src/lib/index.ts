// Library utilities and helpers
// This file exports utility functions used throughout the application

export function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
