import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/productsActions'

export default function Home() {

  const dispatch = useDispatch()
  const productCatalog = useSelector(state => state.productCatalog)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div id="landing" className="vh-100 w-100 d-flex">
      <div className="left h-100 col-5 p-0">
        <div className="left-top"></div>
        <div className="left-bottom"></div>
        <div id="carousel" className="position-relative text-center position-absolute">
          <div id="nyheter" className="py-2 m-auto"><h4 className="font-weight-normal">Nytt hos oss</h4></div>
          <Carousel autoPlay={true} infiniteLoop={true} stopOnHover={true}
            showStatus={false}
            showArrows={true}
            showThumbs={false}
            showIndicators={false}
          >
            {
              productCatalog.map(product => {
                return <Link to={`/products/details/${product._id}`} key={product._id} ><div className="position-relative text-center"><img src={product.image} alt="" /><h5>{product.name}</h5></div></Link>
              })
            }
          </Carousel>
        </div>
      </div>
      <div className="right h-100 col-7 p-0">
            <div className="right-top"></div>
            <div className="right-bottom">
              <div className="landing-title">
                <h1 className="my-0">Shopware</h1>
                <h5>e-commerce</h5>
                <Link to="/register">
                  <button className="btn ml-0 mt-2">Skapa Konto</button>
                </Link>                
              </div>              
            </div>
      </div>
    </div>
  )
}
