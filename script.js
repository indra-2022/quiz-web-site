function res() {
    var count = 0;
    
    if (document.getElementById('q1_correct').checked) {
        count++;
    }
    if (document.getElementById('q2_correct').checked) {
        count++;
    }
    if (document.getElementById('q3_correct').checked) {
        count++;
    }
    if (document.getElementById('q4_correct').checked) {
        count++;
    }
    
    alert("Score: " + count);
}
