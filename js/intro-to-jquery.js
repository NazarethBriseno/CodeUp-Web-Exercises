
//This line will wait until the document has fully loaded until applying these functions/instructions
//With this function you can put the script element in the head
// $(document).ready(function(){
//     $("h3").click(function(){
//         $(this).next().slideToggle(500);
//     });
// });


let $refToLibrary = $("#library");
//ID Selector to alter content
// $refToLibrary.text("jQuery makes life easier");

//Get reference to content
console.log($refToLibrary.text());

let li3text = $refToLibrary.text();
$refToLibrary.text(li3text + " makes life easier");

$(".framework").css({
    'border': '1px solid black',
    'width': 'fit content'
});

$("p, li").text("I've taken over.").css("color", "hotpink")

