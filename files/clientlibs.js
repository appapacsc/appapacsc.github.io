$(document).ready(function(){$(".box-selector-radio-group .box-selector-radio").click(function(){var b="."+$(this).parent().parent().attr("data-radio-group");
$(b).each(function(){$(this).find(".radio-input").is(":checked")?$(this).parent().addClass("box-selector-radio-checked"):$(this).parent().removeClass("box-selector-radio-checked")
})
}),$(".box-selector-checkbox-group .box-selector-checkbox").click(function(){var e="."+$(this).parent().parent().attr("data-checkbox-group"),d=$(this).parent().parent().attr("data-checkbox-group-limit"),f=!1;
$(e).each(function(){$(e).find(".checkbox-input:checked").length<=d?$(this).find(".checkbox-input").is(":checked")?$(this).parent().addClass("box-selector-checkbox-checked"):$(this).parent().removeClass("box-selector-checkbox-checked"):f=!0
}),f&&$(this).find(".checkbox-input").prop("checked",!1)
});
$
});