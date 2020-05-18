import React from 'react'
import { addProductToCart, removeFromCart, deleteFromCart } from '../../store/actions/cartActions'
import { useDispatch } from 'react-redux'

export default function CheckoutProduct({item}) {

    const dispatch = useDispatch()

    const cartIncrement = () => {
        dispatch(addProductToCart(item))
    }

    const cartDecrement = () => {
        dispatch(removeFromCart(item.id))
    }

    const cartDelete = () => {
        dispatch(deleteFromCart(item.id))
    }

    return (
        <tr className="text-center">
            <th scope="row">
                <img src={item.image} alt="" className="img-fluid z-depth-0 image-width" />
            </th>
            <td>
                <h5>
                    <strong>{item.name}</strong>
                </h5>
            </td>
            <td>Color</td>
            <td></td>
            <td>{item.price} SEK</td>
            <td>
                {item.quantity}x
          {/* <!-- <input type="number" value="2" aria-label="Search" className="form-control" style="width: 100px"> --> */}
            </td>
            <td className="font-weight-bold" role="group" aria-label="quantity">
                <div className="btn-group btn-group-sm">
                    <button
                        onClick={cartDecrement}
                        type="button"
                        className="btn btn-grey px-3"
                    >-</button>
                    <button
                        onClick={cartIncrement}
                        type="button"
                        className="btn btn-grey px-3"
                    >+</button>
                </div>
                {/* <!-- <strong>$800</strong> --> */}
            </td>
            {/* <!-- <td></td> --> */}
            <td>
                <div className="btn-group btn-group-sm">
                    <button
                        onClick={cartDelete}
                        type="button"
                        className="btn btn-red px-3"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Remove item"
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}
