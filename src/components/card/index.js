import React, { PureComponent } from 'react'
import styles from './index.module.css'

export class Card extends PureComponent {
  render() {
    return <div className={styles['card']}>{this.props.children}</div>
  }
}
