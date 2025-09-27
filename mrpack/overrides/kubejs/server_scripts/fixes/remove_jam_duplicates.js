ServerEvents.recipes(event => {
    event.remove({id: "vintagedelight:jam/pepper_jam_jar"})
    event.remove({id: "vintagedelight:jam/apple_sauce_jar"})
    event.remove({id: "vintagedelight:jam/gearo_berry_jam_jar"})
    event.remove({id: "vintagedelight:jam/sweet_berry_jam_jar"})
    event.remove({id: "vintagedelight:jam/glow_berry_jam_jar"})
    event.remove({id: "vintagedelight:jam/relish_jar"})
})

ServerEvents.tags("item", event => {
    event.add("forge:jam_jars", [
        "fruitsdelight:apple_jelly",
        "fruitsdelight:blueberry_jelly",
        "fruitsdelight:glowberry_jelly",
        "fruitsdelight:hamimelon_jelly",
        "fruitsdelight:melon_jelly",
        "fruitsdelight:hawberry_jelly",
        "fruitsdelight:lychee_jelly",
        "fruitsdelight:mango_jelly",
        "fruitsdelight:orange_jelly",
        "fruitsdelight:peach_jelly",
        "fruitsdelight:pear_jelly",
        "fruitsdelight:persimmon_jelly",
        "fruitsdelight:pineapple_jelly",
        "fruitsdelight:lemon_jelly",
        "fruitsdelight:cranberry_jelly",
        "fruitsdelight:mangosteen_jelly",
        "fruitsdelight:sweetberry_jelly",
        "fruitsdelight:chorus_jelly",
        "fruitsdelight:bayberry_jelly",
        "fruitsdelight:kiwi_jelly",
        "fruitsdelight:fig_jelly",
        "fruitsdelight:durian_jelly"
    ])

    let vdJamJars = [
        "vintagedelight:gearo_berry_mason_jar", 
        "vintagedelight:sweet_berry_mason_jar", 
        "vintagedelight:glow_berry_mason_jar", 
        "vintagedelight:pepper_jam_mason_jar"
    ]
    event.add("forge:jams", vdJamJars)
    event.add("fruitsdelight:jelly", vdJamJars)
})