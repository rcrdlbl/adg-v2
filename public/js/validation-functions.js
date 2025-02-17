$(document).ready(function() {
    //ADD TEMP FOR MERDE!
    // alert("Hello, world");
    //footer placement calc for centering
    function centerF() {
        var tempM = ((($('#test-form').width())-240)/2)-75;
        var n = tempM.toString()+"px";
        // console.log(n);
        $('.success-sub').css("margin-right",n);   
    }
    if ($(window).width() < 1045) {
       centerF();
    }
    

    $( window ).resize(function() {
        if ($(window).width() < 1045) {
           centerF();
        }
        if ($(window).width() > 1045) {
           $('.success-sub').css("margin-right","0px");
        }
    });

    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
             message: 'The first name is not valid',
                validators: {
                    notEmpty: {
                        //message: 'The first name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        //message: 'The first name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        //message: 'The first name can only accept alphabetical input'
                    },
                }
            },
            lastName: {
                message: 'Last Name is not valid',
                validators: {
                    notEmpty: {
                        //message: 'Last Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        //message: 'Last Name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        //message: 'Last Names can only consist of alphabetical characters'
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        //message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        //message: 'The email address is not a valid'
                    }
                }
            },
            address: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        //message: 'Address is required and cannot be empty'
                    }
                }
            },

        }
    })
    .on('success.form.bv', function(e) {
        console.log("submit button clicked");
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbwt4guW8vqjlAf815QSs3_7rCiXenfMU-DLagfjm_baKBVt2Vc/exec';
        // var redirectUrl = 'success-page.html';
        // show the loading
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.responseData);
            // $(".success-sub").show(0).delay(2000).hide(0);
            // $(".success-sub").css("visibility", "visible");
            $(".success-sub").css("visibility", "visible");
            setTimeout( function(){
                $('.success-sub').css("visibility", "hidden");
            },2500);
            $('.form-horizontal').trigger("reset");

            // $(location).attr('href',redirectUrl);
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    // $(location).attr('href',redirectUrl);
                }
            });
    });
    $('#test-form-II').bootstrapValidator({

        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
             message: 'The first name is not valid',
                validators: {
                    notEmpty: {
                        //message: 'The first name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        //message: 'The first name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        //message: 'The first name can only accept alphabetical input'
                    },
                }
            },
            lastName: {
                message: 'Last Name is not valid',
                validators: {
                    notEmpty: {
                        //message: 'Last Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        //message: 'Last Name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        //message: 'Last Names can only consist of alphabetical characters'
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        //message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        //message: 'The email address is not a valid'
                    }
                }
            },
            address: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        //message: 'Address is required and cannot be empty'
                    }
                }
            },

        }
    })
    .on('success.form.bv', function(e) {
        console.log("flyer submit pressed");
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbxEbFtE3GCKpdaXD6dBob9bK-dyAkxozdGHftJ-EpKxVPgZTRGz/exec';
        // var redirectUrl = 'success-page.html';
        // show the loading
        $('#postForm-II').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.responseData);
            $(".success-sub").show(0).delay(2000).hide(0);
            $('.form-horizontal').trigger("reset");

            // $(location).attr('href',redirectUrl);
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    // $(location).attr('href',redirectUrl);
                }
            });
    });
});

