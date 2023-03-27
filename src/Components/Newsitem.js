import React, { Component } from "react";

export class Newsitem extends Component {
 
  render() {
    let { title, description, imageUrl ,newsurl ,author,date} = this.props;
    return (
      <div className="item" style={{ width: "18rem" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsurl} target = "_blank" className="btn btn-sm btn-dark">
              Read More
            </a>                                                                                                  
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default Newsitem;
