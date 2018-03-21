<template lang="html">
  <div style="height:100%;width:100%" ref  = 'chart' >
  </div>
</template>

<script>
import installTheme from "../../theme";

installTheme({}, echarts);

export default {
  name: "page-test",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const myChart = echarts.init(this.$refs.chart, "darkk"),
      _this = this;

    init(myChart);

    _this.$store.commit("charts/push", myChart);

  
  }
};

function init(myChart) {
  const option = {
    title: {
      text: "2017年各路段事件类型事件数占比",
      subtext: "",
      left: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      // orient: 'vertical',
      // top: 'middle',
      bottom: 10,
      left: "center",
      data: ["麻武路段", "武英路段", "黄黄路段"]
    },
    series: [
      {
        type: "pie",
        radius: "65%",
        center: ["50%", "50%"],
        selectedMode: "single",
        data: [
          {
            value: 165,
            name: "麻武路段",
            label: {
              normal: {
                formatter: [
                  "{title|{b}}{abg|}",
                  "  {weatherHead|事件类型}{valueHead|件数}{rateHead|占比}",
                  "{hr|}",
                  "  交通事故{value|75}{rate|45.5%}",
                  "  隧道事故{value|25}{rate|15.2%}",
                  "  恶劣天气{value|50}{rate|30.3%}",
                  "  其它事故{value|15}{rate|9.09%}"
                ].join("\n"),
                backgroundColor: "#eee",
                borderColor: "#777",
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  title: {
                    color: "#eee",
                    align: "center"
                  },
                  abg: {
                    backgroundColor: "#333",
                    width: "100%",
                    align: "right",
                    height: 25,
                    borderRadius: [4, 4, 0, 0]
                  },
                  weatherHead: {
                    color: "#333",
                    height: 24,
                    align: "left"
                  },
                  hr: {
                    borderColor: "#777",
                    width: "100%",
                    borderWidth: 0.5,
                    height: 0
                  },
                  value: {
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: "left"
                  },
                  valueHead: {
                    color: "#333",
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: "center"
                  },
                  rate: {
                    width: 40,
                    align: "right",
                    padding: [0, 10, 0, 0]
                  },
                  rateHead: {
                    color: "#333",
                    width: 40,
                    align: "center",
                    padding: [0, 10, 0, 0]
                  }
                }
              }
            }
          },
          {
            value: 120,
            name: "武英路段",
            label: {
              normal: {
                formatter: [
                  "{title|{b}}{abg|}",
                  "  {weatherHead|事件类型}{valueHead|件数}{rateHead|占比}",
                  "{hr|}",
                  "  交通事故{value|45}{rate|37.5%}",
                  "  隧道事故{value|22}{rate|18.3%}",
                  "  恶劣天气{value|35}{rate|29.2%}",
                  "  其它事故{value|18}{rate|15%}"
                ].join("\n"),
                backgroundColor: "#eee",
                borderColor: "#777",
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  title: {
                    color: "#eee",
                    align: "center"
                  },
                  abg: {
                    backgroundColor: "#333",
                    width: "100%",
                    align: "right",
                    height: 25,
                    borderRadius: [4, 4, 0, 0]
                  },
                  weatherHead: {
                    color: "#333",
                    height: 24,
                    align: "left"
                  },
                  hr: {
                    borderColor: "#777",
                    width: "100%",
                    borderWidth: 0.5,
                    height: 0
                  },
                  value: {
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: "left"
                  },
                  valueHead: {
                    color: "#333",
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: "center"
                  },
                  rate: {
                    width: 40,
                    align: "right",
                    padding: [0, 10, 0, 0]
                  },
                  rateHead: {
                    color: "#333",
                    width: 40,
                    align: "center",
                    padding: [0, 10, 0, 0]
                  }
                }
              }
            }
          },
          {
            value: 153,
            name: "黄黄路段",
            label: {
              normal: {
                formatter: [
                  "{title|{b}}{abg|}",
                  "  {weatherHead|事件类型}{valueHead|件数}{rateHead|占比}",
                  "{hr|}",
                  "  交通事故{value|65}{rate|42.5%}",
                  "  隧道事故{value|8}{rate|5.2%}",
                  "  恶劣天气{value|45}{rate|29.4%}",
                  "  其它事故{value|35}{rate|22.9%}"
                ].join("\n"),
                backgroundColor: "#eee",
                borderColor: "#777",
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  title: {
                    color: "#eee",
                    align: "center"
                  },
                  abg: {
                    backgroundColor: "#333",
                    width: "100%",
                    align: "right",
                    height: 25,
                    borderRadius: [4, 4, 0, 0]
                  },
                  weatherHead: {
                    color: "#333",
                    height: 24,
                    align: "left"
                  },
                  hr: {
                    borderColor: "#777",
                    width: "100%",
                    borderWidth: 0.5,
                    height: 0
                  },
                  value: {
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: "left"
                  },
                  valueHead: {
                    color: "#333",
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: "center"
                  },
                  rate: {
                    width: 40,
                    align: "right",
                    padding: [0, 10, 0, 0]
                  },
                  rateHead: {
                    color: "#333",
                    width: 40,
                    align: "center",
                    padding: [0, 10, 0, 0]
                  }
                }
              }
            }
          }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  myChart.setOption(option);
}
</script>

