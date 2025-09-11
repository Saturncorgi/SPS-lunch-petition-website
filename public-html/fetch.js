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
var num=parseInt(elements[3].textContent.replace(",","").replace(".",""))
percent=(num / 15283)*100
var percent_str = percent.toString() //Estimated number of sps high school students according to their data
if (percent_str.length >= 5){
    percent_str=percent_str.substring(0,5)
}
document.body.innerHTML="<header><link rel='stylesheet' href='main.css'><title>SPS lunch petition tracker</title></header><body><h1>Estimated percentage of all SPS high school students who have signed: "+percent_str+"% <br><progress align=center value="+percent+" max='100'></progress><hr>Total Signatures: "+num+"<hr><a href='https://www.change.org/p/no-more-schedule-changes?recruiter=1388024805&recruited_by_id=d12ad230-8def-11f0-8b96-2b653ccbcc4c'>To learn more and sign go here</a><br><a href='CivicEngagementActivityExcusedAbsenceFormADA.pdf'>To get mondays walkout (11am September 15th) excused use this form</a></h1><hr><a href='https://github.com/Saturncorgi/SPS-lunch-petition-website/tree/main' text-size=10pt>Think you can make a better ui? PLEASE click to contribute!</a></body>"