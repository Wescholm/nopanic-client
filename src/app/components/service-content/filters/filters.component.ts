import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public listElements: Object[] = [
    {
      title: 'Construction and decoration works', icon: '', data:
        [
          {subtitle: 'Fix-it man, hourly rate', value: false},
          {subtitle: 'Turn-key home renovations', value: false},
          {subtitle: 'Construction and installation works', value: false},
          {subtitle: 'Dismantling works', value: false},
          {subtitle: 'Decoration works', value: false},
          {subtitle: 'Plumbing works', value: false},
          {subtitle: 'Electrical installation works', value: false},
          {subtitle: 'Roofing and facade works', value: false},
          {subtitle: 'Large-scale construction', value: false},
          {subtitle: 'Water supply system, wastewater disposal', value: false},
          {subtitle: 'Air conditioning and ventilation system', value: false},
          {subtitle: 'Interior design, landscape design', value: false},
          {subtitle: 'Architecture and project designing', value: false},
          {subtitle: 'Other construction works', value: false},
        ]
    },
    {
      title: 'Everything for household', icon: '', data:
        [
          {subtitle: 'Furniture manufacturing', value: false},
          {subtitle: 'Furniture assembly', value: false},
          {subtitle: 'Furniture repair and restoration', value: false},
          {subtitle: 'Kitchen and bathroom furniture', value: false},
          {subtitle: 'Installation and repair of air conditioners', value: false},
          {subtitle: 'Installation and repair of water heaters', value: false},
          {subtitle: 'Installation and repair of doors, locks', value: false},
          {subtitle: 'Windows, glass fixing works, balconies', value: false},
          {subtitle: 'Manufacturing and installation of blinds, curtains', value: false},
          {subtitle: 'Earthworks, gardening, works on land adjacent to the house', value: false},
          {subtitle: 'Other for household', value: false},
        ]
    },
    {
      title: 'Household services', icon: '', data:
        [
          {subtitle: 'Nursing services', value: false},
          {subtitle: 'Babysitting services', value: false},
          {subtitle: 'Cooking', value: false},
          {subtitle: 'Repair works of bags, watches, jewelry', value: false},
          {subtitle: 'Repairing and sewing of clothes', value: false},
          {subtitle: 'Shoe repairs', value: false},
          {subtitle: 'Washing and ironing of clothing', value: false},
          {subtitle: 'Tool sharpening', value: false},
          {subtitle: 'Other household services', value: false}
        ]
    },
    {
      title: 'Cleaning', icon: '', data:
        [
          {subtitle: 'Cleaning of apartments, houses', value: false},
          {subtitle: 'Cleaning after home renovation works', value: false},
          {subtitle: 'Office cleaning services', value: false},
          {subtitle: 'Cleaning of shops, restaurant', value: false},
          {subtitle: 'Washing of windows, facades', value: false},
          {subtitle: 'Eco-cleaning', value: false},
          {subtitle: 'Cleaning of adjacent areas', value: false},
          {subtitle: 'Disinfection of premises', value: false},
          {subtitle: 'Cleaning of industrial premises', value: false},
          {subtitle: 'Other cleaning', value: false},
        ]
    },
    {
      title: 'Transportation services', icon: '', data:
        [
          {subtitle: 'Apartment or office move', value: false},
          {subtitle: 'Transportation of furniture and equipment', value: false},
          {subtitle: 'Moving men services', value: false},
          {subtitle: 'Passenger transportation', value: false},
          {subtitle: 'Intercity transportation', value: false},
          {subtitle: 'Cargo transportation', value: false},
          {subtitle: 'Transportation of food products', value: false},
          {subtitle: 'Construction waste disposal service', value: false},
          {subtitle: 'Taxi service', value: false},
          {subtitle: 'Sober driver service', value: false},
          {subtitle: 'Packing, assembly and sorting services', value: false},
          {subtitle: 'Other transportation services', value: false},
        ]
    },
    {
      title: 'Courier services', icon: '', data:
        [
          {subtitle: 'Courier delivery', value: false},
          {subtitle: 'Delivery of food products, ready-to-eat food', value: false},
          {subtitle: 'Delivery of gifts, flowers', value: false},
          {subtitle: 'Delivery of medicines', value: false},
          {subtitle: 'Courier service by car', value: false},
          {subtitle: 'Delivery of on-line shop goods', value: false},
          {subtitle: 'Delivery of documents', value: false},
          {subtitle: 'Pick up and send by mail service', value: false},
          {subtitle: 'Other courier services', value: false}
        ]
    },
    {
      title: 'Repair of appliances and tools', icon: '', data:
        [
          {subtitle: 'Repair of large household appliances', value: false},
          {subtitle: 'Repair of phones, digital devices', value: false},
          {subtitle: 'Repair of computers and laptops', value: false},
          {subtitle: 'Repair of electric vehicles', value: false},
          {subtitle: 'Repair of bicycles, scooters', value: false},
          {subtitle: 'Repair of office equipment', value: false},
          {subtitle: 'Repair of beauty and care equipment', value: false},
          {subtitle: 'Repair of electric tools', value: false},
          {subtitle: 'Repair of medical equipment', value: false},
          {subtitle: 'Repair of gardening equipment', value: false},
          {subtitle: 'Maintenance of equipment', value: false},
          {subtitle: 'Setting up equipment, TV, Internet', value: false},
          {subtitle: 'Installation and repair of security systems, video surveillance systems', value: false},
          {subtitle: 'Installation and configuration of operating systems, programs', value: false},
          {subtitle: 'Consultations and training', value: false},
          {subtitle: 'Other repair of equipment', value: false}
        ]
    },
    {
      title: 'Organization of celebratory events', icon: '', data:
        [
          {subtitle: 'Host, animator services', value: false},
          {subtitle: 'Decoration service for events', value: false},
          {subtitle: 'Staff for events', value: false},
          {subtitle: 'DJ service', value: false},
          {subtitle: 'Entertainment', value: false},
          {subtitle: 'Catering service', value: false},
          {subtitle: 'Ordering cakes and desserts', value: false},
          {subtitle: 'Turn-key celebratory event', value: false},
          {subtitle: 'Other organization of celebratory events', value: false}
        ]
    },
    {
      title: 'Beauty and health services', icon: '', data:
        [
          {subtitle: 'Massage', value: false},
          {subtitle: 'Hairdressing services', value: false},
          {subtitle: 'Nail care', value: false},
          {subtitle: 'Cosmetology', value: false},
          {subtitle: 'Eyebrows, eyelashes beauty care', value: false},
          {subtitle: 'Depilation', value: false},
          {subtitle: 'Make-up stylist services', value: false},
          {subtitle: 'Personal coach', value: false},
          {subtitle: 'Makeup', value: false},
          {subtitle: 'Psychologist', value: false},
          {subtitle: 'Dieting expert', value: false},
          {subtitle: 'Other type of self care', value: false}
        ]
    },
    {
      title: 'Photo and video services', icon: '', data:
        [
          {subtitle: 'Photographer', value: false},
          {subtitle: 'Video operator', value: false},
          {subtitle: 'Photo reworking', value: false},
          {subtitle: 'Editing and reworking of video', value: false},
          {subtitle: 'Other photo and video services', value: false}
        ]
    },
    {
      title: 'Business services', icon: '', data:
        [
          {subtitle: 'Real estate services', value: false},
          {subtitle: 'Repatriation services', value: false},
          {subtitle: 'HR services', value: false},
          {subtitle: 'Financial services', value: false},
          {subtitle: 'Accounting services', value: false},
          {subtitle: 'Consulting services', value: false},
          {subtitle: 'Security services', value: false},
          {subtitle: 'Other business services', value: false}
        ]
    },
    {
      title: 'Legal services', icon: '', data:
        [
          {subtitle: 'Legal aid consultation', value: false},
          {subtitle: 'Drafting and verification of contracts', value: false},
          {subtitle: 'Drafting and filing complaints, claims', value: false},
          {subtitle: 'Legal paperwork', value: false},
          {subtitle: 'Registration, liquidation of companies', value: false},
          {subtitle: 'Legal assistance for new repatriates', value: false},
          {subtitle: 'Other legal services', value: false}
        ]
    },
    {
      title: 'Translation agency', icon: '', data:
        [
          {subtitle: 'Written translations', value: false},
          {subtitle: 'Oral translations', value: false},
          {subtitle: 'Technical translation', value: false},
          {subtitle: 'Translation of documents', value: false},
          {subtitle: 'Editing a translation', value: false},
          {subtitle: 'Translation of audio and video material', value: false},
          {subtitle: 'Other translation', value: false}
        ]
    },
    {
      title: 'Tutors and teaching', icon: '', data:
        [
          {subtitle: 'Hebrew', value: false},
          {subtitle: 'Arabic language', value: false},
          {subtitle: 'English language', value: false},
          {subtitle: 'Russian language', value: false},
          {subtitle: 'Other foreign languages', value: false},
          {subtitle: 'Subject teachers', value: false},
          {subtitle: 'Programming and computer science', value: false},
          {subtitle: 'Pre-school training and education services for junior grades students', value: false},
          {subtitle: 'Music, dances, art', value: false},
          {subtitle: 'Assistance for students', value: false},
          {subtitle: 'Writing works', value: false},
          {subtitle: 'Sports, coaches', value: false},
          {subtitle: 'Driving instructors', value: false},
          {subtitle: 'Other tutors and teaching', value: false}
        ]
    },
    {
      title: 'Virtual assistant', icon: '', data:
        [
          {subtitle: 'Copywriting, typing ', value: false},
          {subtitle: 'Data input', value: false},
          {subtitle: 'Search and processing of information', value: false},
          {subtitle: 'Placement of ads', value: false},
          {subtitle: 'Work in Excel, Power Point, etc.', value: false},
          {subtitle: 'Advertising and promotion on the Internet', value: false},
          {subtitle: 'Calling database numbers', value: false},
          {subtitle: 'Other virtual assistant', value: false}
        ]
    },
    {
      title: 'Design services', icon: '', data:
        [
          {subtitle: 'Corporate identity style, logos, business cards', value: false},
          {subtitle: 'Design of websites and applications', value: false},
          {subtitle: 'Banner design, outdoor advertising', value: false},
          {subtitle: 'Print design', value: false},
          {subtitle: 'Illustrations, painting, graffiti', value: false},
          {subtitle: 'Internet banners, social nets design', value: false},
          {subtitle: 'Animation, 3d graphics', value: false},
          {subtitle: 'Infographics, presentations, icons', value: false},
          {subtitle: 'Other design', value: false}
        ]
    },
    {
      title: 'Development of websites and applications', icon: '', data:
        [
          {subtitle: 'Programming and software development services', value: false},
          {subtitle: 'Development of websites and Landing page', value: false},
          {subtitle: 'Website improvement and support', value: false},
          {subtitle: 'Website promotion', value: false},
          {subtitle: 'Testing (QA)', value: false},
          {subtitle: 'Development of mobile applications and games', value: false},
          {subtitle: 'Creation and development of technical specifications', value: false},
          {subtitle: 'Other IT services', value: false}
        ]
    },
    {
      title: 'Repair and maintenance of cars and motor vehicles', icon: '', data:
        [
          {subtitle: 'Car repair and maintenance', value: false},
          {subtitle: 'Diagnostic troubleshooting and repair of the engine, gearbox and chassis', value: false},
          {subtitle: 'Maintenance of air conditioning system', value: false},
          {subtitle: 'Car wash, dry cleaning', value: false},
          {subtitle: 'Repair and maintenance of motor vehicles', value: false},
          {subtitle: 'Re-upholstery and repairs of car interior', value: false},
          {subtitle: 'Repair of auto electrics', value: false},
          {subtitle: 'Auto bodyworks and painting', value: false},
          {subtitle: 'Tuning, styling, auto alarms', value: false},
          {subtitle: 'Other auto services', value: false},
        ]
    },
    {
      title: 'Pet services', icon: '', data:
        [
          {subtitle: 'Dog care', value: false},
          {subtitle: 'Cat care', value: false},
          {subtitle: 'Taking care of other pets', value: false},
          {subtitle: 'Pet walking', value: false},
          {subtitle: 'Pet grooming', value: false},
          {subtitle: 'Transportation of pets', value: false},
          {subtitle: 'Pet hotels', value: false},
          {subtitle: 'Pet training', value: false},
          {subtitle: 'Other pet services', value: false}
        ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changed(e) {
    console.log(e)
  }
}
