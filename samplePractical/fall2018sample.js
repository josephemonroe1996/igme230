/* Don't use <script> tags in a linked js file! */

$(".submenu").hide();
$(".menuitem").click(function(){
    $(this).next().slideToggle();
});
$("#content").load("content1.txt");
$("#choose-content").change(function(){
    $("#content").load($(this).val());
});