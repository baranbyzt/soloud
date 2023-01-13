import styled from "styled-components";

const PieChartContainer = styled.div``;

const PieChartBody = styled.div`
  height: 600px;
  position: relative;
`;

const PieChartSticker = styled.div`
  position: absolute;
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PieChartGraph = styled.div`
  position: absolute;
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PieChartLegend = styled.div``;

export {
  PieChartContainer,
  PieChartBody,
  PieChartLegend,
  PieChartSticker,
  PieChartGraph,
};
