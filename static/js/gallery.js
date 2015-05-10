// Image Gallery

var app = angular.module('galleryApp',[]);

app.controller('GalleryController', ['$scope', function($scope) {
    var zoomer = document.getElementById("zoomer");
    var zoomImage = document.getElementById("image-zoom");
    var zoomFocus = document.getElementById("zoom-focus");
    var imageCont = document.getElementById("image-cont");   
    
    $scope.selectImage = function($event){
        var mainImage = document.getElementById("display-image");
        imageSrc = $event.target.src;
        mainImage.src = imageSrc;
    };
    
    $scope.zoomImage = function($event){
        mainImageSrc = $event.target.src;
        zoomImage.src = mainImageSrc;
        zoomer.style.display = "block";
        
        angular.element(zoomImage).css('right', $event.pageX + 'px');
        angular.element(zoomImage).css('bottom', $event.pageY + 'px');
        
        focusX = $event.pageX - 30;
        focusY = $event.pageY - 30;
        /*angular.element(zoomFocus).css('left', focusX + 'px');
        angular.element(zoomFocus).css('top', focusY + 'px');*/
        var x = $(zoomFocus).offset().left;
        var y = $(zoomFocus).offset().top;
        $(zoomFocus).css({ "left": focusX , "top": focusY });
        
    };
    
    $scope.hideImage = function(){
        
        zoomImage.src = '';
        zoomer.style.display = "none";
        angular.element(zoomFocus).css('left', '0px');
        angular.element(zoomFocus).css('top', '0px');
    };
    
    $scope.scrollLeft = function($event){                
        
        $("#image-cont ul").animate({
                "left": "+=20%"
                }, 500);
       
    };
    
    $scope.scrollRight = function($event){               
        $("#image-cont ul").animate({                
                "left": "-=20%"
                }, 500);       
    };
    
}]);


$(document).ready(function(){
   $.each($("#image-cont img"), function( index, value ) {
       left = ( index * 20 ) + "%";
       $(value).css({ "position": "absolute", "left" : left});
   });
});