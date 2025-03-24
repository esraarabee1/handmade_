import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllvendors } from "../../rudex/actions/vendorsActions";

const GetVendorDataHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllvendors());
      setLoading(false);
    };
    get();
  }, []);
  const allvendorsdata = useSelector(
    (state) => state.addvendorReducer?.allvendors
  );
  useEffect(() => {
    if (loading === false) {
      if (allvendorsdata) {
        console.log("get vendors data", allvendorsdata);
        setVendors(allvendorsdata);
      }
    }
  }, [loading]);

  return [vendors];
};

export default GetVendorDataHook;
