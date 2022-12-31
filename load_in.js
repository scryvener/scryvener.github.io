
//load in values from local storage and construct prompt for api call
function genPrompt(){
    let subject=localStorage.getItem('subject')
    let openResponse=localStorage.getItem('openResponse')
    let rating=localStorage.getItem('rating')
    let rec=localStorage.getItem('rec')

    let prompt='A user is giving feedback on'+string(subject)+'. The user has given a rating of '+string(rating)+' out of 5 for the question "How would you rate this product", with 5 being the best.'+
     'The user has also given a rating of '+string(rec)+' out of 5 for the question "How likely would you recommend this product to a friend?", with 1 being "unlikely" and 5 being "likely".'+
     'The user has provided the following open ended feedback: " '+openResponse+'". Generate a set of up to 3 questions asking for elaboration on their opinion.'
    return prompt
}



let newdoc=document.getElementById('test')

newdoc.innerHTML=genPrompt

