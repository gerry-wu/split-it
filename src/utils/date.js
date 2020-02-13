export const ISOtoLongDate = (isoString, locale) => {
  if (!locale) locale = window.navigator.language
  const options = { month: 'long', day: 'numeric', year: 'numeric' }
  const date = new Date(isoString)
  return new Intl.DateTimeFormat(locale, options).format(date)
}

export const dateToShortDate = (date, locale) => {
  if (!locale) locale = window.navigator.language
  const options = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat(locale, options).format(date)
}
