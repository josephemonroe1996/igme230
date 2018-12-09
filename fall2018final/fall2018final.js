$(".list").hide(); /*hides submenu items on page load */
$(".top").click(function(){ /* slide menu on click */
    $(this).next().slideToggle();
});

$("article").load("article0.txt"); /*loads content on page start */
$("input[name='story']").change(function(){ /*loads content on change */
    $("article").load($(this).val());
});

