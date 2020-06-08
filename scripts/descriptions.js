function describeUnit(abbreviation) {
  const units = [
    {
      unit: 'Cba',
      unitname: 'Bright Angel Shale',
      description:
        'Green and purple-red, slope-forming siltstone and shale, and interbeds of reddish-brown to brown sandstone of Tapeats Sandstone lithology. Includes ledge-forming red-brown sandstone member of McKee and Resser 1945. Consists of green and purplish-red, fine-grained, micaceous, ripple-laminated, fossiliferous siltstone and shale; dark-green, medium- to coarse-grained, thin-bedded, glauconitic sandstone; and interbedded purplish-red and brown, thin-bedded, fine- to coarse-grained, ripple-laminated sandstone. Includes gray, thin-bedded, fine-grained, micaceous silty dolomite in upper part in western quarter of map area. Intertonguing and facies change relations with the underlying Tapeats Sandstone produce variable thickness trends. Contact with Tapeats Sandstone is arbitrarily marked at lithologic vertical and lateral transition from predominantly green siltstone and shale to predominantly brown sandstone above Tapeats Sandstone cliff. About 350 ft (107 m) thick in east quarter of map area, thickening to about 500 ft 153 m) in northwestern quarter, thinning to about 150 ft (46 m) in southwest quarter. In cross section only.',
    },
    {
      unit: 'Cm',
      unitname: 'Muav Limestone',
      description:
        'Dark-gray, light-gray, brown, and orange-red, cliff-forming limestone, dolomite, and calcareous mudstone. Includes, in descending order, unclassified dolomites, Havasu, Gateway Canyon, Kanab Canyon, Peach Springs, Spencer Canyon, and Rampart Cave Members of McKee and Resser 1945. These members consist of fine- to medium-grained, thin- to thick-bedded, mottled, fossiliferous, silty limestone, limestone, and dolomite. Three unnamed slope-forming siltstone and shale units of Bright Angel Shale lithology are positioned between cliff-forming members of Muav Limestone. These unnamed siltstone and shale units are green and purplish-red, micaceous siltstone, mudstone, and shale, and thin brown sandstone. Contact with the underlying Bright Angel Shale is gradational and lithology dependent. Contact is arbitrarily marked at base of lowest prominent limestone of Rampart Cave Member of the Muav Limestone in west quarter of map area, and at base of limestone of Peach Springs-Kanab Canyon Members of the Muav Limestone in east three-quarters of map area. All members of the Muav Limestone thicken from east to west across map area and thin south to the south edge of map area. However, the Peach Springs, Spencer Canyon, and Rampart Cave Members change to purplish-red and green siltstone/shale facies of the Bright Angel Shale in east quarter of map area where they are included as part of the Bright Angel Shale map unit. Intertonguing and facies change relations between the Muav Limestone and Bright Angel Shale produce variable thickness trends. Overall, the Muav Limestone thickens from about 359 ft (107 m) in east part of map area to about 600 ft (183 m) in west part. In cross section only.',
    },
    {
      unit: 'Ct',
      unitname: 'Tapeats Sandstone',
      description:
        'Brown and reddish-brown, cliff-forming sandstone and conglomerate. Includes an upper slope-forming transition zone of nearly equal distribution of brown sandstone of Tapeats Sandstone lithology and green siltstone and shale of Bright Angel Shale lithology, and a lower sandstone and conglomeratic sandstone. Lower cliff consists mainly of medium- to coarse-grained, thin-bedded, low-angle planar and trough crossbedded sandstone and conglomeratic sandstone; sandstone beds are 6 to 24 in 14 to 58 cm thick. Unconformable contact with underlying Early Proterozoic rocks that form the Great Unconformity. The Tapeats Sandstone fills lowland areas and thins across or pinches out against Proterozoic highlands. Variable thickness, 0 to 400 ft (0 to 122 m). In cross section only.',
    },
    {
      unit: 'Dtb',
      unitname: 'Temple Butte Formation',
      description:
        'Purple, reddish-purple, dark-gray, and light-gray, ledge-forming dolomite, sandy dolomite, sandstone, mudstone, and limestone, as defined by Beus 2003. Purple, reddish-purple, and light-gray, fine- to coarse-grained, thin- to medium-bedded, ripple-laminated ledges of mudstone, sandstone, dolomite, and conglomerate fill channels eroded into the underlying Cambrian strata; channels are as much as 100 ft (30 m) deep in east half of map area, and about 40 ft (12 m) deep in west half of map area. Channel deposits are overlain by dark-gray to olive-gray, medium- to thick-bedded dolomite, sandy dolomite, limestone, and sandstone. Unit weathers to dark-gray sequence of ledges. Unconformity at base represents major stratigraphic break in the Paleozoic rock record in Grand Canyon, spanning part of the Late Cambrian, all of the Ordovician and Silurian, and most of Early and Middle Devonian time, about 100 million years. Dark-gray Devonian rocks are distinguished from underlying light-gray Cambrian rocks by color contrast. Unit thickens from about 50 ft (15 m) in east half of map area to as much as 275 ft (84 m) in west half of map area, excluding extra channel fill thickness. In cross section only.',
    },
    {
      unit: 'H20',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'IPMs',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Jc',
      unitname: 'Carmel Formation, undivided',
      description:
        'Red and light-gray, slope-forming sandstone, siltstone, claystone, and silty calcareous and gypsiferous sandstone at Middle Mesa east edge of quadrangle, along Red Lake Monocline (northeast corner of quadrangle), and as isolated outcrops (northwest quarter of quadrangle). Unit thins southward and pinches out south and east of the Moenkopi Plateau. Present as dark red silty sandstone interval between base of Entrada Sandstone (Je) and top of Navajo Sandstone (Jn) at the east end of Coal Mine Mesa and is locally absent at west end of Coal Mine Mesa. Unconformably overlies upper beveled surface of Navajo Sandstone (Jn), known regionally as the J-2 unconformity; erosional relief is generally less than 15 ft (4.5 m) but can be as much as 30 ft (9 m). Ripple marks and abundant rounded sandy fecal pellets about 0.5 in (1 cm) diameter are found in lenticular, light-gray sandstone beds as much as 3 ft (1 m) thick. Locally contains white and red calcite and white barite crystals. Unit pinches out southward into subsurface of Moenkopi Plateau; locally removed by modern erosion from most of Kaibito Plateau. Unit gradually thickens north and northeast of quadrangle. Thickness, 0 to 30 ft (0 to 9 m).',
    },
    {
      unit: 'Je',
      unitname: 'Entrada Sandstone',
      description:
        'Includes a lower interval of white, very fine-grained, trough crossbedded sandstone equivalent to Entrada Sandstone north of map area; a middle interval of interbedded red, flat-bedded siltstone and sandstone equivalent to Summerville Formation north of map area; and an upper interval of white, fine-grained crossbedded sandstone equivalent to Cow Springs Sandstone north of map area. The Summerville Formation and Cow Springs Sandstone are equivalent to the lower Morrison Formation farther north of map area at Black Mesa. Unit as a whole forms a cliff where protected by resistant conglomeratic, coarse-grained sandstone lenses of the overlying Dakota Sandstone. The Carmel Formation is 1.5- to 2-m- 5- to 7-ft- thick lenses of red siltstone and sandstone near the base of the Entrada Sandstone at the west end of Appaloosa Ridge and is locally absent at the east end of Coal Mine Mesa; Carmel Formation is too thin to show at map scale. Entrada Sandstone-Cow Springs Sandstone, undivided, unconformably overlies the upper beveled surface of Navajo Sandstone known regionally as the J-2 unconformity; erosional relief is generally less than about 4.5 m (15 ft) but is as much as 9 m (30 ft). The unit as a whole thins from 60 m (200 ft) at the west end of Coal Mine Mesa and Appaloosa Ridge to less than 35 m (115 ft) at northeast corner of map area.',
    },
    {
      unit: 'Jk',
      unitname: 'Kayenta Formation, undivided',
      description:
        'Includes an upper slope-forming siltstone, and a basal cliff of the Springdale Sandstone Member. The Springdale Sandstone Member was originally described as the upper member of the underlying Moenave Formation Averitt and others, 1955; Stewart and others, 1972; Sargent and Philpott, 1987; Billingsley and others, 2004 and has been reassigned to the basal part of the Kayenta Formation on the basis of paleontological data and a prominent Jurassic unconformity at the base of the Springdale (Blakey, 1994; Marzolf, 1994; Lucas and Tanner, 2006; Tanner and Lucas, 2007; Biek and others, 2007). Upper slope-forming unit is dark-red and light reddish-brown, calcareous mudstone, siltstone, and cliff-forming sandstone that undergo a facies change eastward from mostly slope-forming siltstone and mudstone at Moccasin Mountains to a mostly cliff-forming sandstone at Paria Plateau, northeast corner of map area. Age of unit determined by Peterson and Pipiringoes (1979) and Biek and others (2000). Along Vermilion Cliffs, unit often covered by landslide debris (Ql) and talus and rock fall (Qtr) deposits caused by erosion of soft sediments of Kayenta Formation that undercuts resistant overlying cliff of Navajo Sandstone allowing large sections of both Navajo Sandstone and upper Kayenta Formation to fail as landslide masses, especially where the bedrock joints and fractures parallel Vermilion Cliffs. Kayenta Formation is deposited in river floodplains, river channels, playas, and shallow lake environments (Blakey, 1994; Peterson, 1994). Unconformable contact with underlying Moenave Formation (Jm). Thickness increases from 143 m (470 ft) at Ed Lamb Point westward to nearly 183 m (600 ft) in Potter Canyon southwest of Moccasin Mountains and thickness of intertonguing Lamb Point Tongue of Navajo Sandstone decreases in northwest quarter of map area. About 143 to 183 m (470 to 600 ft) thick.',
    },
    {
      unit: 'Jkn',
      unitname: 'Kayenta Formation and Navajo Sandstone transition zone',
      description:
        'Light-red and white, fine- to medium-grained, massive to crossbedded, cliff-forming beds of Navajo Sandstone lithology that intertongue with purple and light-red, slope-forming mudstone, siltstone, and sandstone beds of Kayenta Formation lithology. Forms sequence of red and white sandstone cliffs that alternate with purple and light-red mudstone and siltstone slopes resulting in arbitrary map contact. This zone is considered to be the lower “wet part” of the Navajo Sandstone by Marzolf 1983, 1991 and Blakey (1994). Gradually thins northward and becomes basal part of the Navajo Sandstone near Cedar Ridge. Individual red and white sandstone units thin or lens out into purplish siltstones of the Kayenta Formation south of the map area. Several springs and seeps issue from base of Navajo Sandstone along Echo Cliffs from Cedar Ridge to Tuba City and Moenkopi. Thickness, 0 to 240 ft (0 to 73 m).',
    },
    {
      unit: 'Jks',
      unitname: 'Kayenta Formation, Springdale Sandstone Member',
      description:
        'The Springdale Sandstone was originally described as an upper member of the underlying Moenave Formation Averitt and others, 1955; Stewart and others, 1972; Sargent and Philpott, 1987; Billingsley and others, 2004 but has since been reassigned as the basal part of the Kayenta Formation based on paleontological data and a prominent Jurassic unconformity at its base (Blakey, 1994; Marzolf, 1991; Lucas and Tanner, 2006; Biek and others, 2007; Tanner and Lucas, 2007). This unconformity is the sub-Kayenta unconformity (J-sub-K) as defined by Riggs and Blakey (1993) and Blakey (1994). Erosional relief is generally less than 6 ft (2 m) along the Vermilion and Echo Cliffs but as much as 50 ft (15 m) near Lees Ferry (Nation, 1990). Light-red, fine-grained, crossbedded sandstone at the top of the Springdale Sandstone Member may represent the southern extent of the Wingate Sandstone (not mapped separately). The Early Jurassic age is documented by Peterson and Pipiringos (1979). Unconformable contact with underlying Moenave Formation is known as the J-sub-K unconformity (Blakey, 1994). Thickness, 90 to 220 ft (27 to 67 m).',
    },
    {
      unit: 'Jm',
      unitname: 'Moenave Formation and Wingate Sandstone, undivided',
      description:
        'Red and light-red, flat-bedded and crossbedded, fine- to coarse-grained fluvial siltstone and silty sandstone. Unit is divided into the Springdale Sandstone Member upper part and the Dinosaur Canyon Member (lower part) north of the map area near the town of Moenave, Arizona, the type section. The Springdale Sandstone Member type locality is in Springdale, Utah, and pinches out at the northeast edge of map area. The Dinosaur Canyon Member is informally named from an unnamed tributary (not shown on USGS topographic maps to help protect the fossil dinosaur track ways) to the Little Colorado River below the Adeii Eechii Cliffs. Within the map area the entire sequence of red fluvial sandstones of the Moenave Formation represents the Dinosaur Canyon Member. Formation as a whole generally weathers to form a slope except where overlain by resistant beds of the lower Kayenta Formation that form the Red Rock Cliffs. Unconformable contact with underlying Owl Rock Member of the Chinle Formation is known as the J-O unconformity and separates the Triassic rocks from the overlying Jurassic rocks. About 84 to 98 m (275 to 320 ft) thick.',
    },
    {
      unit: 'Jn',
      unitname: 'Navajo Sandstone',
      description:
        'Red, white, and light-reddish-brown, cliff-forming, high-angle-crossbedded, fine- to medium-grained, well-sorted sandstone. Includes scattered horizontal thin siliceous limestone and dolomite lenses at various levels between crossbed sets throughout the unit. The sand grains consist of rounded to subrounded, frosted quartz grains, cemented by calcite with some secondary silica and iron oxide. Displays elaborate array of high-angle-crossbed sets as much as 35 ft 11 m thick. Flat, interbedded, gray- to light-purple, siliceous limestone, dolomite, or dark-red sandy siliceous mudstone form resistant ledges as flat-topped ridges or small mesas on Kaibito Plateau. The limestone and dolomite beds formed in playas or ponds between dunes and are somewhat more abundant southward on the Kaibito Plateau and south of the quadrangle. Sandstone beds contain numerous small, rounded, black and reddish-black, pea-size hematite concretions on the Kaibito Plateau and larger, avocado-shaped, iron-oxide concretions, as much as 3 in (7.5 cm) in diameter on the Paria Plateau. Crossbed dip directions in the map area indicate paleowinds were generally from the northwest (Peterson, 1988). Gradational contact with underlying Kayenta Formation is marked at the lowest white or light-red massive sandstone cliff. Unit thins east and southeast of the quadrangle and thickens north and northwest. Modern erosion of the sandstone provides a rich source of loose sand for eolian transport over much of the Paria and Kaibito Plateaus. Thickness, 1,200 to 1,750 ft (366 to 534 m).',
    },
    {
      unit: 'Kd',
      unitname: 'Dakota Sandstone',
      description:
        'Middle carbonaceous member is dark-grayish-brown, carbonaceous, flat-bedded mudstone, siltstone, coal, and interbedded brown, conglomeratic, crossbedded lenticular sandstone. Coal beds are generally less than 0.5 m 2 ft thick and present only at east end of Coal Mine Mesa of map area. Coal was mined from thicker coal beds at the rim of Coal Mine Canyon just north of the northeast corner of map area. Gypsum is common constituent as thin stringers and as isolated crystals. Unit unconformably overlies the Entrada Sandstone in east part of Coal Mine Mesa where lower sandstone member is not present (J-2 unconformity of Pipiringos and O’Sullivan, 1978). Unit is mostly covered by extensive old dune deposits, undivided (QTd). Best exposures are southwest of Coal Mine Mesa at Appaloosa Ridge, northeast corner of map area. Overall thickness, about 3 to 12 m (10 to 40 ft).',
    },
    {
      unit: 'Km',
      unitname: 'Mancos Shale',
      description:
        'Bluish-gray to light-gray, thinly laminated to thin-bedded, slope-forming, carbonaceous claystone, siltstone, and mudstone with interbedded light-gray, fine- to medium-grained sandstone. Includes bentonitic claystone, siltstone, and some thin-bedded limestone. Locally fossiliferous with cephalopods that are laterally equivalent to those in the Tropic Shale in the lower part of Mancos Shale in southern Utah. Age as defined by Doelling and others 2000. Deposited on a shallow sea floor that transgressed southwest from the midcontinent. Gradational and arbitrary contact with underlying Dakota Sandstone (Kd). Deposit is mostly removed by Tertiary erosion on Moenkopi Plateau south of Moenkopi Wash. Erosion channels as deep as 20 ft (6 m) are filled with Tertiary gravel and sedimentary deposits (Tgs) and probably represent widespread alluvial pediment and stream-channel deposition. Largely covered by sand sheet (Qes) and dune sand and sand sheet (Qd) deposits at Coal Mine Mesa on Moenkopi Plateau in southeast corner of map (sheet 2) and on White Mesa in northeast corner of map (sheet 2). Thickness, 140 ft (43 m).',
    },
    {
      unit: 'MIPs',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'MPu',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Mr',
      unitname: 'Redwall Limestone, undivided',
      description:
        'Includes, in descending order, Horseshoe Mesa, Mooney Falls, Thunder Springs, and Whitmore Wash Members, as defined by McKee 1963 and McKee and Gutschick (1969), but these members are too small to show at map scale because of the sheer cliff outcrops of the Redwall Limestone in general. Unit overall is light-gray to dark-gray, cliff-forming, thin- to thick-bedded, fine- to coarse-grained, fossiliferous limestone and dolomite. Includes thin-bedded gray and white chert lenses and nodules. Unit is exposed as sheer cliff in Grand Canyon, and just the top part of the Redwall Limestone is exposed in Little Colorado River Gorge but is too thin to show at map scale. Unit gradually thins eastward in subsurface of map area and is an important subsurface aquifer because of solution-eroded caverns and bedrock joint systems. Variable thickness, about 137 to 122 m (450 to 400 ft).',
    },
    {
      unit: 'Ms',
      unitname: 'Surprise Canyon Formation',
      description:
        'Dark-reddish-brown siltstone and sandstone, gray limestone and dolomite, and grayish-white chert conglomerate in dark-red or black sandstone matrix. Formation locally absent throughout map area; present only in paleovalleys and karst caves eroded into top half of Redwall Limestone Mr. Consists of an upper slope unit, a middle cliff unit, and a lower slope unit in western half of map area; forms slope in eastern half of map area. Upper slope unit consists of red-brown, thin-bedded siltstone, calcareous sandstone, and reddish-gray, thin-bedded sandy limestone. Contains numerous ripple marks and marine fossils. Thickness ranges from about 50 to 75 ft (15 to 23 m). Middle cliff unit consists of a reddish-gray, thin-bedded, coarse-grained silty and sandy limestone containing numerous marine fossils. Average thickness about 50 ft (15 m) in western third of map area, thinning and pinching out eastward in eastern two-thirds of map area. Lower slope unit consists of dark-red brown to black, iron-stained, thin-bedded, coarse- to medium-grained siltstone, sandstone, limestone, and conglomerate. Sandstone and siltstone beds contain numerous plant fossils, bone fossils, mudcracks, and ripplemarks. Sandstone is coarse grained and thin bedded with some low-angle, cross-beds. Conglomerate beds consists of white and gray chert clasts supported in dark-red to black, coarse-grained chert sandstone or gravel matrix, all derived from the Redwall. Thickness of lower unit about 3–60 ft (1–18 m), averaging about 25 ft (8 m). In eastern half of map area, the Surprise Canyon consists mainly of dark-red-brown, slope-forming, massive to thin-bedded, poorly sorted siltstone and sandstone, containing localized plant fossils. The Surprise Canyon is the most fossiliferous rock unit in the Grand Canyon. Overall, thickness averages about 145 ft (45 m) in western half of map area, thinning to less than 50 ft (15 m) in eastern half .',
    },
    {
      unit: 'Pc',
      unitname: 'Coconino Sandstone',
      description:
        'Tan to white, cliff-forming, fine-grained, well-sorted, cross-bedded quartz sandstone. Includes the Schnebly Hill Formation of Blakey 1990 in subsurface of map area. Thin red sandstone beds at base of Coconino Sandstone cliff in Little Colorado River Gorge is likely the northern feather edge of the Schnebly Hill Formation (Ronald C. Blakey, oral commun., July 2005). Contains large-scale, high-angle, planar cross-bedded sandstone sets that average about 11 m (35 ft) thick. Locally includes poorly preserved amphibian fossil track ways and low-relief wind ripple marks on crossbedded planar sandstone surfaces. Lower part of Coconino Sandstone intertongues or grades southward into Schnebly Hill Formation in subsurface of southern two-thirds of map area. Type section of Schnebly Hill Formation (Blakey, 1990) is in Verde Valley, 80 km (50 mi) south of map area. Unit intertongues with lower part of Seligman Member of the Toroweap Formation west of map area (Billingsley, 2000; Billingsley and Wellmeyer, 2003; Billingsley and others, 2006). Coconino Sandstone is a well established part of Grand Canyon nomenclature and is retained as a mappable unit because it forms a thick, regional, white sandstone cliff in Grand Canyon and Little Colorado River Gorge that is easily recognized and mappable. Unconformable contact with underlying Hermit Formation (Ph) is sharp, planar, with relief generally less than 1 m (3 ft) but locally as much as 2.5 m (8 ft) marked by distinct color and topographic change between white, cliff-forming Coconino Sandstone, light-red Schnebly Hill Formation, and dark-red, slope-forming Hermit Formation. Unit decreases slightly from west to east in subsurface of the map area. Unit is an important water-bearing sandstone east and south of map area (Don Bills, Water Resources Division of the U.S. Geological Survey, oral commun., 2005). About 183 m (600 ft) thick.',
    },
    {
      unit: 'Pe',
      unitname: 'Esplanade Sandstone',
      description:
        'Includes, in descending order, an upper cliff and slope, a middle cliff, and lower slope unit. Upper cliff and slope unit includes an upper, light-red or white sandstone cliff and a lower, dark-red siltstone, sandstone, and gypsum slope that visually resemble that of the Hermit Formation in eastern third of map area Hurricane Fault and east of Hurricane Fault. In western two thirds of map area, the upper cliff and slope undergoes a gradual facies change west of the Hurricane Fault to a light-red and white, low-angle crossbedded and massive calcareous sandstone along Grand Wash Cliffs and at Pakoon Ridge, which forms the upper part of the Esplanade Sandstone and Pakoon Limestone west of the Hurricane Fault (Pep) unit. Maximum thickness of upper unit, about 67 m (220 ft) along east edge of map area, thinning westward to about 15 m (50 ft) in Grand Wash Cliffs area. Middle cliff unit is composed of light-red, cliff-forming, fine- to medium-grained, medium-bedded 1 to 3 m (3 to 10 ft) thick, well-sorted, calcareous sandstone east of Hurricane Fault. Includes gray, thin-bedded sandy limestone of the Pakoon Limestone interbedded in lower half of Esplanade cliff west of Hurricane Fault. Pakoon Limestone pinches out eastward about the Hurricane Fault area, but thickens rapidly westward towards Grand Wash Cliffs and Pakoon Ridge where the Esplanade Sandstone and Pakoon Limestone of McNair (1951) are undivided (Pep). Middle cliff unit averages about 75 m (250 ft) thick at east edge of map area, thickening to about 91 m (300 ft) along Grand Wash Cliffs area. Lower slope unit is composed of a basal limestone pebble conglomerate that grades upward into slope-forming, interbedded dark-red siltstone, light-red sandstone, and gray, thin-bedded limestone that fills channels eroded as much as 10 m (30 ft) into underlying Wescogamie Formation of the undivided Supai Group (M*s). Unconformable contact between the Permian and Pennsylvanian strata in east two-thirds of map area and a disconformity between the Permian and Pennsylvanian strata along the Grand Wash Cliffs and in the Pakoon Ridge area. Thickness of lower slope unit, about 25 m (80 ft) at east edge of map area, thins westward and pinches out near Grand Wash Cliffs. Overall, Esplanade Sandstone (Pe) and Esplanade Sandstone and Pakoon Limestone (Pep) are about 167 m (550 ft) thick in east half of map area, decreasing to about 107 m (350 ft) in west half.',
    },
    {
      unit: 'Pep',
      unitname: 'Esplanade Sandstone and Pakoon Limestone, undivided',
      description:
        'Lower slope unit consists of alternating layers of light-red sandstone, dark-red siltstone and mudstone, and gray thin-bedded limestone of the Esplanade Sandstone Pe. Unconformable contact with underlying Wescogame Formation of the Supai Group undivided (M*s) marked by erosion channels of as much as 10 m (30 ft) deep; channels contain limestone pebble conglomerate. Lower slope unit, about 25 m (80 ft) thick in eastern part of map area, thins and pinches out near Grand Wash Cliffs area. Overall thickness of Esplanade Sandstone and Pakoon Limestone west of Hurricane Fault, about 107 m (350 ft) along Grand Wash Cliffs.',
    },
    {
      unit: 'Ph',
      unitname: 'Hermit Formation',
      description:
        'Red, slope-forming, fine-grained, thin-bedded, siltstone and sandstone. Upper part contains red, massive, low-angle crossbedded calcareous sandstone interbedded with siltstone where sandstone beds gradually thin or pinch out from north to south across map area. Dark-red crumbly siltstone beds fill shallow erosion channels and form recesses between thick, light-red sandstone beds in upper part; lower part contains more siltstone. Unit locally contains poorly preserved plant fossils within channel-fill siltstone deposits in lower part. Sandstone bleaches to yellowish-white in upper 1 to 3.5 m to 12 ft of contact with overlying Coconino Sandstone or Toroweap Formation. Base of unit unconformably overlies Esplanade Sandstone &#40;Pe) with erosion channels generally less than 3 m (10 ft) deep. Just south of map area, some erosion channels are as much as 40 m (130 ft) wide and 9 m (30 ft) deep (Billingsley, 2000). Unit thins southward and southeastward of map area and thickens westward and northward. In southwest quarter of map area, lower 18 m (60 ft) of unit is equivalent to upper slope unit of Esplanade Sandstone of McKee (1982), (Billingsley, 2000), but is included as part of Hermit Formation in this map area because upper Esplanade Sandstone units thin northward and pinch out along and in south edge of map area making this upper slope unit of the Esplanade Sandstone indistinguishable from the Hermit Formation slope. Hermit Formation gradually thins eastward and southward, thickens westward and northward across subsurface of map area. Approximate map contact between the Hermit Formation and Esplanade Sandstone at lowest red siltstone bed of Hermit Formation on surface of light-red, thick bedded sandstone of Esplanade Sandstone. Thickness ranges from about 150 to 340 m (500 to 800 ft) (3.',
    },
    {
      unit: 'Pk',
      unitname: 'Kaibab Formation, undivided',
      description:
        'medium-bedded [1–6 ft 0.3–2 m], fossiliferous, sandy, cherty limestone. In general, unit weathers dark gray. Unit characterized by gray to white fossiliferous chert nodules and white chert lenses parallel to bedding; chert weathers dark gray to black. Some chert nodules contain concentric black and white bands. Includes brecciated chert beds 4–10 ft (1–3 m) thick in upper part at contact of thin limestone or gypsifereous siltstone of Harrisburg Member. Chert in central and western parts of map area makes up about 20 percent of unit; unit becomes sandy in northeastern quarter of map area. Generally forms cliff at rim of the Grand Canyon. Weathers into pinnacles or “pillars” detached from cliff in western half of map area. Unconformable contact with underlying Woods Ranch Member of Toroweap Formation (Pt) attributed to solution erosion and channel erosion; average relief about 10 ft (3 m). Some channels have eroded as much as 150 ft (45 m) into the Woods Ranch in western half of map area. Erosion channels were filled with sandy cherty limestone typical of the Fossil Mountain, providing an extra thickness of the Fossil Mountain. Thickness about 230–350 ft (70–107 m) (',
    },
    {
      unit: 'Pkf',
      unitname: 'Kaibab Formation, Fossil Mountain Member',
      description:
        'Light-gray, cliff-forming, fine- to medium-grained, thin- to medium-bedded 0.3 to 2 m [1 to 6 ft], fossiliferous, cherty, sandy limestone and dolomite. Weathers dark gray to black. In west half of map area unit characterized by abundance of gray and white, fossiliferous, chert nodules and white chert breccia beds. Some chert nodules contain concentric black and white bands. Breccia chert beds (1 to 3 m [4 to 10 ft]) thick commonly form uppermost part of Fossil Mountain Member in west half of map area that helps establish contact between Harrisburg (Pkh) and Fossil Mountain (Pkf) Members of the Kaibab Formation. Chert makes up about 25% of unit in west half of map area, less than 5% in east half. Unit gradually thins eastward and undergoes a shoreward facies change from sandy marine limestone and limestone to calcareous sandstone similar to texture, composition, and appearance of Harrisburg Member. Generally forms cliff at rim of Grand Canyon and Little Colorado River Gorge overlain by ledges of sandy limestone of Harrisburg Member. Unconformable contact with underlying Toroweap Formation (Pt) attributed partly to solution erosion and mostly channel erosion; average erosional relief, about 3 m (10 ft). Thickness, 60 m (200 ft) in northwest quarter of map area and gradually thins east and southeast in subsurface of map area. About 70 m (230 ft) thick in northwest part of map area, thinning to about 55 m (180 ft) thick in southeast part.',
    },
    {
      unit: 'Pkh',
      unitname: 'Kaibab Formation, Harrisburg Member',
      description:
        'Reddish-gray and brownish-gray, ledge- and slope-forming, gypsiferous siltstone, calcareous sandstone, and thin-bedded sandy limestone. Top of unit near south edge of quadrangle includes white, low-angle- crossbedded calcareous sandstone with fossil mollusks; elsewhere, upper part is primarily sandy, cherty limestone beds separated by gray calcareous and gypsiferous siltstone. Forms surface of Marble Plateau and House Rock Valley, southwest part of quadrangle. Contact with underlying Fossil Mountain Member is gradational and marked at topographic break between grayish-white, slope- and ledge-forming sandy limestone, sandstone, and siltstone sequence of Harrisburg Member and underlying gray to light-brown, cliff-forming, thick-bedded cherty limestone and sandy limestone of Fossil Mountain Member. Unit gradually thins west to east across quadrangle and undergoes a shoreward facies change from marine cliff- and slope-forming limestone and siltstone in west half of quadrangle to mostly sandy, cliff-forming calcareous marine sandstone east of Colorado River and Marble Plateau. Thickness, 80 to 120 ft 25 to 37 m.',
    },
    {
      unit: 'Pt',
      unitname: 'Toroweap Formation, undivided',
      description:
        'Brady Canyon Member consists of dark- to light-gray, cliff-forming, thin- to medium-bedded 0.5 to 1.5 m [1 to 5 ft], fine- to coarse-grained, fetid, fossiliferous limestone; weathers dark gray. Includes thin-bedded dolomite in upper and lower part; average thickness of limestone beds, 0.5 to 1 m (2 to 3 ft). Contains white and gray chert nodules that make up less than 8 percent of unit. Contact with underlying Seligman Member is gradational and arbitrarily placed at base of limestone cliff of Brady Canyon Member. Unit thickens west and northwest, thins southeast and east of map area. Thickness, 76 m (250 ft) at Coconino Plateau area, 11 0 m (360 ft) at Shivwits Plateau area. Seligman Member consists of gray, light-purple, and yellow-red, slope-forming, thin-bedded dolomite, sandstone, and gypsum. In Coconino Plateau area, unit is mostly purple, light-red and gray flat-bedded, calcareous sandstone interbedded with gray, thin-bedded limestone. In Shivwits Plateau area, unit is gray to white gypsum and light-red to yellow-red, thin-bedded, calcareous flat-bedded sandstone and thin-bedded gray dolomite. Forms recess between overlying cliff-forming Brady Canyon Member of the Toroweap Formation and underlying cliff-forming Coconino Sandstone. Unit thickens north and northwest, thins east and southeast of map area. Sharp planar and undulate contact with underlying Coconino Sandstone where crossbedded sand dunes of Coconino Sandstone were beveled off and sand was redistributed as planar-bedded sandstone. The Coconino Sandstone (Pc) intertongues within the lower part of the Seligman Member of the Toroweap Formation (Pt) north and west of the map area (Fisher, 1961; Schleh, 1966; Rawson and Turner, 1974; Billingsley and others, 2000a; Billingsley and Wellmeyer, 2003). Because the name Coconino Sandstone is well established in the Grand Canyon nomenclature and it forms a significant mappable cliff unit within the walls of Grand Canyon, the term Coconino Sandstone is herein maintained as a separate map unit from the Toroweap Formation. The Coconino Sandstone pinches out in the west half of the map area allowing the Toroweap Formation to overlie the Hermit Formation. Thickness, 4.5 to 12 m (15 to 40 ft).',
    },
    {
      unit: 'Ptb',
      unitname: 'Toroweap Formation, Brady Canyon and Seligman Members, undivided',
      description:
        'Seligman Member: Gray, light-purple, and yellowish-red, slope-forming, thin-bedded dolomite, sandstone, gypsum, and calcareous sandstone. Forms slope or recess between overlying Brady Canyon Member and underlying Coconino Sandstone Pc in Marble Canyon and Grand Canyon. Undergoes easterly shoreward facies change similar to Brady Canyon and Woods Ranch Members; pinches out before reaching Little Colorado River Gorge. Sharp unconformable contact with underlying white, cliff-forming Coconino Sandstone. Coconino Sandstone intertongues with lower part of Seligman Member west and north of map area (Fisher, 1961; Schleh, 1966; Rawson and Turner, 1974; Billingsley and Wellmeyer, 2003; Billingsley and others, 2006). Undergoes gradual shoreward (eastward) facies change along with overlying Brady Canyon and Woods Ranch Members, making all indistinguishable from one another east of Colorado River where they are mapped as Toroweap Formation, undivided (Pt). Thickness, 10 to 20 ft (3 to 6 m).',
    },
    {
      unit: 'Ptw',
      unitname: 'Toroweap Formation, Woods Ranch Member',
      description:
        'Grand Canyon and Marble Canyon areas: gray and light-red, slope-forming gypsiferous siltstone, gray gypsum, and gray sandstone interbedded with gray, thin-bedded limestone. Weathers to reddish-gray slope. Bedding locally distorted due to dissolution of gypsum and gypsiferous siltstone. Erosional undercutting of overlying Kaibab Formation results in numerous landslides and large open cracks near canyon rims that tend to be accentuated along pre-existing joint and fracture systems. Unit undergoes shoreward eastward facies change to mostly brown, cliff-forming, calcareous sandstone and dolomite that weathers dark brown. Contact with underlying Brady Canyon Member is gradational and marked at lithologic and topographic break between slope-forming gypsiferous siltstone and sandstone of Woods Ranch and cliff-forming limestone of Brady Canyon in western two-thirds of Marble Canyon and Grand Canyon area; becomes indistinguishable from underlying Seligman and Brady Canyon Members in eastern third of Marble Canyon, southeastern Grand Canyon, and Little Colorado River Gorge and subsurface of Marble Plateau. Thickness, 100 to 180 ft (30 to 55 m).',
    },
    {
      unit: 'QTa',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'QTab',
      unitname:
        'Volcanic rocks of the San Francisco Volcanic Field, basalt and andesite flows',
      description:
        'Dark-gray intersertal to subophitic basalt, with or without glass; partly blocky, hummocky, locally gullied. Weathers yellow-brown to brown. Contains abundant phenocrysts of clinopyroxene and plagioclase, subordinate phenocrysts of orthopyroxene, sparse phenocrysts of olivine and hornblende and scattered rounded quartz grains with clinopyroxene reaction rims. Groundmass is mostly fine grained or glassy and contain plagioclase microlites, opaque oxide, and small crystals of clinopyroxene. Thickness, 80 to 300 ft 25 to 92 m.',
    },
    {
      unit: 'QTae',
      unitname: 'Old mixed alluvium and eolian deposits',
      description:
        'Lithologically similar to young mixed alluvium and eolian Qae deposits, but often capped by thin poorly developed calcrete soil; forms thicker deposits than young mixed alluvium and eolian (Qae) deposits. Include small cobbles and boulders. Form flat mesa-like benches about 30 to 120 ft (9 to 37 m) above modern drainage erosion in central part of map area. Unit is overlain in part by sand sheet and dune (Qd) and sand sheet (Qss) deposits in central and west half of map area. Thickness, 10 to 20 ft (3 to 6 m).',
    },
    {
      unit: 'QTai',
      unitname:
        'Volcanic rocks of the San Francisco Volcanic Field, basalt and andesite dikes and necks',
      description:
        'Dark-gray intersertal to subophitic basalt with abundant phenocrysts of clinopyroxene, plagioclase, and sparse olivine and hornblende. Source for Quaternary/Tertiary basaltic and andesite flows and pyroclastic deposits. Dikes and necks are 1 to 4 ft 0.5 to 1.3 m wide.',
    },
    {
      unit: 'QTap',
      unitname:
        'Volcanic rocks of the San Francisco Volcanic Field, basalt and andesite pyroclastic deposits',
      description:
        'Dark-gray intersertal to subophitic pyroclastic deposits. Weathers light yellow-brown. Contain abundant phenocrysts of clinopyroxene and plagioclase in glassy groundmass. Form small pyroclastic cones and isolated pyroclastic deposits. Thickness, 20 to 200 ft 6 to 60 m.',
    },
    {
      unit: 'QTb',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'QTd',
      unitname: 'Old dune deposits, undivided',
      description:
        'White, light-red to light-brown, coarse- to very fine-grained sand and silt; partly consolidated beneath veneer of active, reworked sand cover. Form base or internal cores of younger, reactivated linear dunes immediately downwind northeast of Adeii Eechii Cliffs (shown as active linear dunes by Billingsley, 1987a), on Moenkopi Plateau, Appaloosa Ridge, and Coal Mine Mesa. Contain at least 25% to 35% gray, fine-grained silt and clay content on Coal Mine Mesa from erosion of underlying Dakota Sandstone (Kd) and Mancos Shale (Km). Unit often forms complex linking sets of parabolic dunes along edge of Adeii Eechii Cliffs and Appaloosa Ridge of Moenkopi Plateau. Several individual dunes on Moenkopi Plateau have developed downwind of ponded sediments and are younger than adjacent old eolian sand sheet and dune (QTes) deposits. Bedrock or ponded sediments (Qps) are often exposed within interior of parabolic dunes. Include combinations of parabolic, barchan, dome, and dune-like thick sand sheet deposits that frequently coalesce downwind (northeast) to form old linear dunes (old dune deposits, undivided [QTd]) or old eolian sand sheet and dune (QTes) deposits northeast of Adeii Eechii Cliffs on Moenkopi Plateau. Linear dune traces are often longer than 3 km (2 mi) and as long as 10 km (6 mi). Some linear dunes merge with other linear dunes and form a linear complex of parabolic or barchanoid dune trains within a short length of linear dune (not shown). Include topographically controlled climbing or falling dunes and short linear dunes below Appaloosa Ridge. Unit commonly stabilized by moderate growth of grass and mormon tea bush. Gradational and approximate contact with adjacent surficial deposits. About 2 to 12 m (6 to 40 ft) thick.',
    },
    {
      unit: 'QTes',
      unitname: 'Old eolian sand sheet and dune deposits',
      description:
        'Light-red to light-brown, very fine-grained to medium-grained sand and silt. Form widespread deposits on Moenkopi Plateau that merges with old dune QTd and old mixed alluvium and eolian (QTae) deposits. Contacts with other map units are gradational and arbitrary based on morphologic characteristics observed on 1968 aerial photographs. Unit is overlapped by young mixed alluvium and eolian (Qae), stream-channel (Qs), and young alluvial fan (Qay) deposits below Appaloosa Ridge (southwest of ridge) and at Little Hollow Place, northeast corner of map area. Below Appaloosa Ridge, on Coal Mine Mesa, and at Little Hollow Place unit contains abundant gray clay and silt derived from underlying Dakota Sandstone (Kd) and Mancos Shale (Km). Unit is stabilized by thick growth of grass and mormon tea brush. Deposits cover Jurassic and Cretaceous bedrock and form protective cover against wind deflation of bedrock; where not covered, bedrock units are extensively eroded by wind deflation, especially along Adeii Eechii Cliffs. Unit is locally disturbed at stock tanks and windmill watering holes for livestock where fresh sand is actively forming new sand sheet and dune deposits (not mapped). About 1 to 3.6 m (3 to 12 ft) thick. (GRI Source Map ID 7454) (',
    },
    {
      unit: 'QTg',
      unitname: 'Terrace-gravel deposits',
      description:
        'Gray and light-brown, mud, silt, sand, gravel, and cobbles; poorly sorted and partly consolidated by calcite, gypsum, and clay cement. Pebbles and boulders are rounded clasts of gray limestone and white chert derived from local outcrops of Kaibab Formation Pkh and Pkf, scattered brown and purple-brown quartzite cobbles reworked from old stream-channel (Ts) deposits, and multicolored, mostly black well rounded pebbles from Shinarump Member of the Chinle Formation. Form isolated deposits in upper Kanab Creek and in some tributaries as much as 92 m (300 ft) above modern drainages, particularly in upper Jumpup Canyon. Deposits are partially preserved in abandoned cutoff meander loops or in isolated abandoned point bars in upper Kanab Creek canyon. In Jumpup Canyon, a tributary to Kanab Creek, unit fills 170 m (560 ft) deep ancestral Jumpup Canyon drainage that had previously eroded through Kaibab and Toroweap Formations, Coconino Sandstone, and into upper part of Hermit Formation. About 5 to 8 m (15 to 25 ft) thick; about 170 m (560 ft) thick in Jumpup Canyon.',
    },
    {
      unit: 'QTg4',
      unitname: 'Older terrace-gravel deposits',
      description:
        'Form terrace benches about 45 to 60 m 150 and 200 ft above modern Little Colorado River between Cameron, Arizona, and Black Point. Unit is extensively eroded and stratigraphically below oldest terrace-gravel (QTg5) deposits. Unit forms Baah Lokaa Ridge east of and lower than Black Point and an unnamed ridge northeast of Little Colorado River below Ward Terrace that fills 3 km (2 mi) wide old Little Colorado River channel with sandy gravely sediment as much as 30.5 m (100 ft) thick. Include calcrete soil horizon in upper 1 m (3 ft) of unit. Supports light vegetation cover, mostly grass and small desert shrubs. Unit is extensively eroded and gullied. About 3 to 55 m (10 to 180 ft) thick.',
    },
    {
      unit: 'QTg5',
      unitname: 'Youngest old terrace-gravel deposits',
      description:
        'Gray to light-brown silt, sand, gravel, pebbles and cobbles. Contain well rounded pebbles and cobbles of gray limestone and chert derived from Kaibab Formation, red sandstone clasts derived from Moenkopi Formation, and dominated by quartzite and a few granite and metamorphic clasts derived from older gravel deposits of the Mogollon Rim southeast of the map area. Unit is 79 m 260 ft above present Little Colorado River at Cameron, Arizona, (elevation 1,341 m [4,400 ft]). Unit may, in part, be equivalent to old stream-channel (Ts) deposits at Black Point because the Little Colorado River gradient between these high level gravels is 3 m/km (9 ft/mi), comparable to the modern day Little Colorado River gradient between Cameron and Black Point. About 2 to 4.5 m (6 to 15 ft) thick.',
    },
    {
      unit: 'QTg6',
      unitname: 'Intermediate old terrace-gravel deposits',
      description:
        'Gray and light-brown clay, silt, sand, and gravel, poorly sorted; cemented by calcite. Contain angular to subrounded chert, limestone, and sandstone pebbles derived from Cretaceous rocks east of the map area. Form isolated outcrops north of Moenkopi Wash and along U.S Highway 160 east of Tuba City. Unit is mostly covered by extensive eolian sand deposits Qd, Qes. Thickness, 6 to 30 ft (2 to 9 m).',
    },
    {
      unit: 'QTg7',
      unitname: 'Oldest old terrace-gravel deposits',
      description:
        'Gray and light-brown clay, silt, sand, and gravel, poorly sorted; cemented by calcite. Lithology similar to youngest and intermediate old terrace-gravel deposits QTg5, QTg6 at highest levels north of Moenkopi Wash and east of Tuba City. Unit may represent part of an extensive pediment surface that drained from Black Mesa area east of map and formed before incision of Moenkopi Wash. Thickness, 6 to 18 ft (2 to 6 m).',
    },
    {
      unit: 'QTi',
      unitname: 'Hells Hole dikes',
      description:
        'Dark-gray alkali-olivine basalt. Include three dikes in the Kaibab and Moenkopi Formations in Hells Hole. Form nearly vertical walls that stand out in relief in some places as much as 3 to 4 m 10 to 12 ft high and about 0.5 to 2 m (2 to 6 ft) wide. Dikes are aligned in general north-south trend and appear to connect to pyroclastic vents on west side of Potato Valley (Qpvp); also may be source for basalt of Mount Logan (Tmlb) due to close proximity to Mount Logan. Vertical exposure is nearly 610 m (2,000 ft).',
    },
    {
      unit: 'QTp',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Qa',
      unitname: 'Alluvial deposits',
      description:
        'Brown, red, and gray, slope-forming, unsorted mixture of mud, silt, sand, pebbles, cobbles, and boulders. Clasts are mostly angular, some are rounded; locally consolidated by calcite and gypsum cement. Sandstone, limestone, and chert clasts and gravel are locally derived from Paleozoic rocks. Includes alluvial-fan, floodplain, talus, colluvium, and valley-fill deposits. Subject to extensive sheet wash erosion or deposition, flash-flood debris flows, and arroyo erosion. Only largest deposits shown; most talus deposits are not shown to emphasize the bedrock geology, but are common in headward slopes of local tributary drainages and as talus deposits on slopes of Hermit Formation Ph. About 3–100 ft (1–30 m) thick.',
    },
    {
      unit: 'Qa1',
      unitname: 'Young alluvial fan deposits',
      description:
        'Grayish-brown silt, sand, gravel, and some boulders. Pebbles, cobbles and boulders are subangular to rounded clasts of limestone, chert, and sandstone derived from local Paleozoic and Mesozoic strata of the Moenkopi and Kaibab Formations. Include medium- to coarse-grained sand and scattered well-rounded pebbles of quartzite and quartz and subrounded clasts and fragments of basalt derived from the San Francisco Volcanic Field. Unit is partly consolidated by silt, gypsum, and calcite and partly overlapped by ponded sediments Qps, flood-plain (Qf), dune sand and sand sheet (Qd) deposits. Intertongue with upper part of valley alluvial (Qv), stream-channel (Qs), and young terrace-gravel (Qgy) deposits. Surfaces are partly eroded and cut by arroyo erosion. Surface has thin calcrete soil development that forms a sandy surface mixed with large cobbles and boulders of basalt near the Dog Knobs area of the San Francisco Volcanic Field. Extensively eroded and cut by arroyos in lowland areas northeast and east of Little Colorado River. Include coarse gravel, subangular to rounded pebbles and cobbles of limestone, chert, and sandstone derived from local Paleozoic and Mesozoic outcrops on Coconino Plateau. Subject to extensive sheetwash erosion and flash flood debris flows. Support moderate growths of sagebrush, cactus, and grass. About 1 to 12 m (3 to 40 ft) thick.',
    },
    {
      unit: 'Qa2',
      unitname: 'Intermediate alluvial fan deposits',
      description:
        'Grayish-brown silt, sand, gravel, and some boulders. Pebbles, cobbles and boulders are subangular to rounded clasts of limestone, chert, and sandstone derived from local Paleozoic and Mesozoic strata of the Moenkopi and Kaibab Formations. Include medium- to coarse-grained sand and scattered well-rounded pebbles of quartzite and quartz and subrounded clasts and fragments of basalt derived from the San Francisco Volcanic Field. Unit is partly consolidated by silt, gypsum, and calcite and partly overlapped by ponded sediments Qps, flood-plain (Qf), dune sand and sand sheet (Qd) deposits. Intertongue with upper part of valley alluvial (Qv), stream-channel (Qs), and young terrace-gravel (Qgy) deposits. Surfaces are partly eroded and cut by arroyo erosion. Surface has thin calcrete soil development that forms a sandy surface mixed with large cobbles and boulders of basalt near the Dog Knobs area of the San Francisco Volcanic Field. Extensively eroded and cut by arroyos in lowland areas northeast and east of Little Colorado River. Include coarse gravel, subangular to rounded pebbles and cobbles of limestone, chert, and sandstone derived from local Paleozoic and Mesozoic outcrops on Coconino Plateau. Subject to extensive sheetwash erosion and flash flood debris flows. Support moderate growths of sagebrush, cactus, and grass. About 1 to 12 m (3 to 40 ft) thick.',
    },
    {
      unit: 'Qa3',
      unitname: 'Old alluvial fan deposits',
      description:
        'Grayish-brown silt, sand, gravel, and some boulders. Pebbles, cobbles and boulders are subangular to rounded clasts of limestone, chert, and sandstone derived from local Paleozoic and Mesozoic strata of the Moenkopi and Kaibab Formations. Include medium- to coarse-grained sand and scattered well-rounded pebbles of quartzite and quartz and subrounded clasts and fragments of basalt derived from the San Francisco Volcanic Field. Unit is partly consolidated by silt, gypsum, and calcite and partly overlapped by ponded sediments Qps, flood-plain (Qf), dune sand and sand sheet (Qd) deposits. Intertongue with upper part of valley alluvial (Qv), stream-channel (Qs), and young terrace-gravel (Qgy) deposits. Surfaces are partly eroded and cut by arroyo erosion. Surface has thin calcrete soil development that forms a sandy surface mixed with large cobbles and boulders of basalt near the Dog Knobs area of the San Francisco Volcanic Field. Extensively eroded and cut by arroyos in lowland areas northeast and east of Little Colorado River. Include coarse gravel, subangular to rounded pebbles and cobbles of limestone, chert, and sandstone derived from local Paleozoic and Mesozoic outcrops on Coconino Plateau. Subject to extensive sheetwash erosion and flash flood debris flows. Support moderate growths of sagebrush, cactus, and grass. About 1 to 12 m (3 to 40 ft) thick.',
    },
    {
      unit: 'Qae',
      unitname: 'Mixed alluvium and eolian deposits',
      description:
        'Composed of gray, light-red, and white silt and fine- to coarse-grained, eolian and fluvial sand lenses; includes interbedded reddish-brown and gray silt and clay. Include a few coarse-grained gravel lenses composed primarily of angular chert fragments and red to white sub-rounded sandstone pebbles on Moccasin Mountains and Paria Plateau. Below Vermilion Cliffs in House Rock Valley and south and west of Yellowstone Mesa, includes multicolored and black, well-rounded chert pebbles derived from Shinarump Member of the Chinle Formation. Commonly occupies upper slopes of young alluvial fan Qay deposits. Below Vermilion Cliffs west of Colorado City, unit mostly composed of white and light-red sand and red silt that intertongues with young alluvial fan (Qay) deposits. Unit often overlapped by dune sand and sand sheet (Qd) deposits. Support thick to moderate growths of grass, cactus, and sagebrush; thick sagebrush, cliff rose bush, and pinion pine, oak, and juniper trees above Vermilion Cliffs. About 1.5 to 18 m (5 to 60 ft) thick.',
    },
    {
      unit: 'Qaf',
      unitname: 'Artificial fill and quarries',
      description:
        'Alluvium and bedrock material removed from quarries and trench excavations used to build stock tanks, drainage diversion dams, roads, or other manmade construction projects; not all modern highways cuts are shown. Include uranium and copper mine excavations. No map distinctions between cut or fill excavations. Agricultural fields are not shown. ',
    },
    {
      unit: 'Qao',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Qay',
      unitname: 'Young alluvial fan deposits',
      description:
        'On Colorado Plateau, composed of brown, red, and gray, slope-forming, unsorted mix of mud, silt, sand, gravel, pebbles, cobbles, and boulders. Clasts are mostly angular but some are rounded where derived locally from young gravel and sedimentary Tg deposits and old gravel (QTg) deposits; locally consolidated by calcite and gypsum cement. Southwest of Grand Wash Cliffs, composed of coarse-grained quartz and feldspar sand and gravel mixed with subangular to rounded pebbles and boulders of Proterozoic schist, gneiss, and granite mixed with Paleozoic clasts of limestone and sandstone and Cenozoic clasts of basalt. Include alluvial fan debris flows, sheet wash alluvium, and fluvial valley-fill (Qv) deposits; partly covered by eolian sand sheet and sand dune (Qd) deposits. Subject to extensive sheet wash erosion, minor arroyo erosion, and flash flood debris flow accumulations. Only largest or thickest deposits shown. Thickness, 1 to 30 m (3 to 100 ft). May be as much as 92 m (300 ft) thick or more in Hualapai Valley.',
    },
    {
      unit: 'Qb',
      unitname:
        'Basalt of the Uinkaret Plateau, basalt flows, south of Mount Trumbull',
      description:
        'Dark-gray to black, finely crystalline, alkali-olivine basalt. Olivine and plagioclase phenocrysts common. Include scoriaceous material from pyroclastic deposits. Basalt flows north of Mount Trumbull originated from several pyroclastic vents and generally flowed east into upper Toroweap Valley. Basalt flows overlie the Moenkopi Formation near pyroclastic cones and the Kaibab Formation farther away from the cones. Flows went down alluviated valleys before reaching Toroweap Valley. Basalt flows in upper Toroweap Valley Qb1 are mostly covered with young alluvial fan (Qay) deposits and basalt flows (Qb) that originated south of Mount Trumbull. South of Mount Trumbull, basalt cascaded into Whitmore Canyon and Toroweap Valley from higher terrain of the Uinkaret Mountains. Basalt cascades are steep where they flowed over the Hurricane Fault scarp at Hells Hollow drainage in upper Whitmore Canyon and over cliffs of the Kaibab and Toroweap Formations in Whitmore Canyon and Toroweap Valley. Basalt flowed over the Moenkopi, Kaibab, and Toroweap Formations south of Mount Trumbull. Cosmogenic 3He dating of basalt surfaces in upper Whitmore Canyon indicate an average age of about 0.100 Ma, and flow surfaces in lower Whitmore Canyon and Toroweap Valley have an average age of about 0.150 to 0.200 Ma (Fenton, 1998). Thickness, 6 to 91 m (18 to 300 ft).',
    },
    {
      unit: 'Qb1',
      unitname:
        'Basalt of the Uinkaret Plateau, basalt flows, north of Mount Trumbull',
      description:
        'Toroweap Valley from higher terrain of the Uinkaret Mountains. Basalt cascades are steep where they flowed over the Hurricane Fault scarp at Hells Hollow drainage in upper Whitmore Canyon and over cliffs of the Kaibab and Toroweap Formations in Whitmore Canyon and Toroweap Valley. Basalt flowed over the Moenkopi, Kaibab, and Toroweap Formations south of Mount Trumbull. Cosmogenic 3He dating of basalt surfaces in upper Whitmore Canyon indicate an average age of about 0.100 Ma, and flow surfaces in lower Whitmore Canyon and Toroweap Valley have an average age of about 0.150 to 0.200 Ma Fenton, 1998. Thickness, 6 to 91 m (18 to 300 ft).',
    },
    {
      unit: 'Qb6375',
      unitname: 'Basalt of hill 6375, basalt flows',
      description:
        'Dark-gray alkali-olivine basalt. Basalt flowed west 0.8 km 0.5 mi and north about 1.5 km (1 mi). Overlies Harrisburg Member of the Kaibab Formation (Pk). Thickness, 1 to 12 m (3 to 40 ft).',
    },
    {
      unit: 'Qb6457',
      unitname: 'Basalt of hill 6457, basalt flows',
      description:
        'Dark-gray alkali-olivine basalt. Basalt flowed north from hill 6457 about 0.8 km 0.5 mi onto young alluvial fan (Qay) and floodplain (Qf) deposits. Thickness, 36 m (120 ft).',
    },
    {
      unit: 'Qb6588',
      unitname: 'Basalt of hill 6588, basalt flows',
      description:
        'Dark-gray and light-gray, finely crystalline, alkali-olivine basalt. Include interbedded scoriaceous pyroclastic deposits. Basalt cascaded down steep slope into Toroweap Valley over landslide deposits Ql and lower strata of the Moenkopi Formation and Harrisburg Member of the Kaibab Formation (Pk). Flows partly buried by undivided basalt flows (Qb) and young alluvial fan (Qay) deposits in Toroweap Valley. Thickness, 2 to 10 m (6 to 30 ft).',
    },
    {
      unit: 'Qb6646',
      unitname: 'Basalt of hill 6646, basalt flows',
      description:
        'Dark-gray alkali-olivine basalt. Basalt flowed north about 3 km 2 mi. Overlies Harrisburg Member of the Kaibab Formation (Pk). Thickness, 10 to 30 m (30 to 100 ft).',
    },
    {
      unit: 'Qbf',
      unitname: 'Basalt flows',
      description:
        'Dark-gray and black porphyritic and aphyric, clinopyroxene-olivine and alkali-olivine basalt. Flows occur locally within present stream drainages, are moderately young in appearance, are locally covered by thin alluvium, eolian sand, or air-borne cinder deposits and have been little dissected. K-Ar age of various flows are 0.22±0.05 Ma, 0.46±0.05 Ma, 0.66±0.11 Ma, 0.74±0.08 Ma, and 0.77±0.04 Ma Ulrich and Bailey, 1987. About 1 to 20 m (3 to 65 ft) thick.',
    },
    {
      unit: 'Qbmb',
      unitname: 'Basalt flows',
      description:
        'Dark-gray to black aphyric alkali basalt composed of plagioclase, clinopyroxene, olivine, and magnetite. Weathers yellowish brown to reddish brown. Surface of flows are relatively smooth, flat and undissected. About 10 to 60 m 30 to 200 ft thick.',
    },
    {
      unit: 'Qbmp',
      unitname: 'Pyroclastic deposits',
      description:
        'Dark-gray to red pyroclastic cones and small rounded spatter cones on basalt flows Qbmb. Weathers yellowish brown and reddish brown. Largest deposit forms Red Mountain (fig. 1). Unit is superficially gullied; consists of bedded cinders, agglutinated spatter with volcanic ribbon and tear-shaped bombs. About 60 to 292 m (200 to 960 ft) thick.',
    },
    {
      unit: 'Qbt',
      unitname: 'Basalt flow of Tappan Wash',
      description:
        'Dark-gray and black, dense, aphyric, clinopyroxene-olivine and alkali-olivine basalt. Conspicuously rich in black glassy plagioclase groundmass. Flow originated from Crater Lake volcano N4536 of Wolfe and others, 1987; a vent 9.5 km (6 mi) south of the map area on the east side of Kendrick Mountain and flowed down various tributary drainages to Tappan Wash, then down Tappan Wash to the Little Colorado River, a distance of 88 km (55 mi); then down Little Colorado River another 11 km (7 mi) to the beginning of the Little Colorado River Gorge (see fig. 2 on map). Geomorphology of basalt flow of Tappan Wash is described by Rice (1977) as the Tappan Lava Flow and mapped by Ulrich and Bailey, (1987). K-Ar age, 0.53±0.19 Ma (Damon and others, 1974). The flow averages about 2 m (6 ft) thick for much of its length and accumulated to as much as 40 m (130 ft) in the Little Colorado River where it forms an inverted valley within Little Colorado drainage (fig. 2 on map). Basalt flow is cut by several faults that form grabens north of S P Mountain and at Little Colorado River; fault offset generally less than about 1.5 m (5 ft). About 1 to 40 m (3 to 130 ft) thick.',
    },
    {
      unit: 'Qcbb',
      unitname: 'Basalt of Craigs Knoll and Berry Knoll, basalt flows',
      description:
        'Light-gray and dark-gray alkali-olivine basalt. Include lower and upper basalt flows separated by pyroclastic deposits Qcbp. No K-Ar age available. Lower basalt accumulated on Harrisburg Member of the Kaibab Formation (Pk) and lower strata of the Moenkopi Formation (Trm). Estimated thickness of lower flow, about 40 m (130 ft). Upper basalt erupted near top of Craigs Knoll and flowed west, north, and east about 8 km (5 mi). Estimated thickness of upper flow, 3 to 20 m (10 to 65 ft).',
    },
    {
      unit: 'Qcbi',
      unitname: 'Basalt of Craigs Knoll and Berry Knoll, intrusive dikes or necks',
      description:
        'Greenish-black olivine basalt. Widths of dikes shown on map are approximate. ',
    },
    {
      unit: 'Qcbp',
      unitname: 'Basalt of Craigs Knoll and Berry Knoll, pyroclastic deposits',
      description:
        'Gray and reddish-gray to black cinder, tuff, ash, and scoriaceous ejecta; mostly consolidated into welded tuff. Form cliff on east side of Craigs Knoll and steep slope on south and west side. Deposits mostly covered by dark-gray basalt on north flank of Craigs Knoll. Include small secondary pyroclastic deposit on south flank of Craigs Knoll. Deposits overlie associated basal basalt flow exposed on south flank of Craigs Knoll, and an upper associated basalt flow overlies pyroclastic deposits, mostly on north and west flanks of Craigs Knoll. Thickness, 183 m 600 ft.',
    },
    {
      unit: 'Qd',
      unitname: 'Dune sand and sand sheet deposits, undivided',
      description:
        'Coconino Plateau and Gray Mountain area: White, gray, fine- to coarse-grained, wind-blown sand composed mainly of quartz and chert grains derived from Harrisburg Member of the Kaibab Formation west and south of Gray Mountain; accumulates on stream-channel Qs or valley alluvial (Qv) deposits. Form lumpy, undefined geometric sand dunes or sand sheet deposits on flood-plain (Qf) and young terrace-gravel (Qgy) deposits of local washes in west and southwest quarter of map area. Small sand sheet and dune deposits are mostly hidden or covered by forest growth in Kaibab National Forest south of Grand Canyon; support moderate growth of grass, sagebrush, pinion pine, juniper, and ponderosa pine woodlands. Little Colorado River and Moenkopi Plateau area: White, gray to light-red, fine- to coarse-grained sand composed mainly of quartz, chert, and minor feldspar grains derived from pre-existing Triassic and Jurassic sedimentary strata east of Little Colorado River. Include topographically controlled climbing and falling dunes and sand sheets that mantle gentle slopes of bedrock at Ward Terrace and Red Rock Cliffs and within tributary drainages northeast and east of Little Colorado River below Moenkopi Plateau. Sand is originally transported by fluvial erosion down tributary drainages from southwestern edge of Moenkopi Plateau to Little Colorado River is re-transported upstream by southwesterly winds onto Triassic and Jurassic bedrock surfaces forming significant deposits on Ward Terrace and against Red Rock Cliffs (Billingsley, 1987a), but does not reach Moenkopi Plateau except in the southeast corner of map area; includes topographically controlled climbing and falling dunes, complex dunes, parabolic dunes, and barchan dunes as mapped by Billingsley (1987a). Arbitrary and gradational lateral and vertical contacts between other alluvial or eolian deposits, especially along southwestern edge of Moenkopi Plateau at Adeii Eechii Cliffs where southwesterly winds actively erode bedrock of Navajo Sandstone and distribute sand as a thin veneer of white quartz sand over red old dune (QTd) and old eolian sand sheet and dune (QTes) deposits. Support moderate growth of grass and high desert shrubs that stabilize extensive sand sheet and dune deposits on Moenkopi Plateau. About 1 to 61 m (3 to 200 ft) thick.',
    },
    {
      unit: 'Qdb',
      unitname: 'Barchan dune deposits',
      description:
        'Coconino Plateau and Gray Mountain area: White, gray, fine- to coarse-grained, wind-blown sand composed mainly of quartz and chert grains derived from Harrisburg Member of the Kaibab Formation west and south of Gray Mountain; accumulates on stream-channel Qs or valley alluvial (Qv) deposits. Form lumpy, undefined geometric sand dunes or sand sheet deposits on flood-plain (Qf) and young terrace-gravel (Qgy) deposits of local washes in west and southwest quarter of map area. Small sand sheet and dune deposits are mostly hidden or covered by forest growth in Kaibab National Forest south of Grand Canyon; support moderate growth of grass, sagebrush, pinion pine, juniper, and ponderosa pine woodlands. Little Colorado River and Moenkopi Plateau area: White, gray to light-red, fine- to coarse-grained sand composed mainly of quartz, chert, and minor feldspar grains derived from pre-existing Triassic and Jurassic sedimentary strata east of Little Colorado River. Include topographically controlled climbing and falling dunes and sand sheets that mantle gentle slopes of bedrock at Ward Terrace and Red Rock Cliffs and within tributary drainages northeast and east of Little Colorado River below Moenkopi Plateau. Sand is originally transported by fluvial erosion down tributary drainages from southwestern edge of Moenkopi Plateau to Little Colorado River is re-transported upstream by southwesterly winds onto Triassic and Jurassic bedrock surfaces forming significant deposits on Ward Terrace and against Red Rock Cliffs (Billingsley, 1987a), but does not reach Moenkopi Plateau except in the southeast corner of map area; includes topographically controlled climbing and falling dunes, complex dunes, parabolic dunes, and barchan dunes as mapped by Billingsley (1987a). Arbitrary and gradational lateral and vertical contacts between other alluvial or eolian deposits, especially along southwestern edge of Moenkopi Plateau at Adeii Eechii Cliffs where southwesterly winds actively erode bedrock of Navajo Sandstone and distribute sand as a thin veneer of white quartz sand over red old dune (QTd) and old eolian sand sheet and dune (QTes) deposits. Support moderate growth of grass and high desert shrubs that stabilize extensive sand sheet and dune deposits on Moenkopi Plateau. About 1 to 61 m (3 to 200 ft) thick.',
    },
    {
      unit: 'Qdl',
      unitname: 'Linear dune deposits',
      description:
        'Coconino Plateau and Gray Mountain area: White, gray, fine- to coarse-grained, wind-blown sand composed mainly of quartz and chert grains derived from Harrisburg Member of the Kaibab Formation west and south of Gray Mountain; accumulates on stream-channel Qs or valley alluvial (Qv) deposits. Form lumpy, undefined geometric sand dunes or sand sheet deposits on flood-plain (Qf) and young terrace-gravel (Qgy) deposits of local washes in west and southwest quarter of map area. Small sand sheet and dune deposits are mostly hidden or covered by forest growth in Kaibab National Forest south of Grand Canyon; support moderate growth of grass, sagebrush, pinion pine, juniper, and ponderosa pine woodlands. Little Colorado River and Moenkopi Plateau area: White, gray to light-red, fine- to coarse-grained sand composed mainly of quartz, chert, and minor feldspar grains derived from pre-existing Triassic and Jurassic sedimentary strata east of Little Colorado River. Include topographically controlled climbing and falling dunes and sand sheets that mantle gentle slopes of bedrock at Ward Terrace and Red Rock Cliffs and within tributary drainages northeast and east of Little Colorado River below Moenkopi Plateau. Sand is originally transported by fluvial erosion down tributary drainages from southwestern edge of Moenkopi Plateau to Little Colorado River is re-transported upstream by southwesterly winds onto Triassic and Jurassic bedrock surfaces forming significant deposits on Ward Terrace and against Red Rock Cliffs (Billingsley, 1987a), but does not reach Moenkopi Plateau except in the southeast corner of map area; includes topographically controlled climbing and falling dunes, complex dunes, parabolic dunes, and barchan dunes as mapped by Billingsley (1987a). Arbitrary and gradational lateral and vertical contacts between other alluvial or eolian deposits, especially along southwestern edge of Moenkopi Plateau at Adeii Eechii Cliffs where southwesterly winds actively erode bedrock of Navajo Sandstone and distribute sand as a thin veneer of white quartz sand over red old dune (QTd) and old eolian sand sheet and dune (QTes) deposits. Support moderate growth of grass and high desert shrubs that stabilize extensive sand sheet and dune deposits on Moenkopi Plateau. About 1 to 61 m (3 to 200 ft) thick.',
    },
    {
      unit: 'Qdlu',
      unitname: 'Linear dune and sand sheet deposits, undivided',
      description:
        'White, gray, light-red, fine- to coarse-grained, well-sorted, unconsolidated quartz sand derived primarily from the Navajo Sandstone Jn on Moenkopi and Kaibito Plateaus. Unit is often a cluster or group of closely spaced linear dune and sand sheet deposits. Individual linear dunes often merge and separate as an interconnecting mass of dune forms with abundant sand sheet deposits between. Support little to sparse grassy vegetation. Thickness, 9 to 40 ft (3 to 12 m).',
    },
    {
      unit: 'Qdm',
      unitname: 'Mixed dune deposits',
      description:
        'White, gray, light-red, fine- to coarse-grained, well-sorted, unconsolidated quartz sand derived primarily from the Navajo Sandstone Jn. Parabolic and linear dunes are the dominant dune types and are often interconnected and associated with massive sand sheet (Qes) deposits. Linear dunes often form as downwind extension of parabolic dunes on Moenkopi and Kaibito Plateaus and parabolic dunes often attach to or are part of linear dunes. Include quite a few Navajo Sandstone (Jn) and ponded sediment (Qps) deposits too small to show at map scale. Often covered annually by active dune sand and sand sheet (Qd) deposits. Thickness, 6 to 40 ft (2 to 12 m).',
    },
    {
      unit: 'Qdp',
      unitname: 'Parabolic dune deposits',
      description:
        'Coconino Plateau and Gray Mountain area: White, gray, fine- to coarse-grained, wind-blown sand composed mainly of quartz and chert grains derived from Harrisburg Member of the Kaibab Formation west and south of Gray Mountain; accumulates on stream-channel Qs or valley alluvial (Qv) deposits. Form lumpy, undefined geometric sand dunes or sand sheet deposits on flood-plain (Qf) and young terrace-gravel (Qgy) deposits of local washes in west and southwest quarter of map area. Small sand sheet and dune deposits are mostly hidden or covered by forest growth in Kaibab National Forest south of Grand Canyon; support moderate growth of grass, sagebrush, pinion pine, juniper, and ponderosa pine woodlands. Little Colorado River and Moenkopi Plateau area: White, gray to light-red, fine- to coarse-grained sand composed mainly of quartz, chert, and minor feldspar grains derived from pre-existing Triassic and Jurassic sedimentary strata east of Little Colorado River. Include topographically controlled climbing and falling dunes and sand sheets that mantle gentle slopes of bedrock at Ward Terrace and Red Rock Cliffs and within tributary drainages northeast and east of Little Colorado River below Moenkopi Plateau. Sand is originally transported by fluvial erosion down tributary drainages from southwestern edge of Moenkopi Plateau to Little Colorado River is re-transported upstream by southwesterly winds onto Triassic and Jurassic bedrock surfaces forming significant deposits on Ward Terrace and against Red Rock Cliffs (Billingsley, 1987a), but does not reach Moenkopi Plateau except in the southeast corner of map area; includes topographically controlled climbing and falling dunes, complex dunes, parabolic dunes, and barchan dunes as mapped by Billingsley (1987a). Arbitrary and gradational lateral and vertical contacts between other alluvial or eolian deposits, especially along southwestern edge of Moenkopi Plateau at Adeii Eechii Cliffs where southwesterly winds actively erode bedrock of Navajo Sandstone and distribute sand as a thin veneer of white quartz sand over red old dune (QTd) and old eolian sand sheet and dune (QTes) deposits. Support moderate growth of grass and high desert shrubs that stabilize extensive sand sheet and dune deposits on Moenkopi Plateau. About 1 to 61 m (3 to 200 ft) thick.',
    },
    {
      unit: 'Qec',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Qes',
      unitname: 'Sand sheet deposits',
      description:
        'Coconino Plateau and Gray Mountain area: White, gray, fine- to coarse-grained, wind-blown sand composed mainly of quartz and chert grains derived from Harrisburg Member of the Kaibab Formation west and south of Gray Mountain; accumulates on stream-channel Qs or valley alluvial (Qv) deposits. Form lumpy, undefined geometric sand dunes or sand sheet deposits on flood-plain (Qf) and young terrace-gravel (Qgy) deposits of local washes in west and southwest quarter of map area. Small sand sheet and dune deposits are mostly hidden or covered by forest growth in Kaibab National Forest south of Grand Canyon; support moderate growth of grass, sagebrush, pinion pine, juniper, and ponderosa pine woodlands. Little Colorado River and Moenkopi Plateau area: White, gray to light-red, fine- to coarse-grained sand composed mainly of quartz, chert, and minor feldspar grains derived from pre-existing Triassic and Jurassic sedimentary strata east of Little Colorado River. Include topographically controlled climbing and falling dunes and sand sheets that mantle gentle slopes of bedrock at Ward Terrace and Red Rock Cliffs and within tributary drainages northeast and east of Little Colorado River below Moenkopi Plateau. Sand is originally transported by fluvial erosion down tributary drainages from southwestern edge of Moenkopi Plateau to Little Colorado River is re-transported upstream by southwesterly winds onto Triassic and Jurassic bedrock surfaces forming significant deposits on Ward Terrace and against Red Rock Cliffs (Billingsley, 1987a), but does not reach Moenkopi Plateau except in the southeast corner of map area; includes topographically controlled climbing and falling dunes, complex dunes, parabolic dunes, and barchan dunes as mapped by Billingsley (1987a). Arbitrary and gradational lateral and vertical contacts between other alluvial or eolian deposits, especially along southwestern edge of Moenkopi Plateau at Adeii Eechii Cliffs where southwesterly winds actively erode bedrock of Navajo Sandstone and distribute sand as a thin veneer of white quartz sand over red old dune (QTd) and old eolian sand sheet and dune (QTes) deposits. Support moderate growth of grass and high desert shrubs that stabilize extensive sand sheet and dune deposits on Moenkopi Plateau. About 1 to 61 m (3 to 200 ft) thick.',
    },
    {
      unit: 'Qf',
      unitname: 'Floodplain deposits',
      description:
        'Gray, brown, and light-red clay, silt, sand. Include some lenticular gravel. Unit is partly consolidated by gypsum and calcite cement. Intertongue or overlap stream-channel Qs, valley alluvial (Qv), young terrace-gravel (Qgy), and young alluvial fan (Qay) deposits. Subject to stream-channel erosion or overbank flooding in lateral and vertical sense. Similar to valley alluvial (Qv) deposits in small tributary drainage valleys that form broad, flat, valley floors subject to widespread and frequent overbank flooding along Little Colorado River and in highland valleys west of Gray Mountain. Tamerisk trees in Little Colorado River valley commonly occupy floodplain or low-lying terrace areas. In broad floodplains on Coconino Plateau and northeast of Little Colorado River, minor arroyo development may occur at downstream drainage outlets due to headward erosion of streams. Support thick growths of sagebrush, grass, cliffrose bush, and sagebrush at high elevations over 1,524 m (5,000 ft) that help trap and accumulate fine-grained sediment on floodplains of Coconino Plateau; sagebrush, tumble weed plants, desert shrubs, and grass in and along Little Colorado River area. Subject to temporary ponding and often mixed with ponded sediments (Qps) or young mixed alluvium and eolian (Qae) deposits in broad drainage floodplains on Coconino Plateau. About 2 to 9 m (6 to 30 ft) thick.',
    },
    {
      unit: 'Qg1',
      unitname: 'Young terrace-gravel deposits',
      description:
        'On Kanab Plateau, Uinkaret Plateau, and Kanab Canyon areas; consists of gray and light-brown, fine- to coarse-grained silt, sand, and gravel; partly consolidated by gypsum and calcite cement. Include gray-blue subrounded limestone and light-red sandstone clasts, in matrix of mostly white angular and subangular chert gravel. Deposits commonly intertongue with or overlapped by young alluvial fan Qay and mixed alluvium and eolian (Qae) deposits and inset against old terrace-gravel (Qgo) deposits. Subject to flash flood erosion or overbank accumulations of flood-plain (Qf) sediments in upper Kanab Creek drainage and its northeastern tributaries in Muggins Flat, north-central part of map area. Terraces are generally 1.2 to 9 m (4 to 30 ft) above local streambeds and as much as 18 m (60 ft) above stream channel in upper reaches of Kanab Creek and some of its tributaries. Unit often cut by arroyo erosion as much as 6 m (20 ft) in south-central part of map and as much as 18 m (60 ft) above stream channels in upper reaches of Kanab Creek and some of its tributaries. Moderately vegetated by sagebrush, grass, cactus, tamarisk trees, willow trees, juniper and pinion pine trees at elevations above 1,525 m (5,000 ft); mostly vegetated by grass, thick growths of cactus, sagebrush, desert shrubs, and some cottonwood trees in lower reaches of Kanab Creek. About 1 to 18 m (3 to 60 ft) thick or more.',
    },
    {
      unit: 'Qg2',
      unitname: 'Intermediate terrace-gravel deposits',
      description:
        'On Kanab Plateau, Uinkaret Plateau, and Kanab Canyon areas; consists of gray and light-brown, fine- to coarse-grained silt, sand, and gravel; partly consolidated by gypsum and calcite cement. Include gray-blue subrounded limestone and light-red sandstone clasts, in matrix of mostly white angular and subangular chert gravel. Deposits commonly intertongue with or overlapped by young alluvial fan Qay and mixed alluvium and eolian (Qae) deposits and inset against old terrace-gravel (Qgo) deposits. Subject to flash flood erosion or overbank accumulations of flood-plain (Qf) sediments in upper Kanab Creek drainage and its northeastern tributaries in Muggins Flat, north-central part of map area. Terraces are generally 1.2 to 9 m (4 to 30 ft) above local streambeds and as much as 18 m (60 ft) above stream channel in upper reaches of Kanab Creek and some of its tributaries. Unit often cut by arroyo erosion as much as 6 m (20 ft) in south-central part of map and as much as 18 m (60 ft) above stream channels in upper reaches of Kanab Creek and some of its tributaries. Moderately vegetated by sagebrush, grass, cactus, tamarisk trees, willow trees, juniper and pinion pine trees at elevations above 1,525 m (5,000 ft); mostly vegetated by grass, thick growths of cactus, sagebrush, desert shrubs, and some cottonwood trees in lower reaches of Kanab Creek. About 1 to 18 m (3 to 60 ft) thick or more.',
    },
    {
      unit: 'Qg3',
      unitname: 'Old terrace-gravel deposits',
      description:
        'Light-brown, pale-red, and gray, poorly sorted fluvial mud, silt, sand, gravel, pebbles, cobbles, and boulders. Composed primarily of subangular to well-rounded Paleozoic sandstone, limestone, and chert clasts of local origin. Include well-rounded clasts of quartzite, quartz, and assorted metamorphic crystalline rocks derived from terrains far south of the map area. Include well-rounded volcanic rocks that originate from the San Francisco Volcanic Field and may include some quartzite and chert clasts derived from the Shinarump Member of the Chinle Formation. Include flood-plain Qf deposits and various terrace-gravel deposits in narrow canyon drainages too small to show at map scale. Clasts are partly consolidated by matrix of mud and sand cemented with calcium and gypsum. Form terraced benches about 1 to 12 m (3 to 40 ft) above stream-channel (Qs) deposits. Deposits are mixed with landslide, talus, and rock fall (Qtr) deposits in Little Colorado River Gorge. Unit fills erosion channels cut into bedrock, young alluvial fan (Qay), and flood-plain (Qf) deposits. Support moderate growth of local high-desert shrubs, sagebrush, and grass. About 1 to 12 m (3 to 40 ft) thick.',
    },
    {
      unit: 'Qgo',
      unitname: 'Older alluvial terrace deposits',
      description:
        'Similar to young alluvial terrace Qgy deposits and partly consolidated by calcite and gypsum cement. Surface has developed a thin soil that forms a smooth surface texture compared to younger terrace surfaces. Commonly overlapped by or interbedded with talus and landslide (Ql) debris deposits and older alluvial fan (Qao) deposits. Include abundant basaltic clasts that form thin desert pavement near landslide deposits. In Grand Wash Trough, support moderate growth of grass, cactus, and desert shrubs. On Colorado Plateau, support moderate growth of grass, cactus, and sagebrush, juniper trees and pinyon pine trees. Thickness, 2 to 5 m (6 to 15 ft).',
    },
    {
      unit: 'Qgrb',
      unitname: 'Basalt of Graham Ranch',
      description:
        'Informally named for Graham Ranch in upper Toroweap Valley, the type area sec. 3, T. 35 N., R. 7 W., Uinkaret Volcanic Field, Uinkaret Plateau, Mohave County, Arizona (Billingsley and others, 2001). Incorrectly named the Sage Basalt by Billingsley and Workman (2000) and Billingsley (2000) before it was known that the name Sage Basalt was already in use. Includes four unnamed pyroclastic cones and associated basalt flows in upper reaches of Toroweap Valley just southwest of map area. Dark-gray finely crystalline to glassy alkali olivine basalt; vuggy with calcite fillings. Includes altered olivine in glassy groundmass with abundant olivine phenocrysts 0.25 to 1 mm in diameter. K-Ar age, 0.63±0.24 Ma, obtained by Jackson (1990) from basalt of Graham Ranch about 3 km (2 mi) south of southwest corner of map area. Lavas emerged from fissures in bedrock in Harrisburg Member of the Kaibab Formation and coalesced into radial patterns from each fissure. Much of the basalt flowed north and west into upper reaches of Toroweap Valley and into southwest corner of map area. The basalt and one associated pyroclastic cone is offset by the Toroweap Fault about 26 m (85 ft) down-to-the-west; underlying Kaibab Formation is offset about 67 m (220 ft) down-to-the-west for total offset of 93 m (305 ft) just southwest of map area (Billingsley and others, 2001; Billingsley and Wellmeyer, 2003). Basalt in southwest corner of map area is offset by Toroweap Fault about 26 m (85 ft) down-to-the-west; underlying Kaibab Formation is offset about 74 m (240 ft) down-to-the-west for a total offset of about 99 m (325 ft). About 3 to 60 m (10 to 200 ft) thick.',
    },
    {
      unit: 'Qgrp',
      unitname: 'Basalt of Graham Ranch, pyroclastic deposits',
      description:
        'Red-brown and reddish-black scoriaceous basalt fragments, ash, and cinder deposits; partly consolidated. Include three pyroclastic cones aligned along north-south, near vertical bedrock fracture system. Deposits overlie associated basalt flows. Only western part lies within map area. Toroweap Fault offsets north cone 26 m 85 ft. North cone is about 134 m (440 ft) high, central cone about 70 m (230 ft) high, and south cone about 60 m (200 ft) high.',
    },
    {
      unit: 'Qgy',
      unitname: 'Young alluvial terrace deposits',
      description:
        'In Grand Wash Trough, include lower three terraces along streams as mapped by Billingsley and others unpub. data. Unit consists of light-brown, pale-red and gray silt, sand, pebbles, cobbles, and boulders, partly consolidated by calcium and gypsum. Composed mostly of well-rounded to sub-angular limestone, sandstone, chert, and basalt clasts as large as 1 m (3 ft) in diameter. Unit is locally inset and overlaps old terrace-gravel (Qgo) deposits and interbedded with young alluvial fan (Qay) deposits. Terraces are 2 to 30 m (6 to 100 ft) above local streambeds. Only thick or large deposits shown. Thickness, 3 to 30 m (6 to 100 ft).',
    },
    {
      unit: 'Qhb',
      unitname: 'Basalt of Hancock Knolls, basalt flows',
      description:
        'Dark- to light-gray, finely crystalline alkali-olivine basalt. Contains augite and olivine phenocrysts less than 1 mm in diameter in glassy groundmass. Unit overlies Harrisburg Member of Kaibab Formation Pk. The southernmost basalt flowed about 1 mi (1.5 km) and cascaded down an unnamed western tributary of upper Tuckup Canyon to coalesce with Tuckup Canyon Basalt (Qtb; Billingsley, 1970). Tributary drainage has eroded through this basalt flow. Variable thickness 3–90 ft (1–27 m).',
    },
    {
      unit: 'Qhp',
      unitname: 'Basalt of Hancock Knolls, pyroclastic deposits',
      description:
        'Red to reddish-black cinder and scoriaceous basaltic fragments, and black cinders; unconsolidated. Forms 10 pyroclastic cones on the Kanab Plateau that align along a strike of N. 30° W. for about 5 mi 8 km northwest of Tuckup Canyon. Unit overlies associated basalt flows (Qhb) and Harrisburg Member of Kaibab Formation (Pk). Variable thickness 40–350 ft (12–107 m).',
    },
    {
      unit: 'Qi',
      unitname:
        'Basalt of the Uinkaret Plateau, intrusive rocks, south of Mount Trumbull',
      description:
        'Dark-gray to black alkali-olivine basalt dikes and necks. Form nearly vertical dikes or necks that commonly protrude above surrounding volcanic or bedrock deposits. Variable widths range from 0.5 to 6 m 1 to 18 ft. Neck or plug in Kaibab Formation southeast of Mount Trumbull is partly covered. Best examples are near Paws Pocket, east side of Whitmore Canyon, east-central part of map.',
    },
    {
      unit: 'Qi1',
      unitname:
        'Basalt of the Uinkaret Plateau, intrusive rocks, north of Mount Trumbull',
      description:
        'Dark-gray to black alkali-olivine basalt dikes and necks. Form nearly vertical dikes or necks that commonly protrude above surrounding volcanic or bedrock deposits. Variable widths range from 0.5 to 6 m 1 to 18 ft. Neck or plug in Kaibab Formation southeast of Mount Trumbull is partly covered. Best examples are near Paws Pocket, east side of Whitmore Canyon, east-central part of map.',
    },
    {
      unit: 'Qkrb',
      unitname: 'Basalt of Kenworthy Ranch, basalt flows',
      description:
        'Light- to dark-gray, finely crystalline, alkali-olivine basalt. Include small phenocrysts of augite and olivine in glassy groundmass. Flows radiate from all three pyroclastic cones coalescing to form large elongated north-south oval flow mass. Overlie Harrisburg Member of the Kaibab Formation Pk. Thickness, 15 m (50 ft).',
    },
    {
      unit: 'Qkrp',
      unitname: 'Basalt of Kenworthy Ranch, pyroclastic deposits',
      description:
        'Reddish-black and red tuff, ash, scoriaceous ejecta, and cinders overlie associated basalt flows. Map contact is approximate. Include three unnamed cinder cones that align north-south. North pyroclastic cone just west of Kenworthy Ranch is about 49 m 160 ft high, middle cone is about 24 m (80 ft) high, and south cone about 24 m (80 ft) high.',
    },
    {
      unit: 'Ql',
      unitname: 'Landslide deposits',
      description:
        'Landslides are unconsolidated to partly consolidated masses of unsorted rock debris. At northeast base of Gray Mountain, includes a horizontally bedded gravity-glide mass of Kaibab Formation that overlies Triassic beds of the Shinarump Member of the Chinle Formation. Include detached stratified blocks that rotated backward against parent outcrop and slid downslope as loose incoherent masses of broken rock fragments and deformed strata; often form talus and rock fall Qtr deposits adjacent to and below landslide masses on Gray Mountain, Little Colorado River Gorge, and Black Point areas. Some landslide blocks below edges of basalt flows at Black Point are unstable during wet conditions (fig. 1 on map). Landslide masses at Black Point are commonly associated with soft siltstone and claystone strata of Petrified Forest Member of the Chinle Formation. Include individual car- and house-size basalt boulders near base of Gray Mountain and in Little Colorado River Gorge. Clasts are mostly angular and unsorted; partly cemented by calcium. Gradational and arbitrary contact with young alluvial fan (Qay), flood-plain (Qf), young terrace-gravel (Qgy), and valley alluvial (Qv) deposits. Subject to extensive sheetwash erosion, flash-flood debris flows, and arroyo erosion. About 3 to 61 m (10 to 200 ft) thick.',
    },
    {
      unit: 'Qlb',
      unitname: 'Little Tanks Basalt, basalt flows',
      description:
        'Dark-gray, finely crystalline to glassy, alkali-olivine basalt. Groundmass composed of plagioclase, olivine, and augite. Unit contains abundant olivine phenocrysts 0.25 to 1 mm in diameter. Unit unconformably overlies Harrisburg Member of the Kaibab Formation Pk and Timpoweap Member and lower red member of the Moenkopi Formation. Thickness, 1 to 3 m (3 to 10 ft).',
    },
    {
      unit: 'Qlp',
      unitname: 'Little Tanks Basalt, pyroclastic deposits',
      description:
        'Red-brown and reddish-black basaltic scoria and cinder deposits; partly consolidated. Unit forms Cinder Knoll, a 15-m-high 50-ft-high pyroclastic cone capped by basalt flow.',
    },
    {
      unit: 'Qlsb',
      unitname: 'Little Spring Basalt, basalt flows',
      description:
        'Dark-gray, finely crystalline to glassy, alkali-olivine basalt. Groundmass composed of glass, plagioclase, and olivine. Forms clinkery aa surface. Basalt flowed northwest about 1.8 km 1 mi and southeast about 2.4 km (1.5 mi). Support sparse ponderosa and oak trees. Overlie older Quaternary basalt flows (Qb), pyroclastic deposits (Qp), and young alluvial fan (Qay) deposits. Thickness, 3 to 7 m (10 to 21 ft).',
    },
    {
      unit: 'Qlsp',
      unitname: 'Little Spring Basalt, pyroclastic deposits',
      description:
        'Red-brown, gray, and reddish-black basaltic scoria, bombs, cinder, and other scoriaceous ejecta deposits. Consist of two deposits that are part of a single pyroclastic cone formed from two closely spaced vent areas. Cone is about 41 m 135 ft high on basalt flow surface (elev. 2,138 m [7,015 ft]). Only east half and southwest part of cone is preserved; rest of cone has been rafted away on lava flows toward the northwest and southeast, suggesting that the cone is older than the flow. Support growths of a few ponderosa pine trees and oak trees. Thickness, 41 m (135 ft).',
    },
    {
      unit: 'Qltb',
      unitname: 'Basalt of Larimore Tank, basalt flows',
      description:
        'Dark-gray to black, finely crystalline, alkali-olivine basalt. Basalt has coalesced from five pyroclastic vent areas just north of map area aligned along northwest-southeast-trending fractures in underlying Permian strata. Contains abundant olivine phenocrysts 0.25 to 1 mm in diameter. Overlain by young alluvial fan Qay deposits. Dissolution sinkholes associated with karstification of the Harrisburg Member of the Kaibab Formation have formed under basalt flows allowing basalt to collapse as much as 18 m (60 ft). Sinkholes are partly filled with ponded alluvium. Basalt flowed into upper part of Toroweap Valley but mostly north towards Clayhole Valley north of map area (Billingsley, 1994). Thickness, 1 to 12 m (3 to 40 ft).',
    },
    {
      unit: 'Qmb',
      unitname: 'Basalt flows',
      description:
        'Dark-gray plagioclase-aphyric and porphyritic basalt of similar composition to pyroclastic Qmp deposits. Weather yellow or brown. Surfaces are weathered and slightly eroded and gullied. K-Ar age of various flows, 0.83±0.04 Ma, 1.04±0.04 Ma, 1.09±0.03 Ma, 1.20±0.05 Ma, and 1.38±1.01 Ma (Ulrich and Bailey, 1987; Wolfe and others, 1987). Flows generally follow older drainage areas that are above present drainages. About 5 to 45 m (15 to 159 ft) thick.',
    },
    {
      unit: 'Qmbi',
      unitname: 'Basalt dike',
      description:
        'Dark-gray to black plagioclase-aphyric basalt with abundant 1- to 3-cm plagioclase laths in groundmass of olivine, clinopyroxene, plagioclase, and magnetite. Contains baked xenoliths of sandstone of the Moenkopi Formation Ulrich and Bailey, 1987. Includes three dikes just east of US Highway 89 about 16 km (10 mi) north of south-central edge of map area. Dike widths, 0.3 to 0.5 m (1 to 1.5 ft).',
    },
    {
      unit: 'Qmcb',
      unitname: 'Basalt flow of Merriam Crater',
      description:
        'Dark-gray alkali olivine basalt. Contains scattered phenocrysts of olivine, clinopyroxene, and rare plagioclase in groundmass of the same minerals plus opaque oxides. Basalt flow originated from Merriam Crater 17.5 km 11 mi southeast of the southeast corner of map area and flowed north to a small 60 m (200 ft) deep canyon of the Little Colorado River and formed a lava dam across the canyon. The lava dam diverted the Little Colorado River stream flow around the north side of the basalt flow and back into 60 m (200 ft) deep canyon downstream of the lava dam that forms Grand Falls (8 km [5 mi]) southeast of map area (Moore and Wolfe, 1976, 1987). Basalt of Merriam Crater flowed downstream of Grand Falls in the Little Colorado River channel into the map area east of Wupatki National Monument. The river overflows the basalt flow and forms rapids known as Black Falls (fig. 1). Downstream of Black Falls, the Little Colorado River flows adjacent to basalt flow, but most of the basalt flow spread out onto abandoned stream-channel (Qs) and low flood-plain (Qf) deposits and terminates just south of Black Point. Optical-luminescence age, 19.6±1.2 ka (Duffield and others, 2004). About 2 to 4 m (6 to 13 ft) thick.',
    },
    {
      unit: 'Qmlp',
      unitname: 'Basalt flow of Lava Point',
      description:
        'Dark-gray to black plagioclase-aphyric basalt. Similar composition to Qmb basalt flows. Mapped as Lava Point flow (Qmb) by Ulrich and Bailey (1987) east of U.S Highway 89 but not mapped separately from other basalt flows of similar composition and age. Mapped herein as separate unit because unit forms an inverted valley for several kilometers north of an unknown source in south part of map area that is similar to an inverted valley formed by adjacent Black Point Basalt flow (Tbpb). K-Ar age, 1.01±0.13 Ma (Ulrich and Bailey, 1987). About 6 to 15 m (20 to 50 ft) thick.',
    },
    {
      unit: 'Qmp',
      unitname: 'Pyroclastic deposits',
      description:
        'Dark-gray to reddish-brown plagioclase-aphyric and porphyritic basalt. Consist of intergranular groundmass of plagioclase, clinopyroxene, olivine, and magnetite. Contain scattered olivine and clinopyroxene phenocrysts. Include several cones of Mesa Butte volcano that are aligned with and overlie Mesa Butte Fault fig. 1. Cones are in early stage of erosion, slightly eroded and gullied. About 25 to 230 m (80 to 750 ft) thick.',
    },
    {
      unit: 'Qmrb',
      unitname: 'Basalt of Marshall Ranch, basalt flows',
      description:
        'Gray-black, finely crystalline, alkali-olivine basalt. Majority of basalt flowed in radial pattern from south pyroclastic cone. Basalt also flowed west about 3 km 2 mi. Partly overlie the basalt of Potato Valley (Qpvb) at south margin and overlie Harrisburg Member of the Kaibab Formation elsewhere. Thickness, 12 to 36 m (40 to 120 ft).',
    },
    {
      unit: 'Qmrp',
      unitname: 'Basalt of Marshall Ranch, pyroclastic deposits',
      description:
        'Reddish-black and red tuff, ash, scoriaceous ejecta, and cinders overlie associated basalt flows. Include two unnamed pyroclastic cones and three smaller secondary spatter cones. Secondary cones appear to have erupted from basalt flows that came from south pyroclastic cone. North pyroclastic cone is about 73 m 240 ft high and south cone is about 85 m (280 ft) high.',
    },
    {
      unit: 'Qp',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Qp1',
      unitname:
        'Basalt of the Uinkaret Plateau, pyroclastic deposits, north of Mount Trumbull',
      description:
        'Reddish-gray, black, and red to gray tuff, ash, scoriaceous ejecta, bombs, and cinder deposits; partly consolidated. Include about 17 pyroclastic deposits north of Mount Trumbull Qp1 such as Craigs Knoll and about 36 pyroclastic vents south of Mount Trumbull (Qp) such as Mount Emma, Slide Mountain, and Petty Knoll in the Uinkaret Mountains between Whitmore Canyon and Toroweap Valley. Deposits are associated with coalescing basalt flows that issued from several vents. Locally form fine- to coarse-grained cinder sheet deposits on basalt flows near cones. Map contacts are approximate and show only the thickest deposits, not entire pyroclastic blanket deposit. No K-Ar ages are available, but cosmogenic 3He ages at scattered locations indicate an age of 0.100 to 0.200 Ma (Fenton, 1998). Thickness, 6 to 180 m (18 to 600 ft).',
    },
    {
      unit: 'Qp6375',
      unitname: 'Basalt of hill 6375, pyroclastic deposits',
      description:
        'Reddish-black cinder and scoriaceous ejecta overlie associated basalt flow. Include small cone at the north end of associated basalt flow that may be local splatter cone deposit derived from basalt flow. Main cone deposit, hill 6375, is about 64 m 290 ft thick.',
    },
    {
      unit: 'Qp6457',
      unitname: 'Basalt of hill 6457, pyroclastic deposits',
      description:
        'Reddish-black cinder and scoriaceous deposits. Include two smaller cones that partly overlie associated basalt flow from cone 6457. North cone may have erupted from the basalt flow. Pyroclastic cone hill 6457 is 36 m (120 ft) thick, and north cone about 24 m (80 ft) thick.',
    },
    {
      unit: 'Qp6588',
      unitname: 'Basalt of hill 6588, pyroclastic deposits',
      description:
        'Reddish-black to mostly black and gray ash, cinder, scoriaceous fragments, and basaltic boulders; partly consolidated. Include four pyroclastic cones aligned in 2-km-long 1-mi-long northwest-southeast trend. Deposits mostly overlie associated basalt flows and landslide deposits (Ql); often incorporated into basalt flows on steep east slopes of hill 6588. Variable thickness because of steep terrain, 2 to 55 m (6 to 180 ft).',
    },
    {
      unit: 'Qp6646',
      unitname: 'Basalt of hill 6646, pyroclastic deposits',
      description:
        'Red and black cinder and scoriaceous deposits overlie associated basalt flow. Include one large pyroclastic cone and two adjacent small cones. There are three eruptive vent areas that formed the main cone aligned along a north-south strike, similar to north-south strike of basaltic cones in Kenworthy Ranch area. Main pyroclastic cone is about 76 m 250 ft thick.',
    },
    {
      unit: 'Qps',
      unitname: 'Ponded sediments',
      description:
        'Gray or brown clay, silt, sand, and some lenses of gravel; partly consolidated by calcite and or gypsum cement. Locally include small chert and limestone fragments or pebbles. Similar to flood-plain Qf deposits but occupy man-made drainage depressions or natural internal drainage depressions caused by sinkhole development, and most commonly caused by sand dune blockages. Larger internal drainage basins, such as Dog Knobs Lake and Babbitt Lake, or smaller sinkhole depressions are common in west half of map area. Eolian blowout depressions, common in dune sand and sand sheet (Qd) deposits on Ward Terrace and below Red Rock Cliffs northeast of Little Colorado River area, and in old eolian sand sheet and dune (QTes) deposits on Moenkopi Plateau, accumulate temporary ponded sediments due to temporary sand-formed dams, many of which are too small to show at map scale. Desiccation cracks often develop in dry conditions on hardpan surfaces of larger accumulations that often restrict plant growth because of excessive clay content. Northeast and east of Little Colorado River and on Moenkopi Plateau, sandy ponded areas do support growths of seasonal grass and often develop a parabolic dune complex downwind (northeast) of sediment area. About 1.5 to 9 m (5 to 30 ft) thick.',
    },
    {
      unit: 'Qpvb',
      unitname: 'Basalt of Potato Valley, basalt flows',
      description:
        'Dark-gray alkali-olivine basalt. Flows on north side of Potato Valley erupted from unnamed cinder cone and flowed northwest about 3 km. Flow appears to have merged or coalesced with flows from two cones on west side of Potato Valley forming a basalt dam responsible for the accumulation of alluvial sediments in Potato Valley. Basalt flows on west side of Potato Valley flowed mostly north about 5 km 3 mi. Thickness, 2 to 25 m (6 to 85 ft).',
    },
    {
      unit: 'Qpvp',
      unitname: 'Basalt of Potato Valley, pyroclastic deposits',
      description:
        'Red and black cinder, tuff, ash, and scoriaceous ejecta. Include two main pyroclastic cones on north and west sides of Potato Valley and five small pyroclastic vents. The two main cones appear to be the main sources for associated basalt flows that ring the north and west side of Potato Valley. Several small cones on basalt flows appear to have erupted from the flow as secondary eruptions. Dikes in Hells Hole Qti south of Potato Valley may be associated with Potato Valley cones. Thickness, 106 m (350 ft) on west side of Potato Valley and 85 m (280 ft) on north side.',
    },
    {
      unit: 'Qr',
      unitname: 'Colorado River gravel and silt deposits',
      description:
        'Mud, silt, and fine- to coarse-grained sand and gravel interbedded with poorly sorted, angular- to well-rounded pebbles, cobbles, and boulders adjacent to Colorado River. Overlap and intertongue with local alluvial debris fans and flows. Young Qgy and old (Qgo) alluvial terrace-gravel deposits are mapped as one unit (Qr) along Colorado River because map scale is too small to separate them. Include local wind-blown sand sheet and small sand dune deposits. Clasts are primarily comprised of sandstone, limestone, chert, basalt and well-rounded quartzite and volcanic rocks that have originated upstream from distant upper basin uplifts. Terrace gravels underlie and overlie local basalt flows 3 to 122 m (10 to 400 ft) above Colorado River, southeast quarter of map area. Higher terrace-gravel deposits are partly consolidated by calcium and gypsum. Age of terrace deposits commonly between 0.100 to 0.150 Ma (Fenton, 1998). Deposits are interbedded with local landslide and talus debris. Thickest deposits, downstream from the Toroweap and Hurricane Faults, as much as 60 m (200 ft).',
    },
    {
      unit: 'Qs',
      unitname: 'Stream-channel deposits',
      description:
        'Poorly sorted, interlensing silt, sand, pebbles, and gravel. Intertongue with or inset against young alluvial fan Qay, young terrace-gravel (Qgy), and upper part of valley alluvial (Qv) deposits, overlaps flood-plain (Qf) and ponded sediment (Qps) deposits. Stream channels subject to high-energy flows and flash floods. Little or no vegetation in stream channels, except for salt cedar (tamerisk), Russian olive, and cottonwood trees along Little Colorado River and some of its tributaries. Contact with other alluvial deposits merge laterally and are approximate. Stream-channel deposits of Little Colorado River mapped as shown on 1968 black and white aerial photographs and do not necessarily reflect stream-channel deposits of today due to extensive low-gradient channel changes caused by yearly flooding events. Little Colorado River stream channel meanders within its wide valley from upstream of Cameron to southeast corner of map area where the channel is confined within bedrock strata of Kaibab Formation. Downstream of Cameron, the Little Colorado River is largely confined within alternating hard and soft rocks of the Moenkopi and Kaibab Formations for about 11 km (7 mi), then becomes confined and strikingly meandering within narrow walls of Permian and older Paleozoic strata that form the Little Colorado River Gorge (fig. 1) and is part of the Grand Canyon physiographic area. About 2 to 9 m (6 to 30 ft) thick.',
    },
    {
      unit: 'Qsb',
      unitname: 'Sage Basalt, basalt flows',
      description:
        'Dark-gray, finely crystalline to glassy alkali-olivine basalt. Groundmass contains plagioclase, olivine, and augite laths. Includes abundant olivine phenocrysts 0.25–5 mm in diameter consisting of about 30 percent basalt in some outcrops. Overlies Harrisburg Member of Kaibab Formation Pk. Basalt is offset about 110 ft (34 m) by the Toroweap Fault about 2 mi (3 km) west of northwestern corner of map area (Billingsley and Workman, 2000). Thickness ranges from 10 to 60 ft (3 to 18 m).',
    },
    {
      unit: 'Qsc',
      unitname: 'Eolian cinder sand sheet deposits',
      description:
        'Black, gray, and red, coarse-grained fragments of angular to subangular, glassy, basaltic and andesitic cinders and scoria. Material is derived from nearby pyroclastic volcanic centers; airborne ash and cinders were deposited within a few miles of local volcanic eruptions in the San Francisco Volcanic Field in south part of map area, and from eruptions south and southwest edge of map area. Pyroclastic fragments are commonly vesicular ash fall deposits that have been transported by southwesterly winds and that have accumulated against or downslope of local topographic obstructions such as basalt flows, steep-walled drainages, rock ledges, and local fault scarps, especially in Wupatki National Monument area. Form extensive cover of eolian cinder sheet deposits over all terrain in south-central part of map area; many deposits too thin to show at map scale. Cinder fragments become smaller and more subrounded farther downwind northeast of eruptive centers. About 1.5 to 12 m (5 to 40 ft) thick.',
    },
    {
      unit: 'Qsd',
      unitname: 'Silt dune deposits',
      description:
        'Brown and medium-gray clay, silt, and fine-grained sand composed of decomposed and weathered volcanic rock. Include subrounded to angular fragments of pebbles and cobbles of local basalt rocks about 4 to 6 inches 9.6 to 14.5 cm in diameter and as much as 1 ft (0.3 m) in diameter. The basaltic rocks are randomly scattered within and on silt dunes. High winds during wet conditions may have blown basalt rocks across flat slick muddy lake surfaces and up onto slick muddy dune surfaces. Source for silt dunes is locally derived from dry lake surfaces of ponded sediments (Qps), such as Red Lake, Tule Lake, Bishop Lake, Horse Lake, and several unnamed dry lakes and ponds in the Mount Floyd Volcanic Field and transported by southwesterly winds to accumulate on northeast shores of lakes and ponds. Support little to no vegetation due to heavy silt and clay content. Thickness, 6 to 80 ft (1.8 to 25 m).',
    },
    {
      unit: 'Qsfp',
      unitname: 'Pumice of San Francisco Mountain',
      description:
        'White to light-gray, poorly sorted, mantle bedding of rhyolite pumice fall. Unit is matrix free except for locally reworked zone in upper 1 m 3 ft. Lapilli range from several millimeters to several centimeters in size, are colorless vesicular glass, and lack visible crystals. Contains xenoliths of greenschist and blueish-gray dense rhyolite with feldspar and quartz phenocrysts. Unit overlies older basalt flows (Qmb) near US Highway 89 at south-central edge of map along Deadman Wash and is correlated with lower aphyric pumice deposits on San Francisco Mountain (Dennis, 1981) south of map area because of similarities in petrography, composition, and xenoliths. Fission-track age on zircons is 0.80±0.11 Ma (C.W. Naeser and G.A. Izett, in Ulrich and Bailey, 1987). About 3 to 5 m (10 to 15 ft) thick.',
    },
    {
      unit: 'Qslr',
      unitname: 'Rhyolite dome complex of Slate Mountain',
      description:
        'Light-gray aphanitic rhyolite. Rare microphenocrysts of pale-brown amphibole, biotite, and altered fayalite? occur in a felsic cryptocrystalline groundmass (Wolfe and others, 1987). Unit forms the north flank of a 1.5 km (1 mi) diameter cluster of domes that form Slate Mountain; summit of Slate Mountain is south of map area. Uplifted sedimentary rocks of Lower Permian age are exposed adjacent to east and south edge of rhyolite just south of map boundary. K-Ar age, 1.54±0.02 Ma (Wolfe and others, 1987). About 92 m (300 ft) thick.',
    },
    {
      unit: 'Qsp',
      unitname: 'Pyroclastic deposits of Shadow Mountain',
      description:
        'Black and red scoria, cinder, and ash deposits of olivine-labradorite basaltic composition. Deposits overlie associated basalt flows and strata of Petrified Forest and Shinarump Members of the Chinle Formation. About 183 m 600 ft thick.',
    },
    {
      unit: 'Qss',
      unitname: 'Sand sheet deposits',
      description:
        'White, brown, and gray, fine- to coarse-grained wind-blown sand. Composed primarily of quartz and feldspar grains derived from erosion of Tertiary sediments Ts in southwest half of map area. Composed of quartz grains and small chert fragments derived from Harrisburg Member of the Kaibab Formation in central part of map area. Form extensive deposits over gently sloping terrain of flat prairie-land topography downwind (northeast) of sand dune deposits in southwest and central part of map area. Intertongue with young mixed alluvium and eolian (Qae) deposits and old mixed alluvium and eolian (QTae) deposits. Arbitrary and gradational lateral and vertical contact between sand sheet (Qss) and sand sheet and dune (Qd) deposits based on morphologic interpretation of aerial photographs. Only most extensive deposits shown. Support moderate growth of grass and small high-desert shrubs. Thickness, 1 to 10 ft (0.3 to 3 m).',
    },
    {
      unit: 'Qt',
      unitname: 'Travertine deposits',
      description:
        'Gray and tan, stained light-red, massive, porous, cliff-forming freshwater limestone. Include angular clasts of local talus breccia or stream gravel. Formed by rapid chemical precipitation of calcium carbonate from springwater discharge as encrustations on steep slopes or cliffs. Deposits are primarily near base of Cambrian Muav Limestone along east side of Colorado River and north side of Little Colorado River in Grand Canyon. Include numerous dams in bed of Little Colorado River too small to show at map scale. Include minor deposits at seeps along contact between Kayenta Formation-Navajo Sandstone transition zone Jkn and underlying Kayenta Formation (Jk) in Moenkopi Wash area that are too thin to show at map scale. Thickness, 6 to 60 ft (2 to 18 m).',
    },
    {
      unit: 'Qtb',
      unitname: 'Tuckup Canyon Basalt, basalt flow',
      description:
        'Dark- to light-gray, finely crystalline alkali-olivine basalt. Most of the basalt came from a fissure-like dike Qti and pyroclastic cone (Qtp) vent area in unnamed western tributary of upper Tuckup Canyon (Billingsley, 1970). Basalt flowed into Tuckup Canyon over outcrops of Toroweap and Kaibab Formations, Coconino Sandstone, Hermit Formation, and Esplanade Sandstone (Pe). The basalt flow merged or coalesced with a basalt flow (Qhb) from the Hancock Knolls area and spread out into upper Tuckup Canyon onto alluvium and Esplanade Sandstone. Tuckup Canyon drainage has been diverted around east side of basalt flow in upper Tuckup Canyon. Remnants of basalt flow cascaded over and cling to steep canyon walls of Esplanade Sandstone and Wescogame Formation, undivided (M_u), indicating that Tuckup Canyon had eroded at least as deep as Manakacha Formation, undivided, prior to the flow about 760,000 years ago. Thickness ranges from 3–25 ft (1–7.5 m).',
    },
    {
      unit: 'Qtg',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Qti',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Qtp',
      unitname: 'Tuckup Canyon Basalt, pyroclastic deposits',
      description:
        'Red and reddish-gray cinders and scoriaceous glassy fragments of basalt; unconsolidated. Forms small cinder cone overlying associated basalt flow Qtb and part of Toroweap and Kaibab Formations (Pt, Pk) and Coconino Sandstone (Pc) in an unnamed western tributary of Tuckup Canyon. Also forms small isolated deposit below Qti dike at Coconino Sandstone (Pc) and Hermit Formation (Ph) contact northwest of unnamed western tributary canyon of Tuckup Canyon. Thickness about 200 ft (60 m) .',
    },
    {
      unit: 'Qtr',
      unitname: 'Talus and rock-fall deposits',
      description:
        'Along Vermilion Cliffs; consists of red to yellow silt and sand mixed with angular rocks and boulders of light-red sandstone and dark-red siltstone; partly cemented by calcite. Form talus debris slopes in steep-walled canyons and on lower slopes of Vermilion Cliffs; often associated with and adjacent to or below landslide Ql deposits. Include some boulders of Navajo Sandstone or Shinarump Member of the Chinle Formation larger than 3 m (10 ft) near landslide (Ql) deposits near base of Vermilion Cliffs. In Kanab Creek drainages; consists of gray to yellow silt, sand, gravel mixed with small to large angular rocks and boulders of gray limestone, white chert, and white to tan sandstone derived from the Kaibab and Toroweap Formations and Coconino Sandstone; partly cemented by calcite and gypsum. Form talus debris cover on red slopes of Hermit Formation; associated with and below landslide (Ql) deposits. Unit often grades down slope into young or old alluvial fan (Qay, Qao) deposits or young or old terrace-gravel (Qgy, Qgo) deposits. About 1.5 to 14 m (5 to 45 ft) thick.',
    },
    {
      unit: 'Qv',
      unitname: 'Valley-fill deposits',
      description:
        'Gray to light-red, slope-forming, unsorted mixture of mud, silt, sand, gravel, small pebbles, and cobbles. Partly consolidated by calcite and gypsum cement. Include sandstone, limestone, and chert clasts in sandy matrix locally derived from nearby Paleozoic and Mesozoic sedimentary rock outcrops in northwestern third of map area. On Kaibab Plateau; composed mostly of gray silt, sand, and numerous white to yellow chert fragments. Similar to stream-channel Qs deposits but occupies low-gradient drainages that deposit mostly fine-grained sand or silt in flat drainage floors, especially in Nail Canyon and Snake Gulch west of Jacob Lake, Arizona. Similar to or interbedded with flood-plain (Qf) deposits in Pipe Valley area. Subject to extensive sheet wash erosion, deposition, flash flood debris flows, temporary ponding of floods, sheet wash and arroyo erosion. Commonly interbedded with stream-channel (Qs), dune sand and sand sheet (Qd), and ponded sediment (Qps) deposits. About 1 to 6 m (3 to 20 ft) thick.',
    },
    {
      unit: 'Qwb',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Qyab',
      unitname: 'Basaltic andesite of S P Mountain',
      description:
        'Dark-gray basaltic andesite. Flow is more crystalline than associated basaltic pyroclastic deposits of S P Mountain Qyap. Flow has rough blocky surface and steep flow fronts. Basalt flowed northward about 6.5 km (4 mi) over Harrisburg Member of the Kaibab Formation and into local graben structures (fig. 4 on map). K-Ar age determined by Baksi (1974) is 0.071±0.004 Ma (Ulrich and Bailey, 1987). About 6 to 40 m (20 to 130 ft) thick.',
    },
    {
      unit: 'Qyap',
      unitname: 'Pyroclastic deposits of S P Mountain',
      description:
        'Dark-gray to reddish-gray basaltic andesite. Contain phenocrysts of clinopyroxene, olivine, and intensely corroded plagioclase in hypocrystalline groundmass of the same minerals, plus opaque oxide and glass. Same composition as basaltic andesite flow Qyab, but less crystalline. Contains abundant large volcanic bombs that help form sharp rims of uneroded crest of cone (Hodges, 1962; Ulrich and Bailey, 1987). Pyroclastic cone partially overlies older cone on west side and has a circular plan view; forms 287-m- (940-ft-) high cone with 60-m- (200-ft-) deep interior crater. About 287 m (940 ft) thick.',
    },
    {
      unit: 'Qyb',
      unitname: 'Basalt flow of five young cinder cones',
      description:
        'Grayish-black porphyritic basalt flow with same composition as pyroclastic deposits of five young cinder cones Qyp. Consists of one small flow 700 m (2,297 ft) long and 400 m (1,315 ft) wide. About 5 to 10 m (16 to 33 ft) thick.',
    },
    {
      unit: 'Qyp',
      unitname: 'Pyroclastic deposits of five young cinder cones',
      description:
        'Grayish-black porphyritic basalt with abundant 1- to 3-mm phenocrysts of corroded tabular plagioclase, scattered olivine, and sparse clinopyroxene in a hyalophitic groundmass. Forms five young cinder cones overlying older cinder cones; 200 to 800 m 200 to 2,625 ft in diameter and 25 to 165 m (80 to 540 ft) high at south-central edge of map area. Thickness, 25 to 165 m (80 to 540 ft).',
    },
    {
      unit: 'T227i',
      unitname: '227-Mile intrusive',
      description:
        'Informally named by Wenrich and others 1995. Gray alkali-olivine basalt dikes and sills exposed in Watahomigi Formation of the Supai Group, undivided (*Ms) about 4 km (2.5 mi) north of Colorado River Mile 227. K/Ar age of sill, 13.5±0.3 Ma (Wenrich and others, 1995). Dike and sill thickness, 1 to 3.5 m (3 to 12 ft).',
    },
    {
      unit: 'T2i',
      unitname: 'Dikes of Colorado River Mile 202',
      description:
        'Light-gray, coarsely to finely crystalline, olivine-augite basalt. Include three to four dikes that parallel and occupy northwest-trending joints, fractures, and minor faults in Paleozoic bedrock. Composition is basalt and andesite. K-Ar age is 5.76±0.26 Wenrich and others, 1995. There appear to be no flows associated with dikes of Colorado River Mile 202, but some basalt flows on the Shivwits Plateau east of Mollies Nipple may be associated with dikes of Colorado River Mile 202. Dikes extend from the Muav Limestone (_m) up almost into the lower Toroweap Formation (Pt) near Mollies Nipple, east edge of Shivwits Plateau. Dikes are aligned to similar northwest-trending dikes at Yellow John Mountain on nearby Shivwits Plateau. Widths, 0.1 to 3 m (1 to 10 ft).',
    },
    {
      unit: 'TRc',
      unitname: 'Chinle Formation, undivided',
      description:
        'Includes the Shinarump and Petrified Forest Members. Shinarump Member locally missing or has undergone local facies change to sandstone lithology similar to sandstones in Petrified Forest Member. The Chinle Formation at Hells Hole is 21 km 13 mi north of Colorado River Mile 188 and is the thickest Chinle Formation deposit nearest to the Colorado River of Grand Canyon other than at Lees Ferry, Arizona. Petrified Forest Member is white, blue-gray, pale-red and purple, slope-forming mudstone, siltstone, and coarse-grained sandstone; contains small, very well rounded pebbles of black, yellow, brown, and red quartzite. Includes white, coarse-grained, ledge-forming sandstone at base that may be equivalent to the Shinarump Member of the Chinle Formation; contains brown, yellow, white, and red petrified wood fragments. Unit contains bentonitic clays derived from decomposition of volcanic ash. Unconformable contact with overlying basalt of Bundyville (Tbb) west of Hurricane Fault and basalt of Mount Logan (Tmlb) east of Hurricane Fault. Erosion has removed an unknown thickness of upper part of the Chinle Formation. Unit is mostly covered by landslide debris (Ql). Unconformable contact with underlying slope-forming upper red member of the Moenkopi Formation; erosional relief less than 2 m (6 ft) at Hells Hole marked by color contrast between red Moenkopi Formation and purple-white Chinle Formation in slope. Thickness, 122 m (400 ft).',
    },
    {
      unit: 'TRco',
      unitname: 'Chinle Formation, Owl Rock Member',
      description:
        'Grayish-red and light-purple, slope- and ledge-forming nodular limestone interbedded with purple, light-blue, and light-red calcareous siltstone and sandstone. Limestone beds are gray, cherty, lenticular, silty, irregular bedded 0.5 to 1.5 m 1 to 5 ft thick and extend laterally for several miles to form resistant ledges of Ward Terrace (fig. 1). Black petrified logs form a unique petrified forest on Ward Terrace south of Landmark Wash. Unit contains abundant mud pellets and silicified clay and concretionary chert nodules and generally maintains constant thickness from Cameron to southeast edge of map area. Unconformable contact between Owl Rock Member of the Chinle Formation and overlying Moenave Formation commonly marked by distinct lithology and color change from purple and white calcareous siltstone and sandstone and limestone of the Owl Rock to dark-red or orange-red coarse-grained sandstone of the Moenave. Gradational and arbitrary contact with underlying Petrified Forest Member placed at lowest laterally continuous limestone or nodular calcareous grayish-white siltstone in slope generally about 18 to 25 m (60 to 80 ft) below lowest prominent limestone caprock of Ward Terrace. About 82 m (270 ft) thick in southeast part of map to 60 m (200 ft) thick in northeast part.',
    },
    {
      unit: 'TRcp',
      unitname: 'Chinle Formation, Petrified Forest Member',
      description:
        'Purple, blue, light-red, reddish-purple, grayish-blue, slope-forming mudstone and siltstone and interbedded white, coarse-grained lenticular sandstone. Includes three informal units of Akers and others 1958, in ascending order: blue mudstone, gray mudstone and sandstone, and red mudstone and sandstone (not mapped). Includes large lenticular erosional channel structures and large-scale low-angle trough crossbedding. Petrified logs and wood fragments common in white or yellowish-white sandstone in lower part that may be within upper part of sandstone and siltstone member, undivided, of the Chinle Formation. Gradational and arbitrary contact with underlying Shinarump Member and sandstone and siltstone member, undivided, at lithologic and topographic change from sloping multicolored mudstone of Petrified Forest Member to coarse-grained, light-brown sandstone ledges and purple slopes of Shinarump Member. Weathers into rounded hills or slopes with a rough, puffy, popcorn texture surface due to swelling of clay content when wet. Thickness, 122 to 153 m (400 to 500 ft).',
    },
    {
      unit: 'TRcs',
      unitname: 'Chinle Formation, Shinarump Member',
      description:
        'White to yellowish-brown, cliff-forming, thin- to thick-bedded, coarse-grained, low-angle crossbedded sandstone, gravel, and conglomeratic sandstone. Includes numerous small channel lenses and pockets of small pebble conglomerate composed of well rounded to subrounded, multicolored quartz, quartzite, and black chert pebbles in gravely sandstone matrix. Black chert pebbles are dominant clasts. Pebbles average about 2.4 to 4.8 cm 1 to 2 in in diameter and include some well-rounded quartzite cobbles as large as 24 cm (10 in) in diameter and numerous angular petrified wood fragments and segments of petrified logs. Black pebbles eroded from Yellowstone Mesa area form desert pavement of lag gravel on all alluvial fan and colluvial surfaces down slope of mesa, southwest quarter of map area. Unit is source area for well rounded, multicolored quartz, quartzite, and chert pebbles in all surficial units below outcrops of the Shinarump Member of the Chinle Formation. Weathered sand from the Shinarump Member provides source for local eolian sand sheet (Qes) and dune sand and sand sheet (Qd) deposits that are transported by southwesterly winds up and over Petrified Forest Member. Unit fills broad channels that are as much as 9 m (30 ft) deep and 0.8 to 1.5 km (0.5 to 1 mi) wide eroded into underlying upper red member of Moenkopi Formation. Thickness ranges from about 6 to 38 m (20 to 125 ft).',
    },
    {
      unit: 'TRm',
      unitname: 'Moenkopi Formation, undivided',
      description:
        'Red, slope-forming, fine-grained, thin-bedded, shaly siltstone and sandstone. Includes, in ascending order, the Wupatki Member, the Shnabkaib Member and lower massive sandstone member, and the Holbrook and Moqui Members, undivided. White, cliff-forming, coarse-grained, low-angle, crossbedded sandstone in lower part of unit in Dog Knobs area may be equivalent to the lower massive sandstone member of the Moenkopi Formation east of Dog Knobs area. Unit is mostly eroded from southwest part of map area and commonly buried by volcanic rocks of the San Francisco Volcanic Field in Dog Knobs area. The basal Timpoweap Member of the Moenkopi Formation not mapped is composed of conglomeratic limestone or calcareous sandstone with small white, angular chert pebbles and fragments that occupy shallow depressions and channels eroded into underlying Harrisburg Member of the Kaibab Formation in western half of map area. Unit is distinguished from underlying red siltstone and sandstone beds of Harrisburg Member of the Kaibab Formation (Pkh) by its darker red color, thin-bedded, platy, coarse-grained, conglomeratic sandstone beds as opposed to massive-bedded, pale-red and gray, undulating, soft siltstone and sandstone beds of Harrisburg Member. Forms unconformable contact with underlying Harrisburg Member of the Kaibab Formation (Pkh) representing the regional Permian/Triassic unconformity. Overall thickness before Cenozoic erosion, about 300 m (1,000 ft) along west edge of map area, thins eastward to about 107 m (350 ft) near Cameron, Arizona, and to about 67 m (220 ft) at Wupatki National Monument area.',
    },
    {
      unit: 'TRmhm',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'TRms',
      unitname: 'Moenkopi Formation, Shnabkaib Member',
      description:
        'Yellowish-white and light-brown, cliff-forming, crossbedded, fine-grained, calcareous and gypsiferous siltstone and dolomite and coarse-grained sandstone. Forms prominent white slope or ledge at south end of Vermilion Cliffs near U.S. Highway 89A south of Cliff Dwellers Lodge and yellow-brown calcareous sandstone ledges or cliff east of U.S. Highway 89A and 89 along Echo Cliffs to south edge of quadrangle. Shnabkaib Member thins and undergoes a northward facies change to yellow-brown and light-red calcareous sandstone ledges that weather dark red and black. The Shnabkaib Member is locally removed by Middle? Triassic channel erosion in several areas below Echo and Vermilion Cliffs to Lees Ferry. Channels are filled with conglomeratic sandstone of Shinarump Member of the Chinle Formation. Unit gradually thickens south of quadrangle (Billingsley and others, 2013) and northwest of quadrangle (Billingsley and others, 2008). Gradational contact with underlying lower red member, Virgin Limestone Member, and middle red member, undivided marked at base of lowest tan or light-red sandstone cliff. Thickness, 0 to 100 ft (0 to 30 m).',
    },
    {
      unit: 'TRmss',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'TRmw',
      unitname: 'Moenkopi Formation, Wupatki Member',
      description:
        'Red and red-brown, slope-forming, thin-bedded, mudstone, siltstone, and sandstone as defined by McKee 1954. Interbedded sandstones as thick as 1 to 3 ft (0.5 to 1 m) form resistant ledges within crumbly red-brown mudstone/siltstone slopes. Bedding surfaces often contain small-scale ripple marks, salt crystal casts, mud cracks, and rain-drop impressions. Unit is equivalent to lower red member, Virgin Limestone Member, and middle red member of Stewart and others (1972) in northwestern Arizona. Virgin Limestone Member is present at Cedar Ridge and in Yon Dot Mountains on Marble Plateau but is too thin to show at map scale. Virgin Limestone beds consist of yellowish-white, thin, platy, silty limestone and siltstone about 1 to 3 ft (0.3 to 1 m) thick and about 15 to 20 ft (4.5 to 6 m) above Harrisburg Member of the Kaibab Formation (Pkh); represent the regional Permian/Triassic unconformity. Unit includes basal Timpoweap Member of the Moenkopi Formation. Timpoweap Member is composed of subangular to subrounded conglomerate in calcareous sandstone matrix; small, white, angular chert pebbles and fragments derived from Kaibab Formation occupy shallow depressions and channels eroded into underlying Harrisburg Member of the Kaibab Formation in western half of map. Thickness, 30 to 85 ft (9 to 26 m).',
    },
    {
      unit: 'Tao',
      unitname: 'Alluvial deposits',
      description:
        'Gray to dark-gray, slope-forming schist, granite, gneiss, and amphibole clasts derived from Proterozoic outcrops of the Virgin Mountains about 9 to 11 km 6 to 7 mi northwest of map area. Include clasts composed of white and gray angular chert, subrounded to rounded gray and dark-gray limestone and dolomite clasts averaging about 5 cm (3 in) in diameter derived from Paleozoic rock outcrops of the Virgin Mountains (Bohannon and Lucchitta, 1991; Beard, 1996). Poorly sorted to moderately sorted. Unconformably overlie red siltstone, sandstone, and conglomerate facies (Tgr) and strata of the Kaibab and Moenkopi Formations. Unit is strongly dissected by modern erosion. Support sparse growth of desert vegetation, mainly cactus of various types and creosote bush. Thickness, 60 m (200 ft) or more.',
    },
    {
      unit: 'Tay',
      unitname: 'Alluvium and calcrete soil deposits',
      description:
        'Gray and light-brown, slope-forming, silt, sand, coarse gravel in coarse-grained gravely matrix alluvium; includes subangular to well-rounded limestone and dolomite pebbles, cobbles, and boulders up to 1 m 3 ft in diameter. Include 8 basalt clasts derived from basalt flows (Tb) of the Grand Wash Trough; partly consolidated by calcium and gypsum cement. Form cliffs or weathers to rounded resistant hills. Unit overlain by thin to thick calcrete soil deposits, 1 to 8 m (3 to 25 ft) thick. Unit is poorly sorted to moderately sorted. Calcrete soil deposits that cover basalt flows form thin, rough, and discontinuous beds averaging about 1.2 m (5 ft) thick and contain scattered cobbles of basalt up to 30 cm (12 in) in diameter. Pebble imbrications show southward flow of depositing streams in Grand Wash Trough area. Unit is strongly dissected by modern erosion. East of Grand Wash drainage, unit is composed of gray and light-brown, poorly sorted, consolidated, silt, sand, gravel, cobbles, and boulders derived from Paleozoic rocks in the Grand Wash Cliffs; clasts are composed of about 80 percent limestone and dolomite, and 10 percent chert in gray gypsiferous siltstone and sandstone matrix, all capped by calcrete soil 3 to 4 m (10 to 12 ft) thick; weathers light brown. Rounded and subrounded limestone and chert clasts are strongly pitted and etched on weathered surfaces and often coated by calcrete rind on underside. Unconformably overlie red siltstone and sandstone (Tgr) and unmapped conglomerate deposits west of Wheeler Fault. Unconformably overlies older gypsum and limestone sediment facies (Tgg and Tgl) between Grand Wash drainage and Grand Wash Cliffs. Support sparse growths of desert vegetation, mainly cactus of various types and creosote bush. Thickness, 15 to 60 m (50 to 200 ft).',
    },
    {
      unit: 'Tb',
      unitname: 'Basalt flows',
      description:
        'Medium- to dark-gray plagioclase-phyric, aphyric, and slightly porphyritic basalt. Smooth surfaced, partly dissected north of Dog Knobs area and about 10 km 6 mi northeast of S P Mountain. Composed of plagioclase, clinopyroxene, olivine, and opaque oxides. Less than 30 m (90 ft) thick.',
    },
    {
      unit: 'Tba',
      unitname:
        'Volcanic rocks of the Mount Floyd Volcanic Field, basalt and andesite flows',
      description:
        'Dark- to light-gray, finely crystalline alkali-olivine basalt. Most of the basalt came from elongated fissure dikes Ti and vent areas beneath pyroclastic cone deposits (Tp). Basalt flowed onto flat, partly eroded Tertiary sedimentary rocks of freshwater limestone, sandstone, and siltstone (Ts). Several basalt flows merge or coalesce into one large flow suggesting an eruptive phase of a similar time; 40Ar/39Ar age, 6.76±0.13 Ma (Peters, 2002) at Duff Brown Tank (sec. 28, T. 26 N., R. 3 W.). Thickness, 25 to 300 ft (7.5 to 92 m).',
    },
    {
      unit: 'Tbb',
      unitname: 'Basalt of Bundyville, basalt flows',
      description:
        'Dark-gray, finely crystalline, olivine basalt. Groundmass contains olivine. Include one to three basalt flows that form a caprock overlying purple and white mudstone and sandstone beds of the Petrified Forest Member of the Chinle Formation. Flow surfaces locally distorted by landslide and soft sediment deformation of underlying soft mudstone that has been caused by earthquakes related to the Hurricane Fault. Basalt predates any offset of strata along Hurricane Fault implying that the fault is younger than 3.6 Ma. Flows assumed to have originated from local dikes Tbi that are largely covered by basalt, landslide, or talus debris. Thickness, 30 to 55 m (100 to180 ft).',
    },
    {
      unit: 'Tbi',
      unitname: 'Dike in ampitheater',
      description:
        'Dark-gray plagioclase-phyric basalt and mixed pyroclastic dikes and necks. Composed of plagioclase, clinopyroxene, olivine, and opaque oxides. Crystal-rich basalt; occurs in 2.7 km 1.5 mi wide basalt- and tuff-rimmed depression informally named the “Amphitheater” by Ulrich and Bailey (1987), 10 km (6 mi) east of U.S. Highway 89 and about 8 km (5 mi) northeast of S P Mountain. Dike is 2 to 6 m (4 to 20 ft) wide and 5 to 10 m (15 to 33 ft) in height. K-Ar age, 3.13±0.39 Ma (Ulrich and Bailey, 1987). Coarse pyroclastic debris is scattered on surrounding surface of Wupatki Member of the Moenkopi Formation. Thickness, 5 to 10 m (15 to 33 ft).',
    },
    {
      unit: 'Tbmb',
      unitname: 'Blue Mountain Basalt, basalt flows',
      description:
        'Dark-gray alkali-olivine basalt. Include small basalt flow on top of unnamed mesa 6.5 km 4 mi north of Blue Mountain of Aubrey Valley. Overlies old gravel and sedimentary (Ts1) deposits and young gravel and sedimentary (Tg) deposits. Source for basalt on unnamed mesa is likely from one of two dikes (Tbmi) just southwest of mesa. Blue Mountain Basalt is offset by three small normal faults. Thickness, 76 m (250 ft) at Blue Mountain; 6 m (20 ft) thick on top of unnamed mesa.',
    },
    {
      unit: 'Tbmi',
      unitname: 'Blue Mountain Basalt, dikes and necks',
      description:
        'Dark-gray alkali-olivine basalt. Forms two small dikes, plugs, or necks southwest of basalt flow on top of unnamed mesa 6.5 km 4 mi north of Blue Mountain in Aubrey Valley. Highest elevation dike intrudes upper part of the Hermit Formation (Ph); lowest elevation dike intrudes base of the Esplanade Sandstone (Pe). Dike widths, 0.5 to 3.5 m (2 to 12 ft).',
    },
    {
      unit: 'Tbpb',
      unitname: 'Black Point basalt flows',
      description:
        'Dark-gray to black plagioclase-aphyric basalt; surface weathers smooth and locally dissected. Contain scattered to abundant tabular plagioclase phenocrysts as large as 1 cm in diameter and includes abundant olivine microphenocrysts in feldspathic groundmass with intergranular to ophitic intergrowth of brown pyroxene and plagioclase. K-Ar age, 2.43±0.32 Ma Ulrich and Bailey, 1987. Basalt flows form two lobes in map area; one extends northeast from south-central edge of map area for 26 km (16 mi) to the Little Colorado River, and the other lobe extends east-northeastward from Wupatki National Monument for 14 km (8.5 mi) referred to as the Citadel flow by Cooley (1962), but is mapped as the Black Point basalt flows (Ulrich and Bailey, 1987) because both lobes emerge from a single flow southwest of Wupatki National Monument. Basalt flows average about 12 m (40 ft) thick at Black Point where basalt filled a low-relief channel of Little Colorado River 1.5 km (1 mi) wide and extended down river about 5 km (3 mi). About 6 to 40 m (20 to 132 ft) thick.',
    },
    {
      unit: 'Tc',
      unitname: 'Volcanic rocks of the Hualapai Plateau, pyroclastic deposits',
      description:
        'Red basaltic pyroclastic cinder cone deposits at Grapevine Canyon, northwest corner of map area, west edge of Hualapai Plateau. Overlie Devonian and Mississippian strata on rim and within Grapevine Canyon and overlain by thick alkali-olivine basalt flows Tv. Pyroclastic deposits and basalt flows within Grapevine Canyon indicate that Grapevine Canyon is older then 15.3 Ma. Include deposits on rim of upper Meriwhitica Canyon west of Meriwhitica Monocline. Thickness, 9 to 60 m (30 to 200 ft).',
    },
    {
      unit: 'Teb',
      unitname: 'Basalt north of Mount Emma, basalt flows',
      description:
        'Near Mount Emma, gray-black alkali-olivine basalt; plagioclase laths common in glassy groundmass. Consist of several basalts that flowed east and south from plug Tei area. Underlying strata concealed, but because of similar elevation as basalt of Mount Logan, it is assumed basalt overlies the Chinle Formation or upper Moenkopi Formation. Thickness, 122 m (400 ft).',
    },
    {
      unit: 'Tei',
      unitname: 'Basalt north of Mount Emma, intrusive rocks',
      description:
        'Gray-black alkali-olivine basaltic plug or dike. Unit partly exposed and offset by the Hurricane Fault. Most of unit covered by landslide deposits Ql. Width of plug is probably in excess of 90 m (300 ft) and appears to be source of Tertiary basalt flows north of and under Mount Emma pyroclastic deposits. Plug does not protrude above ground surface; highly altered and weathered.',
    },
    {
      unit: 'Tep',
      unitname: 'Basalt north of Mount Emma, pyroclastic deposits',
      description:
        'Reddish-black cinder, scoria, ash, and other scoriaceous ejecta; deeply eroded. Associated with intrusive plug Tei on downthrown side of Hurricane Fault north of Mount Emma. Thickness, 12 m (40 ft).',
    },
    {
      unit: 'Tg',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Tgb',
      unitname: 'Grassy Mountain Basalt, pyroclastic deposits',
      description:
        'Dark-gray, finely crystalline, alkali-olivine basalt; olivine phenocrysts averaging 1 mm in diameter form about 25 percent of rock sample from interior of basalt flow. One or more flows interbedded with pyroclastic deposits near dikes. Basalts flowed generally west and northwest and overlie upper red member and Shnabkaib Member of the Moenkopi Formation. Thickness, 12 to 60 m 40 to 200 ft.',
    },
    {
      unit: 'Tgc',
      unitname: 'Rocks of the Grand Wash Trough, paleozoic-clast conglomerate',
      description:
        'Gray, cliff-forming, rounded to subrounded clasts of Paleozoic limestone and sandstone from 1 to 70 cm 1 to 28 in in diameter mixed with coarse gravel and conglomerate derived from Paleozoic rocks of the Colorado Plateau. Consolidated by calcium and gypsum cement. Forms alluvial debris fans at the mouths of Pigeon, Pearce, and Snap Canyons and several small unnamed drainages from the Grand Wash Cliffs. Lower part of unit includes lenses of reddish and red-brown sandstone gravel and conglomerate, poorly sorted and consolidated by calcite and gypsum cement. Gradational and intertonguing vertical and horizontal contact arbitrarily marked between lithologic change at bottom of conglomeratic facies (Tgc) and top of underlying limestone and siltstone facies (Tgl), and gypsum and gypsiferous siltstone facies (Tgg). Unit gently folded and highly fractured near base of Grand Wash Cliffs. Unit thins rapidly west from Grand Wash Cliffs, thickest near mouths of Snap, Pigeon, and Pearce Canyon drainages.',
    },
    {
      unit: 'Tgg',
      unitname:
        'Rocks of the Grand Wash Trough, gypsum and gypsiferous siltstone facies',
      description:
        'Gray and gray-white gypsum, greenish-gray, light-red, and reddish-gray gypsiferous siltstone and mudstone. Upper 15 to 20 m 50 to 65 ft consists mostly of multicolored, banded, thin-bedded mudstone and gypsiferous siltstone interbedded with thin-bedded (0.5 to 1 m [1 to 3 ft]), dark-gray limestone beds. Includes beds of pinkish-white to light-gray, cliff-forming tuffaceous limestone and white tuff beds, 0.5 to 1 m (1 to 3 ft) thick in upper part. Forms Gyp Hills badlands area east of Wheeler Fault. Upper siltstone and mudstone beds grade downward into gray silty gypsiferous siltstone and massive gray gypsum. Unit gently folded except along trace of Wheeler Fault where beds dip west as much as 65°. Base of unit not exposed. Intertongues with Proterozoic-clast conglomerate facies (Tgx). Thickness, 120 m (400 ft) or more.',
    },
    {
      unit: 'Tgi',
      unitname: 'Grassy Mountain Basalt, intrusive dikes',
      description:
        'Dark-gray, finely crystalline, alkali-olivine basalt. Source areas for associated basalt flows and pyroclastic deposits on Grassy Mountain. Dikes are aligned with nearly vertical east-west bedrock joints and fractures of this area. Widths, 0.5 to 2 m 1 to 6 ft.',
    },
    {
      unit: 'Tgl',
      unitname: 'Rocks of the Grand Wash Trough, limestone and siltstone facies',
      description:
        'Gray, silty, crystalline limestone, light-red, gray, and greenish-gray gypsiferous siltstone, gray to reddish-gray calcareous sandstone, and gray to white gypsum. Limestone beds are vuggy, irregularly bedded, 1 to 10 m 3 to 30 ft thick. Contain abundant plant and algae fossils indicative of freshwater inland basin deposits. Include interbedded gray, greenish-gray, and reddish-gray gypsiferous mudstone and siltstone that grade into underlying gypsum and gypsiferous siltstone facies (Tgg). Siltstone and sandstone beds thin or thicken laterally at expense of equivalent limestone beds. Sandstone beds are conglomeratic in places with small, rounded clasts of chert, quartzite, and carbonate fragments. Gradational and arbitrary vertical and horizontal contact with underlying gypsum and gypsiferous siltstone facies (Tgg). Intertongues laterally into Proterozoic-clast conglomerate facies (Tgx) in lower part of unit and unconformably overlies Proterozoic-clast conglomerate facies (Tgx) in upper part of unit east of Wheeler Fault. Limestone beds are moderately folded as much as 13° in upper part of basin near Grand Wash. Includes one white and one light-brown (0.5 to 1 m [1 to 3 ft]) thick tuff bed between limestone beds. Limestone beds are likely the equivalent of the Hualapai Limestone of Lucchitta (1979) south of Lake Mead. Thickens south to as much as 305 m (1,000 ft) at Lake Mead. Thickness in map area, 60 to 70 m (200 to 230 ft).',
    },
    {
      unit: 'Tgp',
      unitname: 'Grassy Mountain Basalt, basalt flows',
      description:
        'Red to reddish-black, angular, scoriaceous cinder fragments and ash deposits; unconsolidated. Spatially associated with intrusive dikes; interbedded with local basalt flows Tgb. Thickness, 1 to 6 m (3 to 20 ft).',
    },
    {
      unit: 'Tgr',
      unitname:
        'Rocks of the Grand Wash Trough, red siltstone, sandstone, and conglomerate facies',
      description:
        'Dark-red to orange-red, slope-forming, medium- to fine-grained, gypsiferous siltstone and sandstone overlain by cliff-forming, gray to light-orange-brown, coarse- to fine-grained, poorly sorted, consolidated silt, sand, gravel, and conglomerate. Clasts in upper conglomerate consist of about 90 percent limestone and dolomite, 5 percent sandstone, and 5 percent chert in gray gypsiferous siltstone and sandstone gravel matrix. Base of unit not exposed but assumed to unconformably overlie rocks of the Grand Wash Trough Tgl, Tgg, and Tgx and Mesozoic and Paleozoic rocks along basin margins. Conglomerate beds contain small subrounded to angular clasts of Proterozoic crystalline rocks along Pakoon Wash, northwest edge of map area. About 130 m (425 ft) of unit exposed along Grand Wash and Pakoon Wash drainages, increasing to about 450 to 470 m (1,475 to 1,550 ft) or more north of map area (Lucchitta and others, 1995a, b; Billingsley and Workman, 2000).',
    },
    {
      unit: 'Tgs',
      unitname: 'Gravel and sedimentary deposits',
      description:
        'Gray, brown, and white clay, sand, silt, and gravel, poorly sorted; consolidated. Unit consists mostly of fine-grained gray silty sand that includes scattered pebbles and cobbles of well-rounded gray sandstone and limestone derived from Jurassic and Cretaceous rocks east and northeast of the map area. Forms extensive thin veneer on Moenkopi Plateau that overlies beveled Jurassic and Cretaceous rocks of the Navajo Sandstone Jn, Entrada Sandstone (Je), Dakota Sandstone (Kd), and Mancos Shale (Km), in southeast quarter of map. Forms consolidated caprock deposit on Middle Mesa that overlies beveled Jurassic rocks of the Carmel Formation (Jc) and Navajo Sandstone (Jn), east edge of map. Forms partly consolidated mixed sandstone, siltstone, mudstone, and minor pebble sediments on Crooked Ridge in northeast corner of map. Unit at all three localities forms the highest surficial fluvial deposits, have a similar lithology, and are at approximate similar elevations that may be Pliocene (?) age based on relevant elevations above younger fluvial deposits of Moenkopi Wash. Age may be Miocene(?) as suggested by Lucchitta (2011). Thickness, 6 to 100 ft (2 to 30 m).',
    },
    {
      unit: 'Tgx',
      unitname: 'Proterozoic-clast conglomerate facies',
      description:
        'Dark-gray to reddish-brown, cliff- to resistant slope-forming conglomerate. Includes interbedded lenses of gravel and sandstone, poorly sorted and moderately well bedded; consolidated. Clasts are composed of reddish-brown, brown, red, grayish-green, and light-green, well-rounded rhyolite, black biotite schist, gneiss, gabbro, diorite, red pegmatite, granite, white quartz, gray limestone and dolomite, and red sandstone derived from the Jumbo Peak about 19 km 12 mi west of map area. Include large boulders as much as 1.5 m (5 ft) in diameter that were probably carried in by large debris flows. Base of unit not exposed. About 675 m (2,275.',
    },
    {
      unit: 'Thma',
      unitname: 'Andesite flows of Howard Mesa',
      description:
        'Dark-gray to gray-black andesite; includes two lobes extending into map area from the south. Contains scattered phenocrysts of plagioclase and quartz 1/8 inch in diameter. Plagioclase is intensely corroded; quartz is less abundant, is corroded and has pyroxene reaction rims. Groundmass is hyalocrystalline consisting of glass, plagioclase microlites, hornblende prisms altered to opaque oxide, and other opaque grains. K/Ar age, 2.06±0.18 Ma, polarity reversed Wolfe and others, 1987. Thickness, 200 ft (60 m) or more.',
    },
    {
      unit: 'Ths',
      unitname: 'Horse Spring Formation, Rainbow Gardens Member',
      description:
        'Includes basal conglomerate and middle limestone and sandstone unit. Consists of complex intertonguing sequence of clastic and carbonate lithofacies. Upper unit of the Rainbow Gardens Member is not exposed within map area but is assumed to be present in subsurface where it is covered by younger rocks of the Grand Wash Trough. The Thumb Member of the Horse Spring Formation may be present in subsurface. Age of Rainbow Gardens Member of the Horse Spring Formation is bracketed between 26 Ma and 18.8 Ma Beard, 1996. Only one outcrop is exposed in map area just east of Tassi Spring on upthrown side of Wheeler Fault (southwest corner of map area). Unconformable contact with underlying Kaibab Formation and both units dip 24° to 34° east-southeast. Unconformably overlain by Proterozoic-clast conglomerate facies (Tgx) of rocks of the Grand Wash Trough. Incomplete section, 132 m (435 ft) exposed.',
    },
    {
      unit: 'Ti',
      unitname: 'Volcanic rocks of the Hualapai Plateau, intrusive dikes',
      description:
        'Dark-gray basalt composed of plagioclase, clinopyroxene, olivine, and opaque oxides. Dikes occur in Moenkopi Wash southwest of Tuba City, in Hamblin Wash south of The Gap, at Tuba Butte northwest of Tuba City, and at Wildcat Peak northeast of Tuba City. Dikes are extensively weathered and are 2 to 6 ft 0.05 to 2 m wide and 15 to 33 ft (5 to 10 m) in height.',
    },
    {
      unit: 'Tmb',
      unitname: 'Basalt of Mount Trumbull, basalt flows',
      description:
        'Gray-black, finely crystalline, alkali-olivine basalt. Groundmass contains olivine phenocrysts and plagioclase laths. Consist of one or more thin basalt flows that form caprock overlying concealed purple and white mudstone and sandstone beds of the Petrified Forest Member of the Chinle Formation  on west side of mountain exposed in landslide float material that overlie upper red member and possible Shnabkaib Member of the Moenkopi Formation on east side of mountain (exposed as landslide blocks). Partly covered by Quaternary pyroclastic (Qp) deposits. Thickness, 30 to 60 m (100 to 200 ft).',
    },
    {
      unit: 'Tmi',
      unitname: 'Basalt of Mount Trumbull, intrusive rocks',
      description:
        'Gray-black, finely crystalline, alkali-olivine basalt. Forms highest point on north side of Mount Trumbull elev. 2,447 m [8,029 ft]. Source for Tertiary basalt flows on Mount Trumbull. Width, 120 m (400 ft) or more.',
    },
    {
      unit: 'Tmlb',
      unitname: 'Basalt of Mount Logan, basalt flows',
      description:
        'Light-gray, finely crystalline, alkali-olivine basalt; contains red and green olivine phenocrysts 1 mm in diameter in glassy groundmass; includes plagioclase laths in glassy groundmass. Plagioclase masses form white spotted blotches in some areas. Basalt flows overlie Petrified Forest Member of the Chinle Formation east side of Hells Hole (sec. 12, T. 34 N., R. 9 W.). Eastern extent of basalt may overlie upper red member and Shnabkaib Member of the Moenkopi Formation. Basalt dikes (Qti) may be source for basalt of Mount Logan below the summit of Mount Logan in Hells Hole. Basalt flowed east about 5.3 km (3 mi) from near the summit of Mount Logan, descending about 335 m (1,100 ft). Average thickness, about 67 m (220 ft).',
    },
    {
      unit: 'Tocb',
      unitname: 'Basalt flow of Cedar Ranch Mesa',
      description:
        'Dark-gray, massive, olivine-phyric basalt; weathers brown and has a smooth surface. Contains abundant 1- to 3-mm subhedral to euhedral olivine phenocrysts rimmed with iddingsite in a distinctive holcrystalline groundmass of intergranular to subophitic clinopyroxene and plagioclase. K-Ar age, 5.62±0.19 Ma Ulrich and Bailey, 1987. Unit overlies Petrified Forest Member of the Chinle Formation and is susceptible to landslide mass wasting along northern edges of flow near Cedar Ranch. Partly buried by younger basalt flow (Qb). About 20 to 32 m (65 to 110 ft) thick.',
    },
    {
      unit: 'Tp',
      unitname: 'Pyroclastic deposits',
      description:
        'Dark-gray to red cinder and spatter fragments; weathers yellowish brown, brown, or reddish brown. Composed of clinopyroxene and olivine phenocrysts, plagioclase, opaque oxides, and glass; partly decomposed and weathers light red. Mass wasting has diminished slope angles of pyroclastic cones; flanks are gullied to extensively eroded. Cones are elongated and aligned along a northwest trend north in Dog Knobs area indicating the influence of bedrock faults, fractures, and joints on vent positions and orientation. About 1.5 to 12 m 5 to 40 ft thick.',
    },
    {
      unit: 'Tp6i',
      unitname: 'Dikes of Parashant Canyon and Hundred and Ninetysix Mile Creek',
      description:
        'Dark-gray, fine-grained to coarsely crystalline, olivine-augite basalt. Dikes commonly form recessive cracks in limestone rocks of canyon walls that appear as open eroded joints. Commonly eroded and chemically altered or decomposed, especially near Colorado River Mile 197 and in Hundred and Ninetysix Mile Creek. Several dikes parallel or occupy faults, but most parallel or occupy northwest-southeast-trending joints and fractures in bedrock for 25 km 15 mi distance. No associated basalt flows are present. Dikes intrude Cambrian through Permian rocks from Colorado River Mile 197 to north rim of Parashant Canyon on the Shivwits Plateau and southeast of Colorado River into upper reaches of Hundred and Ninetysix Mile Creek. K-Ar age, 6.34±0.1 Ma from dike on Sanup Plateau, north side of Parashant Canyon (Wenrich and others, 1995). Other dikes near Colorado River are too chemically altered or decomposed for K-Ar age dating techniques. Dikes at Colorado River Mile 197 extend upward over 1,050 m (3,450 ft) into Esplanade Sandstone and Pakoon Limestone (Pep) where inner gorge is 3 km (2 mi) wide. Dike widths, 0.3 to 3 m (1 to 10 ft).',
    },
    {
      unit: 'Tpb',
      unitname: 'Poverty Mountain Basalt, basalt flows',
      description:
        'Medium-gray to light-gray, finely crystalline, alkali-olivine basalt. Include augite and olivine phenocrysts less than 1 mm in diameter in glassy groundmass. Basalt overlies gently east-northeast-dipping 2° average upper red member and Shnabkaib Member of the Moenkopi Formation and the Harrisburg Member of the Kaibab Formation. Basalt flowed in radial pattern from three vent areas over upper strata of the Moenkopi Formation. Basalt flows coalesced and flowed west and down across east-dipping Triassic strata into upper reaches of Hidden Canyon paleodrainage. Thickness, 30 to 92 m (100 to 300 ft).',
    },
    {
      unit: 'Tpi',
      unitname: 'Poverty Mountain Basalt, intrusive neck',
      description:
        'Medium-gray, finely crystalline, alkali-olivine basalt. Forms small dike associated with basalt flows and pyroclastic deposits near eastern part of mountain. Dike and nearby small pyroclastic vents are aligned northwest-southeast and are main sources for basalt flows Tpb on Poverty Mountain.',
    },
    {
      unit: 'Tpkb',
      unitname: 'Basalt of Poverty Knoll, basalt flow',
      description:
        'Light-gray, finely crystalline, alkali-olivine basalt containing plagioclase laths and olivine phenocrysts 1 mm in diameter in glassy groundmass; contains about 35 percent olivine phenocrysts. Flow emerged from central dike and flowed in radial pattern over Shnabkaib Member of the Moenkopi Formation. Thickness averages about 37 m 120 ft.',
    },
    {
      unit: 'Tpki',
      unitname: 'Basalt of Poverty Knoll, intrusive dike',
      description:
        'Light-gray, finely crystalline, alkali-olivine basalt. Forms small knoll, center-top of Poverty Knoll. ',
    },
    {
      unit: 'Tpp',
      unitname: 'Poverty Mountain Basalt, pyroclastic deposits',
      description:
        'Reddish-black and red fragments of scoria, cinders, and small ribbons overlie basalt flows at and near vent areas. Interbedded with basalt flows near dike Tpi and pyroclastic cone areas. Largest cone is about 25 m (80 ft) thick.',
    },
    {
      unit: 'Tr',
      unitname:
        'Volcanic rocks of the Mount Floyd Volcanic Field, rhyolite, rhyodacite, and obsidian flows',
      description:
        'Light gray, dark red, and grayish-black. Obsidian flows are mostly black obsidian but often contain black and gray-banded obsidian or red to red and black obsidian east of Red Lake and southwest of Black Tank Camp sec. 18, T. 26 N., R. 4 W.. 40Ar/39Ar age, 6.38±0.04 Ma (Peters, 2002). Flows overlie one or more olivine basalt flows (Tba). Thickness, 30 to 200 ft (9.2 to 60 m).',
    },
    {
      unit: 'Trb',
      unitname:
        'Volcanic  rocks of the San Francisco Volcanic Field, basalt flow of Red Butte',
      description:
        'Basalt flow of Red Butte Miocene—Dark-gray olivine basalt. Weathers brown; massive flow. K/Ar age, 8.92±0.23 Ma (Wolfe and others, 1987), 9.73±0.91 Ma and 8.78±0.22 Ma (Reynolds and others, 1986). Forms basalt caprock over thin soil deposit 3 to 5 ft (1 to 1.5 m) thick that was baked to a bright red; also partly overlies Shinarump Member of the Chinle Formation where soil is not present. Source of basalt is not present in the immediate vicinity of Red Butte and is assumed to be a dike under the basalt flow or is covered by surrounding landslide (Ql) deposits. Thickness, 165 ft (50 m).',
    },
    {
      unit: 'Tri',
      unitname:
        'Volcanic rocks of the Mount Floyd Volcanic Field, rhyolite, rhyodacite, obsidian dikes, necks, vents',
      description:
        'Red, gray, and black rhyolite and rhyodacite. Rhyolite exhibits convoluted and twisted thin platy flow patterns; weathered outcrops resemble roof shingles. Map contacts are approximate because erosion has not fully exposed extent of these intrusive features. Vent area is source for extensive rhyolite, rhyodacite, and obsidian flows that overlie older basalt flows east of Red Lake. Include dikes and flows of black, gray, and red obsidian within vent areas. ',
    },
    {
      unit: 'Trm',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Ts',
      unitname: 'Sedimentary rocks',
      description:
        'Light-red, gray, and white interbedded siltstone, sandstone, arkosic gravel, lenticular conglomerate, and gray, thin-bedded [1 to 3 ft 0.5 to 1 m] freshwater limestone. Limestone beds contain long vertical tubular structures generally ½ inch (0.12 cm) in diameter and 2 ft (1.3 m) in length and early Eocene to late Paleocene snail fossils (Young and Hartman, 1984; Young, 2001). Thickest limestone beds are near Black Tank Camp (sec. 3, T. 26 N., R 4 W.) and at Duff Brown Tank (sec. 28, T. 26 N., R. 3 W.). Conglomerate beds are thickest at the base of sedimentary rocks and are partly consolidated thin units within the sedimentary sequence. Conglomerate clasts consist primarily of quartzite, chert, and minor granite or metamorphic crystalline rocks derived from sources south of map area as far away as Prescott and Kingman, Arizona. Clasts are well rounded and weather out of the general slope deposit and form extensive lag gravel deposits within several miles of outcrop. Several outlying hills are covered by lag gravel conglomerate derived from the erosion of Tertiary sedimentary rocks north of the Mount Floyd Volcanic Field. Extensive conglomerate and sandstone deposits form rounded hills or ridges in the Rose Well Camp vicinity. Rocks of the Mount Floyd Volcanic Field form a protective caprock over these Tertiary sedimentary rocks throughout the southwest quarter of the map area. Thickness, 60 to 180 ft (18 to 55 m).',
    },
    {
      unit: 'Ts1',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Ts2',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Tsb',
      unitname: 'Shivwits Basalt, basalt flows',
      description:
        'Gray-black, finely crystalline, alkali-olivine basalt. Groundmass contains olivine phenocrysts and plagioclase laths. Consist of one or more thin basalt flows overlying red and white mudstone, siltstone, sandstone, and gypsifereous siltstone beds of the Moenkopi Formation and gray siltstone and limestone of the Kaibab Formation. Form composite volcano of Blue Mountain and Price Point, Shivwits Plateau. Thickness, 2.5 to 122 m 8 to 400 ft.',
    },
    {
      unit: 'Tsgb',
      unitname: 'Snap Point Basalt and Garrett Dikes, basalt flows',
      description:
        'Dark-gray alkali-olivine basalt. Basalt originates from dike source near highest part of Snap Point. Consists of two separate basalt flows, one flowed east about 2.4 km 1.5 mi down drainage eroded into Fossil Mountain Member of the Kaibab Formation (Pk) on the Shivwits Plateau and another flowed west down steep erosional escarpment of upper Grand Wash Cliffs into Snap Canyon drainage and into Grand Wash Trough below lower Grand Wash Cliffs. Snap Canyon was filled to a depth of several hundred meters by alluvial deposits (Tgc) at time of Snap Point flow. Alluvial deposit forms large alluvial debris fan at the mouth of Snap Canyon (Billingsley and others, unpub. data). Snap Point Basalt flowed into Grand Wash Trough and was subsequently buried by younger alluvial fan deposits. Modern erosion has removed most of the alluvial deposits (Tgc) from around the Snap Point Basalt to form an inverted topographic feature called Nevershine Mesa. Thickness, 3 to 10 m (10 to 30 ft).',
    },
    {
      unit: 'Tsgi',
      unitname: 'Snap Point Basalt and Garrett Dikes, intrusive dikes',
      description:
        'Dark-gray, greenish, finely crystalline, alkali-olivine basalt. Contain phenocrysts of augite and olivine less than 1 mm in diameter. Form near-vertical dikes orientated in north-south alignment parallel to local joints and fractures in Paleozoic bedrock units. Include dikes in Pigeon Canyon north of Snap Point that lie on similar north-south trend of Garrett dikes south of Fort Garrett Point. Intrude all Paleozoic rocks in walls of Grand Canyon on both sides of Colorado River Mile 264 and in tributaries of Tincanebitts and Dry Canyons. Exposed dikes in canyon walls reveal that Grand Canyon was not as deep or wide 9 m.y. ago as it is today. Dike widths, 0.5 m 1 to 2 ft.',
    },
    {
      unit: 'Tsi',
      unitname: 'Shivwits Basalt, intrusive rocks',
      description:
        'Gray-black, finely crystalline, alkali-olivine basalt. Approximate map contact. Source for extensive basalt flows and pyroclastic deposits on the southern Shivwits Plateau west of Grand Canyon average elev. 1,829 m [6,000 ft]. Dikes align about N. 30° W., similar to the 202-Mile dikes north of the map area. Average widths of dikes, about 2 m (6 ft).',
    },
    {
      unit: 'Tsp',
      unitname: 'Basalt of the Shivwits Plateau, pyroclastic deposits',
      description:
        'Reddish-black scoria and cinder fragments, partly consolidated. Form small pyroclastic cones, heavily eroded and partly covered by basalt flows. Often interbedded with basalt flows near vent areas. Thickness, 12 m 40 ft.',
    },
    {
      unit: 'Tv',
      unitname:
        'Volcanic rocks of the Hualapai Plateau, andesite flows and basalt flows, undivided',
      description:
        'Volcanic deposits on the Hualapai Plateau are alkali-olivine basalt and andesitic basalt flows, agglomerate, volcanogenic fluvial sediments, and rhyolite ash flows derived from local and distant sources. Deposits include the Separation Hill basalt near the upper reach of south Separation Canyon on the Hualapai Plateau, K/Ar age, 19.0±0.44 Ma Wenrich and others, 1995; the Peach Springs basalt at the town of Peach Springs, Arizona, K/Ar age 19.9±0.4 Ma (Wenrich and others, 1995); the Peach Springs Tuff, a gray welded rhyolitic ash-flow tuff that occupies Tertiary paleovalleys in Milkweed and Peach Springs Canyons; K/Ar age 18.5±0.2 Ma (Neilson and others, 1990) average thickness, about 9 m (30 ft); the Iron Mountain basalt, northwest corner of map,K/Ar age 17.4±0.9 Ma (Wenrich and others, 1995); and the Grapevine Canyon volcanics at Grapevine Canyon, northwest corner of map, K/Ar age 15.3±0.3 Ma (Wenrich and others, 1995). Variable thickness, 1 to 73 m (3 to 240 ft).',
    },
    {
      unit: 'Tvi',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'Twb',
      unitname: 'Whitmore Dike Swarm, basalt flow',
      description:
        'Dark-gray to black alkali-olivine basalt. Includes small olivine phenocrysts and plagioclase laths in glassy groundmass. Basalt emerged from dike Twi in lower part of Hermit Formation (Ph) and flowed down steep debris slope descending about 60 m (200 ft) onto upper part of Esplanade Sandstone and Pakoon Limestone (Pep). Basalt preserves soft strata of the Hermit Formation as a basalt-capped hill informally called “Whitmore Hill” (sec. 26, T. 32 N., R. 9 W.; elev. 1,161 m [3,808 ft]). Basalt flow implies that erosion exposed at least the Esplanade Sandstone at this location by 4.5 Ma. Thickness, 18 m (60 ft).',
    },
    {
      unit: 'Twi',
      unitname: 'Whitmore Dike Swarm, intrusive dikes',
      description:
        'Dark-gray to black alkali-olivine basalt. K-Ar age, 4.56±0.12 Ma Wenrich and others, 1995. Form nearly vertical dikes eroded down to bedrock surface of Esplanade Sandstone and Pakoon Limestone (Pep) about 2 km (1.3 mi) southwest of Whitmore Canyon and 3 km (1.5 mi) west of Colorado River Mile 188. Dikes parallel joints and nearly vertical fractures in bedrock for about 3.3 km (2 mi) along north-south trend. Dikes exposed in the Esplanade Sandstone and Pakoon Limestone (Pep) and lower part of the Hermit Formation (Ph) 1.6 km (1 mi) west of Colorado River Mile 188 only produced one basalt flow (Twb). Dike widths, 0.5 to 1.2 m (2 to 3.5 ft).',
    },
    {
      unit: 'Tyb',
      unitname:
        'Volcanic  rocks of the San Francisco Volcanic Field, young basalt flows',
      description:
        'Medium- to dark-gray basalt; includes plagioclase-phyric, aphyric, and slightly porphyritic basalt. Smooth surfaced, partly dissected. Composed of plagioclase, clinopyroxene, olivine, and opaque oxides. Thickness less than 90 ft 28 m.',
    },
    {
      unit: 'Tyi',
      unitname:
        'Volcanic  rocks of the San Francisco Volcanic Field, young intrusive rocks',
      description:
        'Dark-gray basalt and mixed pyroclastic dikes and necks. Composed of plagioclase, clinopyroxene, olivine, and opaque oxides. Intrusives from 4 to 20 ft 1.2 to 6 m wide.',
    },
    {
      unit: 'Typ',
      unitname:
        'Volcanic  rocks of the San Francisco Volcanic Field, young pyroclastic deposits',
      description:
        'Dark-gray to red cinder and spatter fragments; weather yellowish-brown, brown, or reddish-brown. Composed of clinopyroxene and olivine phenocrysts, plagioclase, opaque oxides, and glass. Mass wasting has diminished slope angles of pyroclastic cones; flanks are gullied to extensively eroded. Cones are elongated and aligned along a northwest trend in the Four Hills area indicating the influence of bedrock fractures and bedrock joints on vent position and orientation. Thickness, 30 to 200 ft 9.2 to 60 m.',
    },
    {
      unit: 'Xbr',
      unitname: 'Brahma Schist',
      description:
        'Consists of amphibolite, hornblende-biotite-plagioclase schist, biotiteplagioclase schist, orthoamphibole-bearing schist and gneiss, and metamorphosed sulfide deposits. Mafic to intermediate-composition metavolcanic rocks. About 1.75 Ga. Locally interlayered with Rama Schist Xr and Vishnu Schist (Xv) .',
    },
    {
      unit: 'Xc',
      unitname: 'Carbonate and chert',
      description:
        'A few meters thick interval of carbonate rock and chert nodules within an orthoamphibole schist, one location only, below Colorado River Mile 237. ',
    },
    {
      unit: 'Xdg',
      unitname: 'Diorite, gabbro, and anorthosite',
      description: 'About 1.74 to 1.72 Ga. ',
    },
    {
      unit: 'Xec',
      unitname: 'Elves Chasm pluton',
      description:
        'Oldest plutonic rocks, possible “basement” substrate. Contains mafic hornblende-biotite tonalite and intermediate-composition plutonic units (quartz diorite), including tabular amphibolite bodies that may be dikes. About 1.84 Ga .',
    },
    {
      unit: 'Xg',
      unitname: 'Granite',
      description:
        'Unfolded to weakly foliated, medium- to fine-grained muscovite-biotite, granitic pegmatite and aplite dikes, sills, and small plutons. U-Pb zircon ages range from 1,685 to 1,680±1 Ma Hawkins and others, 1996.',
    },
    {
      unit: 'Xgd',
      unitname: 'Granodiorite-gabbro-diorite and granodiorite complexes',
      description:
        'Weakly to well-foliated, medium- to coarse-grained quartz-plagioclase and diorite-hornblende-bearing granitoids of probable volcanic arc origin 1.74 to 1.71 Ga.',
    },
    {
      unit: 'Xgr',
      unitname: 'Granite, granitic pegmatite and aplite',
      description:
        'Granite plutons and stocks and pegmatite and aplite dikes emplaced synchronously with peak metamorphism. One small outcrop in map area is at Colorado River Mile 190 just south of Whitmore Canyon junction with Colorado River. About 1.7–1.66 Ma Ilg and others, 1996; Hawkins and others, 1996.',
    },
    {
      unit: 'Xm',
      unitname: 'Mafic metavolcanic rocks',
      description:
        'Biotite hornblende schist and amphibolite. Contains abundant biotite and garnet. Equivalent to Brahma Schist of eastern Grand Canyon. ',
    },
    {
      unit: 'Xo',
      unitname: 'Orthoamphibole schist',
      description:
        'Regolith. An interval several meters thick of weathered detritus eroded from older plutonic rocks. Metamorphic monazite from pelitic schist containing garnet, kyanite, gedrite, sillimanite, and cordierite. Very small outcrops along Colorado River within Granite Gorge . ',
    },
    {
      unit: 'Xr',
      unitname: 'Rama Schist and Gneiss',
      description:
        'Massive, fine-grained quartzofeldspathic schist and gneiss of probable felsic metavolcanic rocks. About 1.75 Ga. Locally interlayered with Brahma Schist Xbr and Vishnu Schist (Xv) .',
    },
    {
      unit: 'Xs',
      unitname: 'Schist',
      description: 'Quartz-mica, schist, and pelitic schist. ',
    },
    {
      unit: 'Xu',
      unitname: 'Crystalline rocks, undivided',
      description:
        'Undivided intrusive and metamorphic rocks. Includes granite plutons, stocks, and pegmatite and aplite dikes, gabbro-diorite, and granodiorite rocks, garnet schist, hornblende-biotite schist, orthoamphibole-bearing schist and gneiss, and probable felsic metavolcanic rocks. Unit is not mapped in detail and needs future study. Probably same age range as similar rocks along Colorado River. ',
    },
    {
      unit: 'Xum',
      unitname: 'Ultramafic rocks',
      description: 'Probable cumulate origin as supracrustal rocks. ',
    },
    {
      unit: 'Xv',
      unitname: 'Vishnu Schist',
      description:
        'Quartz-mica schist, pelitic schist, and meta-arenites of probable volcanic arc basin origin. Locally contains graded bedding and turbidite layering. Strongly foliated with multiple generations of folds and foliations Ilg and others, 1996.',
    },
    {
      unit: 'YZn',
      unitname: 'Nankoweap Formation, undivided',
      description:
        'Unconformity-bounded Nankoweap Formation separates rocks of the Neoproterozoic Chuar Group and Late Mesoproterozoic Unkar Group. Includes an upper and lower member, undivided Gebel, 1978. Upper member is composed of siltstone and thick-bedded, fine-grained, red sandstone at base and more massive 3-ft-thick (1-m-thick) sandstone bed toward top of section, capped by white, fine-grained quartz sandstone. Unit contains trough crossbeds, ripple marks, mud cracks, soft-sediment deformation, and rare salt casts. Lower member is dominated by hematite-cemented quartzite sandstone and siltstone with lenses of lithic sandstone derived from underlying Cardenas Basalt. Thickness, 330 ft (100 m).',
    },
    {
      unit: 'Yb',
      unitname: 'Bass Formation',
      description:
        'Red-brown and reddish-gray, ledge-forming dolomite, silty sandstone, and conglomerate. Includes basal Hotauta Conglomerate Member as defined by Dalton 1972. Consists of fine- to coarse-grained, thin- to mediumbedded dolomite, fine- to coarse-grained, thin-bedded sandstone, silty sandstone, conglomerate, and breccia. Dolomite is most common lithology in Shinumo Creek area (central part of map area), becoming mostly sandstone, siltstone, and conglomerate in Bright Angel Canyon and eastern part of map area. Dolomite beds contain biscuit-shaped biohermal stromatolite fossils and red chert; sandstone beds contain ripple marks, desiccation cracks, and intraformational breccia and conglomerate. The Hotauta is considered part of the Bass in most map areas because of its lensing characteristics. The Bass, including the Hotauta, gradually thickens from southeast to northwest across map area from about 260 to 300 ft (80 to 91 m) .',
    },
    {
      unit: 'Yc',
      unitname: 'Cardenas Basalt',
      description:
        'Includes informal members, in descending order: the lapillite, fan-jointed, and bottle-green members Lucchitta and Hendricks, 1983. Lapillite member is composed of scoriaceous fragments of volcanic bombs and ash matrix interbedded in massive basalt flows a few meters to several tens of meters thick (Lucchitta and Hendricks, 1983). Includes diabase intrusions that intrude both the Unkar Group and crystalline basement rocks as dikes and sills from a few tens of meters to 981 ft (300 m); dikes are thinner and locally utilize fault planes; similar in texture, mineralogy, and chemistry to Cardenas Basalt, suggesting a shared and common source. Thickness, 163 to 294 ft (50 to 90 m). Fan-jointed member is composed of porphyritic and vesicular basaltic andesite, approximately 163 ft (50 m) thick (Hendricks and Lucchitta, 1974). The bottle-green member consists of thin, discontinuous sequences of interbedded basalt flows and sandstone beds, highly altered, and contains secondary chlorite, epidote, talc, and zeolites; approximately 294 ft (90 m) thick.',
    },
    {
      unit: 'Yd',
      unitname: 'Dox Formation',
      description:
        'Includes, in descending order, Ochoa Point, Comanche Point, Solomon Temple, and Escalante Creek Members as defined by Stevenson and Beus 1982. Of these, only part of the Escalante Creek is exposed in map area. Upper two-thirds or more of the Dox is removed by erosion and subsequently covered by Paleozoic rocks. The Escalante Creek is exposed in upper Bright Angel Creek and Shinumo Creek, eastern quarter of map area Escalante Creek Member—Gray, light-brown to dark-brown, cliff-forming, fine- to medium-grained sandstone and interbedded dark-brown to green, slopeforming shale and mudstone. Includes gray contorted sandstone beds in lower part similar to those in underlying Shinumo Quartzite and small-scale, tabularplanar cross-bedded and graded-bedding sets. Conformable contact with the underlying Shinumo marked at lowest shaley slope of the Dox. Incomplete exposure due to erosion of upper part. Exposed thickness about 200 ft (60 m) .',
    },
    {
      unit: 'Ydc',
      unitname: 'Dox Formation, Comanche Point Member',
      description:
        'Light-red, pale-green to white, slope-forming, mudstone and siltstone and minor thin-bedded sandstone. Includes mud cracks, ripple marks, salt casts, wavy to irregular bedding, and stromatolitic dolomite beds within or adjacent to white siltstone beds. Thickness, 508 ft 155 m.',
    },
    {
      unit: 'Yde',
      unitname: 'Dox Formation, Escalante Creek Member',
      description:
        'Light-brown to greenish-brown sandstone, calcareous sandstone, and arkosic sandstone. Includes an upper dark-brown to green shale and mudstone. Thickness, 1,278 ft 390 m.',
    },
    {
      unit: 'Ydo',
      unitname: 'Dox Formation, Ochoa Point Member',
      description:
        'Red slope- and cliff-forming micaceous mudstone that grades upward into red quartz sandstone and silty sandstone. Includes salt-crystal casts in mudstone and asymmetrical ripple marks and small-scale crossbeds in sandstone. Thickness, 250 to 300 ft 976 to 91 m.',
    },
    {
      unit: 'Yds',
      unitname: 'Dox Formation, Solomon Temple Member',
      description:
        'Cyclical sequence of red mudstone, siltstone, and quartz sandstone. Includes thin beds of argillaceous dolomite or calcareous siltstone. Mud cracks and ripple marks are common. Thickness, 920 ft 280 m.',
    },
    {
      unit: 'Yg',
      unitname: 'Young granite and pegmatite',
      description:
        'Granite plutons, stocks, dikes, and pegmatite. About 1.4 Ga billion years old.',
    },
    {
      unit: 'Yh',
      unitname: 'Hakatai Shale, undivided',
      description:
        'Orange-red, purple, and red mudstone, shale, and sandstone. Forms an upper cliff unit, a middle slope unit, and a lower slope unit. Upper cliff unit consists of pale-purple or lavender, fine- to coarse-grained, thin- to mediumbedded, cross-bedded sandstone. Forms gradational contact with underlying middle slope unit at distinct color change from purple to bright red. Middle slope unit is the most distinctive red-bed unit in the Grand Canyon, consisting of reddish- orange, thin-bedded, fine-grained mudstone, siltstone and sandy siltstone; includes nonred, spherical reduction spots “freckles” less than 10 cm in diameter. Gradational contact with underlying lower slope unit arbitrarily placed at red to purple color change. Lower slope unit consists of purple to reddish-purple, thin-bedded to laminated, fine-grained mudstone, siltstone, and sandy siltstone. Mudcracks, ripple marks, and tabular-planar cross-bedding are common in all units. Gradational contact with underlying Bass Formation in eastern part of map area; sharp but conformable contact in central part of map area. Overall thickness varies from about 445 ft (135 m) in eastern part of map area to nearly 985 ft (300 m) in Hakatai Canyon, central part of map area .',
    },
    {
      unit: 'Yi',
      unitname: 'Unnamed diabase sills and dikes',
      description:
        'Black, medium- to coarse-grained, olivine-rich diabase. Contains plagioclase, olivine, clinopyroxene, magnetite-ilmenite, and biotite. Diabase sills and dikes intrude all rocks within Unkar Group below Cardenas Basalt. Chemical variation diagrams indicate a potential common parentage between dikes and sills and the overlying Cardenas, but direct physical connection has not been observed, although isochron ages are basically identical at 1,070±70 Ma Hendricks and Stevenson, 1990. Sills range in thickness from about 65 ft (20 m) in Clear Creek at eastern edge of map area to more than 655 ft (200 m) near Bass Rapids in central part of map area. Dike widths range from 3 to 12 ft (1 to 4 m) .',
    },
    {
      unit: 'Ys',
      unitname: 'Shinumo Sandstone, undivided',
      description:
        'Red-brown, purple, and gray, cliff-forming sandstone. Includes four undivided informal members as defined by Daneker 1975. In descending order, they are upper, upper middle, lower middle, and lower sandstone members. Upper member consists of red-brown and purple, fine- to coarse-grained, well-sorted, highly contorted, gnarly bedded sandstone capped by nondisrupted, flat-bedded, gray sandstone. Upper middle member consists of rusty-red, fine- to coarse-grained, highly contorted, gnarly bedded sandstone. Lower middle member consists of purple “freckled” (reduction spots), fine-grained, well-sorted, lowangle cross-bedded sandstone with local contorted beds in upper part. Lower member consists of purplish-red, coarse-grained, flat-bedded, arkosic conglomeratic sandstone. All members cemented with silica, making sandstone as hard as metamorphic quartzite, but unit is not metamorphosed. Angular unconformity separates cliff of red-brown Shinumo Quartzite from underlying slope of red Hakatai Shale, marked at truncated beds of the Hakatai. The Shinumo increases in thickness from 1,132 ft (345 m) at eastern edge of map area to 1,540 ft (470 m) at Shinumo Creek, central part of map area .',
    },
    {
      unit: 'Zgcc',
      unitname: 'Galeros Formation, Carbon Canyon Member',
      description:
        'Fine-grained, interbedded siliciclastic mudstone, siltstone, and sandstone. Includes several thin dolomite and sandstone marker beds, 3 to 6 ft 1 to 2 m thick. Sandstone beds contain symmetric and interference ripple marks, low-angle crossbeds, and mud-crack casts. Stromatolite fossils become more common toward top of unit. Thickness, 1,546 ft (471 m).',
    },
    {
      unit: 'Zgd',
      unitname: 'Galeros Formation, Duppa Member',
      description:
        'Fine-grained siliciclastic unit dominated by shale and interbedded thin-bedded siltstone. Includes interbedded calcareous siltstone beds about 3 ft 1 m thick. Variable thickness, 571 to 2,050 ft (174 to 625 m).',
    },
    {
      unit: 'Zgj',
      unitname: 'Galeros Formation, Jupiter Member',
      description:
        'Fine-grained, interbedded siliciclastic mudstone, siltstone, sandstone, and dolomite. Dolomite and some sandstone beds form several marker beds throughout unit. Base of unit is stromatolitic dolomite, 40 ft 912 m thick. Interbedded sandstone beds contain symmetric ripple marks, mud-crack casts, and raindrop impressions. Thickness, 868 to 1,516 ft (264 to 462 m).',
    },
    {
      unit: 'Zgt',
      unitname: 'Galeros Formation, Tanner Member',
      description:
        'Very fine grained siliciclastic siltstone, sandstone, and thin dolomite. Include dark-brown dolomite at base of unit that unconformably overlies sandstone beds of the Nankoweap Formation. Thickness, 20 to 80 ft 6 to 24 m.',
    },
    {
      unit: 'Zka',
      unitname: 'Kwagunt Formation, Awatubi Member',
      description:
        'Red, green, blue, and light-brown mudstone, siltstone, and sandstone. A basal tan to light-brown stromatolite carbonate bed contains fossil biohermal dome features. Thin-bedded sandstone and siltstone contain ripple foreset beds and mud-crack casts. Near top of member, organic shale preserves the macroalgal fossil, Chuaria circularis, first described by Ford and Breed 1973. Thickness, 823 to 1,128 ft (252 to 344 m).',
    },
    {
      unit: 'Zkcb',
      unitname: 'Kwagunt Formation, Carbon Butte Member',
      description:
        'Interbedded sandstone and siltstone. Basal sandstone is brown, medium- to fine-grained, thick sandstone, forming a distinctive marker bed approximately 252 ft 76 m thick, and includes abundant soft-sediment deformation features, interference ripple marks, and mud-crack casts (Ford and Breed, 1973). Above basal sandstone unit are thin, interbedded, multicolored, mudstone, siltstone, and sandstone. Thickness, 112 to 223 ft (34 to 68 m). Galeros Formation (Neoproterozoic)—Includes, in descending order, the Duppa, Carbon Canyon, Jupiter, and Tanner Members as mapped by Timmons and others (2007) (',
    },
    {
      unit: 'Zkw',
      unitname: 'Kwagunt Formation, Walcott Member',
      description:
        'Black to gray mudstone, gray dolomitic sandstone 12 to 31 ft [4 to 9.5 m] thick, brecciated dolomite and sandstone. A thin tephra deposit yielded a U-Pb zircon age of 742±6 Ma, providing an upper age limit for the Chuar Group (Karlstrom and others, 2000). Thickness, 838 ft (255 m).',
    },
    {
      unit: 'Zs',
      unitname: 'Sixtymile Formation, undivided',
      description:
        'Informally divided into, in descending order, the lower, middle, and upper members Elston, 1979. Lower member is composed of slumped blocks of dolomite surrounded by black shale exposed mainly in Sixtymile Canyon in eastern Grand Canyon. Middle member is thick sequence of white to red, laminated and thinly bedded siltstone, locally disrupted by intraformational brecciation and folding. Upper member contains intraformational breccias and red fluvial sandstones derived from the middle siltstone member. Unit unconformably overlain by Tapeats Sandstone. Thickness, 196 ft (60 m).',
    },
    {
      unit: 'lPMs',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'river',
      unitname: 'Unknown',
      description: 'No Description',
    },
    {
      unit: 'water',
      unitname: 'Unknown',
      description: 'No Description',
    },
  ];

  return units.find((u) => u.unit === abbreviation);
}