import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Navbar from './components/Navbar';
import List from './components/List';
import Card from './components/Card';
import Weather from './components/Weather';
import './App.css';

function App() {

  const [isLowData, setIsLowData] = useState(false);
  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('data', function (data) {
      console.log('Data received:', data);

      if (parseInt(data) < 100) {
        setIsLowData(true);
      } else {
        setIsLowData(false);
      }

      // document.getElementById('sample').style.opacity = data + "%";
    });


    // Cleanup when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  const topStories = [
    {
      title: "Forest Fires Surge Across the Globe",
      image: "https://t3.ftcdn.net/jpg/06/76/17/50/360_F_676175047_ZdJDBYHhQJOSooTjU28r1ZxMMtN8Cfyt.jpg",
      link: "#"
    },
    {
      title: "Why do people love living in Canada?",
      image: "https://assets.vogue.com/photos/64f74083b1a282ee4e251e12/master/w_2560%2Cc_limit/GettyImages-1132328470.jpg",
      link: "#"
    },
    {
      title: "SpaceX's astronauts return to space next year",
      image: "https://www.reuters.com/resizer/v2/GENHKN5WNRKUFOAOSSRQMQEZAA.jpg?auth=64184e099bafdb46ace02dd3abbab2b102895c1d8e3288bdf05d17e07922cb9c&width=1080&quality=80",
      link: "#"
    },
    {
      title: "Canada praises SA firefighters for help fighting wildfires",
      image: "https://www.hawaii.edu/news/wp-content/uploads/2023/08/gnrc-firefighters-pexels.jpg",
      link: "#"
    },
    {
      title: "New Zealand - Top Choice for Skydiving, Festivals, and More",
      image: "https://www.applevacations.com/contentassets/429d418ebb054dcdb02a7ec4b6180d1e/non-stopvacationdeals_av_1300x700.jpeg",
      link: "#"
    }
  ];



  let displayedStories = topStories;
  if (!isLowData) {
    displayedStories = topStories.slice(0, 3);
  }
  // const weatherForecast = [
  //   {
  //     title: "10:00 AM",
  //     subtitle: "18",
  //     image: "https://static.vecteezy.com/system/resources/previews/021/013/468/non_2x/sun-icon-on-transparent-background-free-png.png",
  //     link: "#"
  //   },
  //   {
  //     title: "11:00 AM",
  //     subtitle: "22",
  //     image: "https://static.vecteezy.com/system/resources/previews/021/013/468/non_2x/sun-icon-on-transparent-background-free-png.png",
  //     link: "#"
  //   },
  //   {
  //     title: "12:00 PM",
  //     subtitle: "24",
  //     image: "https://cdn-icons-png.freepik.com/512/5043/5043051.png",
  //     link: "#"
  //   },
  //   {
  //     title: "1:00 PM",
  //     subtitle: "25",
  //     image: "https://cdn-icons-png.freepik.com/512/5043/5043051.png",
  //     link: "#"
  //   },
  //   {
  //     title: "2:00 PM",
  //     subtitle: "21",
  //     image: "https://static.vecteezy.com/system/resources/previews/021/013/468/non_2x/sun-icon-on-transparent-background-free-png.png",
  //     link: "#"
  //   }
  // ];
  const weatherForecast = [
    { time: '10:00 AM', icon: 'https://static.vecteezy.com/system/resources/previews/021/013/468/non_2x/sun-icon-on-transparent-background-free-png.png', temperature: 22 },
    { time: '11:00 AM', icon: 'https://static.vecteezy.com/system/resources/previews/021/013/468/non_2x/sun-icon-on-transparent-background-free-png.png', temperature: 24 },
    { time: '12:00 PM', icon: 'https://cdn-icons-png.freepik.com/512/5043/5043051.png', temperature: 25 },
    { time: '1:00 PM', icon: 'https://cdn-icons-png.freepik.com/512/5043/5043051.png', temperature: 26 },
    { time: '2:00 PM', icon: 'https://cdn-icons-png.freepik.com/512/5043/5043051.png', temperature: 23 },
  ];

  return (
    <div className={`App ${!isLowData ? 'low-data' : ''}`}>
      {isLowData && <Navbar />}
      <div className="container">
        <div className="content">
          <div id="sample"></div>
          <div className="row ">
            <div className="col-md-8">
              <div className="text-container">
                {!isLowData && (
                  <img
                    src="https://pics.freeartbackgrounds.com/fullhd/Spring_Maple_Tree_Branch_and_Sky_Background-257.jpg"
                    alt="Transport"
                    className="background-image"
                  />
                )}
                <h1>The Revival of North America's Majestic Forests</h1>
                <h2>Conservation Efforts and Sustainable Forestry are Reviving North America's Once-Declining Forests</h2>
                {isLowData && (
                  <p>Web News · Posted: Jul 11, 2024 12:40 PM EDT | Last Updated: July 12</p>
                )}
                {isLowData && (
                  <img src="https://pics.freeartbackgrounds.com/fullhd/Spring_Maple_Tree_Branch_and_Sky_Background-257.jpg" alt="Transport" className="regImg" />
                )}
                {isLowData && (
                  <p>
                    In recent years, a remarkable resurgence has been quietly unfolding across North America’s forests. From the towering redwoods of California to the dense pine woods of the Appalachian Mountains, new growth is breathing life into once-threatened ecosystems. Thanks to a combination of innovative conservation efforts, sustainable forestry practices, and community involvement, North America's forests are not only recovering but thriving.
                    <br></br>
                    <br></br>
                    One of the key drivers of this positive trend is the implementation of sustainable forestry practices. By adopting selective logging techniques and replanting native species, forestry companies are ensuring that forests can regenerate naturally. This approach not only preserves the ecological balance of the forest but also supports local wildlife and prevents soil erosion.
                    <br></br>
                    <br></br>
                    "Seeing these forests come back to life is incredibly rewarding," says Laura Thompson, a forestry expert who has been working in the Pacific Northwest for over two decades. "We're witnessing a new era of forestry that balances human needs with the health of our natural environment."
                    <br></br>
                    <br></br>
                    Beyond sustainable practices, large-scale reforestation projects have played a significant role in the revival of North American forests. In regions that were once heavily deforested, such as parts of the Midwest and New England, millions of trees have been planted in recent years. These efforts, often led by local communities and supported by government initiatives, have transformed barren landscapes into flourishing woodlands.
                    <br></br>
                    <br></br>
                    The positive impact of these reforestation efforts extends beyond the trees themselves. Forests play a crucial role in absorbing carbon dioxide, a key greenhouse gas, and thus help mitigate the effects of climate change. They also serve as habitats for a diverse array of wildlife, some of which are returning to areas where they had long been absent.
                    <br></br>
                    <br></br>
                    One inspiring example can be found in the Adirondack Mountains of New York. This region, once heavily logged in the 19th century, has seen a remarkable comeback. Thanks to strict conservation measures and public awareness campaigns, the forests of the Adirondacks are now home to a growing population of black bears, moose, and bald eagles, among other species.
                    <br></br>
                    <br></br>
                    Local communities have also reaped the benefits of this forest revival. Ecotourism has surged in many areas, providing economic opportunities for residents while fostering a deeper connection to nature. Hiking trails, camping sites, and educational programs have been developed, attracting visitors eager to experience the beauty and tranquility of North America’s forests.
                    <br></br>
                    <br></br>
                    While challenges remain, such as the threat of wildfires and invasive species, the overall outlook is promising. Collaborative efforts between governments, environmental organizations, and local communities continue to drive progress in forest conservation.
                  </p>
                )}
              </div>
              {!isLowData && (
                <Weather forecast={weatherForecast} />
              )}
            </div>
            <div className="col-md-4 list-container">
              {isLowData && (
                <h3>Top Stories of the Day</h3>
              )}
              <List articles={displayedStories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
