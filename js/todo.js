function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var output="";
            for(var i=0;i<=response.length;i++){
                 output+="<tr>"+ 
                "<td>"+"<input type='checkbox' id='chk' value='false'>"+" "+ response[i].title +"</td>"+
                "<td id='c'>"+response[i].completed+"</td>"
                +"</tr>";
                var x= document.getElementById('chk');
                

                if(response[i].completed==true){
                   x.setAttribute('checked','true');

                  
                }
                
                document.getElementById("tbl").innerHTML=output;

            }
           
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
