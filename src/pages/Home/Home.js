import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { func, arrayOf, string, object, objectOf, bool, oneOfType, number } from 'prop-types';

import { getBrands } from '../../redux/brands';
import { getModels } from '../../redux/models';
import { getCarDetails, cleanCarDetails } from '../../redux/carDetails';
import { getYears, cleanYears } from '../../redux/years';
import { getVersions, cleanVersions } from '../../redux/versions';

import Container from '../../components/Container';
import Title from '../../components/Title';
import Search from '../../components/Search';
import CardDetails from '../../components/CardDetails';
import Loader from '../../components/Loader';

const disableSelectDict = {
  brand: 'model',
  model: 'year',
  year: 'versionId',
};

const Home = ({
  getBrands,
  getModels,
  getYears,
  getVersions,
  cleanYears,
  cleanVersions,
  cleanCarDetails,
  getCarDetails,
  brands,
  models,
  years,
  versions,
  carDetails,
  loadingCarDetails,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const [disableSelect, setdisabledSelect] = useState({
    brand: true,
    model: true,
    year: true,
    versionId: true,
  });

  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: '',
    versionId: '',
  });

  useEffect(() => {
    getBrands();
  }, [getBrands]);

  useEffect(() => {
    if (car.year.length >= 1) {
      cleanYears();
      cleanVersions();
      cleanCarDetails();
      setCar({ ...car, year: '', versionId: '' });
    }

    if (car.brand.length >= 1) getModels(car);
  }, [car.brand, getModels]);

  useEffect(() => {
    if (car.model.length >= 1) getYears(car);
  }, [car.model, getYears]);

  useEffect(() => {
    if (car.year.length >= 1) getVersions(car);
  }, [car.year, getVersions]);

  useEffect(() => {
    if (car.versionId.length >= 1) getCarDetails(car);
  }, [car.versionId, getCarDetails]);

  const handleCollapse = () => setCollapsed(!collapsed);

  const enabledSelect = select => setdisabledSelect({ ...disableSelect, [select]: false });

  const onChange = (name, value) => {
    setCar({ ...car, [name]: value });
    enabledSelect(disableSelectDict[name]);
  };

  const renderResult = () => {
    if (loadingCarDetails) {
      return <Loader minHeight />;
    }
    if (!loadingCarDetails && Object.keys(carDetails).length > 0) {
      return <CardDetails details={carDetails} />;
    }

    return null;
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
  getCarDetails: func,
  getVersions: func,
  cleanYears: func,
  cleanVersions: func,
  cleanCarDetails: func,
  loadingCarDetails: bool,
  carDetails: objectOf(oneOfType([string, number])),
  brands: arrayOf(string),
  models: arrayOf(string),
  years: arrayOf(string),
  versions: arrayOf(object),
};

const mapStateToProps = ({ brands, models, years, versions, carDetails }) => ({
  brands: brands.data,
  models: models.data,
  years: years.data,
  versions: versions.data,
  carDetails: carDetails.data,
  loadingCarDetails: carDetails.loading,
});

const mapDispatchToProps = dispatch => ({
  getBrands: bindActionCreators(getBrands, dispatch),
  getModels: bindActionCreators(getModels, dispatch),
  getYears: bindActionCreators(getYears, dispatch),
  getVersions: bindActionCreators(getVersions, dispatch),
  getCarDetails: bindActionCreators(getCarDetails, dispatch),
  cleanYears: bindActionCreators(cleanYears, dispatch),
  cleanVersions: bindActionCreators(cleanVersions, dispatch),
  cleanCarDetails: bindActionCreators(cleanCarDetails, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
