import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllitems } from "../../rudex/actions/adminActions";

const GetInventoryDataHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllitems());
      setLoading(false);
    };
    get();
  }, []);
  const alldata = useSelector((state) => state.viewitemsReducer?.allitems);
  useEffect(() => {
    if (loading === false) {
      if (alldata) {
        console.log("getdata", alldata);
        setInventory(alldata);
      }
    }
  }, [loading]);

  return [inventory];
};

export default GetInventoryDataHook;
