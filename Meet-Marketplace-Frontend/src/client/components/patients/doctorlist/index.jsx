import React, {Component} from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import {IMG01, IMG02, IMG03, IMG05, IMG10, IMG11, IMG12, IMG13} from './img';
import Map from "../doctorgrid/map";
import img1 from "../../../assets/images/feature-01.jpg";
import img2 from "../../../assets/images/feature-02.jpg";
import img3 from "../../../assets/images/feature-03.jpg";
import img4 from "../../../assets/images/feature-04.jpg";




const images = [img1, img2, img3, img4];
class DoctorList extends Component{
    constructor(props){
        super(props);
        this.state = {
            markers: [],
        }
      }

      componentDidMount(){
        document.body.classList.add('map-page');
    }
    componentWillUnmount(){
        document.body.classList.remove('map-page');
    }
 render(){
    const options = [
        { value: 'Select', label: 'Select' },
        { value: 'Rating', label: 'Rating' },
        { value: 'Popular', label: 'Popular' },
        { value: 'Lastest', label: 'Lastest' },
        { value: 'Free', label: 'Free' },
    ]
    const { photoIndex, isOpen } = this.state;
    return(

    <div className="content">
    <div className="container-fluid">

    <div className="row">
        <div className="col-xl-7 col-lg-12 order-md-last order-sm-last order-last map-left">

            <div className="card">
                <div className="card-body">
                    <div className="doctor-widget">
                        <div className="doc-info-left">
                            <div className="doctor-img">
                                <Link to="/patient/doctor-profile">
                                    <img src={IMG01} className="img-fluid" alt="User" />
                                </Link>
                            </div>
                            <div className="doc-info-cont">
                                <h4 className="doc-name"><Link to="/patient/doctor-profile">Dr. Ruby Perrin</Link></h4>
                                <p className="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                                <h5 className="doc-department"><img src={IMG10} className="img-fluid" alt="Speciality" />Dentist</h5>
                                <div className="rating">
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star filled"></i>
                                    <i className="fas fa-star"></i>
                                    <span className="d-inline-block average-rating">(17)</span>
                                </div>
                                <div className="clinic-details">
                                    <p className="doc-location"><i className="fas fa-map-marker-alt"></i> Florida, USA</p>
                                    <div>

       {isOpen && (
           <Lightbox
           enableZoom={false}
           mainSrc={images[photoIndex]}
           nextSrc={images[(photoIndex + 1) % images.length]}
           prevSrc={images[(photoIndex + images.length - 1) % images.length]}
           imageTitle={photoIndex + 1 + "/" + images.length}

           onCloseRequest={() => this.setState({ isOpen: false })}
           onMovePrevRequest={() =>
               this.setState({
               photoIndex: (photoIndex + images.length - 1) % images.length
               })
           }
           onMoveNextRequest={() =>
               this.setState({
               photoIndex: (photoIndex + 1) % images.length
               })
           }
           />
        )}
       </div>
       <ul className="clinic-gallery">
           <li>
               <a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}>
                   <img src={img1} alt="Feature" />
               </a>
           </li>
           <li>
               <a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}>
                   <img  src={img2} alt="Feature" />
               </a>
           </li>
           <li>
               <a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}>
                   <img src={img3} alt="Feature" />
               </a>
           </li>
           <li>
               <a href="#0" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}>
                   <img src={img4} alt="Feature" />
               </a>
           </li>
       </ul>
                                </div>
                                <div className="clinic-services">
                                    <span>Dental Fillings</span>
                                    <span> Whitneing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        <div className="load-more text-center">
            <a href="#0" className="btn btn-primary btn-sm">Load More</a>
        </div>
    </div>

    <div className="col-xl-5 col-lg-12 map-right">
        <div id="map" className="map-listing">
         <div style={{ height: '100vh', width: '100%' }}>
                 <Map
                  places={data}
                  center={{ lat: -24.9923319, lng: 135.2252427 }}
                />
        </div>
        </div>

    </div>

</div>


    </div>

</div>

    );
 }
}

export default DoctorList;
