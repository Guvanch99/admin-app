import React from 'react';

import Chart from './Chart';



export default {
    title: 'Chart',
    component: Chart

};
const Template = (args) => <Chart {...args} />;

export const ChartNormal = Template.bind({});

ChartNormal.args = {
    durum: 50,
    beverage: 40,
    combo: 80,
};
