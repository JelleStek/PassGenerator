import $ from "jquery";

//Make sure only one of the options is selected.
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 1) {
        $('input[type=checkbox]').prop('checked', false);
        $(this).prop('checked', true);
    }
});
