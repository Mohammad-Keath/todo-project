
let userName= prompt('What is your name?');
let userGender= prompt('Enter your gender (male or female)')
let userAge= prompt('What is your age?')
parseInt(userAge)
if (userAge > 0){

}else {
    alert('Be careful!, Youe age is not correct')
}
let skippingQuestionAnswer = confirm('Do you want to skip the welcoming messsage')
var userTitle
if (userGender =='male' || userGender == 'Male'){
userTitle = "Mr "
}else if (userGender == 'female' || userGender == 'Female'){
    userTitle = "Ms "
} else {
    userTitle= ""
}
if (skippingQuestionAnswer == true){

}
else {
    alert ('Hello '+ userTitle+ userName + " ,We are delighted to see you here.")
}
let userLikeMansaf = confirm('Do you like Mansaf?')
let userLikekobba = confirm('Do you like Kobbah?')
let userLikekabsa = confirm('Do you like Kabsa?')


let answersArr = [userName,userGender
    ,userAge ,skippingQuestionAnswer,userLikeMansaf,userLikekobba,userLikekabsa]

for (i=0;i<answersArr.length;i++){
  if (answersArr[i] ===""){
    answersArr[i] = "invalid"
}
}


console.log(answersArr)