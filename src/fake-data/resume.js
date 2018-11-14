import moment from 'moment'

export const RESUME_BASIC_INFO = {
  name: '汤伟坤',
  age: moment().diff(moment('1993-01-21'), 'year'),
  workYears: moment().diff(moment('2015-06'), 'year'),
  description:
    '三年React/Redux开发经验，具备扎实的Javascript基本功底和良好的代码风格',
  mobile: '18210112205',
  email: '819573105@qq.com',
}

export const RESUME_EDUCATION = {
  duration: '2012.09 - 2016.07',
  school: '河北工业大学',
  major: '信息管理与信息系统',
}

export const RESUME_WORK_EXPERIENCE = [
  {
    duration: '2017.11 - 至今',
    company: '北京邦赢彩服科技有限公司',
    position: '前端工程师',
    duties: [
      '负责【章鱼彩票】内嵌H5页面的开发与维护工作 [React+Redux]',
      '负责【https://mobile.8win.com】的开发与维护工作，重构并扩展了竞彩足球多串玩法 [React+Redux]',
    ],
  },
  {
    duration: '2015.06 - 2017.11',
    company: 'iHealth',
    position: 'JS全栈工程师',
    duties: [
      '负责【北大共同照护系统】的框架搭建和开发维护工作 [React+Redux+Meteor]',
      '负责【护血糖】APP的框架搭建和开发维护工作 [React Native+Redux]',
      '参与【爱健康】的开发与维护工作 [React+Redux+Meteor]',
    ],
  },
]
