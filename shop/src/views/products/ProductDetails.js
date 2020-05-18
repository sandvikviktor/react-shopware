import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../store/actions/productsActions'
import { addProductToCart } from '../../store/actions/cartActions'

export default function ProductDetails({match}) {
    
    const dispatch = useDispatch()
    let product = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getProductById(match.params.id))
    }, [dispatch, match.params.id])

    const add = (product) => {
        dispatch(addProductToCart(product))
    }
    
    if(product) {
        return (
            <div className="pt container-fluid bg-white ">
                {/* <!--Section: Content--> */}
                <section className="text-center pt-5">
                {/* <!-- Section heading --> */}
                <h3 className="font-weight-bold mb-5">Product Details</h3>
    
                <div className="row">
                    <div className="col-lg-6">
                    {/* <!--Carousel Wrapper--> */}
                    <div
                        id="carousel-thumb"
                        className="carousel-fade carousel-thumbnails"
                        data-ride="carousel"
                    >
                        {/* <!--Slides--> */}
                        <div className="carousel-inner text-center text-md-left" role="listbox">
                        <div className="carousel-item active">
                            <img src={product.image} alt="First slide" className="img-fluid" />
                        </div>
                        </div>
                        {/* <!--/.Slides--> */}
    
                        {/* <!--Thumbnails--> */}
                        <a
                        className="carousel-control-prev"
                        href="#carousel-thumb"
                        role="button"
                        data-slide="prev"
                        >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a
                        className="carousel-control-next"
                        href="#carousel-thumb"
                        role="button"
                        data-slide="next"
                        >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                        {/* <!--/.Thumbnails--> */}
                    </div>
                    {/* <!--/.Carousel Wrapper--> */}
                    </div>
    
                    <div className="col-lg-5 text-center text-md-left">
                    <h2
                        className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4"
                    >
                        <strong>{product.name}</strong>
                    </h2>
                    <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
                    <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                        <span className="red-text font-weight-bold">
                        <strong>{product.price} price SEK</strong>
                        </span>
                    </h3>
    
                    {/* <!--Accordion wrapper--> */}
                    <div
                        className="accordion md-accordion"
                        id="accordionEx"
                        role="tablist"
                        aria-multiselectable="true"
                    >
                        {/* <!-- Accordion card --> */}
                        <div className="card">
                        {/* <!-- Card header --> */}
                        <div className="card-header" role="tab" id="headingOne1">
                            <a
                            data-toggle="collapse"
                            data-parent="#accordionEx"
                            href="#collapseOne1"
                            aria-expanded="true"
                            aria-controls="collapseOne1"
                            >
                            <h5 className="mb-0">
                                Description
                                <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                            </a>
                        </div>
    
                        {/* <!-- Card body --> */}
                        <div
                            id="collapseOne1"
                            className="collapse show black-text"
                            role="tabpanel"
                            aria-labelledby="headingOne1"
                            data-parent="#accordionEx"
                        >
                            <div className="card-body">{product.description}</div>
                        </div>
                        </div>
                        {/* <!-- Accordion card --> */}
    
                        {/* <!-- Accordion card --> */}
                        <div className="card">
                        {/* <!-- Card header --> */}
                        <div className="card-header" role="tab" id="headingTwo2">
                            <a
                            className="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordionEx"
                            href="#collapseTwo2"
                            aria-expanded="false"
                            aria-controls="collapseTwo2"
                            >
                            <h5 className="mb-0">
                                Details
                                <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                            </a>
                        </div>
    
                        {/* <!-- Card body --> */}
                        <div
                            id="collapseTwo2"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo2"
                            data-parent="#accordionEx"
                        >
                            <div className="card-body black-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                            3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                            moon
                            tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </div>
                        </div>
                        </div>
                        {/* <!-- Accordion card --> */}
    
                        {/* <!-- Accordion card --> */}
                        <div className="card">
                        {/* <!-- Card header --> */}
                        <div className="card-header" role="tab" id="headingThree3">
                            <a
                            className="collapsed"
                            data-toggle="collapse"
                            data-parent="#accordionEx"
                            href="#collapseThree3"
                            aria-expanded="false"
                            aria-controls="collapseThree3"
                            >
                            <h5 className="mb-0">
                                Shipping
                                <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                            </a>
                        </div>
    
                        {/* <!-- Card body --> */}
                        <div
                            id="collapseThree3"
                            className="collapse"
                            role="tabpanel"
                            aria-labelledby="headingThree3"
                            data-parent="#accordionEx"
                        >
                            <div className="card-body black-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                            3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                            moon
                            tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </div>
                        </div>
                        </div>
                        {/* <!-- Accordion card --> */}
                    </div>
                    {/* <!--/.Accordion wrapper--> */}
    
                    {/* <!-- Add to Cart --> */}
                    <section className="color">
                        <div className="mt-5">
                        <div className="row mt-3">
                            <div className="col-md-12 text-center text-md-left text-md-right">
                            <button
                                onClick={() => add(product)}
                                className="btn btn-indigo btn-rounded"
                            >
                                <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i> Lägg till varukorgen
                            </button>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* <!-- /.Add to Cart --> */}
                    </div>
                </div>
                </section>
                {/* <!--Section: Content--> */}
            </div>
        )
    } else {
        return null
    }
   
    
}
