function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var output="";
            var completed="";
            var incomplete="";
            var count=0;
            for(var i=0;i<=response.length;i++){

                if(response[i].completed==true){
                    output+="<tr>"+ 
                "<td>"+"<input type='checkbox' id='chk' checked=true onclick='return false' disabled>"+"</td> "+"<td>"+ 
                response[i].title +"</td>"+
                "<td id='c'>"+response[i].completed+"</td>"
                +"</tr>";

                  
                }
                else if(response[i].completed==false){
                    output+="<tr>"+ 
                "<td class='cells'>"+"<input type='checkbox' id='chk' >"+"</td> "+"<td>"+ response[i].title +"</td>"+
                "<td id='c'>"+response[i].completed+"</td>"
                +"</tr>";
                }
                
                document.getElementById("tbl").innerHTML=output;
                var clist=[];
                let count=0;
                $(document).ready(()=>{
                    $("cells").on("change",":checkbox",function(){
                    var rowIndex=this.parentNode.rowIndex+1;
                    const promise=new promise(function(resolve,reject){
                        count=$(":checkbox:checked").length-90;
                        $(":checkbox:checked")
                         .parent()
                         .parent()
                        $(":checkbox:not(:checked)")
                         .parent()
                         .parent()
                        clist+=rowIndex;
                        if(count>=5){
                            alert("congratulations!!");
                            resolve();
                        } 
                    });
                    promise.then(()=>{
                        alert("congratulations successfully completed 5 tasks");

                    });
                 });
                });

            }
           
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function one(){
    var a= document.forms["main"];
    var x=a.querySelectorAll('input[type="checkbox"]:checked');
    alert(x.length);
}