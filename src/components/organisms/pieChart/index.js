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
import Grid from "../../atoms/grid";
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
        <Grid direction="row" center>
          {data.map((item) => (
            <StickerBox
              label={item.name}
              image={item.image}
              value={item.y}
              color={item.color}
            />
          ))}
        </Grid>
      </PieChartLegend>
    </PieChartContainer>
  );
};

export default PieChart;
