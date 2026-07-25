/* tslint:disable:max-line-length */
import { WareGroups } from './ware-groups-data';
import { TransportType } from './transport-data';
import { Effects } from './effects-data';
import { Factions } from './factions-data';

export const Wares = {
  advancedcomposites: {
    id: 'advancedcomposites',
    version: 0,
    name: 'Advanced Composites',
    description: 'Formed from some of the refined resources collected from mining ships, advanced composites is a general term for many compounds created to serve several purposes; most commonly used in the production of a variety of equipment parts.',
    factoryName: 'Advanced Composite Factory',
    icon: 'ware_advancedcomposites',
    volume: 32,
    transport: TransportType.container,
    price: { min: 516, max: 1168, avg: 688 },
    group: WareGroups.hightech,
    production: [
      {
        time: 600,
        amount: 108,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 100 },
          { ware: 'graphene', amount: 160 },
          { ware: 'refinedmetals', amount: 160 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 600,
        amount: 108,
        method: 'teladi',
        name: 'Teladi',
        wares: [
          { ware: 'energycells', amount: 100 },
          { ware: 'graphene', amount: 160 },
          { ware: 'teladianium', amount: 116 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  advancedelectronics: {
    id: 'advancedelectronics',
    version: 0,
    name: 'Advanced Electronics',
    description: 'Designed specifically to work alongside weapon and turret components, it is a variety of advanced electronics that allow different weapons and turrets to have a range of turning speeds, fire rates and cooldowns. Whereas field coils for shields and antimatter converters for engines are more modular and can be used \'across the board\', different weapons and turrets expect different electronic systems to be used in order to ensure the correct properties. However, as all equipment is built and repaired on demand, all advanced electronics are shipped to shipyards and equipment docks together.',
    factoryName: 'Advanced Electronics Factory',
    icon: 'ware_advancedelectronics',
    volume: 30,
    transport: TransportType.container,
    price: { min: 855, max: 1620, avg: 1140 },
    group: WareGroups.shiptech,
    production: [
      {
        time: 600,
        amount: 68,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 75 },
          { ware: 'microchips', amount: 56 },
          { ware: 'quantumtubes', amount: 26 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  antimattercells: {
    id: 'antimattercells',
    version: 0,
    name: 'Antimatter Cells',
    description: 'Highly advanced magnetic storage devices that carry antimatter. Due to the effect of Hawking radiation and their being self-powered, antimatter cells cannot store antimatter indefinitely. They are produced and filled using refined hydrogen and primarily used in the production of engine parts, and also can be miniaturised to be used in claytronics.',
    factoryName: 'Antimatter Cell Factory',
    icon: 'ware_antimattercells',
    volume: 18,
    transport: TransportType.container,
    price: { min: 115, max: 405, avg: 153 },
    group: WareGroups.refined,
    production: [
      {
        time: 300,
        amount: 248,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 250 },
          { ware: 'hydrogen', amount: 800 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  antimatterconverters: {
    id: 'antimatterconverters',
    version: 0,
    name: 'Antimatter Converters',
    description: 'Attached to the antimatter cells used in engine parts for both main engines and thrusters, antimatter converters fine-tune the amount of energy used to a more specific configuration. It is the use of this component that allows so many variations of engine, as their number and set up greatly impact the power and efficiency of the final product.',
    factoryName: 'Antimatter Converter Factory',
    icon: 'ware_antimatterconverters',
    volume: 10,
    transport: TransportType.container,
    price: { min: 300, max: 560, avg: 400 },
    group: WareGroups.shiptech,
    production: [
      {
        time: 600,
        amount: 266,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'advancedcomposites', amount: 40 },
          { ware: 'energycells', amount: 160 },
          { ware: 'microchips', amount: 60 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  claytronics: {
    id: 'claytronics',
    version: 0,
    name: 'Claytronics',
    description: 'More commonly known as programmable matter, claytronics are made up of millions of individual nanometre-scale computers known as catoms. This technology lives at the heart of any non-Xenon station, used to build anything from internal wiring to computer systems and control mechanisms - effectively everything but the hull of the station itself. Claytronics are always in high-demand, as the universe rebuilds itself after the Jump Gate shutdown.',
    factoryName: 'Claytronics Factory',
    icon: 'ware_claytronics',
    volume: 24,
    transport: TransportType.container,
    price: { min: 2122, max: 2904, avg: 2496 },
    group: WareGroups.shiptech,
    production: [
      {
        time: 600,
        amount: 108,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'antimattercells', amount: 101 },
          { ware: 'energycells', amount: 140 },
          { ware: 'microchips', amount: 161 },
          { ware: 'quantumtubes', amount: 101 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 300,
        amount: 80,
        method: 'recycling',
        name: 'Recycling',
        wares: [
          { ware: 'energycells', amount: 12000 },
          { ware: 'scrapmetal', amount: 300 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
        ],
      },
    ]
  },
  dronecomponents: {
    id: 'dronecomponents',
    version: 0,
    name: 'Drone Components',
    description: 'Much like weapon and turret components, drone components have been generalised and standardised across much of the Jump Gate network to be modularly used in all kinds of drone, making them a highly sought-after resource. Drone components are directly shipped to shipyards, equipment docks and stations to source drone-building, which is done on-demand as and when it is necessary.',
    factoryName: 'Drone Component Factory',
    icon: 'ware_dronecomponents',
    volume: 30,
    transport: TransportType.container,
    price: { min: 653, max: 1350, avg: 870 },
    group: WareGroups.shiptech,
    production: [
      {
        time: 600,
        amount: 53,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 30 },
          { ware: 'engineparts', amount: 10 },
          { ware: 'hullparts', amount: 10 },
          { ware: 'microchips', amount: 10 },
          { ware: 'scanningarrays', amount: 20 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  energycells: {
    id: 'energycells',
    version: 0,
    name: 'Energy Cells',
    description: 'Contrary to common belief, Energy Cells are not simply glorified batteries; actually, they are sophisticated bio-chemical (or bio-mechanical, depending on technology) devices capable of storing energy near or at 100% efficiency.',
    factoryName: 'Solar Power Plant',
    icon: 'ware_energycells',
    volume: 1,
    transport: TransportType.container,
    price: { min: 12, max: 29, avg: 16 },
    group: WareGroups.energy,
    production: [
      {
        time: 300,
        amount: 1750,
        method: 'default',
        name: 'Universal',
        wares: [
        ],
        effects: [
          { type: Effects.sunlight, product: 1 },
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 300,
        amount: 750,
        method: 'terran',
        name: 'Terran',
        wares: [
        ],
        effects: [
          { type: Effects.sunlight, product: 1 },
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  engineparts: {
    id: 'engineparts',
    version: 0,
    name: 'Engine Parts',
    description: 'Comprised of a number of different components that make up ship engines, engine parts are delivered straight to the end customer, most commonly shipyards and equipment docks, who then use them themselves to produce or repair engines. While naturally engine parts are a very necessary resource across the entire Jump Gate network, the ability to produce and repair engines on demand, instead of requiring an entirely separate production step for each, has greatly streamlined the universal economy.',
    factoryName: 'Engine Part Factory',
    icon: 'ware_engineparts',
    volume: 15,
    transport: TransportType.container,
    price: { min: 130, max: 398, avg: 173 },
    group: WareGroups.hightech,
    production: [
      {
        time: 600,
        amount: 139,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'antimattercells', amount: 53 },
          { ware: 'energycells', amount: 40 },
          { ware: 'refinedmetals', amount: 64 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 600,
        amount: 139,
        method: 'teladi',
        name: 'Teladi',
        wares: [
          { ware: 'antimattercells', amount: 53 },
          { ware: 'energycells', amount: 40 },
          { ware: 'teladianium', amount: 47 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  fieldcoils: {
    id: 'fieldcoils',
    version: 0,
    name: 'Field Coils',
    description: 'Used to fine-tune the arrays used on ship and station shielding, field coils allow for much more modulation than using shield components alone. As such shipyards have begun using them to build a much wider variety of shields than was previously available. Like many of the components used on ships - that aren\'t the hull itself - shield components are shipped straight to shipyards and equipment docks so that shields can be produced on-demand.',
    factoryName: 'Field Coil Factory',
    icon: 'ware_fieldcoils',
    volume: 15,
    transport: TransportType.container,
    price: { min: 360, max: 720, avg: 480 },
    group: WareGroups.shiptech,
    production: [
      {
        time: 600,
        amount: 175,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 60 },
          { ware: 'plasmaconductors', amount: 40 },
          { ware: 'quantumtubes', amount: 43 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  foodrations: {
    id: 'foodrations',
    version: 0,
    name: 'Food Rations',
    description: 'Food Rations come in a large variety; as far as rations for the species Homo sapiens are concerned, they mainly contain wheat, freeze-dried meat and different spices as well as vitamins and essential minerals.',
    factoryName: 'Food Ration Factory',
    icon: 'ware_foodrations',
    volume: 1,
    transport: TransportType.container,
    illegal: [ Factions.loanshark ],
    price: { min: 14, max: 34, avg: 18 },
    group: WareGroups.food,
    production: [
      {
        time: 300,
        amount: 575,
        method: 'default',
        name: 'Argon',
        wares: [
          { ware: 'energycells', amount: 125 },
          { ware: 'meat', amount: 50 },
          { ware: 'spices', amount: 50 },
          { ware: 'wheat', amount: 50 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  graphene: {
    id: 'graphene',
    version: 0,
    name: 'Graphene',
    description: 'Produced from refined and heavily modified methane gas in the modern era, graphene is a semi-metal that has many uncommon properties. Due to its strength and resistance to heat and electricity, it is used to produce a variety of tech-level resources, and is also used to help in the reinforcement of hull parts.',
    factoryName: 'Graphene Refinery',
    icon: 'ware_graphene',
    volume: 20,
    transport: TransportType.container,
    price: { min: 150, max: 480, avg: 200 },
    group: WareGroups.refined,
    production: [
      {
        time: 300,
        amount: 240,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 200 },
          { ware: 'methane', amount: 800 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  helium: {
    id: 'helium',
    version: 0,
    name: 'Helium',
    description: 'A colourless, odourless and non-toxic noble gas, helium is found in great abundance in gas nebulas across the entire Jump Gate network and is usually collected by mining ships to be refined into superfluid coolant.',
    factoryName: 'Helium Extractor',
    icon: 'ware_helium',
    volume: 6,
    transport: TransportType.liquid,
    price: { min: 36, max: 55, avg: 42 },
    group: WareGroups.gases,
    production: [
    ]
  },
  hullparts: {
    id: 'hullparts',
    version: 0,
    name: 'Hull Parts',
    description: 'Made from refined metals or teladianium, Hull Parts are most commonly used to build the hulls of ships and stations, though they do have some other uses such as in drones and weapons. Usually layered for additional protection, and using other compounds to further reinforce, Hull Parts are still cheap to produce - a bonus, considering their position as the most frequently used resource in the Jump Gate network.',
    factoryName: 'Hull Part Factory',
    icon: 'ware_hullparts',
    volume: 12,
    transport: TransportType.container,
    price: { min: 180, max: 420, avg: 240 },
    group: WareGroups.hightech,
    production: [
      {
        time: 600,
        amount: 392,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 106 },
          { ware: 'graphene', amount: 54 },
          { ware: 'refinedmetals', amount: 374 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 300,
        amount: 200,
        method: 'recycling',
        name: 'Recycling',
        wares: [
          { ware: 'energycells', amount: 3500 },
          { ware: 'scrapmetal', amount: 75 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
        ],
      },
      {
        time: 600,
        amount: 392,
        method: 'teladi',
        name: 'Teladi',
        wares: [
          { ware: 'energycells', amount: 106 },
          { ware: 'graphene', amount: 54 },
          { ware: 'teladianium', amount: 272 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  hydrogen: {
    id: 'hydrogen',
    version: 0,
    name: 'Hydrogen',
    description: 'Historically, Hydrogen has been used mainly in H-fusion generators. These days however, with the rise of sustainable M/AM mass conversion, Hydrogen is routinely converted into anti-Hydrogen for use in Antimatter Cells.',
    factoryName: 'Hydrogen Extractor',
    icon: 'ware_hydrogen',
    volume: 6,
    transport: TransportType.liquid,
    price: { min: 31, max: 47, avg: 36 },
    group: WareGroups.gases,
    production: [
    ]
  },
  ice: {
    id: 'ice',
    version: 0,
    name: 'Ice',
    description: 'H2O in its solid state of aggregation, used for industrial water supplies and general consumption after treatment.',
    factoryName: 'Ice Mine',
    icon: 'ware_ice',
    volume: 8,
    transport: TransportType.solid,
    illegal: [ Factions.loanshark ],
    price: { min: 41, max: 62, avg: 48 },
    group: WareGroups.ice,
    production: [
    ]
  },
  majadust: {
    id: 'majadust',
    version: 0,
    name: 'Maja Dust',
    description: 'Chemically processed from crushed maja snail shells, maja dust is a relaxant and hallucinogenic sold as a powder-substance that is inhaled. Though any official Paranid government would have the populous believe that maja dust is not commonly consumed, it is thought to be highly likely, particularly in light of the ongoing Paranid civil war, that many Paranid and non-Paranid alike are partaking in the outlawed substance.',
    factoryName: 'Maja Dust Factory',
    icon: 'ware_majadust',
    volume: 1,
    transport: TransportType.container,
    illegal: [ Factions.holyorder, Factions.paranid ],
    price: { min: 210, max: 380, avg: 280 },
    group: WareGroups.pharmaceutical,
    production: [
      {
        time: 600,
        amount: 64,
        method: 'default',
        name: 'Paranid',
        wares: [
          { ware: 'energycells', amount: 40 },
          { ware: 'majasnails', amount: 120 },
          { ware: 'spices', amount: 60 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  majasnails: {
    id: 'majasnails',
    version: 0,
    name: 'Maja Snails',
    description: 'Grown across many Paranid colonies, as well as in tanks across Paranid space, maja snails provide Paranid with a good number of the nutrients they need to survive. Commonly treated very well, once a snail dies its shell and flesh are both processed as part of soja husk, along with soja beans. The shell of the maja snail is also commonly used as the main ingredient of the drug known as maja dust.',
    factoryName: 'Maja Snail Farm',
    icon: 'ware_majasnails',
    volume: 2,
    transport: TransportType.container,
    price: { min: 63, max: 114, avg: 84 },
    group: WareGroups.agricultural,
    production: [
      {
        time: 300,
        amount: 97,
        method: 'default',
        name: 'Paranid',
        wares: [
          { ware: 'energycells', amount: 27 },
          { ware: 'water', amount: 67 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  meat: {
    id: 'meat',
    version: 0,
    name: 'Meat',
    description: 'Though meat comes in a great variety, the most sought-after type as of late is so-called \'vegan meat\', synthesised and cloned not from real animals, but from cell cultures. However, real Argnu meat is still popular within the human population of many worlds.',
    factoryName: 'Meat Factory',
    icon: 'ware_meat',
    volume: 2,
    transport: TransportType.container,
    price: { min: 35, max: 76, avg: 46 },
    group: WareGroups.agricultural,
    production: [
      {
        time: 300,
        amount: 193,
        method: 'default',
        name: 'Argon',
        wares: [
          { ware: 'energycells', amount: 53 },
          { ware: 'water', amount: 67 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  medicalsupplies: {
    id: 'medicalsupplies',
    version: 0,
    name: 'Medical Supplies',
    description: 'Medical supplies contain a number of different concoctions and remedies used to keep station workforce healthier and happier during their time aboard. Completely natural in design, these supplies have been vetted by both the Argon Federation and Godrealm of the Paranid to ensure they are both legal and safe, and thus there is no licence necessary to carry or supply them.',
    factoryName: 'Medical Supply Factory',
    icon: 'ware_medicalsupplies',
    volume: 2,
    transport: TransportType.container,
    price: { min: 51, max: 100, avg: 68 },
    group: WareGroups.pharmaceutical,
    production: [
      {
        time: 300,
        amount: 208,
        method: 'default',
        name: 'Argon',
        wares: [
          { ware: 'energycells', amount: 100 },
          { ware: 'spices', amount: 40 },
          { ware: 'water', amount: 60 },
          { ware: 'wheat', amount: 30 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 300,
        amount: 208,
        method: 'paranid',
        name: 'Paranid',
        wares: [
          { ware: 'energycells', amount: 100 },
          { ware: 'sojabeans', amount: 10 },
          { ware: 'spices', amount: 40 },
          { ware: 'water', amount: 60 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 300,
        amount: 208,
        method: 'teladi',
        name: 'Teladi',
        wares: [
          { ware: 'energycells', amount: 100 },
          { ware: 'spices', amount: 40 },
          { ware: 'sunriseflowers', amount: 12 },
          { ware: 'water', amount: 60 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 300,
        amount: 208,
        method: 'split',
        name: 'Split',
        wares: [
          { ware: 'energycells', amount: 100 },
          { ware: 'scruffinfruits', amount: 30 },
          { ware: 'spices', amount: 60 },
          { ware: 'water', amount: 60 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 300,
        amount: 140,
        method: 'terran',
        name: 'Terran',
        wares: [
          { ware: 'energycells', amount: 100 },
          { ware: 'ice', amount: 50 },
          { ware: 'proteinpaste', amount: 24 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 300,
        amount: 208,
        method: 'boron',
        name: 'Boron',
        wares: [
          { ware: 'energycells', amount: 100 },
          { ware: 'plankton', amount: 95 },
          { ware: 'water', amount: 60 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  methane: {
    id: 'methane',
    version: 0,
    name: 'Methane',
    description: 'Found in ample supply in gas nebulas across the Jump Gate network, methane (CH4) is collected by mining ships and taken to refineries to be processed into graphene.',
    factoryName: 'Methane Extractor',
    icon: 'ware_methane',
    volume: 6,
    transport: TransportType.liquid,
    price: { min: 41, max: 62, avg: 48 },
    group: WareGroups.gases,
    production: [
    ]
  },
  microchips: {
    id: 'microchips',
    version: 0,
    name: 'Microchips',
    description: 'Used in a wide variety of equipment parts, micro-chips are produced using silicon wafers, which, while fragile, allows them to conduct at a much higher rate. This, in turn, allows far better processing in the equipment that uses the micro-chips, which includes many advanced electronics and components.',
    factoryName: 'Microchip Factory',
    icon: 'ware_microchips',
    volume: 22,
    transport: TransportType.container,
    price: { min: 693, max: 1254, avg: 924 },
    group: WareGroups.hightech,
    production: [
      {
        time: 600,
        amount: 216,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 150 },
          { ware: 'siliconwafers', amount: 600 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  missilecomponents: {
    id: 'missilecomponents',
    version: 0,
    name: 'Missile Components',
    description: 'Missile components are used in the construction of all missiles, often with a different number and configuration making up the construction of each missile. As with ship equipment, missiles are built on demand, and so missile components are bought at and found at shipyards and equipment docks, where most pilots can order missiles on demand.',
    factoryName: 'Missile Component Factory',
    icon: 'ware_missilecomponents',
    volume: 2,
    transport: TransportType.container,
    price: { min: 17, max: 54, avg: 22 },
    group: WareGroups.shiptech,
    production: [
      {
        time: 600,
        amount: 374,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'advancedcomposites', amount: 2 },
          { ware: 'energycells', amount: 26 },
          { ware: 'hullparts', amount: 2 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  nividium: {
    id: 'nividium',
    version: 0,
    name: 'Nividium',
    description: 'A rare metal found in small pockets in asteroids, Nividium has been cut out of any economic use by the improved efficiency with which businesses have been able to use ore and silicon, much easier to find and cheaper to process. However, Nividium is still valuable, and is often transported planet-side to be made into jewelry and art.',
    factoryName: 'Nividium Mine',
    icon: 'ware_nividium',
    volume: 10,
    transport: TransportType.solid,
    price: { min: 434, max: 663, avg: 510 },
    group: WareGroups.minerals,
    production: [
    ]
  },
  nostropoil: {
    id: 'nostropoil',
    version: 0,
    name: 'Nostrop Oil',
    description: 'Nostrop oil is squeezed from the leaves of sunrise flowers and mixed with water. Though the Teladi favour it for its simplicity and nutrients, other species have clearly indicated that nostrop oil does not in fact taste at all pleasing.',
    factoryName: 'Nostrop Oil Factory',
    icon: 'ware_nostropoil',
    volume: 1,
    transport: TransportType.container,
    price: { min: 27, max: 52, avg: 36 },
    group: WareGroups.food,
    production: [
      {
        time: 300,
        amount: 500,
        method: 'default',
        name: 'Teladi',
        wares: [
          { ware: 'energycells', amount: 100 },
          { ware: 'spices', amount: 40 },
          { ware: 'sunriseflowers', amount: 40 },
          { ware: 'water', amount: 60 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  ore: {
    id: 'ore',
    version: 0,
    name: 'Ore',
    description: 'Today ore tends not to be mined on habitable worlds, but harvested from other celestial bodies, mainly asteroids. As could be expected, Ore must always be refined to be of any use.',
    factoryName: 'Ore Mine',
    icon: 'ware_ore',
    volume: 10,
    transport: TransportType.solid,
    price: { min: 43, max: 65, avg: 50 },
    group: WareGroups.minerals,
    production: [
    ]
  },
  plasmaconductors: {
    id: 'plasmaconductors',
    version: 0,
    name: 'Plasma Conductors',
    description: 'These conductors are designed to allow the flow of plasma through a component at the greatest possible efficiency. Though made relatively cheap to produce through years of research and development, plasma conductors remain highly complex pieces of technology. They are used primarily in the construction of weapon and shield components.',
    factoryName: 'Plasma Conductor Factory',
    icon: 'ware_plasmaconductors',
    volume: 32,
    transport: TransportType.container,
    price: { min: 936, max: 1728, avg: 1248 },
    group: WareGroups.hightech,
    production: [
      {
        time: 600,
        amount: 29,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 40 },
          { ware: 'graphene', amount: 64 },
          { ware: 'superfluidcoolant', amount: 93 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  quantumtubes: {
    id: 'quantumtubes',
    version: 0,
    name: 'Quantum Tubes',
    description: 'An example of complex technology being made cheap through years of continuous research, no one outside of those manufacturing the technology quite knows how quantum tubes work. Though the outer wiring itself it easy to make and understand, the internal structure and what the wiring actually carries must be constructed only by those with countless hours of study and examination under their belts; otherwise risking catastrophic failures that can lead to entire shutdowns of the equipment in which they are used.',
    factoryName: 'Quantum Tube Factory',
    icon: 'ware_quantumtubes',
    volume: 22,
    transport: TransportType.container,
    price: { min: 281, max: 704, avg: 374 },
    group: WareGroups.hightech,
    production: [
      {
        time: 600,
        amount: 156,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 66 },
          { ware: 'graphene', amount: 194 },
          { ware: 'superfluidcoolant', amount: 50 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  rawscrap: {
    id: 'rawscrap',
    version: 0,
    name: 'Raw Scrap',
    description: 'Raw Scrap is found in wrecks. It is extracted from the wrecks of capital ships and stations, and broken down into Scrap Cubes by Compactor ships. These Scrap Cubes, as well as whole smaller wrecks, can be collected by Tug ships and taken to Scrap Processors, where they are melted down into Scrap Metal for further recycling.',
    factoryName: '',
    icon: 'ware_scrapmetal',
    volume: 10,
    transport: TransportType.solid,
    price: { min: 153, max: 207, avg: 180 },
    group: WareGroups.refined,
    production: [
    ]
  },
  refinedmetals: {
    id: 'refinedmetals',
    version: 0,
    name: 'Refined Metals',
    description: 'Refined from ore found in countless asteroids across the Jump Gate network, these refined metals are cheap to produce and easy to reinforce, making them perfect for use in constructing all kinds of Hull Parts, not just for ships and stations, but also for smaller components that used across all of space.',
    factoryName: 'Ore Refinery',
    icon: 'ware_refinedmetals',
    volume: 14,
    transport: TransportType.container,
    price: { min: 131, max: 371, avg: 175 },
    group: WareGroups.refined,
    production: [
      {
        time: 300,
        amount: 352,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 360 },
          { ware: 'ore', amount: 960 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  scanningarrays: {
    id: 'scanningarrays',
    version: 0,
    name: 'Scanning Arrays',
    description: 'Scanning arrays have seen elegant redesign over the years so that ships and stations do not risk fragile antennas being broken or destroyed by collisions. Now entirely internal systems, scanning arrays are used not just in ship and station scanners and radars, but are also used in the targeting systems supplied with turret and drone components.',
    factoryName: 'Scanning Array Factory',
    icon: 'ware_scanningarrays',
    volume: 38,
    transport: TransportType.container,
    price: { min: 884, max: 1748, avg: 1178 },
    group: WareGroups.hightech,
    production: [
      {
        time: 600,
        amount: 36,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 60 },
          { ware: 'refinedmetals', amount: 100 },
          { ware: 'siliconwafers', amount: 60 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 600,
        amount: 36,
        method: 'teladi',
        name: 'Teladi',
        wares: [
          { ware: 'energycells', amount: 60 },
          { ware: 'siliconwafers', amount: 60 },
          { ware: 'teladianium', amount: 73 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  scrapmetal: {
    id: 'scrapmetal',
    version: 0,
    name: 'Scrap Metal',
    description: 'Scrap Metal has become established as a vital part of severely resource-deprived economies. Usually obtained from salvaged station segments or recovered ship wrecks, Scrap Metal can be recycled into other, more valuable, materials.',
    factoryName: 'Scrap Processing Factory',
    icon: 'ware_scrapmetal',
    volume: 10,
    transport: TransportType.solid,
    price: { min: 318, max: 431, avg: 375 },
    group: WareGroups.refined,
    production: [
      {
        time: 20,
        amount: 1,
        method: 'processing',
        name: 'Processing',
        wares: [
          { ware: 'energycells', amount: 10 },
          { ware: 'rawscrap', amount: 1 },
        ],
        effects: [
        ],
      },
    ]
  },
  shieldcomponents: {
    id: 'shieldcomponents',
    version: 0,
    name: 'Shield Components',
    description: 'From generators to coils that maintain energy over time, shield components are a wide arrange of technologies that provide everything necessary to build a variety of shields. Completely modular, each part can be used in each shield, which has led to a wide variety of new-generation shields being produced in recent years. As with all ship equipment, shields are built on-demand, and so shield components are produced in factories and shipped straight to shipyards and equipment docks where they can be more freely used for construction and repair.',
    factoryName: 'Shield Component Factory',
    icon: 'ware_shieldcomponents',
    volume: 10,
    transport: TransportType.container,
    price: { min: 165, max: 380, avg: 220 },
    group: WareGroups.shiptech,
    production: [
      {
        time: 600,
        amount: 97,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 35 },
          { ware: 'plasmaconductors', amount: 10 },
          { ware: 'quantumtubes', amount: 10 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  silicon: {
    id: 'silicon',
    version: 0,
    name: 'Silicon',
    description: 'Silicon, required for the production of the most common types of silicon wafers, is usually mined or harvested from asteroids or other uninhabited celestial bodies.',
    factoryName: 'Silicon Mine',
    icon: 'ware_silicon',
    volume: 10,
    transport: TransportType.solid,
    price: { min: 85, max: 130, avg: 100 },
    group: WareGroups.minerals,
    production: [
    ]
  },
  siliconwafers: {
    id: 'siliconwafers',
    version: 0,
    name: 'Silicon Wafers',
    description: 'If a technology requires any kind of chip, it is highly likely that is uses silicon wafers. Light, efficient and cheap to produce, these wafers are usually layered or constructed in hexagonal meshes to allow for quick transfer of data across a component.',
    factoryName: 'Silicon Refinery',
    icon: 'ware_siliconwafers',
    volume: 18,
    transport: TransportType.container,
    price: { min: 206, max: 526, avg: 274 },
    group: WareGroups.refined,
    production: [
      {
        time: 300,
        amount: 356,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 300 },
          { ware: 'silicon', amount: 800 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  smartchips: {
    id: 'smartchips',
    version: 0,
    name: 'Smart Chips',
    description: 'A specialised form of microchip that contains a small amount of heuristic programming, these chips cannot allow a system to learn, but can allow for small, snap intelligent decision-making that assists in targeting systems and makes autonomous piloting more accurate. These chips are primarily used in guided missiles and drones.',
    factoryName: 'Smart Chip Factory',
    icon: 'ware_smartchips',
    volume: 2,
    transport: TransportType.container,
    price: { min: 39, max: 82, avg: 52 },
    group: WareGroups.shiptech,
    production: [
      {
        time: 600,
        amount: 286,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 100 },
          { ware: 'siliconwafers', amount: 40 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  sojabeans: {
    id: 'sojabeans',
    version: 0,
    name: 'Soja Beans',
    description: 'A small bean grown all across Paranid space, the soja bean adds flavour and nutritional value to the soja husk; the Paranids\' primary food source. While this is its primary purpose, on many Paranid colonies it is also dried and ground into a powder and mixed with water, creating a flavoured and healthy drink that provides Paranid with ample energy.',
    factoryName: 'Soja Bean Farm',
    icon: 'ware_sojabeans',
    volume: 5,
    transport: TransportType.container,
    price: { min: 71, max: 125, avg: 95 },
    group: WareGroups.agricultural,
    production: [
      {
        time: 300,
        amount: 104,
        method: 'default',
        name: 'Paranid',
        wares: [
          { ware: 'energycells', amount: 30 },
          { ware: 'water', amount: 80 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  sojahusk: {
    id: 'sojahusk',
    version: 0,
    name: 'Soja Husk',
    description: 'A Paranid dish; soja beans that have been crushed into a paste and mixed with the flesh of the maja snail, then served in a maja snail shell, soja husk is accepted as both a tasteful and nutritious meal by the Paranid, though there are few non-Paranid who have dared try it.',
    factoryName: 'Soja Husk Factory',
    icon: 'ware_sojahusk',
    volume: 1,
    transport: TransportType.container,
    price: { min: 31, max: 57, avg: 41 },
    group: WareGroups.food,
    production: [
      {
        time: 300,
        amount: 350,
        method: 'default',
        name: 'Paranid',
        wares: [
          { ware: 'energycells', amount: 80 },
          { ware: 'majasnails', amount: 50 },
          { ware: 'sojabeans', amount: 40 },
          { ware: 'spices', amount: 20 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  spacefuel: {
    id: 'spacefuel',
    version: 0,
    name: 'Spacefuel',
    description: 'Spacefuel is made from processing and distilling wheat, water and a blend of spices. It is a cheap but strong alcoholic beverage that has been made illegal to trade in bulk across the Jump Gate network in an attempt to avoid drunken accidents on both ships and stations. In order to sell spacefuel as a beverage, one must be a licenced bar owner.',
    factoryName: 'Spacefuel Factory',
    icon: 'ware_spacefuel',
    volume: 1,
    transport: TransportType.container,
    illegal: [ Factions.antigone, Factions.argon, Factions.pioneers, Factions.terran ],
    price: { min: 146, max: 295, avg: 195 },
    group: WareGroups.pharmaceutical,
    production: [
      {
        time: 600,
        amount: 123,
        method: 'default',
        name: 'Argon',
        wares: [
          { ware: 'energycells', amount: 50 },
          { ware: 'water', amount: 125 },
          { ware: 'wheat', amount: 100 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  spaceweed: {
    id: 'spaceweed',
    version: 0,
    name: 'Spaceweed',
    description: 'While seen as part of every-day life in Teladi society, spaceweed has been made illegal in both Argon and Paranid space, as it is seen as a dangerous narcotic. This point is argued heavily by many of those who partake in the drug, which is usually dried, crushed and then smoked, but attempts to legalise it have as of yet failed.',
    factoryName: 'Spaceweed Farm',
    icon: 'ware_spaceweed',
    volume: 3,
    transport: TransportType.container,
    illegal: [ Factions.antigone, Factions.argon, Factions.holyorder, Factions.paranid, Factions.terran ],
    price: { min: 92, max: 222, avg: 122 },
    group: WareGroups.pharmaceutical,
    production: [
      {
        time: 600,
        amount: 183,
        method: 'default',
        name: 'Teladi',
        wares: [
          { ware: 'energycells', amount: 140 },
          { ware: 'spices', amount: 40 },
          { ware: 'swampplant', amount: 120 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  spices: {
    id: 'spices',
    version: 0,
    name: 'Spices',
    description: 'Spices are used in many food and pharmaceutical products; primarily as an agent to add extra flavour, but also sometimes due to other properties that some are known to have, ranging from acting as a relaxant to a mild hallucinogenic. Factories that legally produce spices are commonly inspected to make sure their produce is in line with the local law, but as they are often shipped as a mixture, it is sometimes difficult to keep an eye on which spice is being used for which purpose.',
    factoryName: 'Spice Farm',
    icon: 'ware_spices',
    volume: 2,
    transport: TransportType.container,
    price: { min: 15, max: 50, avg: 33 },
    group: WareGroups.agricultural,
    production: [
      {
        time: 300,
        amount: 250,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 20 },
          { ware: 'water', amount: 40 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  sunriseflowers: {
    id: 'sunriseflowers',
    version: 0,
    name: 'Sunrise Flowers',
    description: 'Known to grow naturally only on Ianamus Zura, the Teladi mastered the art of bio-engineering a near-identical but still artificially grown sunrise flower long ago. When squeezed, the leaves of the sunrise flower produce a bitter-tasting oil that while despised by other species, the Teladi appreciate as an adequate food source.',
    factoryName: 'Sunrise Flower Farm',
    icon: 'ware_sunriseflowers',
    volume: 5,
    transport: TransportType.container,
    price: { min: 74, max: 128, avg: 98 },
    group: WareGroups.agricultural,
    production: [
      {
        time: 300,
        amount: 100,
        method: 'default',
        name: 'Teladi',
        wares: [
          { ware: 'energycells', amount: 30 },
          { ware: 'water', amount: 80 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  superfluidcoolant: {
    id: 'superfluidcoolant',
    version: 0,
    name: 'Superfluid Coolant',
    description: 'Designed with superfluidity to ensure both efficiency and endurance, this coolant is used in complex technical components such as plasma conductors and quantum tubes to protect said components from overheating. The losslessness of kinetic energy afforded by the coolant\'s superfluidity means that it can continue to circulate around the component for a much longer time before needing to be recycled. This has led to such components lifetimes being greatly increased.',
    factoryName: 'Helium Refinery',
    icon: 'ware_superfluidcoolant',
    volume: 16,
    transport: TransportType.container,
    price: { min: 132, max: 400, avg: 176 },
    group: WareGroups.refined,
    production: [
      {
        time: 300,
        amount: 119,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 75 },
          { ware: 'helium', amount: 400 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  swampplant: {
    id: 'swampplant',
    version: 0,
    name: 'Swamp Plant',
    description: 'Cultivated in a warm and humid environment, swamp plant is a small moss-like plant known to have mildly narcotic properties; the reason it is dried and crushed to be used as space weed. Though it is widely known that swamp plant is the main ingredient of a drug made illegal throughout non-Teladi space, producing and trading it itself is not illegal, as it is only in the processing of the plant that the narcotic properties can be unlocked.',
    factoryName: 'Swamp Plant Farm',
    icon: 'ware_swampplant',
    volume: 6,
    transport: TransportType.container,
    price: { min: 77, max: 132, avg: 102 },
    group: WareGroups.agricultural,
    production: [
      {
        time: 600,
        amount: 80,
        method: 'default',
        name: 'Teladi',
        wares: [
          { ware: 'energycells', amount: 27 },
          { ware: 'water', amount: 67 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  teladianium: {
    id: 'teladianium',
    version: 0,
    name: 'Teladianium',
    description: 'Teladianium is a hard, tough material used by the Teladi for station and, more commonly, ship construction. A lighter compound than the refined metals used in other races\' vessels, Teladianium is traditionally made from chemically treated Teladian mud. However, as the necessary chemicals are rarely found in space, and expensive to produce, the Teladi often replace them with the raw minerals found in asteroids.',
    factoryName: 'Teladianium Foundry',
    icon: 'ware_teladianium',
    volume: 16,
    transport: TransportType.container,
    price: { min: 180, max: 464, avg: 240 },
    group: WareGroups.refined,
    production: [
      {
        time: 300,
        amount: 350,
        method: 'default',
        name: 'Teladi',
        wares: [
          { ware: 'energycells', amount: 226 },
          { ware: 'ore', amount: 1400 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  turretcomponents: {
    id: 'turretcomponents',
    version: 0,
    name: 'Turret Components',
    description: 'After the unification of the design process in station and capital ship weapon systems, many different turrets can be built from different configurations of these turret components.',
    factoryName: 'Turret Component Factory',
    icon: 'ware_turretcomponents',
    volume: 20,
    transport: TransportType.container,
    price: { min: 210, max: 600, avg: 280 },
    group: WareGroups.shiptech,
    production: [
      {
        time: 600,
        amount: 114,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 40 },
          { ware: 'microchips', amount: 14 },
          { ware: 'quantumtubes', amount: 14 },
          { ware: 'scanningarrays', amount: 6 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  water: {
    id: 'water',
    version: 0,
    name: 'Water',
    description: 'Essential to all known biological life forms, water has never become much of a catalyst for dispute amongst species, owing to its ubiquity in space. It is being used somewhere in the manufacturing process of nearly all goods available across space; especially, however, in the production of edible goods.',
    factoryName: 'Ice Refinery',
    icon: 'ware_water',
    volume: 6,
    transport: TransportType.container,
    illegal: [ Factions.loanshark ],
    price: { min: 72, max: 180, avg: 96 },
    group: WareGroups.water,
    production: [
      {
        time: 300,
        amount: 483,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 150 },
          { ware: 'ice', amount: 800 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  weaponcomponents: {
    id: 'weaponcomponents',
    version: 0,
    name: 'Weapon Components',
    description: 'Made up from such things as trigger and reloading mechanisms, chambers and barrels, weapon components make up the mechanical part of all ship weapons. Combined with specialised advanced electronics, a number of different weapons can be made from the modular components, also across different size ranges. Shipped to shipyards and equipment docks as a single package, these components can then be put together relatively quickly and easily to make any weapon for the final customer on-demand.',
    factoryName: 'Weapon Component Factory',
    icon: 'ware_weaponcomponents',
    volume: 20,
    transport: TransportType.container,
    price: { min: 240, max: 640, avg: 320 },
    group: WareGroups.shiptech,
    production: [
      {
        time: 600,
        amount: 114,
        method: 'default',
        name: 'Universal',
        wares: [
          { ware: 'energycells', amount: 40 },
          { ware: 'hullparts', amount: 14 },
          { ware: 'plasmaconductors', amount: 20 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  wheat: {
    id: 'wheat',
    version: 0,
    name: 'Wheat',
    description: 'A staple ingredient in food rations, wheat is grown across all of Argon space and consumed on a daily basis in the form of flatbread or bunyos. Where meat is still produced from Argnu, instead of synthesised or cloned, wheat is also fed to the animals, which results in meat of exceptional quality.',
    factoryName: 'Wheat Farm',
    icon: 'ware_wheat',
    volume: 2,
    transport: TransportType.container,
    price: { min: 26, max: 64, avg: 34 },
    group: WareGroups.agricultural,
    production: [
      {
        time: 300,
        amount: 310,
        method: 'default',
        name: 'Argon',
        wares: [
          { ware: 'energycells', amount: 60 },
          { ware: 'water', amount: 80 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  cheltmeat: {
    id: 'cheltmeat',
    version: 1,
    name: 'Chelt Meat',
    description: 'Chelts are sea-bound creatures that once roamed the seas and oceans of the Split home planet. The Split harvested them for meat, oil and their skins, which they used to create a tough leather like material. However, Chelts were eventually over-hunted and almost brought to extinction. Nowadays Chelts are grown in space, in Chelt Aquariums, and used to produce food for Split workers to consume.',
    factoryName: 'Chelt Aquarium',
    icon: 'ware_cheltmeat',
    volume: 2,
    transport: TransportType.container,
    price: { min: 53, max: 100, avg: 70 },
    group: WareGroups.agricultural,
    production: [
      {
        time: 300,
        amount: 139,
        method: 'default',
        name: 'Split',
        wares: [
          { ware: 'energycells', amount: 33 },
          { ware: 'water', amount: 80 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  scruffinfruits: {
    id: 'scruffinfruits',
    version: 1,
    name: 'Scruffin Fruit',
    description: 'Scruffin are fruit similar to sweet potatoes. They are grown by Split farmers in large, open fields on a number of planets, as well as in space aboard large installations known as Scruffin Farms. Scruffin flesh is a versatile foodstuff that, when processed, provides the basis of a number of Split food types. Although Scruffin are traded both inside and outside Split territory, they are mainly in demand in areas where Split workers are in abundance.',
    factoryName: 'Scruffin Farm',
    icon: 'ware_scruffinfruit',
    volume: 2,
    transport: TransportType.container,
    price: { min: 29, max: 68, avg: 38 },
    group: WareGroups.agricultural,
    production: [
      {
        time: 300,
        amount: 255,
        method: 'default',
        name: 'Split',
        wares: [
          { ware: 'energycells', amount: 30 },
          { ware: 'water', amount: 80 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  computronicsubstrate: {
    id: 'computronicsubstrate',
    version: 1,
    name: 'Computronic Substrate',
    description: 'Computronic Substrate is the advanced Terran version of programmable matter. The "atoms" forming the Substrate can mimic virtually all other elements and particles, natural or artificial. This incredible feat, and its wide-spread application, is what makes modern Terran station and ship designs possible.',
    factoryName: 'Computronic Substrate Fab',
    icon: 'ware_computronicsubstrate',
    volume: 50,
    transport: TransportType.container,
    price: { min: 7800, max: 9000, avg: 8300 },
    group: WareGroups.hightech,
    production: [
      {
        time: 300,
        amount: 49,
        method: 'default',
        name: 'Terran',
        wares: [
          { ware: 'energycells', amount: 2000 },
          { ware: 'hydrogen', amount: 1000 },
          { ware: 'ore', amount: 1500 },
          { ware: 'silicon', amount: 1500 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 300,
        amount: 50,
        method: 'recycling',
        name: 'Recycling',
        wares: [
          { ware: 'energycells', amount: 12500 },
          { ware: 'scrapmetal', amount: 1000 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
        ],
      },
    ]
  },
  metallicmicrolattice: {
    id: 'metallicmicrolattice',
    version: 1,
    name: 'Metallic Microlattice',
    description: 'A metallic microlattice is a synthetic porous metallic material consisting of an ultra-light metal foam. One of the many uses of microlattices is in the production of extremely lightweight and efficient structures for structural reinforcement and heat transfer in high-performance vehicles.',
    factoryName: 'Microlattice Factory',
    icon: 'ware_metallicmicrolattice',
    volume: 1,
    transport: TransportType.container,
    price: { min: 52, max: 77, avg: 63 },
    group: WareGroups.hightech,
    production: [
      {
        time: 300,
        amount: 317,
        method: 'default',
        name: 'Terran',
        wares: [
          { ware: 'energycells', amount: 83 },
          { ware: 'helium', amount: 217 },
          { ware: 'ore', amount: 83 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  proteinpaste: {
    id: 'proteinpaste',
    version: 1,
    name: 'Protein Paste',
    description: 'Protein Paste is a concentrated blend of meat and vegetable proteins used to produce specialised food products.',
    factoryName: 'Protein Processing Plant',
    icon: 'ware_proteinpaste',
    volume: 4,
    transport: TransportType.container,
    price: { min: 39, max: 148, avg: 92 },
    group: WareGroups.agricultural,
    production: [
      {
        time: 300,
        amount: 219,
        method: 'default',
        name: 'Terran',
        wares: [
          { ware: 'energycells', amount: 80 },
          { ware: 'ice', amount: 80 },
          { ware: 'methane', amount: 200 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  siliconcarbide: {
    id: 'siliconcarbide',
    version: 1,
    name: 'Silicon Carbide',
    description: 'Silicon Carbide is a semiconductor containing silicon and carbon. It can be used to form very hard ceramics that are widely used in applications requiring high endurance. Its electrical properties make the material suitable for dealing with high temperatures and voltages. Consequently Silicon Carbide is a key component in the manufacture of equipment such as ship engines or weapons.',
    factoryName: 'Silicon Carbide Mill',
    icon: 'ware_siliconcarbide',
    volume: 20,
    transport: TransportType.container,
    price: { min: 1254, max: 1820, avg: 1520 },
    group: WareGroups.hightech,
    production: [
      {
        time: 300,
        amount: 48,
        method: 'default',
        name: 'Terran',
        wares: [
          { ware: 'energycells', amount: 200 },
          { ware: 'metallicmicrolattice', amount: 2 },
          { ware: 'methane', amount: 400 },
          { ware: 'silicon', amount: 300 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
      {
        time: 300,
        amount: 60,
        method: 'recycling',
        name: 'Recycling',
        wares: [
          { ware: 'energycells', amount: 4000 },
          { ware: 'scrapmetal', amount: 250 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
        ],
      },
    ]
  },
  stimulants: {
    id: 'stimulants',
    version: 1,
    name: 'Stimulants',
    description: 'The term Stimulants has evolved to refer to the type of drugs that increase activity of the central nervous system and the body. The manufacture, distribution and use of Stimulants is considered illegal by the Terran government. However, there are persistent rumours that they are regularly used for specific military purposes, such as enhancing the combat performance of pilots.',
    factoryName: 'Stimulants Lab',
    icon: 'ware_stimulants',
    volume: 1,
    transport: TransportType.container,
    price: { min: 236, max: 415, avg: 315 },
    group: WareGroups.pharmaceutical,
    production: [
      {
        time: 300,
        amount: 98,
        method: 'default',
        name: 'Terran',
        wares: [
          { ware: 'energycells', amount: 80 },
          { ware: 'helium', amount: 400 },
          { ware: 'silicon', amount: 20 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  terranmre: {
    id: 'terranmre',
    version: 1,
    name: 'Terran MRE',
    description: 'The MRE, Meal-Ready-to-Eat, was first invented on Earth in the 20th Century. Since that time the food that comprises it has developed and is more nutritious. These prehydrated meals require no preparation and are self-heating as required.',
    factoryName: 'MRE Packing Facility',
    icon: 'ware_terranmre',
    volume: 1,
    transport: TransportType.container,
    price: { min: 38, max: 66, avg: 51 },
    group: WareGroups.food,
    production: [
      {
        time: 300,
        amount: 219,
        method: 'default',
        name: 'Terran',
        wares: [
          { ware: 'energycells', amount: 75 },
          { ware: 'proteinpaste', amount: 75 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  bofu: {
    id: 'bofu',
    version: 1,
    name: 'BoFu',
    description: 'BoFu meals are known to be very nutritious and healthy. The Boron love them, and it is said that their pilots can live on just a nugget of BoFu for almost a week.nnBoFu is grown in special BoFu Chemical Labs, from Plankton and other secret ingredients. Even though the Boron are famous among other races for their delicious Stott Spices, the taste of BoFu is no joy to anybody but themselves.',
    factoryName: 'BoFu Chemical Lab',
    icon: 'ware_bofu',
    volume: 4,
    transport: TransportType.container,
    price: { min: 90, max: 184, avg: 120 },
    group: WareGroups.food,
    production: [
      {
        time: 300,
        amount: 103,
        method: 'default',
        name: 'Boron',
        wares: [
          { ware: 'bogas', amount: 50 },
          { ware: 'energycells', amount: 50 },
          { ware: 'plankton', amount: 150 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  bogas: {
    id: 'bogas',
    version: 1,
    name: 'BoGas',
    description: 'The unusual natural resources found on the planet Nishala mean that the planet is really a huge chemical factory. From these many chemicals, the Boron manufacture a unique gas that is used throughout the universe as the ultimate painkiller and anaesthetic.nnAfter the Boron government stopped any commercial use of the natural resources of its planet, BoGas is now artificially reproduced in Synthetic BoGas Breweries throughout the Queendom of Boron.',
    factoryName: 'Synthetic BoGas Brewery',
    icon: 'ware_bogas',
    volume: 4,
    transport: TransportType.container,
    price: { min: 84, max: 172, avg: 112 },
    group: WareGroups.refined,
    production: [
      {
        time: 300,
        amount: 220,
        method: 'default',
        name: 'Boron',
        wares: [
          { ware: 'energycells', amount: 80 },
          { ware: 'water', amount: 200 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
  plankton: {
    id: 'plankton',
    version: 1,
    name: 'Plankton',
    description: 'Boron plankton is found as a scum-like layer that floats on the surface of the chemical swamps on the Planet Nishala. It forms naturally where certain chemicals, that are found in the swamp, mix with the ammonia-based atmosphere.nnThis scum is collected, and then treated with additives and other Boron minerals, to produce a wide range of different, nutritious spices. Since the Boron seas are now completely protected from any industrial usage, Plankton is mainly produced in space, aboard huge Plankton Farms that can be found everywhere in the Queendom of Boron.',
    factoryName: 'Plankton Farm',
    icon: 'ware_plankton',
    volume: 1,
    transport: TransportType.container,
    price: { min: 17, max: 38, avg: 23 },
    group: WareGroups.agricultural,
    production: [
      {
        time: 300,
        amount: 206,
        method: 'default',
        name: 'Boron',
        wares: [
          { ware: 'energycells', amount: 15 },
          { ware: 'water', amount: 38 },
        ],
        effects: [
          { type: Effects.work, product: 0.5, cycle: 0.5 },
          { type: Effects.secondaryResource, product: 0.1, cycle: 0.25 },
        ],
      },
    ]
  },
};

export const AllWares = [
  Wares.advancedcomposites,
  Wares.advancedelectronics,
  Wares.antimattercells,
  Wares.antimatterconverters,
  Wares.claytronics,
  Wares.dronecomponents,
  Wares.energycells,
  Wares.engineparts,
  Wares.fieldcoils,
  Wares.foodrations,
  Wares.graphene,
  Wares.helium,
  Wares.hullparts,
  Wares.hydrogen,
  Wares.ice,
  Wares.majadust,
  Wares.majasnails,
  Wares.meat,
  Wares.medicalsupplies,
  Wares.methane,
  Wares.microchips,
  Wares.missilecomponents,
  Wares.nividium,
  Wares.nostropoil,
  Wares.ore,
  Wares.plasmaconductors,
  Wares.quantumtubes,
  Wares.rawscrap,
  Wares.refinedmetals,
  Wares.scanningarrays,
  Wares.scrapmetal,
  Wares.shieldcomponents,
  Wares.silicon,
  Wares.siliconwafers,
  Wares.smartchips,
  Wares.sojabeans,
  Wares.sojahusk,
  Wares.spacefuel,
  Wares.spaceweed,
  Wares.spices,
  Wares.sunriseflowers,
  Wares.superfluidcoolant,
  Wares.swampplant,
  Wares.teladianium,
  Wares.turretcomponents,
  Wares.water,
  Wares.weaponcomponents,
  Wares.wheat,
  Wares.cheltmeat,
  Wares.scruffinfruits,
  Wares.computronicsubstrate,
  Wares.metallicmicrolattice,
  Wares.proteinpaste,
  Wares.siliconcarbide,
  Wares.stimulants,
  Wares.terranmre,
  Wares.bofu,
  Wares.bogas,
  Wares.plankton,
];
