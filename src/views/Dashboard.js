import React, { useState, useEffect } from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, } from "reactstrap";
import axios from 'axios'
import AliceCarousel from 'react-alice-carousel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import 'react-awesome-slider/dist/styles.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../assets/css/dashboard.css';
import "react-awesome-button/dist/styles.css";
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

const AutoplaySlider = withAutoplay(AwesomeSlider);
export default function Dashboard() {
  const [galleryImgs, setGalleryImgs] = useState();
  useEffect(() => {
  }, [])

  const handleOnDragStart = (e) => e.preventDefault()

  const onViewCatalog = () => {
    console.log("view catalog");
  }

  const onViewEnquiry = () => {

  }

  const onContactUs = () => {

  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <div className="SliderDiv">
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
                bullets={false}
                animation="cubeAnimation"
                style={{
                  filter: 'drop-shadow(0px 0px 30px rgba(0,0,0,0.2))',
                }}>
                <div data-src="https://firebasestorage.googleapis.com/v0/b/siltron-app.appspot.com/o/BIG_BUCK_BUNNY.png?alt=media&token=610770fd-6aeb-41a5-981c-a1f608e640c9" />
                <div data-src="https://firebasestorage.googleapis.com/v0/b/siltron-app.appspot.com/o/CABLES.jpg?alt=media&token=7545cb68-d46f-4675-b087-9d9e0788de5f" />
                <div data-src="https://firebasestorage.googleapis.com/v0/b/siltron-app.appspot.com/o/2af7d-b481-cf52-8a71-0e82dbe61bb-BNC%20MIXED.png?alt=media&token=829bb333-1259-45a7-a3f1-ded16fcb7f7e" />
              </AutoplaySlider>
            </div>
          </Col>
          <Col md="4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AwesomeButton style={styles.AwsBtn} type="primary" size="large" action={(element, next) => onViewCatalog()}> View Catalog </AwesomeButton>
            <AwesomeButton style={styles.AwsBtn} type="primary" size="large" action={(element, next) => onViewEnquiry()} > View Enquiry </AwesomeButton>
            <AwesomeButton style={styles.AwsBtn} type="primary" size="large" action={(element, next) => onContactUs()} > Contact Us </AwesomeButton>

          </Col>
        </Row>


        <div className="FixedDiv">


          <AliceCarousel
            mouseTrackingEnabled
            // autoPlayInterval={2000}
            fadeOutAnimation={true}
            //autoPlay={true}
            dotsDisabled={true}
            buttonsDisabled={true}
            responsive={{
              0: {
                items: 1,
              },
              750: {
                items: 3,
              },
              1200: {
                items: 5
              }
            }}
          >
            <img src="https://firebasestorage.googleapis.com/v0/b/siltron-app.appspot.com/o/BIG_BUCK_BUNNY.png?alt=media&token=610770fd-6aeb-41a5-981c-a1f608e640c9" onDragStart={handleOnDragStart} className="yours-custom-class" />
            <img src="https://firebasestorage.googleapis.com/v0/b/siltron-app.appspot.com/o/CABLES.jpg?alt=media&token=7545cb68-d46f-4675-b087-9d9e0788de5f" onDragStart={handleOnDragStart} className="yours-custom-class" />
            <img src="https://firebasestorage.googleapis.com/v0/b/siltron-app.appspot.com/o/2af7d-b481-cf52-8a71-0e82dbe61bb-BNC%20MIXED.png?alt=media&token=829bb333-1259-45a7-a3f1-ded16fcb7f7e" onDragStart={handleOnDragStart} className="yours-custom-class" />
            <img src="https://firebasestorage.googleapis.com/v0/b/siltron-app.appspot.com/o/01c1443-462f-8dfe-8f0f-8150642c58e-ELECTRIC.jpg?alt=media&token=892219fc-ccc6-4a7c-afe4-aac9db2d488a" onDragStart={handleOnDragStart} className="yours-custom-class" />
            <img src="https://firebasestorage.googleapis.com/v0/b/siltron-app.appspot.com/o/PLUGS%201.jpg?alt=media&token=159b5bf8-0240-401c-9fb9-2107d4dd3646" onDragStart={handleOnDragStart} className="yours-custom-class" />
          </AliceCarousel>
        </div>
      </div>
    </>
  );
}

const styles = {
  AwsBtn: {
    margin: 10,
    width: 300,
    height: 80,
    fontSize: 24,
  }
}