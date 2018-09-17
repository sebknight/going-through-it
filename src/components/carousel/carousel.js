import React, { Component } from 'react';
import './carousel.css';
import {
  Button,
  Container,
  Row,
  Col
 } from 'reactstrap';
 import Slider from "react-slick";
 import { Chart } from "react-google-charts";
 import Swipe from 'react-easy-swipe';


class Carousel extends Component {
  
  constructor(){
    super();
    this.state = {
      currentPage: 'page1'
    }
  }

  onSwipeStart(event) {
    console.log('Start swiping...', event);
  }
 
  onSwipeRight(position, event) {
    console.log(`Moved ${position.x} pixels horizontally`, event);

  }
 
  onSwipeEnd(event) {
    console.log('End swiping...', event);
  }
  
 

  render() {

    var currentPage = this.state.currentPage;
    let page;

    if(currentPage === 'page1'){
      page = <Page1/>
    } else if(currentPage === 'page2'){
      page = <Page2/>
    } else if(currentPage === 'page3'){
        page = <Page3/>
    } else if(currentPage === 'page4'){
        page = <Page4/>
    }

    return (
      <div className="graphPage">
        {/* PAGE 1 - Age/Mental Health */}

        <div className="page1">
          <div className="placeholder">
          </div>
          <div className="header-container">

            {page}

          </div>
            
          <Slider {...settings} >
           <Swipe
            onSwipeStart={this.onSwipeStart}
            onSwipeLeft={this.changePage.bind(this, 'page2')}>
              <div className="graph1 graph-position" >
              {/* onSwipe={this.changePage.bind(this, 'page2')} */}
                <Chart
                  chartType="ColumnChart"
                  width="100%"
                  height="17.8em"
                  data={bardata}
                  options={baroptions}
                />
              </div>
            </Swipe>
            <Swipe
            onSwipeStart={this.onSwipeStart}
            onSwipeLeft={this.changePage.bind(this, 'page3')}
            onSwipeRight={this.changePage.bind(this, 'page1')}>
            <div className="graph2 graph-position">
              <Chart
                chartType="LineChart"
                width="100%"
                height="17.8em"
                data={linedata}
                options={lineoptions}
              />
            </div>
            </Swipe>
            <Swipe
            onSwipeStart={this.onSwipeStart}
            onSwipeLeft={this.changePage.bind(this, 'page4')}
            onSwipeRight={this.changePage.bind(this, 'page2')}>
            <div className="graph3 graph-position">
              <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={donutdata1}
                options={donutoptions1}
              />
            </div>
            </Swipe>
            <Swipe
              onSwipeRight={this.changePage.bind(this, 'page3')}>
            <div className="graph4 graph-position">
              <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={donutdata2}
                options={donutoptions2}
              />
            </div>
            </Swipe>
          </Slider>
          <div className="footer">
            <Button color="success" size="large">FIND HELP</Button>
          </div>
        </div>
      </div> 
    )
  }

  changePage(page){
    this.setState({
        currentPage: page
    })
    console.log("test");
  }




}


class Page1 extends Component {
  render() {
    return (
   
        <div className="header header-color1">
          <div className="paragraph-position">
            <p className="headparagraph">
              Whos Getting Help?
            </p>
            <p className="paragraph paragraph1">
              171,033 people accessed mental health care and addiction services in 2015 - 16.
            </p>
          </div>
        </div>
    )
  }

}

class Page2 extends Component {
  render() {
    return (
   
      <div className="header header-color2">
        <div className="paragraph-position">
          <p className="paragraph paragraph2">
            Kiwis are reporting higher reates of psychological distress each year, meaning our <b>mental health care services are more important than ever.</b>
          </p>
        </div>
      </div>
    

    );
  }
}



class Page3 extends Component {
  render() {
    return (
      
      <div className="header header-color3">
        <div className="paragraph-position">
          <p className="headparagraph">
            Whos Getting Help?
          </p>
          <p className="paragraph paragraph3">
            Per capita, Maori are seeking help the most often -- 6450 people per 100,000, compared to 1125 per 100,000 Asian people.
          </p>
        </div>
      </div>
    
    );
  }
}


class Page4 extends Component {
  render() {
    return (

      <div className="header header-color4">
        <div className="paragraph-position">
          <p className="headparagraph">
            Whos Getting Help?
          </p>
          <p className="paragraph paragraph3">
            Per capita, Maori are seeking help the most often -- 6450 people per 100,000, compared to 1125 per 100,000 Asian people.
          </p>
        </div>
      </div>
    );
  }
}


//CAROUSEL 

var settings = {
  dots: true,
  dotClass: 'carouselDots',
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};



// BAR CHART DATA

const bardata = [
  ["Age", "People", { role: "style" }],
  ["Under 15", 20000, "#5A496A"],
  ["16 - 24", 45000, " #5A496A"],
  ["25 - 34", 37000, " #5A496A"],
  ["35 - 44", 21000, " #5A496A"],
  ["45 - 54", 19000, " #5A496A"],
  ["55 - 64", 15000, "#5A496A"],
  ["64+", 12000, " #5A496A"]
];

const baroptions = {
  legend: {position: 'none'},
  chartArea:{left:65,top:50,width:'75%',height:'65%'}
}

// LINE CHART DATA

const linedata = [
  ["Year", "Reports"],
  ["2010", 45],
  ["2011", 54],
  ["2012", 58],
  ["2013", 63]
];

const lineoptions = {
  curveType: "function",
  colors: ["#EF5D60"],
  legend: {position: 'none'},
  chartArea:{left:65,top:50,width:'70%',height:'65%'}
};

// PIE CHART DATA


const donutdata1 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7] // CSS-style declaration
];
const donutoptions1 = {
  pieHole: 0.32,
  chartArea:{left:60,top:50,width:'70%',height:'50%'},
  legend: {position: 'none'}
}

const donutdata2 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7] 
];
const donutoptions2 = {
  pieHole: 0.32,
  chartArea:{left:60,top:50,width:'70%',height:'50%'},
  legend: {position: 'none'}
};


export default Carousel
