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
        rules:{ //������� ��� ����� 
            name:{
                required:true,
                minlength:5 //����������� �������� ����
            },
            email:{
                required:true,
                email:true
            },
            phone:{
                required:true,
                minlength:5 //����������� �������� ����
            },
            town:{
                required:true,
                minlength:3 //����������� �������� ����
            },
            company:{
                required:true,
                minlength:3 //����������� �������� ����
            },
            companytype:{
                required:true,
                minlength:3 //����������� �������� ����
            },
            worktype:{
                required:true,
                minlength:3 //����������� �������� ����
            },
            text:{
                required:true,
                minlength:3 //����������� �������� ����
            }

        },
        messages:{
            name:{
                required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
                minlength:'��� ������ ���� �� ������ 5 ��������'
            },
            phone:{
                required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
                minlength:'������ ���� �� ������ 5 ��������'
            },
            email:{
                required: '��� ���� ����������� ��� ����������',
                email:'������� ���������� ������'
            },
            town:{
                required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
                minlength:'������ ���� �� ������ 3 ��������'
            },
            company:{
                required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
                minlength:'������ ���� �� ������ 3 ��������'
            },
            companytype:{
                required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
                minlength:'������ ���� �� ������ 3 ��������'
            },
            worktype:{
                required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
                minlength:'������ ���� �� ������ 3 ��������'
            },
            text:{
                required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
                minlength:'������ ���� �� ������ 3 ��������'
            },
            
        },
        submitHandler:function(){ //��������� ���� ��� �������
                var name =  $("#name_form").val(), // �������� ��� �������� ����� ��� �������� 
                    email = $("#email_form").val(),
                    phone = $('#phone_form').val(),
                    text = $('#text').val(),
                    allData = 'name=' + name + '&email=' + email+'&phone='+phone+'&text='+text; // ��������� ������ ��� ������� � ���������
                    //alert(allData);
                  $.ajax({
                    type: "POST",
                    url: "./sender.php",
                    data: allData,
                    success: function () { // ����������� ��� �������� �����������
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
    rules:{ //������� ��� ����� 
        name:{
            required:true,
            minlength:5 //����������� �������� ����
        },
        email:{
            required:true,
            email:true
        },
        phone:{
            required:true,
            minlength:5 //����������� �������� ����
        },
        text:{
            required:true,
            minlength:3 //����������� �������� ����
        }

    },
    messages:{
        name:{
            required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
            minlength:'��� ������ ���� �� ������ 5 ��������'
        },
        phone:{
            required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
            minlength:'������ ���� �� ������ 5 ��������'
        },
        email:{
            required: '��� ���� ����������� ��� ����������',
            email:'������� ���������� ������'
        },
        town:{
            required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
            minlength:'������ ���� �� ������ 3 ��������'
        },
        company:{
            required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
            minlength:'������ ���� �� ������ 3 ��������'
        },
        companytype:{
            required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
            minlength:'������ ���� �� ������ 3 ��������'
        },
        worktype:{
            required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
            minlength:'������ ���� �� ������ 3 ��������'
        },
        text:{
            required: '��� ���� ����������� ��� ����������', //����� ��������� ����� ����������
            minlength:'������ ���� �� ������ 3 ��������'
        },
        
    },
    submitHandler:function(){ //��������� ���� ��� �������
           sendMail();
            sendDataBase();
            sendDataTinkoff();
        }
});

        // ==================== ���������� ��� ������� ====================
            function sendDataTinkoff() { //������������ ������� �������� �����
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
         // ==================== ���������� ��� ������� ====================


         //==================== ����� �� ===================================
            function sendDataBase() { //������������ ������� �������� �����
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
                        alert('���������� � ����� ����');
                        $('#doc_oferta').removeAttr("checked");
                    }
                });
                return false;
            }
         //==================== ����� �� ===================================

   
     //==================== ������������ ������� �������� ����� ========
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
