  //jQuery-set dom ready.
        //Set the function and toggle class
        $(document).on('click', '.onoff', function () {
            $(this).toggleClass('onoff-on');
            $(this).toggleClass('onoff-off');
        });