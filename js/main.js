(function () {


    $(document).ready(function () {
        //jquery方法
        $('.se').on('animationend',function () {
            //切换页面
            window.location.href="./main.html";
        });

        //js方法
        //var aa=document.getElementsByClassName('se');
        //var bb=document.getElementsByClassName('se')[0];

        //console.log(aa);
        //console.log(bb);

        //document.getElementsByClassName('se')[0].addEventListener('animationend',function () {
             //alert("aa");
         //});


        //语法
        //$('.opts').on('',function(){});

        //var $se = $('.se');
       // var se = document.querySelector('.se');
        // $se.style.webkitTransform = 'translateX(300px)';
        // se.addEventListener('webkitTransitionEnd', function () {
        //     alert('动画执行完毕！');
        // }, false);



        // var e = document.getElementsByClassName('se')[0];
        //
        // function whichTransitionEvent() {
        //     var t;
        //     var el = document.createElement('fakeelement');
        //     var transitions = {
        //         'transition': 'transitionend',
        //         'OTransition': 'oTransitionEnd',
        //         'MozTransition': 'transitionend',
        //         'WebkitTransition': 'webkitTransitionEnd'
        //     };
        //     for (t in transitions) {
        //         if (el.style[t] !== undefined) {
        //             return transitions[t];
        //         }
        //     }
        // }
        //
        // var transitionEvent = whichTransitionEvent();
        //
        // transitionEvent && e.addEventListener(transitionEvent, function () {
        //     alert('css3运动结束！我是回调函数，没有使用第三方类库！');
        // });
        //
        // startFade = function () {
        //     e.className += ' hide';
        // };
        $('.page1btn').on('click', function () {
            window.location.href = './third.html';
        });
        $('.page2btn').on('click', function () {
            window.location.href = './four.html';
        });
        $('.page3btn').on('click', function () {
            window.location.href = './five.html';
        });
        $('.page4btn').on('click', function () {
            window.location.href = './six.html';
        });
        $('.page5btn').on('click', function () {
            window.location.href = './eight.html';
        });
        $('.page6btn').on('click', function () {
            window.location.href = './five.html';
        });
        $('.page7btn').on('click', function () {
            window.location.href = './seven.html';
        });

        $('.btn').on('click', function () {
            window.location.href = './main.html';
        });
        $('.btn1').on('click', function () {
            window.location.href = './main.html';
        });
        $('.btn2').on('click', function () {
            window.location.href = './main.html';
        });
        $('.btn3').on('click', function () {
            window.location.href = './main.html';
        });
        $('.btn4').on('click', function () {
            window.location.href = './main.html';
        });
        $('.btn5').on('click', function () {
            window.location.href = './main.html';
        });
        $('.btn6').on('click', function () {
            window.location.href = './main.html';
        });






    })();
})();
