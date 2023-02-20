const found = function found() {    
    $(document).ready(function() {
        $('img').click(function(event){
            //$(this).css('visibility', 'hidden');
            $(this).animate({opacity:0});
        }); 
    });
}

const tiles = ["B1", "B2", "B3", "B4", "B5", "I1", "I2", "I3", "I4", "I5", "N1", "N2", "N3", "N4", "N5", "G1", "G2", "G3", "G4", "G5", "O1", "O2", "O3", "O4", "O5"];
function random_tile(){
    $(document).ready(function() {
        $('#generate').click(function(event){
            let int = Math.floor(Math.random() * 24);
            console.log(tiles[int]);
            $('#generated-tile').text(tiles[int]);
        }); 
    });
}

found();
random_tile();
