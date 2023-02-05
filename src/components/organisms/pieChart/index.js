import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {
  PieChartContainer,
  PieChartBody,
  PieChartLegend,
  PieChartSticker,
  PieChartGraph,
} from "./style";
import Row from "../../atoms/row";
import Text from "../../atoms/text";
import StickerBox from "../../molecules/stickerBox";

const PieChart = ({ options, data }) => {
  return (
    <PieChartContainer>
      <PieChartBody>
        <PieChartSticker>
          <Text label="Total Songs Played" color="textSecondary" size="md" />
          <Text label="496" color="textPrimary" size="xl" />
        </PieChartSticker>

        <PieChartGraph>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            data={data}
          />
        </PieChartGraph>
      </PieChartBody>
      <PieChartLegend>
        <Row direction="row" justify="center" align="center">
          {data.map((item, index) => (
            <StickerBox
              key={index}
              label={item.name}
              image={item.image}
              value={item.y}
              color={item.color}
            />
          ))}
        </Row>
      </PieChartLegend>
    </PieChartContainer>
  );
};

export default PieChart;
