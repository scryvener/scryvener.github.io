
//load in values from local storage and construct prompt for api call
function genPrompt(){
    let subject=localStorage.getItem('subject')
    let openResponse=localStorage.getItem('openResponse')
    let rating=localStorage.getItem('rating')
    let rec=localStorage.getItem('rec')

    //need to do cleaning, becauses theres no validation rn

    let prompt=`A user is giving feedback on: `+String(subject)+`. The user has given a rating of `+String(rating)+` out of 5 for the question "How would you rate this product", with 5 being the best and 1 being the worst.
     The user has also given a rating of `+String(rec)+` out of 5 for the question "How likely would you recommend this product to a friend?", with 1 being "unlikely" and 5 being "likely".
     The user has provided the following open ended feedback: "`+String(openResponse)+`". Generate a set of up to 3 questions asking for elaboration on their opinion.`
    return prompt
}


//call the openAI API using the generated prompt
function callAPI(){

}


// generate the new questions

let temp_resp=`A user is giving feedback on headphones. The user has given a rating of 4 out of 5 for the question "How would you rate this product", with 5 being the best and 1 being the worst. The user has also given a rating of 4 out of 5 for the question "How likely would you recommend this product to a friend?", with 1 being "unlikely" and 5 being "likely". The user has provided the following open ended feedback: " I really liked it but it's a bit expensive. The sound quality can pop sometimes.". Generate a set of up to 3 questions asking for elaboration on their opinion.
AI:

1. How would you compare the sound quality with other similar headphones? 
2. What features do you think make the product worth the price? 
3. What do you mean by "pop" in regards to the sound quality?
Human: `

const re= new RegExp('\d{1}.\s(\w.*)')

const re_array=[...temp_resp.matchAll(re)]

for (let i=0;i<re_array.length;i++){
    console.log(re_array[i])
}


//export/show all the data collected


let newdoc=document.getElementById('test')

newdoc.innerHTML=genPrompt()

