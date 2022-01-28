var settings = {
    "url": "https://api.collectapi.com/corona/totalData",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "authorization": "apikey 7bODOwjCyzOItazGw5OCA9:0tALthWMEEyocyrIGlXToq",
      "content-type": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {

    $("#death").append(response.result.totalDeaths);
    $("#case").append(response.result.totalCases );
    $("#recovered").append( response.result.totalRecovered);
   

      console.log(response);
  });

