import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { func, arrayOf, string, object } from 'prop-types';

import { getCar } from '../../redux/car';
import { getBrands } from '../../redux/brands';
import { getModels } from '../../redux/models';
import { getYears } from '../../redux/years';
import { getVersions } from '../../redux/versions';

import Container from '../../components/Container';
import Search from '../../components/Search';

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
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const [disableSelect, setdisabledSelect] = useState({
    brands: true,
    models: true,
    year: true,
    versions: true,
  });

  const [car, setCar] = useState({
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
    car.brand = brand;
    getModels(car);
    setdisabledSelect({ ...disableSelect, models: false });
  };

  const handleModelsChange = model => {
    car.model = model;
    getYears(car);
    setdisabledSelect({ ...disableSelect, year: false });
  };

  const handleYearChange = year => {
    car.year = year;
    getVersions(car);
    setdisabledSelect({ ...disableSelect, versions: false });
  };

  const handleVersionsChange = versionId => {
    car.versionId = versionId;
    getCar(car);
  };

  return (
    <Container>
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
    </Container>
  );
};

Home.propTypes = {
  getBrands: func,
  getModels: func,
  getYears: func,
  getCar: func,
  getVersions: func,
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
});

const mapDispatchToProps = dispatch => ({
  getBrands: bindActionCreators(getBrands, dispatch),
  getModels: bindActionCreators(getModels, dispatch),
  getYears: bindActionCreators(getYears, dispatch),
  getVersions: bindActionCreators(getVersions, dispatch),
  getCar: bindActionCreators(getCar, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
