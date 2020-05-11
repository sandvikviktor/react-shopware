import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ProductsCard({ product }) {

  useEffect(() => {
    // console.log(product);
  }, [])

  return (
    <div className="col-lg-3 col-md-12 mb-4">
      <div className="card card-ecommerce">
        <div className="view overlay">
          <img src={product.image} className="img-fluid" alt="" />
          <Link to={`/products/details/${product._id}`}>
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>
        <div className="card-body">
          <h5 className="card-title mb-1"><strong><Link to={`/products/details/${product._id}`} className="dark-grey-text">{product.name}</Link></strong></h5>
          <p className="card-text">{product.shortDescription}</p>
          <div className="card-footer pb-0 bg-white">
            <div className="row mb-0">
              <span className="float-left mt-2"><strong>{product.price} SEK</strong></span>
              <span className="float-right ml-auto">
                <Link to={`/products/details/${product._id}`} type="button" className="btn btn-sm btn-indigo" data-toggle="tooltip" data-placement="top">Visa Produkt</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
