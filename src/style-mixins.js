export const topLeft = (background) => `
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background: ${background};
  border-bottom-right-radius: 50%;
`;
export const topRight = (background) => `
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background: ${background};
  border-bottom-left-radius: 50%;
`;
export const bottomRight = (background) => `
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background: ${background};
  border-top-left-radius: 50%;
`;
export const bottomLeft = (background) => `
  bottom: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background: ${background};
  border-top-right-radius: 50%;
`;

export const topHalf = (background) => `
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  background: ${background};
`;
export const rightHalf = (background) => `
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  background: ${background};
`;
export const bottomHalf = (background) => `
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
  background: ${background};
`;
export const leftHalf = (background) => `
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${background};
`;
