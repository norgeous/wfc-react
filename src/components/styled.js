export const GridContainer = styled.pre`
  margin: 0;
`;

export const Row = styled.div`
  display: flex;
`;

export const Item = styled.div`
  font-size: 146px;
  line-height: normal;
  font-family: monospace;
  position: relative;
  cursor: pointer;
  width: 80px;
  height: 171px;
  :hover {
    background: #222;
  }
`;

export const Status = styled.div`
  position: absolute;
  font-size: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #0ffa;
  text-align: center;
`;

export const Domain = styled.div`
  font-size: 30px;
  color: black;
`;

export const Top = styled.div`
  position: absolute;
  font-size: 20px;
  color: #f0f4;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Right = styled.div`
  position: absolute;
  font-size: 20px;
  color: #f0f4;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const Bottom = styled.div`
  position: absolute;
  font-size: 20px;
  color: #f0f4;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Left = styled.div`
  position: absolute;
  font-size: 20px;
  color: #f0f4;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
