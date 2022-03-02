window.onload = function () {
    // Global selector
    let url = "https://api.rootnet.in/covid19-in/stats/latest";
    let url2 = "https://api.rootnet.in/covid19-in/stats/testing/latest";
    let url3 = "https://api.rootnet.in/covid19-in/stats/history";
    let url4 = "https://api.rootnet.in/covid19-in/stats/testing/history";
    let update = document.querySelector(".update");
    let confirmedNo = document.querySelector(".confirmed-no");
    let RecoveredNo = document.querySelector(".Recovered-no");
    let DeceasedNo = document.querySelector(".Deceased-no");
    let TestedNo = document.querySelector(".Tested-no");
    let table1 = document.querySelector(".my-table");

    // asynchronous function to fetch the data from api
    async function getData() {
      // const response = await fetch("corona.json");
      const response = await fetch(url);
      const data1 = await response.json();
  
      // const response1 = await fetch("test.json");
      const response1 = await fetch(url2);
      const data2 = await response1.json();
  
      // const response2 = await fetch("daily.json");
      const response2 = await fetch(url3);
      const data3 = await response2.json();
  
      // const response3 = await fetch("dailytesting.json");
      const response3 = await fetch(url4);
      const data4 = await response3.json();
  
      let update1 = data1.lastRefreshed;
      // Adding all data on site
      let newUpdate = update1.replace("T", " at ").slice(0, 19);
      update.innerHTML = newUpdate;
  
      confirmedNo.innerHTML = data1.data.summary.total;
      RecoveredNo.innerHTML = data1.data.summary.discharged;
      DeceasedNo.innerHTML = data1.data.summary.deaths;
      TestedNo.innerHTML = data2.data.totalSamplesTested;
  
      let regional = data1.data.regional;
      // Adding total confirmed,recovered and deaths data on table
      for (var i = 0; i < regional.length; i++) {
        var row = `
          <tr>
          <td>${regional[i].loc}</td>
          <td>${regional[i].totalConfirmed}</td>
          <td>${regional[i].discharged}</td>
          <td>${regional[i].deaths}</td>
          </tr>
          `;
        table1.innerHTML += row;
      }
    }
  
    getData();
  };