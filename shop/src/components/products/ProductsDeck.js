import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/actions/productsActions'
import ProductsCard from './ProductsCard';


export default function ProductsDeck() {

  const dispatch = useDispatch()
  const productCatalog = useSelector(state => state.productCatalog)

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <div id="productsDeck" className="container-fluid text-white">
      <section>
        {/* <!-- Grid row --> */}
        <div className="row pt">
          {
            productCatalog.map(product => {
              return <ProductsCard product={product} key={product._id}/>
            })
          }
        </div>
        {/* <!-- Grid row --> */}
      </section>
    </div>
  )
}
