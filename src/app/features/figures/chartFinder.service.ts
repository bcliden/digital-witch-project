import { Injectable } from "@angular/core";
import { APP_BASE_HREF } from '@angular/common';
import { Inject } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ChartFinderService {
    private path = 'assets/csv'
    private url = this.baseHref + this.path

    private primaries: Array<string> = [
        'Halloweentown',
        'Harry_Potter_and_the_Sorcerers_Stone',
        'Snow_White_and_the_Seven_Dwarfs',
        'The_Blair_Witch_Project',
        'The_Craft',
        'The_Witches_of_Eastwick',
    ]

    private secondaries: Array<string> = [
        "Antichrist",
        "Beautiful_Creatures",
        "Bedknobs_and_Broomsticks",
        "Bell_Book_and_Candle",
        "Bewitched",
        "Blair_Witch_Project",
        "Book_of_Shadows_Blair_Witch_Project_2",
        "Chronicles_of_Narnia",
        "Dark_Shadows",
        "Death_Becomes_Her",
        "Drag_Me_To_Hell",
        "Eve_s_Bayou",
        "Evil_Dead",
        "Halloweentown_High",
        "Halloweentown_II",
        "Hansel_and_Gretel",
        "Harry_Potter_and_the_Chamber_of_Secrets",
        "Harry_Potter_and_the_Deathly_Hallows_Part_One",
        "Harry_Potter_and_the_Deathly_Hallows_Part_Two",
        "Harry_Potter_and_the_Goblet_of_Fire",
        "Harry_Potter_and_the_Half-Blood_Prince",
        "Harry_Potter_and_the_Order_of_the_Phoenix",
        "Harry_Potter_and_the_Prisoner_of_Azkaban",
        "Harry_Potter_and_the_Sorcerer_s_Stone",
        "Hocus_Pocus",
        "Into_the_Woods",
        "I_Married_a_Witch",
        "Kikis_Delivery_Service",
        "Kill_List",
        "Little_Mermaid",
        "Lords_of_Salem",
        "Macbeth",
        "Maleficent",
        "Mother_of_Tears",
        "Oz_The_Great_and_Powerful",
        "Practical_Magic",
        "Pumpkinhead",
        "Pumpkinhead_II",
        "Return_to_Halloweentown",
        "Rosemary_s_Baby",
        "Sabrina_the_Teenage_Witch",
        "Season_of_the_Witch",
        "Skeleton_Key",
        "Sleeping_Beauty",
        "Sleepy_Hollow",
        "Snow_White_and_the_Huntsman",
        "Snow_White_and_the_Seven_Dwarfs",
        "Something_Wicked_This_Way_Comes",
        "Stardust",
        "Suspiria",
        "Teen_Witch",
        "The_Black_Cauldron",
        "The_Conjuring",
        "The_Covenant",
        "The_Craft",
        "The_Crucible",
        "The_Devils",
        "The_Good_Witch",
        "The_Huntsman",
        "The_Last_WItch_Hunter",
        "The_Love_Witch",
        "The_Wicker_Man",
        "The_Witch",
        "The_Witches",
        "The_Wizard_of_Oz",
        "The_Woods",
        "Twitches",
        "Twitches_Too",
        "Witches_of_Eastwick",
        "Witchfinder_General",
        "Halloweentown"
    ]

    constructor(@Inject(APP_BASE_HREF) private baseHref: string) { }

    getChartsByPrimary(slug: string): Array<string> {
        // get primary movie, then pair with all secondaries, return file paths
        if (!this.primaries.includes(slug)) {
            return []
        }
        const r = this.secondaries.map(movie => `${this.url}/${slug}-${movie}.csv`)
        console.log("charts: ", r)
        return r
    }

    getChartsBySecondary(slug: string): Array<string> {
        if (!this.secondaries.includes(slug)) {
            return []
        }
        return this.primaries.map(movie => `${this.url}/${movie}-${slug}.csv`)
    }

}
