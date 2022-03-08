import ReactApexChart from 'react-apexcharts';
import { useAppSelector } from '../../hooks';
import { selectChartData, selectModifyCollection } from '../../store/selectors';
import { formatPrice } from '../../utils';

export const Chart = () => {
  const { price } = useAppSelector((state) => state.data);
  const { showIcp, mode } = useAppSelector((state) => state.common);
  const { totalCollectionsPrice } = useAppSelector(selectModifyCollection);
  const chartData = useAppSelector((state) => selectChartData(state, totalCollectionsPrice.actual));

  const series = [
    {
      name: `Total ${showIcp ? 'ICP' : 'USD'} value`,
      data: chartData.map((item) => item.price),
    },
  ];

  const options: ApexCharts.ApexOptions = {
    theme: { mode: mode, monochrome: { enabled: true } },
    chart: {
      type: 'area',
      stacked: false,
      height: 200,
      width: 200,
      zoom: {
        type: 'x',
        enabled: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
      background: 'transparent',
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return showIcp ? formatPrice(val) : formatPrice(val * price);
        },
      },
      title: {
        text: `Total ${showIcp ? 'ICP' : 'USD'} value`,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: chartData.map((item) => item.time.getTime()),
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return showIcp ? formatPrice(val) : formatPrice(val * price);
        },
      },
    },
  };

  return <ReactApexChart series={series} options={options} height={200} />;
};
