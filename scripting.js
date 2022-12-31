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

    localStorage.setItem('subject',subject)
    localStorage.setItem('openResponse',open)
    localStorage.setItem('rating',rate_value)
    localStorage.setItem('rec',rec_value)

    window.location.href='/form_test_2.html'


}
