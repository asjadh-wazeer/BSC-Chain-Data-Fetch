import React from "react";
import { CgNotes } from "react-icons/cg";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";

import "./Contribute.css";

function Contribute() {
  const contributeAmount = useSelector((state) => state.contributeAmount);
  const contributePrice = useSelector((state) => state.contributePrice);

  return (
    <div className="contribute__container">
      <div>
        {/* <div className="overlay"></div> */}
        <div className="content">
          <div className="contribute__head__container">
            <p className="contribute__head__right__text">Presale ended</p>
            <h2>CONTRIBUTE TO GET CBV</h2>
            <div className="contribute__input__button__container">
              <div className="contribute__input__box">
                <input
                  className="contribute__input"
                  type="text"
                  placeholder=""
                />
                <h4 className="contribute__input__text">Max</h4>
              </div>
              <p className="contribute__button">CONTRIBUTE</p>
            </div>
          </div>
          {/*  */}
          <div className="contribute__middle__container">
            {/*  */}
            <div className="contribute__middle__box__left">
              <div className="contribute__middle__box">
                <h3 className="contribute__middle__title">Your CBV Balance</h3>
                <h2 className="contribute__middle__value">
                  {contributeAmount.cbvBalance}
                </h2>
              </div>{" "}
              <div className="contribute__middle__box">
                <h3 className="contribute__middle__title">
                  Your Available Contribute Amount:
                </h3>
                <h2 className="contribute__middle__value">
                  {contributeAmount.availableContributeBalance}
                </h2>
              </div>{" "}
              <div className="contribute__middle__box">
                <h3 className="contribute__middle__title">
                  Your Contribute Amount:
                </h3>
                <h2 className="contribute__middle__value">
                  {contributeAmount.yourContributeAmount}
                </h2>
              </div>{" "}
              <div className="contribute__middle__box">
                <h3 className="contribute__middle__title">
                  Your Token Sold Amount
                </h3>
                <h2 className="contribute__middle__value">
                  {contributeAmount.totalContributeAmount}
                </h2>
              </div>{" "}
              <div className="contribute__middle__box">
                <h3 className="contribute__middle__title">
                  Your Token Sold Amount
                </h3>
                <h2 className="contribute__middle__value">
                  {contributeAmount.totalTokenSoldAmount}
                </h2>
              </div>{" "}
            </div>
            {/*  */}
            <div className="contribute__middle__box__right">
              <div className="contribute__middle__box">
                <h3 className="contribute__middle__title">HardCap:</h3>
                <h2 className="contribute__middle__value">
                  {contributePrice.hardCap}
                </h2>
              </div>{" "}
              <div className="contribute__middle__box">
                <h3 className="contribute__middle__title">PreSale Price:</h3>
                <h2 className="contribute__middle__value">
                  {contributePrice.preSalePrice}
                </h2>
              </div>{" "}
              <div className="contribute__middle__box">
                <h3 className="contribute__middle__title">Launch Price:</h3>
                <h2 className="contribute__middle__value">
                  {contributePrice.launchPrice}
                </h2>
              </div>{" "}
              <div className="contribute__middle__box">
                <h3 className="contribute__middle__title">Min Contribute:</h3>
                <h2 className="contribute__middle__value">
                  {contributePrice.minContribute}
                </h2>
              </div>{" "}
              <div className="contribute__middle__box">
                <h3 className="contribute__middle__title">Max Contribute</h3>
                <h2 className="contribute__middle__value">
                  {contributePrice.maxContribute}
                </h2>
              </div>{" "}
            </div>
            {/*  */}
          </div>

          {/* ****** */}
          <div className="address__container">
            <div className="address__box">
              <CgNotes className="address__box__icon" />
              <div className="address__details__box">
                <h4>GET TOKEN ADDRESS</h4>
                <p>0xbb9bc244d798123fde783fcc1c72d3bb8c189413</p>
              </div>
            </div>
            <div className="address__box">
              <BiSolidBadgeCheck className="address__box__icon" />
              <div className="address__details__box">
                <h4>PRESALE CONTRACT ADDRESS</h4>
                <p>0xbb9bc244d798123fde783fcc1c72d3bb8c189413</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contribute;
