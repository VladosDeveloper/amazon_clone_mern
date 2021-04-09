import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../states/StateProvider";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  let calcTotalPrice = 0;
  basket.map((i) => {
    return (calcTotalPrice += parseFloat(i.price));
  });
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="sub__gift">
              <input type="checkbox" name="" id="" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calcTotalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")} className="black__btn">
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
