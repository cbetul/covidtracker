$(document).ready(function(){
    $('#data-table').DataTable({  
        responsive: true,
        "scrollX": true,
        "pagingType": "numbers",
        "lengthChange": false,
        "order": [[ 1, "desc" ]],

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
          {     "data"     :     "totalCases"},  
          {     "data"     :     "newCases"},
          {     "data"     :     "totalDeaths"     },  
          {     "data"     :     "newDeaths"},  
          {     "data"     :     "totalRecovered"},
          {     "data"     :     "activeCases"},
         ]  
         
    }); 
    
});

document.getElementById("continental-data").addEventListener("click", continentFunc);
function continentFunc(){
    $('#data-table').DataTable().clear().destroy();
    $(document).ready(function(){  
    
        $('#data-table').DataTable({ 
            responsive: true,
            "scrollX": true,
            "info" : false,
            "paging": false,
            "lengthChange": false,
            "searching": false,
            "order": [[ 1, "desc" ]],

        ajax     :     { 
            url: "https://api.collectapi.com/corona/continentData",
            method: "GET",
            timeout: 0,
            headers: {
                "authorization": "apikey 7bODOwjCyzOItazGw5OCA9:0tALthWMEEyocyrIGlXToq",
                "content-type": "application/json"},
                "dataSrc": "result"
            
            },
            "columns"     :     [  
            {     "data"     :     "continent"     },  
            {     "data"     :     "totalCases"},  
            {     "data"     :     "newCases"},
            {     "data"     :     "totalDeaths"     },  
            {     "data"     :     "newDeaths"},  
            {     "data"     :     "totalRecovered"},
            {     "data"     :     "activeCases"},
            ]  
       
        }); 
    
    });    
}

document.getElementById("whole-world").addEventListener("click", allDataFunc);
function allDataFunc(){
    $('#data-table').DataTable().clear().destroy();
    $(document).ready(function(){  
        
        $('#data-table').DataTable({ 
            responsive: true,
            "scrollX": true,
            "pagingType": "numbers",
            "lengthChange": false,
            "order": [[ 1, "desc" ]],
    
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
              {     "data"     :     "totalCases"},  
              {     "data"     :     "newCases"},
              {     "data"     :     "totalDeaths"     },  
              {     "data"     :     "newDeaths"},  
              {     "data"     :     "totalRecovered"},
              {     "data"     :     "activeCases"},
             ]  
        }); 
    
    });
     
}

