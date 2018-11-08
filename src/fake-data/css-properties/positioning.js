export const POSITIONING = [
  {
    name: 'position',
    values: ['static', 'relative', 'absolute', 'fixed'],
    initialValue: 'static',
    appliesTo: 'all elements',
    inherited: false,
  },
  {
    name: 'z-index',
    values: ['auto', '<integer>'],
    initialValue: 'auto',
    appliesTo: 'positioned elements',
    inherited: false,
  },
  {
    name: 'top',
    values: ['<length>', '<percentage>', 'auto'],
    initialValue: 'auto',
    appliesTo: 'positioned elements',
    inherited: false,
  },
  {
    name: 'right',
    values: ['<length>', '<percentage>', 'auto'],
    initialValue: 'auto',
    appliesTo: 'positioned elements',
    inherited: false,
  },
  {
    name: 'bottom',
    values: ['<length>', '<percentage>', 'auto'],
    initialValue: 'auto',
    appliesTo: 'positioned elements',
    inherited: false,
  },
  {
    name: 'left',
    values: ['<length>', '<percentage>', 'auto'],
    initialValue: 'auto',
    appliesTo: 'positioned elements',
    inherited: false,
  },
]
