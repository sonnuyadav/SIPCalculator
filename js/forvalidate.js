$(document).ready(function(){
 //Leave Message
     $('#sipCal').validate({
        rules: {
            amount: {
                required: true,
               
            },
            duration: {
                required: true,
                
            },interest: {
                required: true,
                
            }, 
           
             
        },
        messages: {
            'amount': {
                required: 'Amount is required',
               
            },
            'duration': {
                required: 'Duration is required',
               
           },'interest': {
                required: 'Interest is required',
               
           }
            
        },

         submitHandler:function(){
           var investment = $('#amount').val(); // Total investment
           var years = $('#duration').val(); // No of years
           var annualRate = $('#interest').val(); // annual Rate

           if (investment == '' || years == '' || annualRate == '') {
            alert('please enter all values');
        } else {
            var monthlyRate = annualRate / 12 / 100;
            var months = years * 12;
            var futureValue = 0;

        var total = ((investment*years*annualRate));

        futureValue=(investment * (1+monthlyRate) * ((Math.pow((1+monthlyRate),months)) - 1)/monthlyRate);

        $('#amountpaid').val(Math.round(total));
        $('#mvalue').val(Math.round(futureValue));

        $('#sip-cal-result').css('display', 'block');
        }

        }

    });
    
});

