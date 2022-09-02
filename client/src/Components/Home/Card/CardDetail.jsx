import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Card.module.css";
import { Link } from "react-router-dom";
import ToastHide from "./ToastHide";
const CardDetail = ({ e, user, setFav, Fav }) => {
  const myUser = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    const favFiltered = Fav.filter((posts) => posts.id === e.id);
    if (favFiltered.length > 0) {
      return;
    } else {
      setFav([...Fav, e]);
    }
    setShow(true);
  };

  return (
    <div className={s.container}>
      <div className={s.container_a}>
        <div className={s.container_logo}>
          <img
            src={
              user?.image
                ? user?.image
                : "https://campussafetyconference.com/wp-content/uploads/2020/08/iStock-476085198.jpg"
            }
            alt="profile"
          />
        </div>

        <Link to={`/profile-user/` + e.userId}>
          <b>{user?.name}</b>
        </Link>

        {e.sell ? (
          <p style={{ color: "red", marginTop: "20px", marginLeft: "15px" }}>
            Seller
          </p>
        ) : (
          <p style={{ color: "green", marginTop: "20px", marginLeft: "15px" }}>
            Buyer
          </p>
        )}
        <p className={s.container_time}>
          {e.createdAt
            .slice(0, 10)
            .replace(/^(\d{4})-(\d{2})-(\d{2})$/g, "$3/$2/$1")}
        </p>
        <Link to={`/report/${e?.id}/${myUser?.id}`}>🚩</Link>
      </div>
      <div className={s.container_b}>
        <p>
          Category: <b>{e.categoryName}</b>
        </p>
        <p>
          Sub Category: <b>{e.subCategory}</b>
        </p>
        <p>
          Country: <b>{e.country}</b>
        </p>
        <p>
          payment:{" "}
          {e.payment.map((e, i) => {
            return <b key={i}> {e}</b>;
          })}
        </p>
        <p>
          Shipping: <b>{e.shipping}</b>
        </p>
        <ToastHide
          show={show}
          setShow={setShow}
          handleClick={handleClick}
          e={e}
          Fav={Fav}
        />
      </div>
      <div>
        <hr />
        <b>{e.title}</b>
        <p>{e.description}</p>
      </div>
    </div>
  );
};

export default CardDetail;
