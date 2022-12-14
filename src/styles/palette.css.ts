export const brand: Record<string, string> = {
  'primary-100': '#F5F0F9',
  'primary-200': '#DFD4ED',
  'primary-300': '#CEBEE7',
  'primary-400': '#9F82CC',
  'primary-500': '#8A66C1',
  'primary-600': '#7D48BD',
  'primary-700': '#5E2D90',
  'primary-800': '#431C6A',
  'primary-900': '#30124F',
  'secondary-100': '#FFEBF4',
  'secondary-200': '#FFB6D6',
  'secondary-300': '#F07BAF',
  'secondary-400': '#EE589F',
  'secondary-500': '#EC268F',
  'secondary-600': '#C5298F',
  'secondary-700': '#A2298F',
  'secondary-800': '#7E2070',
  'secondary-900': '#54134A',
  'tertiary-100': '#F7F6F9',
  'tertiary-200': '#F2F1F6',
  'tertiary-300': '#ECE9F2',
  'tertiary-400': '#DCD9E3',
  'tertiary-500': '#C7C3D0',
  'tertiary-600': '#A8A4B0',
  'tertiary-700': '#7C7A82',
  'tertiary-800': '#4A494E',
  'tertiary-900': '#2A272C',
};

export const gradients = {
  primary: 'linear-gradient(162.81deg, #5E2D90 0%, #A2298F 75.41%, #C5298F 100.78%)',
  secondary: 'gradient(162.81deg, #EC268F 0%, #C5298F 100.78%)',
};

export const semantics = {
  'info-100': '#EBF4FF',
  'info-200': '#D2E4FF',
  'info-300': '#A3BFFA',
  'info-400': '#7F9CF5',
  'info-500': '#667EEA',
  'info-600': '#5A67D8',
  'info-700': '#4C51BF',
  'info-800': '#434190',
  'info-900': '#3C366B',
  'error-100': '#FDEFEF',
  'error-200': '#FED7D7',
  'error-300': '#FEB2B2',
  'error-400': '#FC8181',
  'error-500': '#F56565',
  'error-600': '#E53E3E',
  'error-700': '#C53030',
  'error-800': '#9B2C2C',
  'error-900': '#742A2A',
  'success-100': '#E6F7EE',
  'success-200': '#CEECDB',
  'success-300': '#9CD4B4',
  'success-400': '#75C396',
  'success-500': '#4DB278',
  'success-600': '#38A169',
  'success-700': '#2F855A',
  'success-800': '#276749',
  'success-900': '#22543D',
  'warning-100': '#FCF6EB',
  'warning-200': '#FEEBC8',
  'warning-300': '#FBD38D',
  'warning-400': '#F6AD55',
  'warning-500': '#ED8936',
  'warning-600': '#DD6B20',
  'warning-700': '#C05621',
  'warning-800': '#9C4221',
  'warning-900': '#7B341E',
};

export const palette: Record<string, string> = {
  white: '#fff',
  black: '#000',
  transparent: 'transparent',
  ...gradients,
  ...brand,
  ...semantics,
};
