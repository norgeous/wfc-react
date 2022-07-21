export const GridContainer = window.styled.pre`
  margin: 0;
  font-size: 146px;
  font-family: monospace;
`;

export const Row = window.styled.div`
  display: flex;
`;

export const Item = window.styled.div`
  font-size: 146px;
  font-family: monospace;
  position: relative;
  cursor: pointer;
  width: 80px;
  height: 171px;
  :hover {
    background: silver;
  }
`;

export const Status = window.styled.div`
  position: absolute;
  font-size: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: aqua;
  text-align: center;
`;

export const Domain = window.styled.div`
  font-size: 30px;
  color: aqua;
`;

export const Top = window.styled.div`
  position: absolute;
  font-size: 20px;
  color: magenta;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Right = window.styled.div`
  position: absolute;
  font-size: 20px;
  color: magenta;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const Bottom = window.styled.div`
  position: absolute;
  font-size: 20px;
  color: magenta;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Left = window.styled.div`
  position: absolute;
  font-size: 20px;
  color: magenta;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
