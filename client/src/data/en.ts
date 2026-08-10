// English content for the /en section.
// Keep this module dependency free so the server can import it for SEO injection.

export interface EnFAQ {
  q: string;
  a: string;
}

export interface EnSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface EnServiceData {
  slug: string;
  trId: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  shortDescription: string;
  intro: string[];
  highlights: string[];
  faq: EnFAQ[];
  ports: string[];
}

export interface EnLocationData {
  slug: string;
  trSlug: string;
  name: string;
  areaName: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  sections: EnSection[];
  serviceSlugs: string[];
  faq: EnFAQ[];
  nearby: string[];
}

export const enServicesData: EnServiceData[] = [
  {
    slug: "ship-project-lashing",
    trId: "gemi-proje-lashing",
    title: "Ship and Project Lashing",
    seoTitle: "Ship and Project Lashing Services in Turkey | Capital Lashing",
    metaDescription: "Professional ship and project cargo lashing services in Turkey. IMO CSS Code compliant securing with certified equipment and experienced lashing crews available around the clock.",
    shortDescription: "Securing of heavy project cargo on vessel decks and in cargo holds.",
    intro: [
      "Capital Lashing provides ship and project lashing services at all major Turkish ports. Our teams secure heavy and oversized cargo such as transformers, generators, turbines, boilers and construction machinery on vessel decks and inside cargo holds.",
      "Every project starts with a review of the cargo drawings, the centre of gravity and the available lashing points. We then prepare a securing arrangement that complies with the IMO CSS Code and meets the approval requirements of the vessel master and the attending marine surveyor.",
      "Our crews work with certified steel wire ropes, chains, turnbuckles and welded fittings such as D rings and stopper plates. After completion we deliver a photographic report and a lashing certificate for your records and insurance requirements.",
    ],
    highlights: [
      "IMO CSS Code compliant securing arrangements",
      "Certified lashing equipment with test documentation",
      "Welded securing and timber shoring where required",
      "Photographic reports and lashing certificates",
      "Crews available 24/7 at all major Turkish ports",
    ],
    faq: [
      {
        q: "What is ship project lashing?",
        a: "Ship project lashing is the securing of heavy or out of gauge cargo such as transformers, turbines and machinery on a vessel deck or inside a cargo hold. The work follows the IMO CSS Code and is checked by the vessel master and the attending surveyor before departure.",
      },
      {
        q: "Which ports in Turkey do you cover?",
        a: "We operate at Ambarli Port, Haydarpasa Port, Tekirdag Port, Izmir Aliaga Port, Mersin Port and other major Turkish ports. Our crews are mobile and can attend vessels across the country.",
      },
      {
        q: "Do you provide a lashing certificate?",
        a: "Yes. After every operation we issue a lashing certificate together with a photographic report. These documents are commonly required by marine insurers and charter parties.",
      },
      {
        q: "How do I request a quotation for cargo securing in Turkey?",
        a: "Send us the cargo dimensions, the weight, the load port and the planned sailing date through our contact form. Our team reviews the details and returns a quotation as quickly as possible.",
      },
    ],
    ports: ["Ambarli Port", "Haydarpasa Port", "Tekirdag Port", "Izmir Aliaga Port", "Mersin Port", "Istanbul"],
  },
  {
    slug: "container-lashing",
    trId: "konteyner-lashing",
    title: "Container Lashing",
    seoTitle: "Container Lashing and Cargo Securing in Istanbul | Capital Lashing",
    metaDescription: "Container lashing and in container cargo securing in Istanbul and the Marmara region. CTU Code compliant securing with lashing belts, airbags and timber blocking.",
    shortDescription: "Securing of cargo and vehicles inside shipping containers.",
    intro: [
      "Capital Lashing secures cargo inside shipping containers at ports, warehouses and factories across Istanbul and the Marmara region. Palletised goods, machinery, drums, crates and vehicles all need proper securing before the container door closes.",
      "Our teams follow the CTU Code, the international guideline for packing cargo transport units. We select the right combination of polyester lashing belts, dunnage airbags, anti slip mats and heat treated timber blocking for each load.",
      "We are experienced in loading and securing cars, trucks and construction machinery inside containers with dedicated wheel lashing systems. On request we also witness the sealing of the container and document the stowage with photographs.",
    ],
    highlights: [
      "CTU Code compliant container packing and securing",
      "Lashing belts, airbags and timber blocking",
      "Vehicle and machinery securing inside containers",
      "Service at ports, warehouses and factories",
      "Photographic stowage documentation on request",
    ],
    faq: [
      {
        q: "Why is cargo securing inside a container necessary?",
        a: "During an ocean voyage a container is exposed to rolling, pitching and braking forces. Unsecured cargo shifts, strikes the container walls and arrives damaged. The CTU Code sets out the international rules for proper securing inside cargo transport units.",
      },
      {
        q: "Which materials do you use for container lashing?",
        a: "Depending on the cargo we use polyester lashing belts, dunnage airbags, heat treated timber blocking, anti slip mats, corner protectors and door protection nets.",
      },
      {
        q: "Can you secure vehicles inside containers?",
        a: "Yes. We load and secure cars, vans, trucks and construction machinery inside containers using dedicated wheel lashing equipment and timber chocking.",
      },
      {
        q: "Where do you provide container lashing services?",
        a: "We work at Ambarli Port, Haydarpasa Port and Tekirdag Port as well as at factories and warehouses across Istanbul and the wider Marmara region.",
      },
    ],
    ports: ["Ambarli Port", "Haydarpasa Port", "Tekirdag Port", "Istanbul"],
  },
  {
    slug: "project-cargo-lashing",
    trId: "proje-kargo-lashing",
    title: "Project Cargo Lashing",
    seoTitle: "Project Cargo Securing in Turkey | OOG Lashing | Capital Lashing",
    metaDescription: "Project cargo securing for out of gauge and heavy lift shipments in Turkey. Turbines, transformers and machinery secured with engineered lashing plans at Aliaga, Mersin and Tekirdag.",
    shortDescription: "Engineered securing solutions for out of gauge and heavy industrial cargo.",
    intro: [
      "Capital Lashing develops engineered securing solutions for out of gauge and heavy lift cargo. Wind turbine components, power transformers, industrial boilers, presses and large construction equipment need a dedicated lashing plan for every voyage.",
      "For each project we analyse the centre of gravity, the lifting points and the available securing points of the cargo. The lashing arrangement is designed for the transport mode, whether the cargo travels by vessel, by lowbed trailer or by rail wagon.",
      "Where standard fittings are not enough we design and fabricate steel cradles and transport frames for the cargo. Our project teams support operations at Izmir Aliaga Port, Mersin Port and Tekirdag Port around the clock.",
    ],
    highlights: [
      "Engineered lashing plans for out of gauge cargo",
      "Centre of gravity and securing point analysis",
      "Custom steel cradles and transport frames",
      "Securing on vessels, lowbed trailers and rail wagons",
      "Project support at major Turkish ports 24/7",
    ],
    faq: [
      {
        q: "What is project cargo securing?",
        a: "Project cargo securing is the engineered lashing of heavy or oversized cargo that does not fit standard shipping units. Every shipment receives its own securing plan based on the weight, the centre of gravity and the transport route.",
      },
      {
        q: "What does OOG mean in shipping?",
        a: "OOG stands for out of gauge. It describes cargo that exceeds the standard container dimensions in height, width or length. OOG cargo is usually carried on flat rack or open top containers or as breakbulk and always needs a dedicated lashing plan.",
      },
      {
        q: "Do you handle wind turbine components?",
        a: "Yes. We have specific experience in securing wind turbine blades, towers and nacelles on vessels and on lowbed trailers.",
      },
      {
        q: "Which ports do you cover for project cargo?",
        a: "We regularly work at Izmir Aliaga Port, Mersin Port, Tekirdag Port, Ambarli Port and across Istanbul. For larger projects we mobilise teams to other Turkish ports as well.",
      },
    ],
    ports: ["Izmir Aliaga Port", "Mersin Port", "Tekirdag Port", "Ambarli Port", "Istanbul"],
  },
  {
    slug: "flat-rack-lashing",
    trId: "flat-rack-lashing",
    title: "Flat Rack Lashing",
    seoTitle: "Flat Rack Container Lashing in Turkey | Capital Lashing",
    metaDescription: "Flat rack container lashing for overheight and overwidth cargo in Turkey. Surveyor approved securing with steel wire, chains and heavy duty belts at Ambarli, Aliaga and Mersin.",
    shortDescription: "Securing of oversized cargo on flat rack containers.",
    intro: [
      "Flat rack containers carry cargo that exceeds standard container dimensions. Capital Lashing positions and secures overheight and overwidth cargo on flat racks so that the unit can be accepted for carriage on container vessels.",
      "Our crews balance the cargo on the flat rack and secure it with certified steel wire ropes, chains, turnbuckles and high capacity lashing belts. Corner protection and timber blocking protect the cargo body during the voyage.",
      "The completed securing arrangement is prepared to the standard expected by vessel masters and marine surveyors. We operate at Ambarli Port, Izmir Aliaga Port and Mersin Port as well as at factory loading sites.",
    ],
    highlights: [
      "Overheight and overwidth cargo experience",
      "Certified steel wire, chain and belt lashing",
      "Corner protection and timber blocking",
      "Securing prepared for surveyor approval",
      "Service at ports and factory loading sites",
    ],
    faq: [
      {
        q: "What is a flat rack container?",
        a: "A flat rack is a container type with a base and two end walls but no side walls or roof. It is used for cargo that exceeds standard container height or width and such cargo must be secured with a dedicated lashing arrangement.",
      },
      {
        q: "Which cargo suits flat rack lashing?",
        a: "Construction machinery, transformers, generators, pipe bundles, crane parts and any load that exceeds standard container dimensions can be carried and secured on a flat rack.",
      },
      {
        q: "Who approves the flat rack securing?",
        a: "The securing arrangement is reviewed by the vessel master and, where nominated, by an independent marine surveyor. Capital Lashing prepares the securing to meet these approval standards and issues a lashing certificate.",
      },
      {
        q: "Do you provide flat rack lashing in Istanbul?",
        a: "Yes. We provide flat rack lashing at Ambarli Port and Haydarpasa Port in Istanbul and also operate at Izmir Aliaga Port and Mersin Port.",
      },
    ],
    ports: ["Ambarli Port", "Izmir Aliaga Port", "Mersin Port", "Haydarpasa Port"],
  },
  {
    slug: "cargo-covering",
    trId: "brandalama",
    title: "Cargo Covering and Tarpaulin",
    seoTitle: "Cargo Covering and Tarpaulin Services in Turkey | Capital Lashing",
    metaDescription: "Industrial tarpaulin and cargo covering services at Turkish ports. UV resistant waterproof PVC covers for deck cargo, machinery and storage yards in Istanbul and beyond.",
    shortDescription: "Weather protection for deck cargo and open storage with industrial tarpaulins.",
    intro: [
      "Open cargo on vessel decks and in storage yards is exposed to rain, salt spray, wind and sunlight. Capital Lashing protects such cargo with heavy duty PVC tarpaulins that are waterproof, UV resistant and highly tear resistant.",
      "Covers are fitted to the shape of the cargo either with tailored covers or by on site application. Proper covering is essential on long ocean passages where moisture and corrosion can damage machinery and steel products.",
      "We provide cargo covering services at ports along the Marmara, Aegean and Mediterranean coasts, including deck cargo covering, storage yard covering and machinery wrapping.",
    ],
    highlights: [
      "Heavy duty waterproof PVC tarpaulins",
      "UV resistant and tear resistant material",
      "Tailored covers fitted to the cargo shape",
      "Deck cargo and storage yard protection",
      "Service at Marmara, Aegean and Mediterranean ports",
    ],
    faq: [
      {
        q: "When is deck cargo covering necessary?",
        a: "Open cargo carried on deck such as machinery, timber and steel profiles is exposed to salt water, rain and UV radiation. On longer sea passages covering is a standard protection measure against moisture and corrosion damage.",
      },
      {
        q: "What is the difference between tarpaulin covering and shrink wrap?",
        a: "Tarpaulin covering uses reusable PVC covers that shield the cargo from weather. Shrink wrap uses a heat shrunk polyethylene film that seals the cargo completely. For long term storage or export packing shrink wrap can offer tighter protection.",
      },
      {
        q: "Where do you provide cargo covering services?",
        a: "We cover cargo at Ambarli Port, Haydarpasa Port, Mersin Port and Izmir Aliaga Port as well as at storage yards and factories across the region.",
      },
    ],
    ports: ["Ambarli Port", "Haydarpasa Port", "Mersin Port", "Izmir Aliaga Port"],
  },
  {
    slug: "shrink-wrap-packaging",
    trId: "shrink-wrap",
    title: "Shrink Wrap Packaging",
    seoTitle: "Industrial Shrink Wrap Packaging in Turkey | Capital Lashing",
    metaDescription: "Industrial shrink wrap packaging for machinery, boats and export cargo in Turkey. VCI corrosion protection options and fully sealed weatherproof wrapping in Istanbul.",
    shortDescription: "Heat shrunk sealed packaging for industrial equipment and boats.",
    intro: [
      "Capital Lashing provides shrink wrap packaging for industrial machinery, boats and sensitive equipment. The heat shrunk polyethylene film takes the shape of the product and forms a tight sealed layer around it.",
      "Shrink wrap keeps out water, moisture, dust and salt air during transport and storage. For export shipments with metal surfaces we combine the film with VCI corrosion inhibitor technology for reliable rust protection.",
      "Options include UV resistant outer films, zipper door access, desiccant packs and ventilation vents. We serve Istanbul, Ambarli Port and Haydarpasa Port and attend factories and marinas across the region.",
    ],
    highlights: [
      "Fully sealed weatherproof packaging",
      "VCI corrosion protection for metal surfaces",
      "UV resistant outer film options",
      "Zipper door access and ventilation vents",
      "Service for machinery, boats and export cargo",
    ],
    faq: [
      {
        q: "What does shrink wrap packaging protect against?",
        a: "Shrink wrap forms a sealed film around the product and protects it against water, moisture, dust, salt air and UV exposure during transport and storage.",
      },
      {
        q: "What is VCI shrink wrap?",
        a: "VCI stands for volatile corrosion inhibitor. VCI enhanced shrink film protects metal surfaces against rust and corrosion and is the preferred option for machinery and export cargo with exposed metal parts.",
      },
      {
        q: "Do you shrink wrap boats?",
        a: "Yes. We wrap motor yachts, sailing boats and fibreglass boats for winter storage and for overseas transport.",
      },
      {
        q: "Where can I get shrink wrap services in Istanbul?",
        a: "Our teams attend Ambarli Port, Haydarpasa Port and factories, warehouses and marinas across Istanbul.",
      },
    ],
    ports: ["Ambarli Port", "Haydarpasa Port", "Istanbul"],
  },
  {
    slug: "wooden-crating",
    trId: "sandiklama",
    title: "Wooden Crating and Export Packing",
    seoTitle: "ISPM 15 Wooden Crating and Export Packing in Turkey | Capital Lashing",
    metaDescription: "ISPM 15 certified wooden crates and cases for export cargo in Turkey. Custom sized closed crates, lattice cases and pallets produced and packed in Istanbul.",
    shortDescription: "ISPM 15 certified wooden crates and cases for export cargo.",
    intro: [
      "Capital Lashing produces wooden crates, lattice cases, pallets and transport bases for export cargo. All timber is heat treated and stamped in line with the ISPM 15 standard so that shipments pass customs and quarantine controls without delay.",
      "Each crate is designed for the dimensions and the weight of the product. Closed crates give full protection while lattice cases allow air circulation. Moisture barrier foil, VCI film and shock absorbing foam can be added for sensitive equipment.",
      "We support the full process from crate production to packing, loading and securing so that your export cargo leaves Istanbul properly protected and documented.",
    ],
    highlights: [
      "ISPM 15 heat treated and stamped timber",
      "Custom sized closed crates and lattice cases",
      "Moisture barrier and VCI film options",
      "Shock absorbing foam for sensitive equipment",
      "Production, packing and loading in one service",
    ],
    faq: [
      {
        q: "What is ISPM 15 and why does it matter?",
        a: "ISPM 15 is the international standard for wood packaging material in trade. Timber must be heat treated and stamped. Crates without the ISPM 15 stamp can be rejected or quarantined at the destination country.",
      },
      {
        q: "Can you produce crates for custom dimensions?",
        a: "Yes. Every crate and case is produced to the dimensions and the weight of your product in our own workshop.",
      },
      {
        q: "Do you also pack and load the cargo?",
        a: "Yes. We handle the complete process including packing, moisture protection, loading into the container and securing.",
      },
    ],
    ports: ["Istanbul", "Ambarli Port", "Haydarpasa Port"],
  },
  {
    slug: "boat-yacht-lashing",
    trId: "tekne-yat-lashing",
    title: "Boat and Yacht Lashing",
    seoTitle: "Boat and Yacht Lashing for Sea Transport in Turkey | Capital Lashing",
    metaDescription: "Boat and yacht securing for sea transport from Turkey. Cradle support, lashing and shrink wrap protection for motor yachts and sailing boats at Istanbul ports.",
    shortDescription: "Securing of boats and yachts on cradles, flat racks and vessel decks.",
    intro: [
      "Transporting a boat or a yacht by sea requires careful securing. Capital Lashing positions boats on cradles or transport frames and secures them on flat racks, on trailers or directly on vessel decks.",
      "The hull is protected with padding and the securing forces are spread so that the boat structure is never overloaded. Belts, wires and chains are selected according to the weight and the shape of the boat.",
      "On request we combine the lashing with shrink wrap packaging so that the boat is also protected against salt spray and weather during the voyage.",
    ],
    highlights: [
      "Cradle and transport frame support",
      "Hull friendly padded securing",
      "Lashing on flat racks, trailers and vessel decks",
      "Optional shrink wrap weather protection",
      "Experienced teams at Istanbul ports",
    ],
    faq: [
      {
        q: "How is a yacht secured for sea transport?",
        a: "The yacht is placed on a cradle or transport frame and secured with belts, wires or chains. Padding protects the hull and the securing arrangement spreads the forces so the boat structure is not overloaded.",
      },
      {
        q: "Can you also wrap the boat for the voyage?",
        a: "Yes. We offer shrink wrap packaging together with the lashing so the boat is protected against salt spray, rain and UV during transport.",
      },
      {
        q: "Where do you provide boat lashing services?",
        a: "We work at Ambarli Port and Haydarpasa Port in Istanbul and can attend marinas and boatyards across the Marmara region.",
      },
    ],
    ports: ["Ambarli Port", "Haydarpasa Port", "Istanbul"],
  },
  {
    slug: "unlashing-services",
    trId: "unlashing-tahliye",
    title: "Unlashing and Discharge Services",
    seoTitle: "Unlashing and Discharge Support at Turkish Ports | Capital Lashing",
    metaDescription: "Unlashing and discharge support at Turkish ports. Safe removal of lashing materials from import cargo, containers and project shipments with experienced crews.",
    shortDescription: "Safe removal of securing materials from arriving cargo.",
    intro: [
      "Arriving cargo has to be released from its securing before discharge can start. Capital Lashing provides unlashing services for import containers, project cargo and vehicles at Turkish ports.",
      "Our crews remove wires, chains, belts and welded fittings in a controlled sequence so that the cargo remains stable during the operation. Cutting and grinding work is carried out with proper safety measures.",
      "Removed lashing materials are collected and handed over or disposed of according to the instructions of the consignee and the terminal.",
    ],
    highlights: [
      "Controlled unlashing of import cargo",
      "Safe removal of welded fittings",
      "Container, project cargo and vehicle experience",
      "Coordination with terminal and consignee",
      "Crews available at short notice",
    ],
    faq: [
      {
        q: "What are unlashing services?",
        a: "Unlashing is the removal of the securing materials such as wires, chains, belts and welded fittings from arriving cargo before discharge. The work follows a controlled sequence so the cargo stays stable.",
      },
      {
        q: "Do you remove welded lashing fittings?",
        a: "Yes. Our crews cut and grind welded fittings such as D rings and stopper plates with proper safety measures and prepare the cargo for discharge.",
      },
      {
        q: "How quickly can a crew attend the vessel?",
        a: "We plan attendance around the vessel schedule and can mobilise crews at short notice at Istanbul ports and other major Turkish ports.",
      },
    ],
    ports: ["Ambarli Port", "Haydarpasa Port", "Tekirdag Port", "Istanbul"],
  },
];

export const enLocationsData: EnLocationData[] = [
  {
    slug: "istanbul",
    trSlug: "istanbul",
    name: "Istanbul",
    areaName: "Istanbul",
    title: "Lashing and Cargo Securing Services in Istanbul",
    seoTitle: "Cargo Securing and Lashing Services in Istanbul | Capital Lashing",
    metaDescription: "Lashing, container packing, shrink wrap and crating services across Istanbul. Mobile crews attend factories, warehouses and port areas on both sides of the city.",
    intro: "Capital Lashing is based in Istanbul and serves the whole city with mobile lashing crews. From factory loading points to port areas we secure export cargo on both the European and the Asian side.",
    sections: [
      {
        heading: "Why Istanbul Matters for Cargo Securing",
        paragraphs: [
          "Istanbul is one of the busiest gateways of Turkish foreign trade. Thousands of manufacturers in the city ship their products worldwide in containers. Machinery, palletised goods and vehicles that leave the factory without proper securing face a real risk of damage at sea.",
          "Our teams attend factories and warehouses across Istanbul and secure the cargo at the loading point. Before the container door closes you know that the load is secured in line with the CTU Code.",
        ],
      },
      {
        heading: "Services We Provide in Istanbul",
        paragraphs: [
          "In Istanbul we provide container lashing, project cargo securing, shrink wrap packaging, wooden crating and cargo covering. Our head office in Sancaktepe coordinates crews for both sides of the city.",
        ],
        bullets: [
          "Container packing and securing at factories and warehouses",
          "Project cargo lashing at port areas",
          "Shrink wrap packaging for machinery and boats",
          "ISPM 15 wooden crating for export cargo",
        ],
      },
    ],
    serviceSlugs: ["container-lashing", "project-cargo-lashing", "shrink-wrap-packaging", "wooden-crating"],
    faq: [
      {
        q: "Do you attend factories in Istanbul?",
        a: "Yes. Our mobile crews attend factories and warehouses on both the European and the Asian side of Istanbul and secure the cargo at the loading point.",
      },
      {
        q: "Which securing standard do you follow for containers?",
        a: "Container packing and securing follows the CTU Code, the international guideline for packing cargo transport units.",
      },
      {
        q: "Can you handle urgent requests in Istanbul?",
        a: "Yes. Our teams work around the clock and can be mobilised at short notice across Istanbul.",
      },
    ],
    nearby: ["ambarli-port", "haydarpasa-port", "tekirdag-port"],
  },
  {
    slug: "ambarli-port",
    trSlug: "ambarli-limani",
    name: "Ambarli Port",
    areaName: "Ambarli, Istanbul",
    title: "Lashing Services at Ambarli Port",
    seoTitle: "Lashing and Cargo Securing at Ambarli Port | Capital Lashing",
    metaDescription: "Lashing services at Ambarli Port, Istanbul. Container lashing, flat rack securing, project cargo lashing and unlashing with crews available around the clock.",
    intro: "Ambarli Port on the European side of Istanbul is one of the busiest container hubs in Turkey. Capital Lashing supports shippers and forwarders at Ambarli with securing crews available around the clock.",
    sections: [
      {
        heading: "Cargo Securing at a Major Container Hub",
        paragraphs: [
          "Ambarli handles a large share of the container traffic of the Istanbul region. Export containers packed at nearby factories and warehouses pass through the terminals of Ambarli every day.",
          "Our crews secure cargo inside containers, lash oversized loads on flat racks and support project shipments at the port area. We also provide unlashing for arriving import cargo.",
        ],
      },
      {
        heading: "Services at Ambarli Port",
        paragraphs: [
          "We provide the full range of securing services at Ambarli and at the loading points around the port.",
        ],
        bullets: [
          "Container lashing and CTU Code compliant packing",
          "Flat rack lashing for overheight and overwidth cargo",
          "Project cargo securing with engineered lashing plans",
          "Unlashing and discharge support for import cargo",
        ],
      },
    ],
    serviceSlugs: ["container-lashing", "flat-rack-lashing", "project-cargo-lashing", "unlashing-services"],
    faq: [
      {
        q: "Do you work inside the Ambarli terminals?",
        a: "We work at the port area and at the container freight stations and warehouses around Ambarli in line with the access rules of each terminal.",
      },
      {
        q: "Can you lash flat racks at Ambarli?",
        a: "Yes. Flat rack lashing for overheight and overwidth cargo is one of our core services at Ambarli Port.",
      },
      {
        q: "Are your crews available at night?",
        a: "Yes. Our crews work around the clock and adapt to vessel and terminal schedules.",
      },
    ],
    nearby: ["istanbul", "haydarpasa-port", "tekirdag-port"],
  },
  {
    slug: "haydarpasa-port",
    trSlug: "haydarpasa-limani",
    name: "Haydarpasa Port",
    areaName: "Haydarpasa, Istanbul",
    title: "Lashing Services at Haydarpasa Port",
    seoTitle: "Lashing and Cargo Securing at Haydarpasa Port | Capital Lashing",
    metaDescription: "Lashing services at Haydarpasa Port on the Asian side of Istanbul. Ship lashing, container securing, boat lashing and cargo covering with experienced crews.",
    intro: "Haydarpasa Port on the Asian side of Istanbul serves general cargo, project shipments and vehicles. Capital Lashing attends Haydarpasa with experienced securing crews for vessels and containers.",
    sections: [
      {
        heading: "Securing Work on the Asian Side",
        paragraphs: [
          "Haydarpasa handles general cargo and project shipments close to the industrial zones of the Asian side. Cargo loaded at Haydarpasa often includes machinery, steel products and vehicles that need professional securing.",
          "Our crews lash cargo on vessel decks and in holds, secure loads inside containers and prepare boats and yachts for sea transport.",
        ],
      },
      {
        heading: "Services at Haydarpasa Port",
        paragraphs: [
          "We support shippers and agents at Haydarpasa with a wide securing portfolio.",
        ],
        bullets: [
          "Ship and project lashing on deck and in holds",
          "Container lashing and packing",
          "Boat and yacht securing for sea transport",
          "Cargo covering with industrial tarpaulins",
        ],
      },
    ],
    serviceSlugs: ["ship-project-lashing", "container-lashing", "boat-yacht-lashing", "cargo-covering"],
    faq: [
      {
        q: "Which cargo types do you secure at Haydarpasa?",
        a: "We secure project cargo, machinery, steel products, containers, boats and vehicles at Haydarpasa Port.",
      },
      {
        q: "Do you provide lashing certificates at Haydarpasa?",
        a: "Yes. After each operation we issue a lashing certificate with a photographic report.",
      },
      {
        q: "How close are your crews to Haydarpasa?",
        a: "Our head office is on the Asian side of Istanbul so crews reach Haydarpasa quickly at any hour.",
      },
    ],
    nearby: ["istanbul", "ambarli-port", "tekirdag-port"],
  },
  {
    slug: "tekirdag-port",
    trSlug: "tekirdag-limani",
    name: "Tekirdag Port",
    areaName: "Tekirdag",
    title: "Lashing Services at Tekirdag Port",
    seoTitle: "Lashing and Cargo Securing at Tekirdag Port | Capital Lashing",
    metaDescription: "Lashing services at Tekirdag Port in the western Marmara region. Container lashing, project cargo securing and unlashing for the industry of Thrace.",
    intro: "Tekirdag Port serves the growing industry of the Thrace region west of Istanbul. Capital Lashing supports exporters and forwarders at Tekirdag with container and project cargo securing.",
    sections: [
      {
        heading: "Gateway of the Thrace Region",
        paragraphs: [
          "Factories across Tekirdag, Corlu and Cerkezkoy ship machinery, steel and consumer goods through Tekirdag Port. Proper securing at the loading point protects these shipments on the way to their destination.",
          "Our crews attend the port and the surrounding industrial zones for container packing, project cargo lashing and unlashing of arriving cargo.",
        ],
      },
      {
        heading: "Services at Tekirdag Port",
        paragraphs: [
          "We provide securing services at the port and at factories across the region.",
        ],
        bullets: [
          "Container lashing at the port and at factories",
          "Project cargo securing with engineered plans",
          "Ship lashing on deck and in holds",
          "Unlashing for import shipments",
        ],
      },
    ],
    serviceSlugs: ["container-lashing", "project-cargo-lashing", "ship-project-lashing", "unlashing-services"],
    faq: [
      {
        q: "Do you attend factories around Tekirdag?",
        a: "Yes. Our crews attend factories in Tekirdag, Corlu and Cerkezkoy and secure cargo at the loading point.",
      },
      {
        q: "Can you support project shipments at Tekirdag?",
        a: "Yes. We prepare engineered lashing plans and secure project cargo on vessels at Tekirdag Port.",
      },
      {
        q: "How far in advance should we book a crew?",
        a: "Share your loading schedule as early as possible. For urgent cases we can usually mobilise a crew at short notice.",
      },
    ],
    nearby: ["istanbul", "ambarli-port", "haydarpasa-port"],
  },
  {
    slug: "aliaga-port",
    trSlug: "aliaga",
    name: "Izmir Aliaga Port",
    areaName: "Aliaga, Izmir",
    title: "Lashing Services at Izmir Aliaga Port",
    seoTitle: "Lashing and Cargo Securing at Izmir Aliaga Port | Capital Lashing",
    metaDescription: "Lashing services at Izmir Aliaga Port. Project cargo securing, ship lashing and flat rack lashing for the heavy industry of the Aegean region.",
    intro: "The Aliaga port zone north of Izmir is a centre of heavy industry with steel plants, refineries and energy projects. Capital Lashing supports project shipments at Aliaga with engineered securing solutions.",
    sections: [
      {
        heading: "Heavy Industry and Project Cargo",
        paragraphs: [
          "Aliaga handles steel products, refinery equipment and energy project components. These shipments are often heavy, oversized and of high value and demand engineered securing.",
          "Our project teams analyse each load and prepare lashing arrangements that meet the approval of vessel masters and marine surveyors at Aliaga.",
        ],
      },
      {
        heading: "Services at Aliaga Port",
        paragraphs: [
          "We support the industrial shippers of the Aegean region with a project focused service portfolio.",
        ],
        bullets: [
          "Project cargo lashing with engineered plans",
          "Ship lashing on deck and in cargo holds",
          "Flat rack securing for oversized loads",
          "Cargo covering for weather protection",
        ],
      },
    ],
    serviceSlugs: ["project-cargo-lashing", "ship-project-lashing", "flat-rack-lashing", "cargo-covering"],
    faq: [
      {
        q: "Do you have experience with steel cargo at Aliaga?",
        a: "Yes. We secure steel coils, profiles and plates as well as refinery and energy equipment at the Aliaga port zone.",
      },
      {
        q: "Can you mobilise a team from Istanbul to Aliaga?",
        a: "Yes. Our project teams travel to Aliaga for planned operations and stay on site until the securing is approved.",
      },
      {
        q: "Do you prepare securing plans for surveyor approval?",
        a: "Yes. Lashing arrangements are prepared in line with the IMO CSS Code and presented for master and surveyor approval.",
      },
    ],
    nearby: ["mersin-port", "istanbul", "ambarli-port"],
  },
  {
    slug: "mersin-port",
    trSlug: "mersin-limani",
    name: "Mersin Port",
    areaName: "Mersin",
    title: "Lashing Services at Mersin Port",
    seoTitle: "Lashing and Cargo Securing at Mersin Port | Capital Lashing",
    metaDescription: "Lashing services at Mersin Port, the main gateway of the eastern Mediterranean in Turkey. Project cargo securing, container lashing and flat rack lashing.",
    intro: "Mersin Port is the main trade gateway of the eastern Mediterranean coast of Turkey. Capital Lashing supports exporters and project forwarders at Mersin with professional securing crews.",
    sections: [
      {
        heading: "Gateway of the Eastern Mediterranean",
        paragraphs: [
          "Mersin connects the industry of southern and central Anatolia with global markets. Machinery, project cargo and containerised goods leave Mersin every day and their safe arrival starts with proper securing.",
          "Our crews attend Mersin for project cargo lashing, container securing and flat rack work and coordinate with terminals and agents on site.",
        ],
      },
      {
        heading: "Services at Mersin Port",
        paragraphs: [
          "We provide a complete securing portfolio at Mersin and the surrounding industrial zones.",
        ],
        bullets: [
          "Project cargo lashing with engineered plans",
          "Container lashing and CTU Code packing",
          "Flat rack securing for oversized cargo",
          "Ship lashing on deck and in holds",
        ],
      },
    ],
    serviceSlugs: ["project-cargo-lashing", "container-lashing", "flat-rack-lashing", "ship-project-lashing"],
    faq: [
      {
        q: "Do you have crews for Mersin operations?",
        a: "Yes. We mobilise experienced crews for planned operations at Mersin Port and stay on site until the work is completed and approved.",
      },
      {
        q: "Which cargo types do you secure at Mersin?",
        a: "We secure project cargo, machinery, containerised goods and oversized loads on flat racks at Mersin Port.",
      },
      {
        q: "How do I get a quotation for a Mersin operation?",
        a: "Send the cargo details, the loading date and the terminal information through our contact form and we will return a quotation quickly.",
      },
    ],
    nearby: ["aliaga-port", "istanbul", "ambarli-port"],
  },
];

export const enPortToLocationSlug: Record<string, string> = {
  "Istanbul": "istanbul",
  "Ambarli Port": "ambarli-port",
  "Haydarpasa Port": "haydarpasa-port",
  "Tekirdag Port": "tekirdag-port",
  "Izmir Aliaga Port": "aliaga-port",
  "Mersin Port": "mersin-port",
};

export const trServiceIdToEnSlug: Record<string, string> = Object.fromEntries(
  enServicesData.map((s) => [s.trId, s.slug]),
);

export const trLocationSlugToEnSlug: Record<string, string> = Object.fromEntries(
  enLocationsData.map((l) => [l.trSlug, l.slug]),
);

export function getEnServiceBySlug(slug: string) {
  return enServicesData.find((s) => s.slug === slug);
}

export function getEnLocationBySlug(slug: string) {
  return enLocationsData.find((l) => l.slug === slug);
}
