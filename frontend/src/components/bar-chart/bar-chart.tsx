import Chart from 'react-apexcharts'

export const BarChart = () => {
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  }

  const mockData = {
    labels: {
      categories: ['Albertina', 'Lucas', 'Neneth', 'Logan', 'Padmé']
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.6, 67.1, 67.7, 45.6, 71.1]
      }
    ]
  }

  return (
    <Chart
      options={{ ...options, xaxis: mockData.labels }}
      series={mockData.series}
      type="bar"
      height="240"
    />
  );
}
