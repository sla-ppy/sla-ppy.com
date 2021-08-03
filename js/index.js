$(document).ready(function () {
    var header = $('body');

    var backgrounds = new Array(
        "../assets/backgrounds/20_waves/60dg_black_1.svg"
        , "../assets/backgrounds/20_waves/60dg_black_2.svg"
        , "../assets/backgrounds/20_waves/60dg_black_3.svg"
        , "../assets/backgrounds/20_waves/60dg_black_4.svg"
        , "../assets/backgrounds/20_waves/60dg_black_5.svg"
        , "../assets/backgrounds/20_waves/60dg_black_6.svg"
        , "../assets/backgrounds/20_waves/60dg_black_7.svg"
        , "../assets/backgrounds/20_waves/60dg_black_8.svg"
        , "../assets/backgrounds/20_waves/60dg_black_9.svg"
        , "../assets/backgrounds/20_waves/60dg_black_10.svg"
        , "../assets/backgrounds/20_waves/60dg_black_11.svg"
        , "../assets/backgrounds/20_waves/60dg_black_12.svg"
        , "../assets/backgrounds/20_waves/60dg_black_13.svg"
        , "../assets/backgrounds/20_waves/60dg_black_14.svg"
        , "../assets/backgrounds/20_waves/60dg_black_15.svg"
        , "../assets/backgrounds/20_waves/60dg_black_16.svg"
        , "../assets/backgrounds/20_waves/60dg_black_17.svg"
        , "../assets/backgrounds/20_waves/60dg_black_18.svg"
        , "../assets/backgrounds/20_waves/60dg_black_19.svg"
        , "../assets/backgrounds/20_waves/60dg_black_20.svg"
    );

    var current = 0;

    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }

    setInterval(nextBackground, 1000);

    header.css('background-image', backgrounds[0]);
});
