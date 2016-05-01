var numWrong = 3;

function cutQ() {
    var ansTru = $('#ansTrue').val();
    var choiceOne = $('#one').val();
    var choiceTwo = $('#two').val();
    var choiceThree = $('#three').val();
    var choiceFour = $('#four').val();

    $('#cutQ').hide();

    var ans = getRandomInt(1, 4);

    if (ans == 1) {
        if (ansTru != choiceOne) {
            $('#ansOne').show();
        } else {
            $('#ansOne').show();
        }

        if (ansTru != choiceTwo) {
            $('#ansTwo').hide();
        } else {
            $('#ansTwo').show();
        }

        if (ansTru != choiceThree) {
            $('#ansThree').hide();
        } else {
            $('#ansThree').show();
        }

        if (ansTru != choiceFour) {
            $('#ansFour').hide();
        } else {
            $('#ansFour').show();
        }
    }

    if (ans == 2) {
        if (ansTru != choiceOne) {
            $('#ansOne').hide();
        } else {
            $('#ansOne').show();
        }

        if (ansTru != choiceTwo) {
            $('#ansTwo').show();
        } else {
            $('#ansTwo').show();
        }

        if (ansTru != choiceThree) {
            $('#ansThree').hide();
        } else {
            $('#ansThree').show();
        }

        if (ansTru != choiceFour) {
            $('#ansFour').hide();
        } else {
            $('#ansFour').show();
        }
    }
    if (ans == 3) {
        if (ansTru != choiceOne) {
            $('#ansOne').hide();
        } else {
            $('#ansOne').show();
        }

        if (ansTru != choiceTwo) {
            $('#ansTwo').hide();
        } else {
            $('#ansTwo').show();
        }

        if (ansTru != choiceThree) {
            $('#ansThree').show();
        } else {
            $('#ansThree').show();
        }

        if (ansTru != choiceFour) {
            $('#ansFour').hide();
        } else {
            $('#ansFour').show();
        }
    }
    if (ans == 4) {
        if (ansTru != choiceOne) {
            $('#ansOne').hide();
        } else {
            $('#ansOne').show();
        }

        if (ansTru != choiceTwo) {
            $('#ansTwo').hide();
        } else {
            $('#ansTwo').show();
        }

        if (ansTru != choiceThree) {
            $('#ansThree').hide();
        } else {
            $('#ansThree').show();
        }

        if (ansTru != choiceFour) {
            $('#ansFour').show();
        } else {
            $('#ansFour').show();
        }
    }




}

function changeQ() {
    $('#changeQ').hide();
    startGame();
}

function canWrong() {

    numWrong = numWrong - 1;
    //alert(numWrong);

    $('#canWrong').hide();
}

function startGame() {

    var numRandom = getRandomInt(0, 60);
    var choiceTwo = getRandomInt(0, 60);
    var choiceThree = getRandomInt(0, 60);
    var choiceFour = getRandomInt(0, 60);
    var ans = getRandomInt(1, 5);

    var cardRules = new Array();
    var choice;
    var ansReal;

    startCount();

    $('#ansOne').show();
    $('#ansTwo').show();
    $('#ansThree').show();
    $('#ansFour').show();

    $.get('Idiom.txt', function (data) {
        cardRules = data.split('\n');


        var pic = "img/" + numRandom + ".jpg";
        document.getElementById("pic").src = pic;

        if (ans == 1) {
            $('#ansTrue').val(cardRules[numRandom]);
            $('#one').val(cardRules[numRandom]);
            $('#two').val(cardRules[choiceThree]);
            $('#three').val(cardRules[choiceTwo]);
            $('#four').val(cardRules[choiceFour]);

            $('#ansOne').text(cardRules[numRandom]);
            $('#ansTwo').text(cardRules[choiceThree]);
            $('#ansThree').text(cardRules[choiceTwo]);
            $('#ansFour').text(cardRules[choiceFour]);

        } else if (ans == 2) {
            $('#ansTrue').val(cardRules[numRandom]);
            $('#one').val(cardRules[choiceThree]);
            $('#two').val(cardRules[choiceTwo]);
            $('#three').val(cardRules[numRandom]);
            $('#four').val(cardRules[choiceFour]);

            $('#ansOne').text(cardRules[choiceThree]);
            $('#ansTwo').text(cardRules[choiceTwo]);
            $('#ansThree').text(cardRules[numRandom]);
            $('#ansFour').text(cardRules[choiceFour]);
        } else if (ans == 3) {
            $('#ansTrue').val(cardRules[numRandom]);
            $('#one').val(cardRules[choiceTwo]);
            $('#two').val(cardRules[numRandom]);
            $('#three').val(cardRules[choiceThree]);
            $('#four').val(cardRules[choiceFour]);

            $('#ansOne').text(cardRules[choiceTwo]);
            $('#ansTwo').text(cardRules[numRandom]);
            $('#ansThree').text(cardRules[choiceThree]);
            $('#ansFour').text(cardRules[choiceFour]);
        } else if (ans == 4) {
            $('#ansTrue').val(cardRules[numRandom]);
            $('#one').val(cardRules[choiceFour]);
            $('#two').val(cardRules[choiceThree]);
            $('#three').val(cardRules[choiceTwo]);
            $('#four').val(cardRules[numRandom]);

            $('#ansOne').text(cardRules[choiceFour]);
            $('#ansTwo').text(cardRules[choiceThree]);
            $('#ansThree').text(cardRules[choiceTwo]);
            $('#ansFour').text(cardRules[numRandom]);
        } else if (ans == 5) {
            $('#ansTrue').val(cardRules[numRandom]);
            $('#one').val(cardRules[choiceFour]);
            $('#two').val(cardRules[numRandom]);
            $('#three').val(cardRules[choiceTwo]);
            $('#four').val(cardRules[choiceThree]);

            $('#ansOne').text(cardRules[choiceFour]);
            $('#ansTwo').text(cardRules[numRandom]);
            $('#ansThree').text(cardRules[choiceTwo]);
            $('#ansFour').text(cardRules[choiceThree]);
        }

    });


    $.mobile.pageContainer.pagecontainer("change", "#startGame");

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chackAnsOne() {
    var ansTrue = $('#ansTrue').val();
    var one = $('#one').val();
    var ansOne = $('#ansOne').text();
    var point = (parseInt($('#point').text()));
    var life = (parseInt($('#life').text()));


    if (numWrong == 3) {

        if (ansTrue == one) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            startGame();

        } else {

            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            var calLife = life - 1;
            document.getElementById('life').innerHTML = calLife;

            if (life == 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ!', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );
                stopCount();
                $('#resultPoint').val(point);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }


    }

    if (numWrong == 2) {
        if (ansTrue == one) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            numWrong = 3;
            startGame();
        } else {

            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }


            $('#ansOne').hide();
            numWrong = numWrong - 1;
            //alert(numWrong);
        }

    } else if (numWrong == 1) {
        if (ansTrue == one) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            startGame();

        } else {

            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ตอบผิดอีกแล้วต้องเปลี่ยนข้อแล้วละ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }



            startGame();
            numWrong = 3;

            var calLife = life - 1;
            document.getElementById('life').innerHTML = calLife;

            if (life == 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );

                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(point);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }





}

function chackAnsTwo() {

    var ansTrue = $('#ansTrue').val();
    var two = $('#two').val();
    var ansTwo = $('#ansTwo').text();
    var point = (parseInt($('#point').text()));
    var life = (parseInt($('#life').text()));

    if (numWrong == 3) {

        if (ansTrue == two) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            startGame();

        } else {

            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            var calLife = life - 1;
            document.getElementById('life').innerHTML = calLife;

            if (life == 0) {

                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ!', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );


                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(point);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }


    }

    if (numWrong == 2) {
        if (ansTrue == two) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            numWrong = 3;
            startGame();
        } else {

            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            $('#ansTwo').hide();
            numWrong = numWrong - 1;
            //alert(numWrong);
        }

    } else if (numWrong == 1) {
        if (ansTrue == two) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            startGame();

        } else {

            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ตอบผิดอีกแล้วต้องเปลี่ยนข้อแล้วละ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            startGame();
            numWrong = 3;

            var calLife = life - 1;
            document.getElementById('life').innerHTML = calLife;

            if (life == 0) {

                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );

                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(point);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }


}

function chackAnsThree() {

    var ansTrue = $('#ansTrue').val();
    var three = $('#three').val();
    var ansThree = $('#ansThree').text();
    var point = (parseInt($('#point').text()));
    var life = (parseInt($('#life').text()));

    if (numWrong == 3) {

        if (ansTrue == three) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            startGame();

        } else {

            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            var calLife = life - 1;
            document.getElementById('life').innerHTML = calLife;

            if (life == 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );

                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(point);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }


    }

    if (numWrong == 2) {
        if (ansTrue == three) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            numWrong = 3;
            startGame();
        } else {
            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            $('#ansThree').hide();
            numWrong = numWrong - 1;
            //alert(numWrong);
        }

    } else if (numWrong == 1) {
        if (ansTrue == three) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            startGame();

        } else {

            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ตอบผิดอีกแล้วต้องเปลี่ยนข้อแล้วละ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            startGame();
            numWrong = 3;

            var calLife = life - 1;
            document.getElementById('life').innerHTML = calLife;

            if (life == 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );

                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(point);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }


}

function chackAnsFour() {
    var ansTrue = $('#ansTrue').val();
    var four = $('#four').val();
    var ansFour = $('#ansFour').text();
    var point = (parseInt($('#point').text()));
    var life = (parseInt($('#life').text()));

    if (numWrong == 3) {

        if (ansTrue == four) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            startGame();

        } else {

            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            var calLife = life - 1;
            document.getElementById('life').innerHTML = calLife;

            if (life == 0) {
                navigator.notification.vibrate(1000);

                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );

                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(point);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }


    }

    if (numWrong == 2) {
        if (ansTrue == four) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            numWrong = 3;
            startGame();
        } else {

            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            $('#ansFour').hide();
            numWrong = numWrong - 1;
            //alert(numWrong);
        }

    } else if (numWrong == 1) {
        if (ansTrue == four) {
            var calPoint = point + 1;
            document.getElementById('point').innerHTML = calPoint;
            startGame();

        } else {

            if (life <= 3 && life > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ตอบผิดอีกแล้วต้องเปลี่ยนข้อแล้วละ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            startGame();
            numWrong = 3;

            var calLife = life - 1;
            document.getElementById('life').innerHTML = calLife;

            if (life == 0) {

                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );


                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(point);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }


}

function exitFromApp() {
    navigator.app.exitApp();
}

function refreshPage() {
    window.location.href = "#home";
    location.reload();
}

function getText() {
    var cardRules = new Array();
    //jQuery.get('test.txt',function(txt){$('#output').text(txt);});
    $.get('ans.txt', function (data) {
        cardRules = data.split('\n');
        $('#tt').val(cardRules[5]);
    });

}

function startGameTwo() {

    var numRandom = getRandomInt(1, 60);
    var ans = getRandomInt(0, 3);

    var pic = "img/" + numRandom + ".jpg";
    document.getElementById("picTwo").src = pic;

    startCountTwo();


    $('#ansOnes').show();
    $('#ansTwos').show();
    $('#ansThrees').show();
    $('#ansFours').show();


    var cardRules = new Array();
    //jQuery.get('test.txt',function(txt){$('#output').text(txt);});
    $.get('question.txt', function (data) {
        cardRules = data.split('\n');

        $('#ones').val(numRandom);
        $('#question').val(cardRules[numRandom]);
        $('#labelQuestion').text(cardRules[numRandom]);

        $.get('ans.txt', function (data) {
            cardRules = data.split('\n');

            $('#trueAns').val(cardRules[(numRandom * 4) - 3]);

            if (ans == 0) {
                $('#ansOnes').text(cardRules[(numRandom * 4) - 3]);
                $('#ansTwos').text(cardRules[(numRandom * 4) - 2]);
                $('#ansThrees').text(cardRules[(numRandom * 4) - 1]);
                $('#ansFours').text(cardRules[(numRandom * 4)]);

                $('#ones').val(cardRules[(numRandom * 4) - 3]);
                $('#twos').val(cardRules[(numRandom * 4) - 2]);
                $('#threes').val(cardRules[(numRandom * 4) - 1]);
                $('#fours').val(cardRules[(numRandom * 4)]);

            }
            if (ans == 1) {
                $('#ansOnes').text(cardRules[(numRandom * 4)]);
                $('#ansTwos').text(cardRules[(numRandom * 4) - 3]);
                $('#ansThrees').text(cardRules[(numRandom * 4) - 2]);
                $('#ansFours').text(cardRules[(numRandom * 4) - 1]);

                $('#ones').val(cardRules[(numRandom * 4)]);
                $('#twos').val(cardRules[(numRandom * 4) - 3]);
                $('#threes').val(cardRules[(numRandom * 4) - 2]);
                $('#fours').val(cardRules[(numRandom * 4) - 1]);

            }
            if (ans == 2) {
                $('#ansOnes').text(cardRules[(numRandom * 4) - 2]);
                $('#ansTwos').text(cardRules[(numRandom * 4) - 1]);
                $('#ansThrees').text(cardRules[(numRandom * 4) - 3]);
                $('#ansFours').text(cardRules[(numRandom * 4)]);

                $('#ones').val(cardRules[(numRandom * 4) - 2]);
                $('#twos').val(cardRules[(numRandom * 4) - 1]);
                $('#threes').val(cardRules[(numRandom * 4) - 3]);
                $('#fours').val(cardRules[(numRandom * 4)]);


            }
            if (ans == 3) {
                $('#ansOnes').text(cardRules[(numRandom * 4)]);
                $('#ansTwos').text(cardRules[(numRandom * 4) - 1]);
                $('#ansThrees').text(cardRules[(numRandom * 4) - 2]);
                $('#ansFours').text(cardRules[(numRandom * 4) - 3]);

                $('#ones').val(cardRules[(numRandom * 4)]);
                $('#twos').val(cardRules[(numRandom * 4) - 1]);
                $('#threes').val(cardRules[(numRandom * 4) - 2]);
                $('#fours').val(cardRules[(numRandom * 4) - 3]);

            }




        });
    });

    $.mobile.pageContainer.pagecontainer("change", "#starGameTwo");
}


/* ----------------------------------------- Chack Answer StartGame 2 --------------------------------------------*/

function chkOne() {
    var trueAns = $('#trueAns').val();
    var oneAns = $('#ones').val();
    var pointTwo = (parseInt($('#pointTwo').text()));
    var lifeTwo = (parseInt($('#lifeTwo').text()));

    if (numWrong == 3) {
        if (trueAns == oneAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            startGameTwo();
        } else {

            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }
            
            var calLife = lifeTwo - 1;
            document.getElementById('lifeTwo').innerHTML = calLife;


            if (lifeTwo == 0) {
                
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );
            
                
                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(pointTwo);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }
    if (numWrong == 2) {
        if (trueAns == oneAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            numWrong = 3;
            startGameTwo();
        } else {
            
            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            $('#ansOnes').hide();
            numWrong = numWrong - 1;
            //alert(numWrong);
        }

    } else if (numWrong == 1) {
        if (trueAns == oneAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            startGameTwo();

        } else {
            
            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ตอบผิดอีกแล้ว ต้องเปลี่ยนข้อแล้วละ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }
            
            startGameTwo();
            numWrong = 3;

            var calLife = lifeTwo - 1;
            document.getElementById('lifeTwo').innerHTML = calLife;

            if (lifeTwo == 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );

                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(pointTwo);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }





}

function chkTwo() {

    var trueAns = $('#trueAns').val();
    var twoAns = $('#twos').val();
    var pointTwo = (parseInt($('#pointTwo').text()));
    var lifeTwo = (parseInt($('#lifeTwo').text()));

    if (numWrong == 3) {
        if (trueAns == twoAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            startGameTwo();
        } else {
            
            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }
            
            var calLife = lifeTwo - 1;
            document.getElementById('lifeTwo').innerHTML = calLife;


            if (lifeTwo == 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );
                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(pointTwo);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }

    if (numWrong == 2) {
        if (trueAns == twoAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            numWrong = 3;
            startGameTwo();
        } else {
            
            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            $('#ansTwos').hide();
            numWrong = numWrong - 1;
            //alert(numWrong);
        }

    } else if (numWrong == 1) {
        if (trueAns == twoAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            startGameTwo();

        } else {
            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ตอบผิดอีกแล้ว ต้องเปลี่ยนข้อแล้วละ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }
            
            startGameTwo();
            numWrong = 3;

            var calLife = lifeTwo - 1;
            document.getElementById('lifeTwo').innerHTML = calLife;

            if (lifeTwo == 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );

                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(pointTwo);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }


}

function chkThree() {
    var trueAns = $('#trueAns').val();
    var threeAns = $('#threes').val();
    var pointTwo = (parseInt($('#pointTwo').text()));
    var lifeTwo = (parseInt($('#lifeTwo').text()));

    if (numWrong == 3) {
        if (trueAns == threeAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            startGameTwo();
        } else {
            
            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }
            
            var calLife = lifeTwo - 1;
            document.getElementById('lifeTwo').innerHTML = calLife;


            if (lifeTwo == 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );
                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(pointTwo);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }


    if (numWrong == 2) {
        if (trueAns == threeAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            numWrong = 3;
            startGameTwo();
        } else {
            
            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            $('#ansThrees').hide();
            numWrong = numWrong - 1;
            //alert(numWrong);
        }

    } else if (numWrong == 1) {
        if (trueAns == threeAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            startGameTwo();

        } else {
            
            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ตอบผิดอีกแล้ว ต้องเปลี่ยนข้อแล้วละ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }
            
            startGameTwo();
            numWrong = 3;

            var calLife = lifeTwo - 1;
            document.getElementById('lifeTwo').innerHTML = calLife;

            if (lifeTwo == 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );

               // alert('Game Over');
                stopCount();
                $('#resultPoint').val(pointTwo);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }
}


function chkFour() {
    var trueAns = $('#trueAns').val();
    var fourAns = $('#fours').val();
    var pointTwo = (parseInt($('#pointTwo').text()));
    var lifeTwo = (parseInt($('#lifeTwo').text()));

    if (numWrong == 3) {
        if (trueAns ==  fourAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            startGameTwo();
        } else {
            
            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }
            
            var calLife = lifeTwo - 1;
            document.getElementById('lifeTwo').innerHTML = calLife;


            if (lifeTwo == 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );
                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(pointTwo);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }


    if (numWrong == 2) {
        if (trueAns == fourAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            numWrong = 3;
            startGameTwo();
        } else {
            
            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ใจเย็นๆนะ ค่อยๆตอบ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }

            $('#ansFours').hide();
            numWrong = numWrong - 1;
            //alert(numWrong);
        }

    } else if (numWrong == 1) {
        if (trueAns == fourAns) {
            var calPoint = pointTwo + 1;
            document.getElementById('pointTwo').innerHTML = calPoint;
            startGameTwo();

        } else {
            
            if (lifeTwo <= 3 && lifeTwo > 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'ตอบผิดอีกแล้ว ต้องเปลี่ยนข้อแล้วละ !', // message
                    false, // callback
                    'คุณตอบผิด', // title
                    'รับทราบ' // buttonName
                );
            }
            
            startGameTwo();
            numWrong = 3;

            var calLife = lifeTwo - 1;
            document.getElementById('lifeTwo').innerHTML = calLife;

            if (lifeTwo == 0) {
                navigator.notification.vibrate(1000);
                navigator.notification.alert(
                    'หว้า จบเกมแล้วซิ !', // message
                    false, // callback
                    'จบเกม', // title
                    'ตกลง' // buttonName
                );

                //alert('Game Over');
                stopCount();
                $('#resultPoint').val(pointTwo);
                $.mobile.pageContainer.pagecontainer("change", "#gameOver");
            }
        }
    }
}


/*--------------------------------------------- Time for startGame 1 -----------------------------------------------*/
var c = 30;
var t;
var timer_is_on = 0;


function timedCount() {
    document.getElementById('counter').innerHTML = '<img src="img/clock.gif" width="20" height="20" />&nbsp; &nbsp;' + c;
    c = c - 1;



    t = setTimeout(function () {
        timedCount()
    }, 1000);
    if (c == -1) {
        c = 30;
        stopCount();

        alert('หมดเวลา!');

        var point = (parseInt($('#point').text()));
        var life = (parseInt($('#life').text()));


        if (point == 0) {
            var calLifee = life - 1;
            document.getElementById('life').innerHTML = calLifee;
            startGame();
        } else {

            var calPoint = point - 1;
            document.getElementById('point').innerHTML = calPoint;

        }






        if (life == 0) {
            stopCount();
           // alert('Game Over');
            $('#resultPoint').val(point);
            $.mobile.pageContainer.pagecontainer("change", "#gameOver");
        } else {
            var calLifee = life - 1;
            document.getElementById('life').innerHTML = calLifee;
            startGame();
        }





        return;
    } //เมื่อหมดเวลาแล้วจะหยุดการทำงานของ function display
}

function startCount() {
    c = 30;
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    c = 30;
    clearTimeout(t);
    timer_is_on = 0;
}


/*---------------------------------------------Time for starGame 2-----------------------------------------------*/
function timedCountTwo() {
    document.getElementById('counterTwo').innerHTML = '<img src="img/clock.gif" width="20" height="20" />&nbsp; &nbsp;' + c;
    c = c - 1;



    t = setTimeout(function () {
        timedCountTwo()
    }, 1000);
    if (c == -1) {
        c = 30;
        stopCountTwo();

        alert('หมดเวลา!');

        var point = (parseInt($('#pointTwo').text()));
        var life = (parseInt($('#lifeTwo').text()));

        if (point == 0) {
            var calLifee = life - 1;
            document.getElementById('lifeTwo').innerHTML = calLifee;
            startGameTwo();
        } else {

            var calPoint = point - 1;
            document.getElementById('pointTwo').innerHTML = calPoint;

        }


        if (life == 0) {
           // alert('Game Over');
            stopCount();
            $('#resultPoint').val(point);
            $.mobile.pageContainer.pagecontainer("change", "#gameOver");
        } else {
            var calLifee = life - 1;
            document.getElementById('lifeTwo').innerHTML = calLifee;
            startGameTwo();
        }





        return;
    } //เมื่อหมดเวลาแล้วจะหยุดการทำงานของ function display
}

function startCountTwo() {
    c = 30;
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCountTwo();
    }
}

function stopCountTwo() {
    c = 30;
    clearTimeout(t);
    timer_is_on = 0;
}

/*---------------------------------------------END of Time for starGame 2-----------------------------------------------*/

function cutQTwo() {
    var ansTru = $('#trueAns').val();
    var choiceOne = $('#ones').val();
    var choiceTwo = $('#twos').val();
    var choiceThree = $('#threes').val();
    var choiceFour = $('#fours').val();

    $('#cutQTwo').hide();

    var ans = getRandomInt(1, 4);

    if (ans == 1) {
        if (ansTru != choiceOne) {
            $('#ansOnes').show();
        } else {
            $('#ansOnes').show();
        }

        if (ansTru != choiceTwo) {
            $('#ansTwos').hide();
        } else {
            $('#ansTwos').show();
        }

        if (ansTru != choiceThree) {
            $('#ansThrees').hide();
        } else {
            $('#ansThrees').show();
        }

        if (ansTru != choiceFour) {
            $('#ansFours').hide();
        } else {
            $('#ansFours').show();
        }
    }

    if (ans == 2) {
        if (ansTru != choiceOne) {
            $('#ansOnes').hide();
        } else {
            $('#ansOnes').show();
        }

        if (ansTru != choiceTwo) {
            $('#ansTwos').show();
        } else {
            $('#ansTwos').show();
        }

        if (ansTru != choiceThree) {
            $('#ansThrees').hide();
        } else {
            $('#ansThrees').show();
        }

        if (ansTru != choiceFour) {
            $('#ansFours').hide();
        } else {
            $('#ansFours').show();
        }
    }
    if (ans == 3) {
        if (ansTru != choiceOne) {
            $('#ansOnes').hide();
        } else {
            $('#ansOnes').show();
        }

        if (ansTru != choiceTwo) {
            $('#ansTwos').hide();
        } else {
            $('#ansTwos').show();
        }

        if (ansTru != choiceThree) {
            $('#ansThrees').show();
        } else {
            $('#ansThrees').show();
        }

        if (ansTru != choiceFour) {
            $('#ansFours').hide();
        } else {
            $('#ansFours').show();
        }
    }
    if (ans == 4) {
        if (ansTru != choiceOne) {
            $('#ansOnes').hide();
        } else {
            $('#ansOnes').show();
        }

        if (ansTru != choiceTwo) {
            $('#ansTwos').hide();
        } else {
            $('#ansTwos').show();
        }

        if (ansTru != choiceThree) {
            $('#ansThrees').hide();
        } else {
            $('#ansThrees').show();
        }

        if (ansTru != choiceFour) {
            $('#ansFours').show();
        } else {
            $('#ansFours').show();
        }
    }




}

function changeQTwo() {
    $('#changeQTwo').hide();
    startGameTwo();
}

function canWrongTwo() {

    numWrong = numWrong - 1;
    //alert(numWrong);

    $('#canWrongTwo').hide();
}