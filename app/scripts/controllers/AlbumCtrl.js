// define a controller for the Album view
(function() {
     function AlbumCtrl() {
       this.albumData = albumPicasso;
     }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();
