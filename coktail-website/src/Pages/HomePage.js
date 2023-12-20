import React, { useState, useEffect } from "react";
import Layout from "./../Components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../Redux/features/cocktailSlice";
import SpinnerAnim from "../Components/shared/SpinnerAnim";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([]);
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setmodifiedCocktails(newCocktails);
    } else {
      setmodifiedCocktails([]);
    }
  }, [cocktails]);
  if (loading) {
return<SpinnerAnim/>
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <Layout>
    <div className="container">
      <div className="row">
        {modifiedCocktails.map(item => (
          <div className="col-md-3 mt-3 m-1" key={item.id}>
            <div className="card" style={{ width: '18rem' }}> {/* Use curly braces for style */}
              <img src={item.img} className="card-img-top" alt={item.name}/> {/* Use className for class names */}
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h5 className="card-title">{item.glass}</h5>
                <p className="card-text">{item.info}</p>
                <Link to={`/products/${item.id}`} className="btn btn-primary">
                Detials</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
  );
};

export default HomePage;