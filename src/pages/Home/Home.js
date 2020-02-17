import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { func, arrayOf, string, object, objectOf, bool, oneOfType, number } from 'prop-types';

import { getCar } from '../../redux/car';
import { getBrands } from '../../redux/brands';
import { getModels } from '../../redux/models';
import { getYears } from '../../redux/years';
import { getVersions } from '../../redux/versions';

import Container from '../../components/Container';
import Search from '../../components/Search';
import CardDetails from '../../components/CardDetails';
import Loader from '../../components/Loader';
import Title from '../../components/Title';

const Home = ({
  getBrands,
  getModels,
  getYears,
  getVersions,
  getCar,
  brands,
  models,
  years,
  versions,
  car,
  loading,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const [disableSelect, setdisabledSelect] = useState({
    brands: true,
    models: true,
    year: true,
    versions: true,
  });

  const [state, setstate] = useState({
    brand: '',
    model: '',
    year: '',
    versionId: '',
  });

  useEffect(() => {
    getBrands();
  }, [getBrands]);

  useEffect(() => {
    if (state.brand.length >= 1) {
      getModels(state);
      setdisabledSelect({ ...disableSelect, models: false });
    }
  }, [state.brand, getModels]);

  useEffect(() => {
    if (state.model.length >= 1) {
      getYears(state);
      setdisabledSelect({ ...disableSelect, year: false });
    }
  }, [state.model, getYears]);

  useEffect(() => {
    if (state.year.length >= 1) {
      getVersions(state);
      setdisabledSelect({ ...disableSelect, versions: false });
    }
  }, [state.year, getVersions]);

  useEffect(() => {
    if (state.versionId.length >= 1) getCar(state);
  }, [state.versionId, getCar]);

  const handleCollapse = () => setCollapsed(!collapsed);

  const onChange = (name, value) => setstate({ ...state, [name]: value });

  const renderResult = () => {
    if (loading) {
      return <Loader minHeight />;
    }
    if (!loading && Object.keys(car).length > 0) {
      return <CardDetails car={car} />;
    }

    return '';
  };

  return (
    <Container>
      <Title>Quanto vale meu carro ?</Title>
      <Search
        disableSelect={disableSelect}
        onChange={onChange}
        brandsOptions={brands}
        modelsOptions={models}
        yearsOptions={years}
        versionOptions={versions}
        onCollapse={handleCollapse}
        collapsed={collapsed}
      />
      {renderResult()}
    </Container>
  );
};

Home.propTypes = {
  getBrands: func,
  getModels: func,
  getYears: func,
  getCar: func,
  getVersions: func,
  loading: bool,
  car: objectOf(oneOfType([string, number])),
  brands: arrayOf(string),
  models: arrayOf(string),
  years: arrayOf(string),
  versions: arrayOf(object),
};

const mapStateToProps = ({ brands, models, years, versions, car }) => ({
  brands: brands.data,
  models: models.data,
  years: years.data,
  versions: versions.data,
  car: car.data,
  loading: car.loading,
});

const mapDispatchToProps = dispatch => ({
  getBrands: bindActionCreators(getBrands, dispatch),
  getModels: bindActionCreators(getModels, dispatch),
  getYears: bindActionCreators(getYears, dispatch),
  getVersions: bindActionCreators(getVersions, dispatch),
  getCar: bindActionCreators(getCar, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
