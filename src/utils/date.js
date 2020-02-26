// Util to handle date format

// Transfer ISO string into Long Date format
export const ISOtoLongDate = isoString => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' }
  const date = new Date(isoString)
  return formatDate(date, options)
}

// Transfer a date object into short date format
export const dateToShortDate = date => {
  const options = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  }
  return formatDate(date, options)
}

// Transfer date into specific format, local is optional with browser language as the default value
export const formatDate = (
  date,
  options,
  locale = window.navigator.language,
) => {
  return new Intl.DateTimeFormat(locale, options).format(date)
}
