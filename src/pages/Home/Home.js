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

  const [item, setitem] = useState({
    brand: '',
    model: '',
    year: '',
    version: '',
  });

  useEffect(() => {
    getBrands();
  }, [getBrands]);

  const handleCollapse = () => setCollapsed(!collapsed);

  const handleBrandChange = brand => {
    item.brand = brand;
    getModels(item);
    setdisabledSelect({ ...disableSelect, models: false });
  };

  const handleModelsChange = model => {
    item.model = model;
    getYears(item);
    setdisabledSelect({ ...disableSelect, year: false });
  };

  const handleYearChange = year => {
    item.year = year;
    getVersions(item);
    setdisabledSelect({ ...disableSelect, versions: false });
  };

  const handleVersionsChange = versionId => {
    item.versionId = versionId;
    getCar(item);
  };

  const renderContent = () => {
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
        onBrandChange={handleBrandChange}
        onModelChange={handleModelsChange}
        onYearChange={handleYearChange}
        onVersionsChange={handleVersionsChange}
        brandsOptions={brands}
        modelsOptions={models}
        yearsOptions={years}
        versionOptions={versions}
        onCollapse={handleCollapse}
        collapsed={collapsed}
      />
      {renderContent()}
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
