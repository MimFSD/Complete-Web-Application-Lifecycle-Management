
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var my_score= 75;
var my_friend_Score =20;

if (my_score>80) {
if (my_friend_Score>80) {
    console.log('go for a lunch');
    
}
else if (my_friend_Score<80 && my_friend_Score >60) {
    console.log('good luck next time');
    
}
else if (my_friend_Score<60 && my_friend_Score>40) {
    console.log('friends message unseen');
}
else if (my_friend_Score<40) {
    console.log('block the friend');
}
}
else {
    console.log(' go to home and sleep and act sad');
}

