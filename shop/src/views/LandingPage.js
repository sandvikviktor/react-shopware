import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/productsActions'
import '../App.css'

export default function Home() {

  const dispatch = useDispatch()
  const productCatalog = useSelector(state => state.productCatalog)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div id="landing" className="vh-100 w-100 d-flex justify-content-center align-items-center">
      <div className="left">
        <div id="carousel" className="text-center position-relative">
          <div id="nyheter" className="py-2 m-auto"><h4>Nytt hos oss</h4></div>
          {/* <h1>Landing Page</h1> */}
          <Carousel autoPlay={true} infiniteLoop={true}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            showIndicators={true}
          >
            {
              productCatalog.map(product => {
                // return <Image product={product} key={product._id} />
                return <Link to={`/products/details/${product._id}`} key={product._id} ><div className="position-relative text-center"><img src={product.image} alt="" /><h5>{product.name}</h5></div></Link>
              })
            }
          </Carousel>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}
