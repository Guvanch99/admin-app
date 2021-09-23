export const grid = ({justify, align}) => `
display:grid;
justify-content:${justify || "normal"};
align-items:${align || "normal"};
`;