// Event handling
(function (global){
  document.addEventListener("DOMContentLoaded",
  function (event) {
    var summary;
    var country_list=[];
    // var got_list = false;
    //To get data pertaining to a specific country 
    function getCountryData(country_name){
      var country_data = summary["Countries"]
              // console.log(country_name)
      country_data.forEach(function (each_country){
        // country_list.push(each_country.Country);
        if (each_country.Country === country_name){
          console.log(each_country);
          document.querySelector("#country_field_head")
            .innerHTML = ("Country: " +country_name);
          document.querySelector("#country_confirmed")
            .innerHTML = ("Confirmed: " +each_country["TotalConfirmed"]);
          document.querySelector("#country_deaths")
            .innerHTML = ("Deaths: " +each_country["TotalDeaths"]);
          document.querySelector("#country_recovered")
            .innerHTML = ("Recovered: " +each_country["TotalRecovered"]);
          // if(got_list===true){
          //   break;
          // }
        } 
      })
    };

    function getCountryList(){
      summary['Countries'].forEach(function (each_country){
        country_list.push(each_country.Country);
      });
    };

    //Accessing JSON file
    $ajaxUtils.sendGetRequest("https://api.covid19api.com/summary", 
    function (request) {
      summary = JSON.parse(request.responseText);
      getCountryList();
      var global_count = summary["Global"]
      document.querySelector("#global_confirmed")
        .innerHTML = ("Confirmed: " +global_count["TotalConfirmed"]);
      document.querySelector("#global_deaths")
        .innerHTML = ("Deaths: " +global_count["TotalDeaths"]);
      document.querySelector("#global_recovered")
        .innerHTML = ("Recovered: " +global_count["TotalRecovered"]);
      getCountryData("United States of America");
      document.querySelector("button").addEventListener("click",
      function () {
        var country_name = document.getElementById("country_field").value;
        getCountryData(country_name);     
      });
    });
    global.summary=summary;
    global.country_list=country_list;
  });
})(window);




