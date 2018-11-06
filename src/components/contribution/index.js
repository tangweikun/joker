import React, { PureComponent } from 'react'
import { InfoCard, CardGroup } from 'building-block'
import { Card } from 'components/card'

export class Contribution extends PureComponent {
  render() {
    return (
      <Card title="活跃度" icon="award">
        <CardGroup>
          <InfoCard subText="历史总提交数" withTips tipsText="TODO:">
            TODO:
          </InfoCard>
          <InfoCard subText="提交数目最多的一天" withTips tipsText="TODO:">
            TODO:
          </InfoCard>
        </CardGroup>

        <CardGroup>
          <InfoCard subText="最长连击天数" withTips tipsText="TODO:">
            TODO:
          </InfoCard>
          <InfoCard subText="当前连击天数" withTips tipsText="TODO:">
            TODO:
          </InfoCard>
          <InfoCard subText="平均每天提交次数" withTips tipsText="TODO:">
            TODO:
          </InfoCard>
        </CardGroup>
      </Card>
    )
  }
}
