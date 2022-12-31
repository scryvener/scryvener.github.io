function findSelect(name,num){

    let value

    for (let r_id=1;r_id<=num;r_id++){
        let temp_node=document.getElementById(name+String(r_id))

        temp_bool=temp_node.checked

        if (temp_bool==true){
            value=r_id
        }
    }

    return value

}



function submitThings(){
    var subject = $('#subject').val();
    var open = $('#open').val();

    var rate_value= findSelect('rateChoice',5)
    var rec_value= findSelect('recChoice',5)


    console.log("Subject: "+subject)
    console.log("Open Response: "+open)
    console.log("Rating: "+rate_value)
    console.log("Recommend: "+rec_value)
}
