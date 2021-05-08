var runtimeCluster = [];
var number;
var clusterNumbers = [1, 2, 3, 4, 5, 6];
/* prevents functions to be launched before dom is ready*/
$( document ).ready(function() 
{
    $(".inputButton").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button;

        }
    );

$(".addURL").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button;
            storeUrlCluster();
        }
    );

$(".resetCluster").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button;
            resetCluster();
        }
    );

$(".nameCluster").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button;
            nameClusterButton();
        }
    );

$(".launch").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button;
            launchCluster();
        }
    );
}