import React from "react";
import { useLocation } from "react-router-dom";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";

const NoMatchRoute = ({ t }) => {
  const location = useLocation();
  return (
    <>
      <div className="card bg-danger m-5 p-4">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="card-title text-center">
                <h4 className="text-white">{t("noMatchStatus")}</h4>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col form-control">
              <h5 className="p-3">
                {t("noMatchForRoute")} <code>{location.pathname}</code>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NoMatchRoute.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(NoMatchRoute);
