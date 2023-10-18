import "./Assets/Css/Charts.css"

export const data = [
  { month: 'Jan', value: 10 },
  { month: 'Feb', value: 20 },
  { month: 'Mar', value: 30 },
  { month: 'Apr', value: 25 },
  { month: 'May', value: 40 },
  { month: 'Jun', value: 35 },
  { month: 'Jul', value: 10 },
  { month: 'Aug', value: 20 },
  { month: 'Sep', value: 30 },
  { month: 'Oct', value: 25 },
  { month: 'Nov', value: 40 },
  { month: 'Dec', value: 35 },
];
export const pdata = [
  { name: 'Category A', value: 40},
  { name: 'Category B', value: 30},
  { name: 'Category C', value: 20},

  ];
  
export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const calculateInnerRadius = (index, total) => {
  const innerRadiusPercent = (index / total) * 50;
  return `${innerRadiusPercent}%`;
};



