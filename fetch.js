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
document.write(httpGet("https://www.change.org/p/no-more-schedule-changes?recruiter=1388024805&recruited_by_id=d12ad230-8def-11f0-8b96-2b653ccbcc4c"));