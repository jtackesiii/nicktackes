$('input[type="checkbox"]').click(function() {
    var $checked = $('input[type="checkbox"]:checked');
    var $items = $('.timeline');
    var filters = {};
    var numFilters = 0;

    if ($checked.length) {
        $('.timeline').hide();

        $checked.each(function() {
           filters[$(this).data('filter-type')] = $(this).val();
        });

        $items.each(function(i) {
        	for (var key in filters) {
            	if ($(this).data(key) == filters[key]) {
                    $(this).show();
                }
            }
        });
    } else {
        $('.timeline').show();
    }
});
