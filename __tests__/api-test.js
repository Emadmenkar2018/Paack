import axios from 'axios';
import { rootURL } from '../src/config'


jest.mock('axios');


export const fetchDeliveries = async () => {
    const url = `${rootURL()}/deliveries`;
    return await axios.get(url);
};
 


describe('fetchDeliveries', () => {
    it('fetches Deliveries successfully data from an API', async () => {
        const data = mockDeliveries;

        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(fetchDeliveries('react')).resolves.toEqual(data);
        expect(axios.get).toHaveBeenCalledWith(`${rootURL()}/deliveries`,);

    });

    it('fetches Deliveries erroneously data from an API', async () => {
        const errorMessage = 'Network Error';

        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );

        await expect(fetchDeliveries('react')).rejects.toThrow(errorMessage);
    }); 

}); 

const mockDeliveries = [
    {
        "address": "35273 Padberg Shores",
        "city": "Norwalk",
        "zipCode": "53151",
        "latitude": "9.1124",
        "longitude": "165.8914",
        "customer": "Vera Homenick",
        "id": "1"
    },
    {
        "address": "1384 Jaeden Spring",
        "city": "Aspen Hill",
        "zipCode": "20724-7880",
        "latitude": "47.7316",
        "longitude": "81.6015",
        "customer": "Luke Windler",
        "id": "2"
    },
    {
        "address": "688 Baumbach Grove",
        "city": "Anderson",
        "zipCode": "74074",
        "latitude": "-51.3774",
        "longitude": "-77.4789",
        "customer": "Mrs. Zachary Heaney",
        "id": "3"
    },
    {
        "address": "956 Ayden Place",
        "city": "Santa Clarita",
        "zipCode": "94369",
        "latitude": "-15.5464",
        "longitude": "-136.6966",
        "customer": "Lisa Cummings",
        "id": "4"
    },
    {
        "address": "385 Kertzmann Brook",
        "city": "Olympia",
        "zipCode": "36995-9744",
        "latitude": "70.6427",
        "longitude": "110.0486",
        "customer": "Shawna Jast",
        "id": "5"
    },
    {
        "address": "439 Etha Path",
        "city": "Santa Cruz",
        "zipCode": "52558-2917",
        "latitude": "-68.1840",
        "longitude": "15.6575",
        "customer": "Claire Jast",
        "id": "6"
    },
    {
        "address": "2991 Reyes Cliff",
        "city": "Carmel",
        "zipCode": "03660-8314",
        "latitude": "52.7449",
        "longitude": "-27.7121",
        "customer": "Christy Ruecker",
        "id": "7"
    },
    {
        "address": "574 Dino Lodge",
        "city": "Champaign",
        "zipCode": "68239-8767",
        "latitude": "-52.0684",
        "longitude": "-84.8884",
        "customer": "Hattie Jenkins",
        "id": "8"
    },
    {
        "address": "874 Nitzsche Pass",
        "city": "Bozeman",
        "zipCode": "59234",
        "latitude": "58.6495",
        "longitude": "-49.6498",
        "customer": "Tony Labadie",
        "id": "9"
    },
    {
        "address": "6320 Hamill Stravenue",
        "city": "San Jacinto",
        "zipCode": "55374-9316",
        "latitude": "11.3722",
        "longitude": "130.6290",
        "customer": "Stella Hodkiewicz",
        "id": "10"
    },
    {
        "address": "7436 Mosciski River",
        "city": "Chino",
        "zipCode": "67803",
        "latitude": "71.6012",
        "longitude": "45.9012",
        "customer": "Fannie Kautzer",
        "id": "11"
    },
    {
        "address": "55537 Luis Bypass",
        "city": "Scottsdale",
        "zipCode": "31038-2631",
        "latitude": "-69.7511",
        "longitude": "-83.6738",
        "customer": "Melvin Kilback",
        "id": "12"
    },
    {
        "address": "57622 Blair Pines",
        "city": "Downey",
        "zipCode": "39361-3606",
        "latitude": "-55.4777",
        "longitude": "-46.0228",
        "customer": "Isabel Hahn",
        "id": "13"
    },
    {
        "address": "39904 Batz Skyway",
        "city": "Las Cruces",
        "zipCode": "38270-7354",
        "latitude": "-48.2219",
        "longitude": "-44.5943",
        "customer": "Angela McKenzie",
        "id": "14"
    },
    {
        "address": "91469 Schmeler Alley",
        "city": "Bayonne",
        "zipCode": "68871-1527",
        "latitude": "-63.6523",
        "longitude": "-90.3020",
        "customer": "Dexter Funk",
        "id": "15"
    },
    {
        "address": "312 Howard Plains",
        "city": "Clifton",
        "zipCode": "93955-2610",
        "latitude": "-27.9411",
        "longitude": "-87.8412",
        "customer": "Marjorie MacGyver",
        "id": "16"
    },
    {
        "address": "855 Treutel Hollow",
        "city": "Leesburg",
        "zipCode": "34058-2618",
        "latitude": "-54.5106",
        "longitude": "93.9025",
        "customer": "Moses Koepp DDS",
        "id": "17"
    },
    {
        "address": "241 Melyna Isle",
        "city": "Aspen Hill",
        "zipCode": "50284",
        "latitude": "-85.3324",
        "longitude": "-30.9266",
        "customer": "Monique Turner",
        "id": "18"
    },
    {
        "address": "8969 Mariano Underpass",
        "city": "Bowling Green",
        "zipCode": "01486",
        "latitude": "-73.0082",
        "longitude": "-37.9391",
        "customer": "Marlene Wolff",
        "id": "19"
    },
    {
        "address": "177 Runte Field",
        "city": "Portage",
        "zipCode": "23103",
        "latitude": "78.6236",
        "longitude": "-89.0423",
        "customer": "Darrell Watsica",
        "id": "20"
    },
    {
        "address": "7842 Krystina Ferry",
        "city": "Novato",
        "zipCode": "85743",
        "latitude": "-6.9059",
        "longitude": "149.1334",
        "customer": "Gilbert Glover",
        "id": "21"
    },
    {
        "address": "148 Henderson Brook",
        "city": "Hammond",
        "zipCode": "78852",
        "latitude": "26.9264",
        "longitude": "66.7275",
        "customer": "Ernest Terry",
        "id": "22"
    },
    {
        "address": "2864 Skiles Pines",
        "city": "Spring Valley",
        "zipCode": "71379",
        "latitude": "33.4633",
        "longitude": "96.9382",
        "customer": "Timmy Strosin",
        "id": "23"
    },
    {
        "address": "66287 Smitham Keys",
        "city": "Carson City",
        "zipCode": "13265-1800",
        "latitude": "62.5525",
        "longitude": "22.0873",
        "customer": "Jack Kassulke",
        "id": "24"
    },
    {
        "address": "797 Gerhold Corner",
        "city": "Roseville",
        "zipCode": "49867-4146",
        "latitude": "46.4927",
        "longitude": "157.1518",
        "customer": "Christine Grant",
        "id": "25"
    },
    {
        "address": "2473 Gutkowski Stream",
        "city": "Fountain Valley",
        "zipCode": "71051-3987",
        "latitude": "-10.5521",
        "longitude": "-94.9020",
        "customer": "Jeffery Lockman",
        "id": "26"
    },
    {
        "address": "996 Rebekah Well",
        "city": "Oakland Park",
        "zipCode": "28764",
        "latitude": "-47.8781",
        "longitude": "-97.3952",
        "customer": "Luke Koss",
        "id": "27"
    },
    {
        "address": "70433 Loren Meadows",
        "city": "Palatine",
        "zipCode": "65276",
        "latitude": "-43.7849",
        "longitude": "43.2238",
        "customer": "Lori Runolfsson",
        "id": "28"
    },
    {
        "address": "002 Greenholt Crossroad",
        "city": "Winston-Salem",
        "zipCode": "42064",
        "latitude": "-72.6200",
        "longitude": "134.0053",
        "customer": "Isabel Pacocha",
        "id": "29"
    },
    {
        "address": "732 Terry Isle",
        "city": "Pensacola",
        "zipCode": "34495-8207",
        "latitude": "24.2780",
        "longitude": "-13.5237",
        "customer": "Kelly Bechtelar",
        "id": "30"
    },
    {
        "address": "34330 Morissette Shoals",
        "city": "Visalia",
        "zipCode": "63052",
        "latitude": "-48.6109",
        "longitude": "-117.6491",
        "customer": "Bethany Wintheiser",
        "id": "31"
    },
    {
        "address": "06055 Stanton Causeway",
        "city": "Joliet",
        "zipCode": "60782-5045",
        "latitude": "-51.8356",
        "longitude": "-97.5127",
        "customer": "Patsy Mosciski",
        "id": "32"
    },
    {
        "address": "325 Coy Landing",
        "city": "St. Cloud",
        "zipCode": "02527",
        "latitude": "0.3943",
        "longitude": "-50.4686",
        "customer": "Pat Hickle",
        "id": "33"
    },
    {
        "address": "6011 Murray Ford",
        "city": "Merced",
        "zipCode": "64603",
        "latitude": "-42.8867",
        "longitude": "100.1301",
        "customer": "Faith Ruecker",
        "id": "34"
    },
    {
        "address": "851 Kiley Viaduct",
        "city": "Livonia",
        "zipCode": "67830-1195",
        "latitude": "-78.0838",
        "longitude": "104.6675",
        "customer": "Curtis Stehr",
        "id": "35"
    },
    {
        "address": "48714 Rigoberto Walks",
        "city": "Columbia",
        "zipCode": "00786-9228",
        "latitude": "-0.6569",
        "longitude": "-15.8133",
        "customer": "Christy Padberg",
        "id": "36"
    },
    {
        "address": "77294 Dickinson Gardens",
        "city": "Apopka",
        "zipCode": "72942",
        "latitude": "-62.6733",
        "longitude": "-7.7544",
        "customer": "Guadalupe Huels",
        "id": "37"
    },
    {
        "address": "83807 Wyman Estate",
        "city": "Bowie",
        "zipCode": "97474",
        "latitude": "-51.0776",
        "longitude": "-107.0406",
        "customer": "Lisa Lemke",
        "id": "38"
    },
    {
        "address": "3989 Marge Stream",
        "city": "Nashua",
        "zipCode": "85311-2038",
        "latitude": "-11.5178",
        "longitude": "43.1888",
        "customer": "Kerry Thiel",
        "id": "39"
    },
    {
        "address": "2958 Timothy Drive",
        "city": "Rowland Heights",
        "zipCode": "42198-8681",
        "latitude": "-72.4891",
        "longitude": "104.9909",
        "customer": "Melba Wilkinson",
        "id": "40"
    },
    {
        "address": "0529 Greyson Tunnel",
        "city": "Oakland",
        "zipCode": "28154-1726",
        "latitude": "-61.6304",
        "longitude": "12.1494",
        "customer": "Shirley Auer",
        "id": "41"
    },
    {
        "address": "72504 Abshire Meadows",
        "city": "Meriden",
        "zipCode": "56821",
        "latitude": "71.5555",
        "longitude": "145.4941",
        "customer": "Edmond Kirlin",
        "id": "42"
    },
    {
        "address": "7140 Franecki Underpass",
        "city": "Daly City",
        "zipCode": "78924",
        "latitude": "-87.5826",
        "longitude": "-52.6338",
        "customer": "Mr. Troy Schamberger",
        "id": "43"
    },
    {
        "address": "05622 Marcelina Dam",
        "city": "Des Moines",
        "zipCode": "15980",
        "latitude": "62.7773",
        "longitude": "33.0842",
        "customer": "Joe Gutmann",
        "id": "44"
    },
    {
        "address": "16466 Haylee Lock",
        "city": "McAllen",
        "zipCode": "45276-3695",
        "latitude": "-32.5804",
        "longitude": "-8.4320",
        "customer": "Manuel Hirthe Jr.",
        "id": "45"
    },
    {
        "address": "547 Mittie Divide",
        "city": "Niagara Falls",
        "zipCode": "82727-9541",
        "latitude": "-1.6048",
        "longitude": "173.5975",
        "customer": "Willie Yost III",
        "id": "46"
    },
    {
        "address": "92226 Hagenes Harbor",
        "city": "Spring",
        "zipCode": "71747-9601",
        "latitude": "46.0869",
        "longitude": "-82.2467",
        "customer": "Roy Purdy",
        "id": "47"
    },
    {
        "address": "353 Pearlie Rapids",
        "city": "Columbus",
        "zipCode": "85556",
        "latitude": "82.8588",
        "longitude": "-12.1581",
        "customer": "Sherry Tremblay",
        "id": "48"
    },
    {
        "address": "9129 Maddison Parkway",
        "city": "Everett",
        "zipCode": "22114",
        "latitude": "82.1272",
        "longitude": "63.0834",
        "customer": "Marsha Botsford",
        "id": "49"
    },
    {
        "address": "75638 Ebert Curve",
        "city": "Trujillo Alto",
        "zipCode": "23128",
        "latitude": "23.5604",
        "longitude": "6.2444",
        "customer": "Virginia Kunde",
        "id": "50"
    },
    {
        "address": "5156 Helen Run",
        "city": "Riverview",
        "zipCode": "73015",
        "latitude": "-33.5425",
        "longitude": "43.3841",
        "customer": "Caleb Schmeler",
        "id": "51"
    },
    {
        "address": "582 Earline Springs",
        "city": "Rockwall",
        "zipCode": "60076-0324",
        "latitude": "-44.2922",
        "longitude": "101.3586",
        "customer": "Ms. Damon Marquardt",
        "id": "52"
    },
    {
        "address": "12506 Everett Ville",
        "city": "Eugene",
        "zipCode": "67794-9156",
        "latitude": "-6.4266",
        "longitude": "34.3042",
        "customer": "Chelsea Shields",
        "id": "53"
    },
    {
        "address": "2178 Simonis Freeway",
        "city": "Burlington",
        "zipCode": "97988-5388",
        "latitude": "63.2239",
        "longitude": "127.2467",
        "customer": "Marco O'Kon",
        "id": "54"
    },
    {
        "address": "5538 Ellie Trafficway",
        "city": "Westminster",
        "zipCode": "96034",
        "latitude": "-76.4787",
        "longitude": "-16.2824",
        "customer": "Pat Krajcik",
        "id": "55"
    },
    {
        "address": "5614 Sim Lodge",
        "city": "North Charleston",
        "zipCode": "06109",
        "latitude": "62.6712",
        "longitude": "-171.8270",
        "customer": "Israel Marquardt DVM",
        "id": "56"
    },
    {
        "address": "9790 Durgan Mountain",
        "city": "Bozeman",
        "zipCode": "84327-3132",
        "latitude": "-36.2384",
        "longitude": "-35.2960",
        "customer": "Lorenzo Torp",
        "id": "57"
    },
    {
        "address": "04036 McDermott Key",
        "city": "Beaumont",
        "zipCode": "41889-5278",
        "latitude": "79.3615",
        "longitude": "-4.8641",
        "customer": "Laurence Altenwerth",
        "id": "58"
    },
    {
        "address": "00943 Dach Cove",
        "city": "Monroe",
        "zipCode": "05589",
        "latitude": "-80.2869",
        "longitude": "11.1436",
        "customer": "Brandy Fahey",
        "id": "59"
    },
    {
        "address": "601 Sipes Landing",
        "city": "Temple",
        "zipCode": "41393-3629",
        "latitude": "43.0065",
        "longitude": "163.0414",
        "customer": "Faye Hickle",
        "id": "60"
    },
    {
        "address": "916 Shawna Land",
        "city": "Downers Grove",
        "zipCode": "27591",
        "latitude": "-44.7354",
        "longitude": "-74.2044",
        "customer": "Ivan Buckridge",
        "id": "61"
    },
    {
        "address": "0555 Wunsch Lodge",
        "city": "Scranton",
        "zipCode": "27876",
        "latitude": "-6.4358",
        "longitude": "58.0647",
        "customer": "Monica Block",
        "id": "62"
    },
    {
        "address": "05820 Lindgren Views",
        "city": "Montebello",
        "zipCode": "89512-6926",
        "latitude": "-62.0142",
        "longitude": "-0.7197",
        "customer": "Wendy Stark",
        "id": "63"
    },
    {
        "address": "9525 Hegmann Crescent",
        "city": "Fremont",
        "zipCode": "55912",
        "latitude": "27.3529",
        "longitude": "25.9393",
        "customer": "Faith Muller",
        "id": "64"
    },
    {
        "address": "206 Prosacco Curve",
        "city": "Arlington",
        "zipCode": "58031-2755",
        "latitude": "-55.9791",
        "longitude": "-96.2354",
        "customer": "Kay Cummerata",
        "id": "65"
    },
    {
        "address": "1014 O'Conner Radial",
        "city": "Hayward",
        "zipCode": "80252",
        "latitude": "-44.5881",
        "longitude": "161.0233",
        "customer": "Douglas Gulgowski MD",
        "id": "66"
    },
    {
        "address": "65920 Ratke Highway",
        "city": "Cleveland Heights",
        "zipCode": "71416-8692",
        "latitude": "-44.7029",
        "longitude": "91.3693",
        "customer": "Clara Runolfsdottir I",
        "id": "67"
    },
    {
        "address": "36258 Ryan Hills",
        "city": "Lawton",
        "zipCode": "67149-0516",
        "latitude": "27.8768",
        "longitude": "169.0789",
        "customer": "Margarita Heathcote DVM",
        "id": "68"
    },
    {
        "address": "5359 Rubie Pass",
        "city": "Fayetteville",
        "zipCode": "97890",
        "latitude": "76.6299",
        "longitude": "89.1162",
        "customer": "Catherine Muller",
        "id": "69"
    },
    {
        "address": "58088 King Coves",
        "city": "Lee's Summit",
        "zipCode": "36665",
        "latitude": "34.4228",
        "longitude": "-116.0665",
        "customer": "Benny Fay",
        "id": "70"
    },
    {
        "address": "06208 Boyle Lights",
        "city": "Newport Beach",
        "zipCode": "08718-8687",
        "latitude": "-60.1816",
        "longitude": "134.0936",
        "customer": "Theresa Rau",
        "id": "71"
    },
    {
        "address": "370 Roob Mews",
        "city": "Orland Park",
        "zipCode": "80487-9771",
        "latitude": "-10.8136",
        "longitude": "-123.1107",
        "customer": "Mr. Bobby Bradtke",
        "id": "72"
    },
    {
        "address": "37254 Elena Place",
        "city": "Orem",
        "zipCode": "86343",
        "latitude": "-37.8371",
        "longitude": "29.5459",
        "customer": "Mr. Bradley Metz",
        "id": "73"
    },
    {
        "address": "45513 Hilll Forge",
        "city": "Logan",
        "zipCode": "45287-5875",
        "latitude": "-13.4687",
        "longitude": "-124.6730",
        "customer": "Dan Kling",
        "id": "74"
    },
    {
        "address": "543 Janie Station",
        "city": "Midland",
        "zipCode": "74661",
        "latitude": "-83.6542",
        "longitude": "165.1244",
        "customer": "Reginald Carroll",
        "id": "75"
    },
    {
        "address": "1167 O'Connell Parkways",
        "city": "Palm Coast",
        "zipCode": "67433",
        "latitude": "11.8283",
        "longitude": "136.2032",
        "customer": "Miranda Lueilwitz",
        "id": "76"
    },
    {
        "address": "6048 Elvera Cliff",
        "city": "Burnsville",
        "zipCode": "65221-5771",
        "latitude": "64.8036",
        "longitude": "-158.4805",
        "customer": "Adrienne McDermott",
        "id": "77"
    },
    {
        "address": "664 Kaley Course",
        "city": "El Dorado Hills",
        "zipCode": "85598-1665",
        "latitude": "44.6174",
        "longitude": "113.8406",
        "customer": "Cody Ankunding",
        "id": "78"
    },
    {
        "address": "213 Samanta Villages",
        "city": "Beaumont",
        "zipCode": "78811-1855",
        "latitude": "84.5322",
        "longitude": "16.4953",
        "customer": "Jeremiah Wunsch IV",
        "id": "79"
    },
    {
        "address": "9137 Herman Curve",
        "city": "Orlando",
        "zipCode": "40988-9588",
        "latitude": "69.3596",
        "longitude": "113.8090",
        "customer": "Miss Pedro Bauch",
        "id": "80"
    },
    {
        "address": "3786 Estevan Neck",
        "city": "Marysville",
        "zipCode": "28206",
        "latitude": "-10.9019",
        "longitude": "120.3583",
        "customer": "Caleb Harvey",
        "id": "81"
    },
    {
        "address": "9982 Harber Station",
        "city": "Gaithersburg",
        "zipCode": "89773",
        "latitude": "83.0906",
        "longitude": "-167.0051",
        "customer": "Regina Wyman",
        "id": "82"
    },
    {
        "address": "44132 Robel Plaza",
        "city": "Asheville",
        "zipCode": "18523",
        "latitude": "4.2917",
        "longitude": "148.1765",
        "customer": "Miss Jose Rempel",
        "id": "83"
    },
    {
        "address": "92654 Norris Key",
        "city": "Atascocita",
        "zipCode": "70747-2682",
        "latitude": "0.7401",
        "longitude": "-38.4597",
        "customer": "Jo Hackett",
        "id": "84"
    },
    {
        "address": "50410 Elvera Burgs",
        "city": "DeKalb",
        "zipCode": "97463",
        "latitude": "67.6038",
        "longitude": "-38.8274",
        "customer": "Dianne Nicolas",
        "id": "85"
    },
    {
        "address": "291 Katherine Gateway",
        "city": "Columbia",
        "zipCode": "89937-5615",
        "latitude": "-12.4139",
        "longitude": "-20.0801",
        "customer": "Hattie Adams MD",
        "id": "86"
    },
    {
        "address": "99104 Farrell Route",
        "city": "Tamarac",
        "zipCode": "34883-0995",
        "latitude": "-88.1944",
        "longitude": "0.6115",
        "customer": "Elvira Oberbrunner",
        "id": "87"
    },
    {
        "address": "622 Schultz Locks",
        "city": "Lee's Summit",
        "zipCode": "77258",
        "latitude": "-14.6134",
        "longitude": "-118.5815",
        "customer": "Miss Bennie Cartwright",
        "id": "88"
    },
    {
        "address": "1115 Katherine Island",
        "city": "Alameda",
        "zipCode": "81094",
        "latitude": "38.1299",
        "longitude": "57.8830",
        "customer": "Mr. Kathy O'Kon",
        "id": "89"
    },
    {
        "address": "3296 Sydni Route",
        "city": "Orange",
        "zipCode": "68771",
        "latitude": "-38.6789",
        "longitude": "124.5264",
        "customer": "Noel Herzog",
        "id": "90"
    },
    {
        "address": "427 Bosco Plains",
        "city": "Bolingbrook",
        "zipCode": "82867-6434",
        "latitude": "5.9014",
        "longitude": "-159.1244",
        "customer": "Jeffrey Brekke",
        "id": "91"
    },
    {
        "address": "09973 Brown Streets",
        "city": "Sioux Falls",
        "zipCode": "50168-1590",
        "latitude": "78.9818",
        "longitude": "-39.1967",
        "customer": "Terrance Treutel",
        "id": "92"
    },
    {
        "address": "561 Hettinger Meadow",
        "city": "Manhattan",
        "zipCode": "95987",
        "latitude": "-55.1791",
        "longitude": "-146.3326",
        "customer": "Elmer Schmitt IV",
        "id": "93"
    },
    {
        "address": "4494 Dickinson Green",
        "city": "McLean",
        "zipCode": "70578",
        "latitude": "50.3458",
        "longitude": "126.9154",
        "customer": "Glenda Little",
        "id": "94"
    },
    {
        "address": "387 Bogisich Mount",
        "city": "Hackensack",
        "zipCode": "34530",
        "latitude": "-51.9011",
        "longitude": "147.1652",
        "customer": "Elvira Fay",
        "id": "95"
    },
    {
        "address": "60867 Abbott Rapid",
        "city": "Burien",
        "zipCode": "17013-8794",
        "latitude": "46.8193",
        "longitude": "173.2740",
        "customer": "Carol Bernier",
        "id": "96"
    },
    {
        "address": "60096 Jeanie Gardens",
        "city": "Baldwin Park",
        "zipCode": "08296",
        "latitude": "30.0828",
        "longitude": "-87.4608",
        "customer": "Tami Roob Sr.",
        "id": "97"
    },
    {
        "address": "01025 Craig Throughway",
        "city": "Clovis",
        "zipCode": "59512-0454",
        "latitude": "84.6279",
        "longitude": "-122.4745",
        "customer": "Archie King",
        "id": "98"
    },
    {
        "address": "023 Orlando Motorway",
        "city": "Diamond Bar",
        "zipCode": "03408-9959",
        "latitude": "36.3554",
        "longitude": "-119.9678",
        "customer": "Natasha Doyle",
        "id": "99"
    },
    {
        "address": "31731 Wintheiser Drives",
        "city": "Largo",
        "zipCode": "65536",
        "latitude": "-54.6250",
        "longitude": "140.5621",
        "customer": "Garry Ortiz",
        "id": "100"
    }
]