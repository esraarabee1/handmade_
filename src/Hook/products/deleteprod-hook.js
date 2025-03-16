import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../rudex/actions/productActions";

const useDeleteProductHook = (id) => {
  const dispatch = useDispatch();
  const [isPress, setIsPress] = useState(false);

  const onSubmit = async () => {
    setIsPress(true);
    await dispatch(deleteProduct(id));
    setIsPress(false);
  };

  const productremoved = useSelector(
    (state) => state.deleteprodReducer?.removedprod
  );

  console.log("📌 prodremoved is:", productremoved);

  return { onSubmit, isPress };
};

export default useDeleteProductHook;
