/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict



  $(document).ready(function(){
        
    $('#myform').validate({
        rules:{ //правила для полей 
            name:{
                required:true,
                minlength:5 //минимальное значение поля
            },
            email:{
                required:true,
                email:true
            },
            phone:{
                required:true,
                minlength:5 //минимальное значение поля
            },
            town:{
                required:true,
                minlength:3 //минимальное значение поля
            },
            company:{
                required:true,
                minlength:3 //минимальное значение поля
            },
            companytype:{
                required:true,
                minlength:3 //минимальное значение поля
            },
            worktype:{
                required:true,
                minlength:3 //минимальное значение поля
            },
            text:{
                required:true,
                minlength:3 //минимальное значение поля
            }

        },
        messages:{
            name:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'Имя должно быть не меньше 5 символов'
            },
            phone:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 5 символов'
            },
            email:{
                required: 'Это поле обязательно для заполнения',
                email:'Введите правильный адресс'
            },
            town:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 3 символов'
            },
            company:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 3 символов'
            },
            companytype:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 3 символов'
            },
            worktype:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 3 символов'
            },
            text:{
                required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
                minlength:'должно быть не меньше 3 символов'
            },
            
        },
        submitHandler:function(){ //выполнять если все валидно
                var name =  $("#name_form").val(), // Собираем все значение полей для отправки 
                    email = $("#email_form").val(),
                    phone = $('#phone_form').val(),
                    text = $('#text').val(),
                    allData = 'name=' + name + '&email=' + email+'&phone='+phone+'&text='+text; // формируем строку для предачи в бработчик
                    //alert(allData);
                  $.ajax({
                    type: "POST",
                    url: "./sender.php",
                    data: allData,
                    success: function () { // выполняется при успешном отправлении
                        console.log('gooood');
                        console.log(allData);
                    }
                  });
                $('.thx').removeClass('hidden');
                $('#myform').addClass('hidden')
                setTimeout(function(){
                     $('.close').click();
                }, 8000)
            }
    });
  
  //validate tinkoff  
$('#form-tinkof').validate({
    rules:{ //правила для полей 
        name:{
            required:true,
            minlength:5 //минимальное значение поля
        },
        email:{
            required:true,
            email:true
        },
        phone:{
            required:true,
            minlength:5 //минимальное значение поля
        },
        text:{
            required:true,
            minlength:3 //минимальное значение поля
        }

    },
    messages:{
        name:{
            required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
            minlength:'Имя должно быть не меньше 5 символов'
        },
        phone:{
            required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
            minlength:'должно быть не меньше 5 символов'
        },
        email:{
            required: 'Это поле обязательно для заполнения',
            email:'Введите правильный адресс'
        },
        town:{
            required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
            minlength:'должно быть не меньше 3 символов'
        },
        company:{
            required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
            minlength:'должно быть не меньше 3 символов'
        },
        companytype:{
            required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
            minlength:'должно быть не меньше 3 символов'
        },
        worktype:{
            required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
            minlength:'должно быть не меньше 3 символов'
        },
        text:{
            required: 'Это поле обязательно для заполнения', //какое сообщение будет выводиться
            minlength:'должно быть не меньше 3 символов'
        },
        
    },
    submitHandler:function(){ //выполнять если все валидно
           sendMail();
            sendDataBase();
            sendDataTinkoff();
        }
});

        // ==================== Обработчик для Тинкова ====================
            function sendDataTinkoff() { //обрабатываем событие отправки формы
                    var
                        TerminalKey = $("#TerminalKey").val(),
                        Amount = $("#Amount").val(),
                        Description = $("#Description").val(),
                        OrderId = $('#OrderId').val(),
                        Token = $("#Token").val(),
                        allData = 'TerminalKey=' + TerminalKey + '&Description=' + Description + '&Amount=' + Amount + '&OrderId=' + OrderId + '&Token=' + Token;
                    /* alert(allData);*/
                    $.ajax({
                        type: "POST",
                        url: "https://securepay.tcsbank.ru/rest/Init",
                        data: allData,
                        dataType: 'json',
                        success: function returnData(data) {
                            alert(data.PaymentId);
                            send_val = 'PaymentId=' + data.PaymentId + '&OrderId=' + OrderId;

                            $.ajax({
                                type: "POST",
                                url: "http://www.itexpert.ru/rus/tinkof/paimentTinkof.php",
                                data: send_val,
                                success: function () {
                                    console.log(send_val);
                                    document.location = data.PaymentURL;
                                    
                                }
                            });
                            /*alert(data.PaymentURL);*/

                        }
                    });
                }
         // ==================== Обработчик для Тинкова ====================


         //==================== своей БД ===================================
            function sendDataBase() { //обрабатываем событие отправки формы
                var
                    Amount = $("#Amount").val(),
                    OrderId = $('#OrderId').val(),
                    curse_name = "ARHIT",
                    username = $('#name_tinkof').val(),
                    email = $('#email_tinkof').val(),
                    phone = $('#phone_tinkof').val(),
                    BDData = 'Amount=' + Amount + '&OrderId=' + OrderId + '&curse_name=' + curse_name + '&name=' + username + '&email=' + email + '&phone=' + phone;
                alert(BDData);
                $.ajax({
                    type: "POST",
                    url: "http://www.itexpert.ru/rus/tinkof/dataForm.php",
                    data: BDData,
                    success: function (data) {
                        alert('Информация с формы ушла');
                        $('#doc_oferta').removeAttr("checked");
                    }
                });
                return false;
            }
         //==================== своей БД ===================================

   
     //==================== обрабатываем событие отправки формы ========
          function sendMail() { 
                var
                    curse_name = "ARHIT",
                    username = $('#name_tinkof').val(),
                    email = $('#email_tinkof').val(),
                    phone = $('#phone_tinkof').val(),
                    mesage = $('#text_tinkof').val(),
                    datamail = 'name=' + username + '&email=' + email + '&phone=' + phone + '&curse_name=' + curse_name + '&mesage=' + mesage ;
                alert(datamail);
               
                    $.ajax({
                        type: "POST",
                        url: "http://www.itexpert.ru/rus/tinkof/sendMail.php",
                        data: datamail,
                        success: function () {
                            alert('mail send');
                        }
                    });

                };
                oneSend=false;
                  return oneSend;
         
})
