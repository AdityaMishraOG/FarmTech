import React from 'react';
import specs_image1 from './specs_images/one.png'
import specs_image2 from './specs_images/two.png'
import specs_image3 from './specs_images/three.png'

import am_image from './team_members_images/aditya_mishra.jpeg'
import cd_image from './team_members_images/chirag_dhamija.jpeg'
import nb_image from './team_members_images/namrata_baliga.jpeg'
import sj_image from './team_members_images/sanchit_jalan.jpeg'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'HOME',
  },
  {
    id: 2,
    url: '/graphs',
    text: 'SENSORS',
  },
  // {
  //   id: 3,
  //   url: '/features',
  //   text: 'FEATURES',
  // },
  {
    id: 4,
    url: '/alerts',
    text: 'ALERTS',
  },
  {
    id: 5,
    url: '/timeline',
    text: 'TIMELINE',
  },
  {
    id: 6,
    url: '/about',
    text: 'ABOUT',
  },
];

export const specs = [
  {
    id: 1,
    name: "What is Smart Farming?",
    info: "Smart farming represents a significant advancement in agriculture, leveraging technology to optimize and streamline farming processes. One of the key elements of smart farming is the use of sensors, which play a pivotal role in making agriculture more efficient and sustainable. These sensors are deployed across agricultural fields to monitor various parameters such as soil moisture, temperature, humidity, and crop health in real-time. By continuously collecting data, farmers gain valuable insights into their crops and soil conditions. This information enables them to make data-driven decisions, including precise irrigation scheduling, the application of fertilizers and pesticides when and where needed, and early detection of diseases or pests.",
    image: specs_image1
  },
  {
    id: 2,
    name: "What are the advantages of Smart Farming?",
    info: "Firstly, it enhances precision and efficiency by providing real-time data on environmental conditions, soil moisture, and crop health, allowing farmers to make informed decisions and optimize resource utilization. Secondly, it promotes sustainability by reducing water and chemical usage through precise irrigation and targeted application of fertilizers and pesticides, thus minimizing environmental impact. Moreover, smart farming improves crop yields and quality by preventing diseases and pests through early detection and intervention. Additionally, it minimizes labor requirements by automating tasks, reducing the physical burden on farmers. ",
    image: specs_image2
  },
  {
    id: 3,
    name: "What electronic sensors have been used?",
    info: "A comprehensive array of sensors and components has been strategically employed to enhance agricultural processes. The DHT22 sensor provides critical temperature and humidity data, aiding in climate monitoring for optimized irrigation and crop health. An LDR detects light levels, facilitating the management of light-sensitive crops. Soil resistive sensors assess soil moisture levels to guide precise irrigation, preventing overwatering. Soil pH sensors ensure the soil's optimal pH balance for crop growth. VOC sensors monitor air quality for healthier crop environments. Finally, the solenoidal valve, controlled by a relay module, regulates water flow for efficient irrigation, collectively contributing to a more productive and sustainable farming operation.",
    image: specs_image3
  },
];

export const team_members = [
  {
    id: 1,
    name: 'Aditya Mishra',
    job: 'web developer',
    image: am_image,
    text: "Aditya Mishra used React JS to design the website's frontend, ensuring an engaging user experience and adeptly displaying project information efficiently. He enhanced the design by applying CSS to beautify the website, creating an aesthetically pleasing interface.",
  },
  {
    id: 2,
    name: 'Chirag Dhamija',
    job: 'hardware',
    image: cd_image,
    text: 'Chirag Dhamija contributed significantly to the project by effectively calibrating the DHT22 and LDR sensors. His diligent work on the hardware side ensured that these sensors provided accurate and reliable data for the project.',
  },
  {
    id: 3,
    name: 'Namrata Baliga',
    job: 'hardware',
    image: nb_image,
    text: 'Namrata Baliga played a vital role in the project by adeptly calibrating the DHT22 and soil resistive sensors. Her careful attention to detail in the hardware domain ensured that the sensors consistently provided accurate and trustworthy data.',
  },
  {
    id: 4,
    name: 'Sanchit Jalan',
    job: 'hardware',
    image: sj_image,
    text: "Sanchit Jalan made a substantial contribution to the project by skillfully fine-tuning the soil resistive sensor and the LDR sensor. His meticulous efforts on the hardware front guaranteed the sensors' ability to deliver precise and dependable data, which was essential for the project's success.",
  },
];

export const sensors = [
  {
    id: 1,
    name: "DHT22",
    text: "Measures Temperature",
    link: "https://thingspeak.com/channels/2287877/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line",
    lower_bound: 15,
    upper_bound: 35,
    parameter: "Temperature"
  },
  {
    id: 2,
    name: "Soil Resistive Sensor",
    text: "Measures Soil Moisture",
    link: "https://thingspeak.com/channels/2287877/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Soil+Moisture&type=line",
    lower_bound: 20,
    upper_bound: 60,
    parameter: "Soil moisture"
  },
  {
    id: 3,
    name: "LDR",
    text: "Measures Light Intensity",
    link: "https://thingspeak.com/channels/2287877/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Light+Intensity&type=line",
    lower_bound: 1000,
    upper_bound: 3500,
    parameter: "Light intensity"
  }
]

