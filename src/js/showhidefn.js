$("#sman").click(function(){
    $("#search").show();
    $("#searchclient").hide();
    $("#formm").hide();
    $("#formc").hide();
    $("#formshipcomp").hide();
    $("#formshipment").hide();
});
$("#aman").click(function(){
    $("#search").hide();
    $("#searchclient").hide();
    $("#formm").show();
    $("#formc").hide();
    $("#formshipcomp").hide();
    $("#formshipment").hide();
});
$("#scli").click(function(){
    $("#search").hide();
    $("#searchclient").show();
    $("#formm").hide();
    $("#formc").hide();
    $("#formshipcomp").hide();
    $("#formshipment").hide();
});
$("#acli").click(function(){
    $("#search").hide();
    $("#searchclient").hide();
    $("#formm").hide();
    $("#formc").show();
    $("#formshipcomp").hide();
    $("#formshipment").hide();
});
$("#ascomp").click(function(){
    $("#search").hide();
    $("#searchclient").hide();
    $("#formm").hide();
    $("#formc").hide();
    $("#formshipcomp").show();
    $("#formshipment").hide();
});
$("#aship").click(function(){
    $("#search").hide();
    $("#searchclient").hide();
    $("#formm").hide();
    $("#formc").hide();
    $("#formshipcomp").hide();
    $("#formshipment").show();
});