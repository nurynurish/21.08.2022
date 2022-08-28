document.getElementById("btnCalculatePrice").addEventListener("click", calculatePrice);

function calculatePrice(){
    var from;
    var to;

    from = document.getElementById("from").value;
    to = document.getElementById("to").value;

    if(from == "berlin"){
       if(to == "berlin"){
        document.getElementById("result").innerHTML = "Berlin - Berlin " + " 0 = Euro(s)";
       }
       if(to == "frankfurt"){
        document.getElementById("result").innerHTML = "Berlin - Frankfurt" + " 100 = Euro(s)";
       }
       
       if(to == "oldenburg"){
        document.getElementById("result").innerHTML = "Berlin - Oldenburg" + " 150 = Euro(s)";
       }
    }

    /////////////////////Frankfurt-////////////////////////////////////////////////////////////

    if(from == "frankfurt"){
        if(to == "berlin"){
         document.getElementById("result").innerHTML = "Frankfurt - Berlin " + " 100 = Euro(s)";
        }
        if(to == "frankfurt"){
         document.getElementById("result").innerHTML = "Frankfurt - Frankfurt" + " 0 = Euro(s)";
        }
        
        if(to == "oldenburg"){
         document.getElementById("result").innerHTML = "Frankfurt - Oldenburg" + " 150 = Euro(s)";
        }
     }

     ////////////////Oldenburg-//////////////////////////////////////////////////////////////////7
    
     if(from == "oldenburg"){
        if(to == "berlin"){
         document.getElementById("result").innerHTML = "Oldenburg - Berlin " + " 150 = Euro(s)";
        }
        if(to == "frankfurt"){
         document.getElementById("result").innerHTML = "Oldenburg - Frankfurt" + " 100 = Euro(s)";
        }
        
        if(to == "oldenburg"){
         document.getElementById("result").innerHTML = "Oldenburg - Oldenburg" + " 0 = Euro(s)";
        }
     }
}