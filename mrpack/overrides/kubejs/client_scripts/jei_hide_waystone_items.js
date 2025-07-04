JEIEvents.hideItems(event => {
    function hide(itemId) {
        event.hide(itemId)
    }

    hide("waystones:sharestone")
    hide("waystones:warp_plate")
    hide("waystones:portstone")
    hide("waystones:white_sharestone")
    hide("waystones:orange_sharestone")
    hide("waystones:magenta_sharestone")
    hide("waystones:light_blue_sharestone")
    hide("waystones:yellow_sharestone")
    hide("waystones:lime_sharestone")
    hide("waystones:pink_sharestone")
    hide("waystones:gray_sharestone")
    hide("waystones:light_gray_sharestone")
    hide("waystones:cyan_sharestone")
    hide("waystones:purple_sharestone")
    hide("waystones:blue_sharestone")
    hide("waystones:brown_sharestone")
    hide("waystones:green_sharestone")
    hide("waystones:red_sharestone")
    hide("waystones:black_sharestone")
    hide("waystones:warp_stone")
})

JEIEvents.removeCategories(event => {
  // console.log(event.categoryIds) //log a list of all category ids to logs/kubejs/client.txt
  event.remove("waystones:warp_plate")
})