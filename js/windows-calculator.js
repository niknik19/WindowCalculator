$(function () {
    $('.wc-height-slider').slider({
        orientation: "vertical",
        min: 500,
        max: 2400,
        change: function (event, ui) {
            $('.wc-height-value input').val(ui.value);
        }
    });

    $('.wc-height-value input').on('change', function (event) {
        $('.wc-height-slider').slider('value', [this.value]);
    });

    $('.wc-width-slider').slider({
        orientation: "horizantal",
        min: 1350,
        max: 3000,
        change: function (event, ui) {
            $('.wc-width-value input').val(ui.value);
        }
    });

    $('.wc-width-value input').on('change', function (event) {
        $('.wc-width-slider').slider('value', [this.value]);
    });

    $.widget("custom.imageselectmenu", $.ui.selectmenu, {
        _renderItem: function (ul, item) {
            var li = $("<li>", { text: item.label });

            if (item.disabled) {
                li.addClass('ui-state-disabled');
            }

            $("<span>", {
                style: item.element.attr("data-style"),
                "class": "ui-icon"
            }).appendTo(li);

            return li.appendTo(ul);
        }
    });

    $('.wc-type-select')
        .imageselectmenu({
            change: function (event, ui) {
                $('.wc-image').css('background-image',
                    ui
                    .item
                    .element
                    .data('style')
                    .replace(/\d{2}/g, function(group) { return group * 10; })
                    .replace(/;/g, '')
                    .split(':')[1]);
            }
        })
        .imageselectmenu("menuWidget")
        .addClass('wc-type-select-ui');

    $('.wc-profile-select')
        .selectmenu()
        .selectmenu("menuWidget")
        .addClass('wc-profile-select-ui');

    $('.wc-glazing-type-select')
        .selectmenu()
        .selectmenu("menuWidget")
        .addClass('wc-profile-select-ui');

    $('.wc-calculate')
        .button();


    $('.wc-height-value input').val(1000).change();
    $('.wc-width-value input').val(1500).change();

    //$('.wc-type-select').val('singwigedh');

    //$('.wc-type-select').imageselectmenu('refresh');

    $('.wc-image').css('background-image',
                    $('.wc-type-select option').first()
                    .data('style')
                    .replace(/\d{2}/g, function (group) { return group * 10; })
                    .replace(/;/g, '')
                    .split(':')[1]);
});