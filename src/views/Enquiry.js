import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import './../assets/css/enquiry.css';

export default function Enquiry() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let lsItems = JSON.parse(localStorage.getItem('prepareEnquiry')) || [];
    setItems(lsItems);
  }, [])

  const onEnquire = () => {
    console.log("On enquireing");
  }

  const onRemoveItemClicked = (item) => {
    console.log("Remove", item);
    let newItems = [];
    for (let i = 0; i < items.length; i++)
      if (item.imagename != items[i].imagename)
        newItems.push(items[i]);
    localStorage.setItem('prepareEnquiry', JSON.stringify(newItems));
    setItems(newItems);
  }


  function RenderItem(props) {
    const onRemoveClicked = () => {
      console.log("remove");
      props._onRemoveClicked(props.item);
    }
    return (
      <Card className="card-stats">
        <CardBody style={{ display: 'flex' }}>
          <div className="RenderItemDiv">
            <div>
              <img src={props.item.uri} />
            </div>
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div></div>
                <Button
                  className="btn-round"
                  color="secondary"
                  onClick={onRemoveClicked}
                  style={{ fontSize: 20, borderRadius: 0, fontWeight: 'lighter', padding: 8, marginRight: 13 }}
                >
                  REMOVE
              </Button>
              </div>
              <h2 className="RenderItemTitle">{props.item.number}</h2>
            </div>
          </div>
        </CardBody>
      </Card>

    );
  }


  return (
    <>
      <div className="content" style={{ margin: 30, marginTop: 120 }}>
        <div className="RenderItemContainer">
          <h1 style={{ textAlign: 'center' }}>My Enquiry</h1>

          {
            items.length > 0 ?
              (<div className="enquireActionDiv">
                <Button
                  className="btn-round"
                  color="danger"
                  onClick={onEnquire}
                  style={{ fontSize: 30, borderRadius: 6, fontWeight: 'lighter' }}
                >
                  ENQUIRE
                </Button>
              </div>) : (
                <h2 style={{ textAlign: 'center' }}>Your enquiry list is empty.</h2>
              )
          }


          {
            items.map((item, i) => {
              return <RenderItem
                item={item}
                key={i}
                _onRemoveClicked={(item) => onRemoveItemClicked(item)}
              />
            })
          }
        </div>
      </div>
    </>
  );
}