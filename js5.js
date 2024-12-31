var deta;
var solution;
function send(){
var nam = document.getElementById("input-name").value
var last = document.getElementById("input-last").value
var type = document.getElementById("input-type").value
var service = document.getElementById("input-service").value
var subject = document.getElementById("input-subject").value
    var data = {
        "name" : nam,
        "last name" : last,
        "problem type" : type,
        "the service type" : service,
        "problem subject" : subject
    }
    if(nam==""||last==""||type==""||service==""||subject==""){
        alert("الرجاء ملأ جميع الحقول بالمعلومات المطلوبة ")
        solution = 1
    }else{
        document.getElementById("input-name").value= " "
        document.getElementById("input-last").value= " "
        document.getElementById("input-type").value= " "
        document.getElementById("input-service").value= " "
        document.getElementById("input-subject").value= " "  
        location.reload()
    }
}
function reset(){
    document.getElementById("input-name").value= " "
    document.getElementById("input-last").value= " "
    document.getElementById("input-type").value= " "
    document.getElementById("input-service").value= " "
    document.getElementById("input-subject").value= " "
    location.reload()
}

function icon1(){
    document.getElementById("icon").innerHTML = 
    ` <div class="button" id="button">
        <ul><li><a href="file:///C:/Users/2023/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/magazen.com/index2/Articals.html" target="_blank"><button > articals</button></a></li></ul>
        <ul><li><a href="file:///C:/Users/2023/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/magazen.com/index4/information.html" target="_blank"><button >content</button></a></li></ul>
        <ul><li><a href="file:///C:/Users/2023/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/magazen.com/index4/information.html" target="_blank"><button>contact</button></a></li></ul>
        </div>
        `
        document.getElementById("title").style.display = "none" 
}
function icon2(){
    document.getElementById("title").style.display = ""
    document.getElementById("button").style.display = "none"
    document.getElementById("icon").innerHTML = `<p id="icon" onclick="icon1()">=</p>`
}