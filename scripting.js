
function submitThings(){
    var subject = $('#subject').val();
    var open = $('#open').val();

    var rate_value
    for (let r_id=1;r_id<=5;r_id++){
        let temp_node=document.getElementById('rateChoice'+String(r_id))

        temp_bool=temp_node.getAttribute("checked")
        console.log(temp_bool)

        if (temp_bool==true){
            rate_value=r_id
        }
    }



    console.log("Subject: "+subject)
    console.log("Open Response: "+open)
    console.log(rate_value)
}
