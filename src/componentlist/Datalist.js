import React from 'react'
import { Link } from 'react-router-dom';
import abc from "../pictures/img5.jpg";

function Datalist() {
const mydata = [
    {
        name:'picname1',
        url:'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
        title:'pppppppppppppppp',
        pragraph:'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
    },
    {
        name:'picname1',
        url:'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
        title:'pppppppppppppppp',
        pragraph:'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
    },
    {
        name:'picname1',
        url:'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
        title:'pppppppppppppppp',
        pragraph:'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
    },
    {
        name:'picname1',
        url:'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
        title:'pppppppppppppppp',
        pragraph:'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
    },
    {
        name:'picname1',
        url:'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
        title:'pppppppppppppppp',
        pragraph:'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
    },
    {
        name:'picname1',
        url:'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
        title:'pppppppppppppppp',
        pragraph:'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
    },
    {
        name:'picname1',
        url:'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
        title:'pppppppppppppppp',
        pragraph:'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu uuuuuuuuuuuuuu uuuuuuuuuuuu u'
    }

];




const myimg = "https://wallup.net/wp-content/uploads/2017/11/23/523619-New_Zealand-mountains-rocks-reflection-river-sunset-300x200.jpg";
return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'>
            <div className="card">
                <img src="image/img3.jpg" alt="noimage" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
                </div>

            </div>

            <div className='col-md-3'>
            <div className="card">
                <img src={abc} alt="noimage" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
                </div>
            </div>

            <div className='col-md-3'>
            <div className="card">
                <img src={myimg} alt="noimage" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Datalist