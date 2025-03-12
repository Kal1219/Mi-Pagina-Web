document.getElementById("btn-CV").addEventListener("click", function(){
    const link = document.createElement("a")
    link.href = "/files/CV_English_KalebCortes.pdf"
    link.download = "CV_English_KalebCortes.pdf"
    link.click()
})