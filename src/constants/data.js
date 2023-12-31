import images from './images';

export const cities = [
   {value: 'Minsk', label: 'Minsk'},
   {value: 'Grogno', label: 'Grodno'},
   {value: 'Brest', label: 'Brest'},
   {value: 'Moscow', label: 'Moscow'},
   {value: 'Warszawa', label: 'Warszawa'},
];

export const servicies = [
   {value: 'Makeup-artist', label: 'Makeup-artist'},
   {value: 'Wellnesscenter', label: 'Wellnesscenter'},
   {value: 'Barbersalon', label: 'Barbersalon'},
   {value: 'Frisørsalon', label: 'Frisørsalon'},
   {value: 'Massageklinik', label: 'Massageklinik'},
   {value: 'Fodterapeut', label: 'Fodterapeut'},
];

export const slides = [
   {
      id: 1,
      images: images.service1,
      title: 'Makeup-artist',
   },
   {
      id: 2,
      images: images.service2,
      title: 'Wellnesscenter',
   },
   {
      id: 3,
      images: images.service3,
      title: 'Barbersalon',
   },
   {
      id: 4,
      images: images.service4,
      title: 'Frisørsalon',
   },
   {
      id: 5,
      images: images.service5,
      title: 'Massageklinik',
   },
   {
      id: 6,
      images: images.service6,
      title: 'Fodterapeut',
   },
   {
      id: 7,
      images: images.service1,
      title: 'Makeup-artist',
   },
   {
      id: 8,
      images: images.service2,
      title: 'Wellnesscenter',
   },
   {
      id: 9,
      images: images.service3,
      title: 'Barbersalon',
   },
   {
      id: 10,
      images: images.service4,
      title: 'Frisørsalon',
   },
   {
      id: 11,
      images: images.service5,
      title: 'Massageklinik',
   },
   {
      id: 12,
      images: images.service6,
      title: 'Fodterapeut',
   },
];

export const salons = [
   {
      id: 1,
      image: images.recomServices1,
      rating: 4.5,
      title: 'Salon Allania',
      address: 'Brookpark Ext, 27085, North Olmsted, 44070',
      reviews: 90,
   },
   {
      id: 2,
      image: images.recomServices2,
      rating: 4.4,
      title: 'Salon Beauty',
      address: '2267 Main st, Fort Myers, 33901',
      reviews: 104,
   },
   {
      id: 3,
      image: images.recomServices3,
      rating: 4.9,
      title: 'Deluxe room',
      address: 'Brookpark Ext, 27085, North Olmsted, 44070',
      reviews: 90,
   },
   {
      id: 4,
      image: images.recomServices4,
      rating: 4.6,
      title: 'Meeting room',
      address: '2267 Main st, Fort Myers, 33901',
      reviews: 75,
   },
   {
      id: 5,
      image: images.recomServices1,
      rating: 4.2,
      title: 'Hair Dyeing',
      address: 'Brookpark Ext, 27085, North Olmsted, 44070',
      reviews: 50,
   },
];

export const testimonials = [
   {
      id: 1,
      name: 'Lislie Alexandrova',
      city: 'Alberta, Canada',
      title: 'Neque porro quisquam est qui dolum',
      text: '“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “',
      photo: images.customer,
   },
   {
      id: 2,
      name: 'Ksenia Journal',
      city: 'Berlin, Germany',
      title: 'Excepteur sint occaecat cupidatat',
      text: '“ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. “',
      photo: images.customer,
   },
   {
      id: 3,
      name: 'Alesia Lukianova',
      city: 'Minsk, Belarus',
      title: 'Deserunt mollit anim id est laborum',
      text: '“ Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  “',
      photo: images.customer,
   },
];

export const values = [
   {
      id: 1,
      title: 'Beauty Experts',
      text: 'The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.',
      img: images.value1,
   },
   {
      id: 2,
      title: 'Great Services',
      text: 'The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.',
      img: images.value2,
   },
   {
      id: 3,
      title: '100% Genuine',
      text: 'The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.',
      img: images.value3,
   },
];

export const includes = [
   {
      id: 1,
      title: 'The Assessment Stage',
      text: 'The point of using Lorem Ipsum is that it has a more-or-less normal letters.',
   },
   {
      id: 2,
      title: 'The Initialisation Stage',
      text: 'The point of using Lorem Ipsum is that it has a more-or-less normal letters.',
   },
   {
      id: 3,
      title: 'The Treatment Stage',
      text: 'The point of using Lorem Ipsum is that it has a more-or-less normal letters.',
   },
];

export const contacts = [
   {
      id: 1,
      img: images.contact1,
      title: 'Visit Us :',
      text: 'Mariendalsvej 50D 2 2000 Frederiksberg',
      link: 'https://www.google.com/maps/place/Mariendalsvej+50D,+2,+2000+Frederiksberg,+%D0%94%D0%B0%D0%BD%D0%B8%D1%8F/@55.6909593,12.5335155,17z/data=!3m1!4b1!4m5!3m4!1s0x465253b6ae47efef:0x7318fe8c29736225!8m2!3d55.6909593!4d12.5335155?entry=tts',
   },
   {
      id: 2,
      img: images.contact2,
      title: 'Drop Us :',
      text: 'support@beautyness.com',
      link: 'mailto:support@beautyness.com',
   },
   {
      id: 3,
      img: images.contact3,
      title: 'Call Us :',
      text: 'Call: 1-800-123-9999',
      link: 'tel:1800123999',
   }
];