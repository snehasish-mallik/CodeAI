function check() {
    var c = 0;
    var res = document.getElementById("results");
    var q1 = document.mcq.question1.value;
    var q2 = document.mcq.question2.value;
    var q3 = document.mcq.question3.value;
    var q4 = document.mcq.question4.value;
    var q5 = document.mcq.question5.value;
    if (q1 == "5777.7") { c++; }
    if (q2 == "45") { c++; }
    if (q3 == "204") { c++; }
    if (q4 == "Wednesday") { c++; }
    if (q5 == "2") { c++; }
    res.innerHTML = "Answers : <br> ";
  }