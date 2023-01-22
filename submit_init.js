//pulls data from first half of form and fires to serverside in order to query the openAI API
function submit_init(){

    //pull Data from the first half
    let product=$('#productQ').val()
    let openR=$('#openRQ').val()

    let data={
        'product':product,
        'openR':openR
    }
    
    //pass to server side

    
    //Generate new questions using the response, update 2nd part of the form

    //for debug/testing, replace with the actual response.
    let temp_resp=`A user is giving feedback on headphones. The user has given a rating of 4 out of 5 for the question "How would you rate this product", with 5 being the best and 1 being the worst. The user has also given a rating of 4 out of 5 for the question "How likely would you recommend this product to a friend?", with 1 being "unlikely" and 5 being "likely". The user has provided the following open ended feedback: " I really liked it but it's a bit expensive. The sound quality can pop sometimes.". Generate a set of up to 3 questions asking for elaboration on their opinion.
    
    1. How would you compare the sound quality with other similar headphones? 
    2. What features do you think make the product worth the price? 
    3. What do you mean by "pop" in regards to the sound quality?
    `

    const reg= /\d{1}.\s(\w.*)/g;

    let re_array=[...temp_resp.matchAll(reg)];

    for (let i=1;i<=re_array.length;i++){

        let newQ=document.getElementById('DynQ'+String(i))

        newQ.innerHTML=re_array[i-1][1]

    }



}