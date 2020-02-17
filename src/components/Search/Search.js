import React from 'react';
import { arrayOf, func, string, objectOf, bool, object } from 'prop-types';

import Select from '../Select';
import Collapse from '../Collapse';

import style from './Search.module.scss';

const Search = ({
  brandsOptions = [],
  modelsOptions = [],
  yearsOptions = [],
  versionOptions = [],
  onChange,
  disableSelect,
  collapsed,
  onCollapse,
}) => {
  const formattedVersionOptions = () =>
    versionOptions.map(option => ({
      value: option.versionId,
      label: option.version,
    }));

  return (
    <Collapse collapsed={collapsed} onClick={onCollapse}>
      <div className={style.wrapper}>
        <h4 className={style.blockTitle}>MARCA E MODELO DO CARRO</h4>
        <Select
          className={style.select}
          placeholder="Selecione uma marca"
          options={brandsOptions}
          onChange={onChange}
          name="brand"
        />
        <Select
          className={style.select}
          disabled={disableSelect.models}
          onChange={onChange}
          placeholder="Selecione um modelo"
          options={modelsOptions}
          name="model"
        />
        <h4 className={style.blockTitle}>ANO E VERSÃO</h4>
        <Select
          disabled={disableSelect.year}
          className={style.select}
          placeholder="Selecione um ano"
          onChange={onChange}
          options={yearsOptions}
          name="year"
        />
        <Select
          className={style.select}
          disabled={disableSelect.versions}
          placeholder="Selecione a versão do modelo"
          onChange={onChange}
          options={formattedVersionOptions()}
          name="versionId"
        />
      </div>
    </Collapse>
  );
};

Search.propTypes = {
  brandsOptions: arrayOf(string),
  modelsOptions: arrayOf(string),
  yearsOptions: arrayOf(string),
  versionOptions: arrayOf(object),
  disableSelect: objectOf(bool),
  onChange: func,
  onCollapse: func,
  collapsed: bool,
};

export default Search;
