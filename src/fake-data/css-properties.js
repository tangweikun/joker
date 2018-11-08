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

export const LAYOUT = [
  {
    name: 'display',
    values: ['inline', 'inline-block', 'block', 'flex', 'inline-flex', 'none'],
    initialValue: 'inline',
    appliesTo: 'all elements',
    inherited: false,
  },
  {
    name: 'float',
    values: ['left', 'right', 'none'],
    initialValue: 'none',
    appliesTo:
      'all elements, but has no effect if the value of display is none.',
    inherited: false,
  },
  {
    name: 'clear',
    values: ['none', 'left', 'right', 'both'],
    initialValue: 'none',
    appliesTo: 'block-level elements',
    inherited: false,
  },
  {
    name: 'visibility',
    values: ['visible', 'hidden', 'collapse'],
    initialValue: 'visible',
    appliesTo: 'all elements',
    inherited: true,
  },
  {
    name: 'overflow',
    values: ['visible', 'hidden', 'auto', 'scroll'],
    initialValue: 'visible',
    appliesTo: 'Block-containers, flex containers, and grid containers',
    inherited: false,
  },
]
