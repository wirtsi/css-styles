import classNames from 'classnames';
import { STYLEGUIDE_VERSION } from '../config/styleguide';

type ClassValue = Parameters<typeof classNames>[0];

export function prefixClassName(cssClass: string): string {
  return `${STYLEGUIDE_VERSION}-${cssClass}`;
}

/**
 * A wrapper around the `classnames` package that will also prefix all generated classes with the styleguide prefix.
 *
 * @param classes Pass anything that works with the original `classnames` package. Strings, objects, arrays, ...
 * @returns The fully rendered class string as returned by `classnames`, with all classes prefixed
 */
export function prefixedClassNames(
  ...classes: Parameters<typeof classNames>
): string {
  return classNames(classes).split(' ').map(prefixClassName).join(' ');
}

/**
 *
 * @param classes An object with two keys, `prefix` and `plain` whose values
 * are valid arguments for `classnames`. The classes from `prefix` will be
 * prefixed with the styleguide version while the classes from `plain` will be
 * left alone.
 * @returns The fully rendered class string as returned by `classnames`, with the `prefix` ones prefixed.
 */
export function combineClassNames(classes: {
  prefix?: ClassValue;
  plain?: ClassValue;
}): string {
  return `${prefixedClassNames(classes.prefix)} ${classNames(classes.plain)}`;
}
