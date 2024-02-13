<script>
function multistepForm() {
    var pages = {
        1: '#container_what_type_of_project_is_this',
        2: '#container_how_tall_is_your_housebuilding',
        3: '#container_when_do_you_need_this_work_done',
        4: '#container_street, #container_city, #container_zip_code',
        5: '#container_first_name, #container_last_name',
        6: '#container_phone, #container_email'
    };

    var pathHistory = [1];
    var submitButton = '#lp-pom-button-296';
    var backButton = '#lp-pom-button-299';
    var continueButton = '#lp-pom-button-298';
    var continueButton_1st_Step = '#lp-pom-button-297';

    var isValid = function (page) {
        var fieldsArr = pages[page].split(',');
        for (var i = 0; i < fieldsArr.length; i++) {
            var x = fieldsArr[i].replace(/(#container_)/g, '').trim();
            if (typeof document.getElementById('#group_' + x) !== 'undefined') {
                var y = document.getElementsByName(x);
                if (!y[0].reportValidity()) return false;
            } else if (!document.getElementById(x).reportValidity()) {
                console.log("fail:" + x);
                return false;
            }
        }
        return true;
    };

    var showPage = function () {
        $('.fields > div').hide();
        $('.active').show();
    };

    var clearErrors = function () {
        $('.lp-form-errors').hide();
        $('ul', '.lp-form-errors').empty();
        $('.error-msg', '.lp-form-errors').text('');
    };

    function nextFunc() {
        if ($(this).is(':checked')) {
            var e = new MouseEvent('click');
            $(continueButton).trigger("click");
        }
    }
    $('.lp-pom-form-field .optionsList .option input[type=radio]').change(nextFunc);

    $.each(pages, function (i, val) {
        $(pages[i]).wrapAll('<div id="page-' + i + '" data-id="' + i + '"></div>');
    });

   $('#page-1').addClass('active');
    showPage();

    $(submitButton).hide();
    $(backButton).hide();
    $(continueButton).hide();
    $(continueButton_1st_Step).show();
                $('.fillPercentage').css({ 'background': 'linear-gradient(90deg, #355E9F 16.6%, rgba(53, 94, 159, 0.28) 0%)' });
    $(continueButton).click(function () {
        var page = $('.active', '.fields').attr('data-id');
        var next = 0;
        if (isValid(page)) {
            clearErrors();
            if (getNextPage(page)) {
                next = getNextPage(page);
                page = next;
            } else {
                next = ++page;
            }

            // Call the function to update the heading
            updateHeading(next);

            // Call the function to update the slider values
            updateSliderValues(next);

            var showError = false;
            if (next == 1) {
                $(continueButton).hide();
                $(continueButton_1st_Step).show();
            }

            if (next >= 2) {
                $(continueButton).show();
                $(backButton).show();
                $(submitButton).hide();
               $(continueButton_1st_Step).hide();
            }
            if (next == 6) {
                $(continueButton).hide();
                $(continueButton_1st_Step).hide();
                $(submitButton).show();
            }
            $('div', '.fields').removeClass('active');
            pathHistory.push(next);
            $('#page-' + next).addClass('active');
            showPage();
        }
    });
          $(continueButton_1st_Step).click(function () {
        var page = $('.active', '.fields').attr('data-id');
        var next = 0;
        if (isValid(page)) {
            clearErrors();
            if (getNextPage(page)) {
                next = getNextPage(page);
                page = next;
            } else {
                next = ++page;
            }

            // Call the function to update the heading
            updateHeading(next);

            // Call the function to update the slider values
            updateSliderValues(next);

            var showError = false;
            if (next == 1) {
                $(continueButton).hide();
                $(continueButton_1st_Step).show();
            }

            if (next >= 2) {
                $(continueButton).show();
                $(backButton).show();
                $(submitButton).hide();
               $(continueButton_1st_Step).hide();
            }
            if (next == 6) {
                $(continueButton).hide();
                $(continueButton_1st_Step).hide();
                $(submitButton).show();
            }
            $('div', '.fields').removeClass('active');
            pathHistory.push(next);
            $('#page-' + next).addClass('active');
            showPage();
        }
    });

    $(backButton).click(function () {
        var page = pathHistory.pop();
        var prev = pathHistory[pathHistory.length - 1];
        if (prev == 1) {
            $(backButton).hide();
            $(continueButton).hide();
           $(continueButton_1st_Step).show();
        }
        if (prev > 1) {
            $(continueButton).show();
        }

        isVisited = true;

        // Call the function to update the heading
        updateHeading(prev);

        clearErrors();
        $(submitButton).hide();
        $('.fields div').removeClass('active');
        $('#page-' + prev).addClass('active');
        showPage();
      updateSliderValues(prev);
            clearErrors();
            $(submitButton).hide();
            $('.fields div').removeClass('active');
            $('#page-' + prev).addClass('active');
            showPage();
    });

    function getNextPage(page) {
        switch (parseInt(page)) {
            case 1:
                return 2;
            case 2:
                return 3;
            case 3:
                return 4;
            default:
                return false;
        }
    }
    function updateHeading(page) {
        // Hide all headings by default
        $('#step-4-heading').hide();
        $('#step-5-heading').hide();
        $('#step-6-heading').hide();

        // Show the appropriate heading for the current step
        if (page === 4) {
            $('#step-4-heading').show();
        } else if (page === 5) {
            $('#step-5-heading').show();
        } else if (page === 6) {
            $('#step-6-heading').show();
        }
    }

    function updateSliderValues(page) {
        switch (parseInt(page)) {
            case 1:
                $('.fillPercentage').css({ 'background': 'linear-gradient(90deg, #355E9F 16.6%, rgba(53, 94, 159, 0.28) 0%)' });
                $('.count-wrap').css({ 'position': 'absolute', 'left': '15%' });
                $('.count-wrap p').html("1");
                break;
            case 2:
                $('.fillPercentage').css({ 'background': 'linear-gradient(90deg, #355E9F 33%, rgba(53, 94, 159, 0.28) 0%)' });
                $('.count-wrap').css({ 'position': 'absolute', 'left': '32%' });
                $('.count-wrap p').html("2");
                break;
            case 3:
                $('.fillPercentage').css({ 'background': 'linear-gradient(90deg, #355E9F 49%, rgba(53, 94, 159, 0.28) 0%)' });
                $('.count-wrap').css({ 'position': 'absolute', 'left': '48%' });
                $('.count-wrap p').html("3");
                break;
            case 4:
                $('.fillPercentage').css({ 'background': 'linear-gradient(90deg, #355E9F 65%, rgba(53, 94, 159, 0.28) 0%)' });
                $('.count-wrap').css({ 'position': 'absolute', 'left': '64%' });
                $('.count-wrap p').html("4");
                break;
            case 5:
                $('.fillPercentage').css({ 'background': 'linear-gradient(90deg, #355E9F 81%, rgba(53, 94, 159, 0.28) 0%)' });
                $('.count-wrap').css({ 'position': 'absolute', 'left': '80%' });
                $('.count-wrap p').html("5");
                break;
            case 6:
                $('.fillPercentage').css({ 'background': 'linear-gradient(90deg, #355E9F 100%, #FCDDDE 0%)' });
                $('.count-wrap').css({ 'position': 'absolute', 'left': '94%' });
                $('.count-wrap p').html("6");
                break;
            default:
                break;
        }
    }
}

$(document).ready(function () {
    multistepForm();
    updateSliderValues(1); // Initialize the slider values for the first page
});
</script>
