import ReactApexChart from 'react-apexcharts';
import { useAppSelector } from '../../hooks';
import { selectModifyCollection } from '../../store/selectors';
import { formatPrice } from '../../utils';

export const Chart = () => {
  const { collections } = useAppSelector((state) => state.collection);
  const { stats, price } = useAppSelector((state) => state.data);
  const { showIcp, mode } = useAppSelector((state) => state.common);
  const { totalCollectionsPrice } = useAppSelector(selectModifyCollection);

  const modStats = stats.map((stat) => {
    const filterCanistersByCollection = stat.data
      .filter((item) => {
        return collections.some((c) => c.canisterId === item.canisterId);
      })
      .map((item) => {
        const find = collections.find((c) => item.canisterId === c.canisterId);

        if (find?.tokens.length) {
          return find.tokens.length * item.price;
        }

        return 0;
      })
      .reduce((a, b) => a + b, 0);

    return { time: new Date(stat.time), price: filterCanistersByCollection };
  });

  modStats.unshift({ time: new Date(), price: totalCollectionsPrice.actual });

  const series = [
    {
      name: `Total ${showIcp ? 'ICP' : 'USD'} value`,
      data: modStats.map((item) => item.price),
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
      categories: modStats.map((item) => item.time.getTime()),
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
