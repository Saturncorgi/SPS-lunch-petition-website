function createDiv(responsetext)
{
    var _body = document.getElementsByTagName('div')[0];
    var _div = document.createElement('div');
    _div.innerHTML = responsetext;
    _body.appendChild(_div);
}
function httpGet(theUrl)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            createDiv(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();    
}
document.write(httpGet("https://proxy.corsfix.com/?https://www.change.org/p/no-more-schedule-changes?recruiter=1388024805&recruited_by_id=d12ad230-8def-11f0-8b96-2b653ccbcc4c"));
var elements=document.getElementsByTagName("h2")
if (elements.length <3){
    console.log("Error")
}
console.log(elements[3].textContent)
var num=parseInt(elements[3].textContent.replace(",",""))
var percent = ((num / 15283)*100).toString() //Estimated number of sps high school students according to their data
if (percent.length >= 5){
    percent=percent.substring(0,5)
}
document.body.innerHTML="<link rel='stylesheet' href='main.css'><body>Estimated percentage of all sps high school students who have signed: "+percent+"% <br>Total Signatures: "+num+"</body>"