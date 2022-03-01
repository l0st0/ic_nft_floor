import ReactApexChart from 'react-apexcharts';
import { useAppSelector } from '../../hooks';
import { formatPrice, modifyCollections } from '../../utils';

export const Chart = () => {
  const { collections } = useAppSelector((state) => state.collection);
  const { stats } = useAppSelector((state) => state.stats);
  const { listings } = useAppSelector((state) => state.listing);
  const { price } = useAppSelector((state) => state.price);
  const { showIcp, mode } = useAppSelector((state) => state.common);

  const modStats = stats.map((item) => {
    const filter = item.data
      .filter((item) => {
        return collections.some((c) => c.canisterId === item.canisterId);
      })
      .map((item) => {
        const find = collections.find((c) => item.canisterId === c.canisterId);

        if (find?.tokens.length) {
          return find.tokens.length * item.price;
        }

        return 0;
      });

    const calculate = filter.reduce((a, b) => a + b, 0);

    return { time: new Date(item.time), price: calculate };
  });

  const { totalCollectionsPrice } = modifyCollections({ collections, stats, listings });

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
