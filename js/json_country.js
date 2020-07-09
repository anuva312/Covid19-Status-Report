// Event handling
(function (global){
  document.addEventListener("DOMContentLoaded",
  function (event) {
    var summary;
    var country_list=[];
    //To get data pertaining to a specific country 
    function getCountryData(country_name){
      var country_data = summary["Countries"];
      country_data.forEach(function (each_country){
        if (each_country.Country === country_name){
          localStorage.setItem("countryName",each_country["Country"]);
          localStorage.setItem("countrySlug",each_country["Slug"]);
          document.querySelector("#country_field_head")
            .innerHTML = ("Country<br>" +country_name);
          document.querySelector("#country_confirmed")
            .innerHTML = ("Total Confirmed: " +each_country["TotalConfirmed"]);
          document.querySelector("#country_deaths")
            .innerHTML = ("Total Deaths: " +each_country["TotalDeaths"]);
          document.querySelector("#country_recovered")
            .innerHTML = ("Total Recovered: " +each_country["TotalRecovered"]);
          document.querySelector("#country_new_confirmed")
            .innerHTML = ("Today's Confirmed: " +each_country["NewConfirmed"]);
          document.querySelector("#country_new_deaths")
            .innerHTML = ("Today's Deaths: " +each_country["NewDeaths"]);
          document.querySelector("#country_new_recovered")
            .innerHTML = ("Today's Recovered: " +each_country["NewRecovered"]);
        } 
      })
    };

    //getting country list to display autocomplete
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
      var global_count = summary["Global"];
      document.querySelector("#global_confirmed")
        .innerHTML = ("Total Confirmed: " +global_count["TotalConfirmed"]);
      document.querySelector("#global_deaths")
        .innerHTML = ("Total Deaths: " +global_count["TotalDeaths"]);
      document.querySelector("#global_recovered")
        .innerHTML = ("Total Recovered: " +global_count["TotalRecovered"]);
      document.querySelector("#global_new_confirmed")
        .innerHTML = ("Today's Confirmed: " +global_count["NewConfirmed"]);
      document.querySelector("#global_new_deaths")
        .innerHTML = ("Today's Deaths: " +global_count["NewDeaths"]);
      document.querySelector("#global_new_recovered")
        .innerHTML = ("Today's Recovered: " +global_count["NewRecovered"]);
      getCountryData("United Kingdom");
      document.querySelector("button").addEventListener("click",
      function () {
        var country_name = document.getElementById("country_field").value;
        document.getElementById("country_field").value=null;
        getCountryData(country_name);     
      });
    });
    global.summary=summary;
    global.country_list=country_list;
  });
})(window);




