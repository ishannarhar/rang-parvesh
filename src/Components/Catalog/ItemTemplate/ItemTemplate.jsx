import "./ItemTemplate.css";
export function ItemTemplate({ img, name, price, stockOption }) {
  return (
    <>
      <div className="item-card-outline">
        <div className="item-img">
          <img src={img} width="250" height="242" alt="product image" />
        </div>
        <div className="item-name">
          <h3>{name}</h3>
        </div>
        <div className="item-price">
          <h5> &#8360; {price}</h5>
        </div>
        <div className="item-stock">{stockOption}</div>
        <div className="item-buttons">
          <button className="item-search">
            <i className="fa fa-search"></i>
          </button>
          <button className="item-star">
            <i className="fa fa-star"></i>
          </button>
          <button className="item-gear">
            <i className="fa fa-gear"></i>
          </button>
        </div>
      </div>
    </>
  );
}
