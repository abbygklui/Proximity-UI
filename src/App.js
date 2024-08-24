import React from 'react';
import Navbar from './components/Navbar';
import List from './components/List';
import Card from './components/Card';
import Sensor from 'Sensor';
import './App.css';


function App() {


  const topStories = [
    {
      title: "React 18 Released: What's New?",
      image: "https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square.webp",
      link: "#"
    },
    {
      title: "JavaScript's New Features in 2024",
      image: "https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square.webp",
      link: "#"
    },
    {
      title: "Web Development Trends to Watch",
      image: "https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square.webp",
      link: "#"
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="content">

          <div class="row">
            <div class="col-md-8">
              <h1>This kind of public transportation is growing</h1>
              <h2>Also: How Tim Hortons should fill your reusable cup</h2>
              <p>CBC News · Posted: Jul 11, 2024 12:40 PM EDT | Last Updated: July 12</p>
              <img src="https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square.webp" />
              <p>Fewer Canadians have been using public buses and trains since the pandemic. But one new type of public transportation is seeing huge growth in cities across Canada — bike sharing.

                Riders say it's a convenient way to take one-way trips during busy days around Canada's cities without the hassle of maintaining, storing and securing your own bike.

                Cities say it's part of an effort to provide an affordable transportation option that can help fill gaps in the public transportation system.

                Montreal's Bixi, the first public bike sharing system in North America, said 576,000 users or roughly 1 in 4 Montrealers took 11.7 million trips in 2023 – up 31 per cent since 2022 and 55 per cent since 2021.

                Justin Hanna, director of Bike Share Toronto, said Canada's biggest city has also been seeing double-digit growth in usage, and expects 6.2 million rides in 2024 on its fleet of 9,000 bikes, up from 5.7 million the year before and just 665,000 in 2015.

                In contrast, transit ridership in Canada hasn't fully recovered from the huge drop during the COVID-19 pandemic, and was still below 2020 levels in January 2024.

                The downside of bike sharing's growth? "The demand for our program far exceeds the supply of bikes that we currently have," Hanna said. In response to the popularity, Bike Share Toronto will add 200 stations with additional bikes in the next two years.

                Similarly, in Montreal, one Bixi user told CBC's Brittany Henriques that she sometimes had trouble finding bikes or places to "dock" and return them.

                Still, riders say that for those who are able, there are many reasons to use bike sharing.

                "I like going for a bike ride better than sitting in a crowded streetcar," said Jake Roslyn, who said he is a "huge fan" of Bike Share Toronto and used it regularly when he lived downtown.

                Hanna said it's the most affordable way to travel the city (besides walking), and often faster than driving, especially now that e-bikes have been added to the fleet. Annual memberships start at $105, and there are also day pass, pay-as-you-go options, and discounts for low-income users.</p>
            </div>\
            <div class="col-md-3">
              <h3>Top Stories of the Day</h3>
              <List articles={topStories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
