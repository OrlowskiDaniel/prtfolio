

function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}


var xValues = ["HTML", "CSS", "JavaScript", "Java","C#" ];
var yValues = [25, 25, 25, 20, 5 ];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9"
];


new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "My programming languages pie chart in %"
    }
  }
});



