import { useDispatch, useSelector } from "react-redux";
import "./ItemCard.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { removeCard } from "../../Rtk/Slices/CardSlice";
import toast from "react-hot-toast";

export const ItemCard = () => {
  const products_All = useSelector((state) => state.Card);
  // const [products, setProducts] = useState([]);

  const total_price = products_All.reduce((acc, p) => {
    acc += p.Quantity * p.new_price;
    return acc;
  }, 0);

  const dispatch = useDispatch();


  return (
    <div className="card-item mt-5">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th className="title">Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Totle</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products_All.map((p) => (
              <tr key={p.id}>
                <th>
                  <img style={{ width: "70px" }} src={p.image} alt="" />
                </th>
                <th className="title">{p.name}</th>
                <th>${p.new_price}</th>
                <th>
                  <span
                    style={{
                      border: "1px solid #eee",
                      borderRadius: "5px 13px",
                      padding: "10px",
                      width: "fit-content",
                      display: "block",
                    }}
                  >
                    {p.Quantity}
                  </span>
                </th>
                <th>${Number(p.Quantity) * p.new_price}</th>
                <th onClick={() => dispatch(removeCard(p))}>
                  <img style={{ cursor: "pointer" }} src={remove_icon} alt="" />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card-total">
          <div className="totle">
            <h2>Card Totles</h2>
            <div>
              <p>subTotal</p>
              <span>${total_price}</span>
            </div>
            <div>
              <p>Shipping Free</p>
              <span>Free</span>
            </div>
            <div>
              <p>Totle</p>
              <span>${total_price}</span>
            </div>
          </div>
          <div className="promo-code">
            <p>if you have a promo code,Enter it here</p>
            <div className="input-submit">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
