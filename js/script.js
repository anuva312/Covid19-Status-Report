(function (global){
  document.addEventListener("DOMContentLoaded",
    function (event) {
        $ajaxUtils.sendGetRequest("https://api.covid19api.com/summary", 
            function (request) {
                var summary = JSON.parse(request.responseText);
                var country_data = summary["Countries"];
                // var row_no=1;
                var table = document.querySelector("#all_countries_table");
                if(table){
                    country_data.forEach(function (each_country){
                     // console.log(each_country["Country"])
                     var new_row=table.insertRow(-1);
                     new_row.insertCell(0).innerHTML=each_country["Country"];
                     new_row.insertCell(1).innerHTML=each_country["NewConfirmed"];
                     new_row.insertCell(2).innerHTML=each_country["TotalConfirmed"];
                     new_row.insertCell(3).innerHTML=each_country["NewDeaths"];
                     new_row.insertCell(4).innerHTML=each_country["TotalDeaths"];
                     new_row.insertCell(5).innerHTML=each_country["NewRecovered"];
                     new_row.insertCell(6).innerHTML=each_country["TotalRecovered"];
                     new_row.insertCell(7).innerHTML=each_country["Date"];

                })}else{
                    table=document.querySelector("#daily_data_table");
                    var global_count = summary["Global"];
                    var country_details;
                    country_data.forEach(function (each_country){
                        if(each_country["Country"]===localStorage.getItem("countryName")){
                            country_details=each_country;
                            // break;
                        };
                    });
                    var new_row=table.insertRow(-1);
                    var date=country_details["Date"];
                    new_row.insertCell(0).innerHTML="Global";
                    new_row.insertCell(1).innerHTML=global_count["NewConfirmed"];
                    new_row.insertCell(2).innerHTML=global_count["NewRecovered"];
                    new_row.insertCell(3).innerHTML=global_count["NewDeaths"];
                    new_row.insertCell(4).innerHTML=date;
                    var new_row=table.insertRow(-1);
                    new_row.insertCell(0).innerHTML=country_details["Country"];
                    new_row.insertCell(1).innerHTML=country_details["NewConfirmed"];
                    new_row.insertCell(2).innerHTML=country_details["NewRecovered"];
                    new_row.insertCell(3).innerHTML=country_details["NewDeaths"];
                    new_row.insertCell(4).innerHTML=date;
                };
                });
            });
}(window));