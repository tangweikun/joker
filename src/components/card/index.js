import React, { PureComponent } from 'react'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Card extends PureComponent {
  render() {
    return (
      <div className={styles['wrapper']}>
        <CardHeader title={this.props.title} icon={this.props.icon} />
        <div className={styles['card']}>{this.props.children}</div>
      </div>
    )
  }
}

const CardHeader = ({ title, icon }) => (
  <div className={styles['card-header']}>
    <FontAwesomeIcon icon={icon} />
    &nbsp;&nbsp;
    {title}
  </div>
)
