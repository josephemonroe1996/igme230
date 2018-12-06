/* Don't use <script> tags in a linked js file! */

$(".submenu").hide(); /*hides submenu items on page load */
$(".menuitem").click(function(){ /* slide menu on click */
    $(this).next().slideToggle();
});
$("#content").load("content1.txt"); /*loads content on page start */
$("#choose-content").change(function(){ /*loads content on change */
    $("#content").load($(this).val());
});