$(function() {

    var $mainMenuItems = $("#main-menu ul").children("li"), // on récupere tous les li compris les ul de l'id #main-menu
        totalMainMenuItems = $mainMenuItems.length, // on récupere le nombre de li ci-dessus
        openedIndex = 2, // on donne la veur -1 à openedIndex
        init = function() {
            bindEvents();
            //  nomDeLaFonction=function(argumentàVerifier)
            validIndex = function(indexToCheck) { // on créé une fonction qui vérifie si l'index est valide (non obligatoire)
                return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
            };
            if (validIndex(openedIndex))
                animateItem($mainMenuItems.eq(openedIndex), true, 700);
        },


        bindEvents = function() {
            $mainMenuItems.children(".images").click(function() { //quand je clic sur les elements li avec la class ".images"
                var newIndex = $(this).parent().index(); //alors je récupere leur index (img sur laquelle j'ai cliquée) dans la var newIndex
                checkAndAnimateItem(newIndex);
            });

            // Fonction Modification du CSS au survol des boutons

            $(".buttons").hover(
                function() {
                    $(this).addClass("hovered");
                },
                function() {
                    $(this).removeClass("hovered");
                }
            );
            $(".buttons").click(function() {
                var newIndex = $(this).index();
                checkAndAnimateItem(newIndex);
            });
            // Fin de la fonction Modification du CSS au survol des boutons
        },


        animateItem = function($item, toOpen, speed) { //créer une fonction qui demande les paramétres $item, ouvert ou pas (true/false) et la vitesse d'animation
            var $colorImage = $item.find(".color"), //via l'index, je récupere l'emplacement de l'image couleur que je stock dans la var $colorImage 
                itemParam = toOpen ? { width: "420px" } : { width: "140px" }, // On vérifie si itempParam est ouvert, so oui on lui donne la largeur de 420px (img + description) sinon on lui donne 140px de largeur
                colorImageParam = toOpen ? { left: "0px" } : { left: "140px" }; // On vérifie si itempParam est ouvert, so oui on lui modifie la valeur "left:0px" (pour faire apparaitre l'actrice en couleur) sinon on lui donne 140px
            $colorImage.animate(colorImageParam, speed);
            $item.animate(itemParam, speed);
        },

        checkAndAnimateItem = function(indexToCheckAndAnimate) {

            if (openedIndex === indexToCheckAndAnimate) {
                animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                openedIndex = -1;
            } else {
                if (validIndex(indexToCheckAndAnimate)) // on test si newIndex est >=0 et <totalMainMenuItems via la fonction validIndex
                {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250); // si on clic sur l'img déjà ouverte, on la ferme
                    openedIndex = indexToCheckAndAnimate;
                    animateItem($mainMenuItems.eq(indexToCheckAndAnimate), true, 250);
                }
            }
        };
    init();
});