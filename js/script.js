  document.addEventListener("DOMContentLoaded",
    function (event) {
        $ajaxUtils.sendGetRequest("https://api.covid19api.com/summary", 
            function (request) {
                var summary = JSON.parse(request.responseText);
                var country_data = summary["Countries"];
                var date=country_data[0].Date;
                var table = document.querySelector("#all_countries_table");

                var showLoading = function (selector) {
                  var html = "<center><img src='img/ajax-loader-bigger.gif'></center>";
                  var targetElem = document.querySelector(selector);
                  targetElem.innerHTML = html;
                };

                if(table){
                    country_data.forEach(function (each_country){
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
                    get_daily_country=function(){
                        showLoading("#daily_data_table");
                        document.querySelector("#table-heading").innerHTML=localStorage.getItem("countryName");
                        var country_name=localStorage.getItem("countrySlug");
                        var daily_data_url="https://api.covid19api.com/dayone/country/"+country_name;
                        $ajaxUtils.sendGetRequest(daily_data_url, 
                        function (request) {
                            var country_details=JSON.parse(request.responseText);
                            table.innerHTML="<tr><th>Date</th><th>Confirmed Cases</th><th>Recovered Cases</th><th>Death</th></tr>";
                            country_details.forEach(function (each_day){ 
                                var new_row=table.insertRow(-1);
                                new_row.insertCell(0).innerHTML=each_day["Date"];
                                new_row.insertCell(1).innerHTML=each_day["Confirmed"];
                                new_row.insertCell(2).innerHTML=each_day["Recovered"];
                                new_row.insertCell(3).innerHTML=each_day["Deaths"];
                            });
                        });
                    };
                    get_daily_country();
                };
               
            });
    })