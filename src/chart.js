import React from 'react';
import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts';

export default function MulticolororderedWithRightAlignedLegend() {
    return (<div style={{ height: '40%', width: '80%' }}>
        <ChartDonut
            ariaDesc="See today’s mortgage rates"
            ariaTitle="Donut chart example"
            constrainToVisibleArea={true}
            data={[{ x: 'Principal & Interest', y: 1781 }, { x: 'Property Taxes', y: 490 }, { x: 'Home insurance', y: 75 }, { x: 'HOA', y: 95 }, { x: 'Mortgage ins. & other', y: 0 }]}
            labels={({ datum }) => `${datum.x}: ${datum.y}%`}
            legendData={[{ name: 'Principal & Interest: $1,781' }, {name: 'Property Taxes: $490' }, {name: 'Home insurance: $75' }, {name: 'HOA: $95' }, {name: 'Mortgage ins. & other: $0' }]}
            legendOrientation="vertical"
            legendPosition="right"
            padding={{
                bottom: 20,
                left: 20,
                right: 140, 
                top: 20
            }}
            subTitle="/month"
            title="$2,441"
            themeColor={ChartThemeColor.multiOrdered}
            width={450}
        />
    </div>)
}
