const highchartsOptions = {
  title: {
    text: 'Hash Rate'
  },
  tooltip: {
    shared: true,
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      day: "%e. %b",
      month: "%b '%y",
      year: "%Y"
    }
  },
  yAxis: [{
    type: 'logarithmic',
    height: "70%",
    labels: {
      formatter: function() {
         return "$ " + this.value;
      }
    },
  }, {
    top: '75%',
    height: '25%',
    offset: 0,
  }],
  series: []
};

function getHighchartsOptions(title, series) {
  const options = {...highchartsOptions};
  options.series = series;
  options.title = {
    text: title
  };

  return options
}

export default getHighchartsOptions;
