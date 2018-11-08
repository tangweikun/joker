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
