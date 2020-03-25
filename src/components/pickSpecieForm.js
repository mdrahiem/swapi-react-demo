import React from 'react';
import Select from 'react-select';
import LoaderComponent from './common/loaderComponent';
import styles from './pickSpecieForm.module.scss';

const PickSpecieForm = (props) => {
  // react select styles
  const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: "none"
    })
  };
  // convert species array to array of objects for select dropdown
  const getOptions = () => {
    const { species = [] } = props;
    if (species.length > 0) {
      return species.map((specie, index) => ({
        value: index,
        label: specie.name
      }));
    }
    return [];
  }

  // handle select dropdown change
  const handleChange = selectedOption => {
    const { species = [] } = props;
    if (species.length > 0) {
      const selectedSpecie = species[selectedOption.value];
      const specieUrl = selectedSpecie.url;
      specieUrl && props.doFetchPeople(specieUrl);
    }
  };
  
  return (
    <form className={styles['select-specie-form']}>
      <label>Pick a species</label>
      <div className="position-relative">
        <Select
          className="specie-form--select-box"
          options={getOptions()}
          onChange={handleChange}
          styles={style}
        />
        {
          props.speciesLoading && <div className="loader">
            <LoaderComponent />
          </div>
        }
      </div>
    </form>
  );
}

export default PickSpecieForm;
