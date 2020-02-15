const currencyFormat = (value, countryCode = 'pt-BR', currencyCode = 'BRL') =>
  new Intl.NumberFormat(countryCode, { style: 'currency', currency: currencyCode }).format(value);

export default currencyFormat;
