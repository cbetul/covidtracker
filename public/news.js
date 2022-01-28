$(document).ready(function(){  
  $('#death-table').DataTable({ 
    "dom": '<"top"i>rt<"bottom"flp><"clear">',
    "pagingType": "numbers",
    "info": false,
    "lengthChange": false,
    "order": [[ 1, "desc" ]],
    
    responsive: true,

     ajax     :     { 
         url: "https://api.collectapi.com/corona/countriesData",
         method: "GET",
         timeout: 0,
         headers: {
             "authorization": "apikey 7bODOwjCyzOItazGw5OCA9:0tALthWMEEyocyrIGlXToq",
             "content-type": "application/json"},
             "dataSrc": "result"
         
         },
       "columns"     :     [  
       {     "data"     :     "country"     },  
        {     "data"     :     "totalDeaths"     },
       ]  
  
      }); 
  
});