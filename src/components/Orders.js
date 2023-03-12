import rejected from "../images/rejected.png"
import "./Orders.css"

function Orders(props) {
  return (
    <div className="cards">
      <div className="title">
        <p> Order #{props.data.id}</p>
        <p> {props.data.date}</p>
        <img src="" />
      </div>

      <div className="products">
        <img className="product-img" src={props.data.imageUrl1} />
        <p> {props.data.productName1}</p>
        <p> {props.data.productDescription1}</p>
        <p> ${props.data.price1}</p>
        <p> Qty: {props.data.quantity1}</p>
      </div>

      <div className="check">
        <p>X{props.data.itemsQuantity} Items</p>

        <div>
          <img src={rejected} />
          <p>{props.data.status}</p>
        </div>
      </div>
    </div>
  );
}

export default Orders;
