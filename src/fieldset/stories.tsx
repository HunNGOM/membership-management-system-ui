import React from 'react';
import { Fieldset } from './index';
import { Field } from '../field';

export default {
  title: Fieldset.name,
};

export const emptyFieldset = () => (
  <Fieldset
    header="Test Fieldset"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio ex hic minima nesciunt, sequi tempora tenetur! Architecto dolor eius eos est et, exercitationem facere pariatur quo repellat reprehenderit sequi."
  />
);

export const fieldsetWithFields = () => (
  <Fieldset
    header="Test Fieldset"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores distinctio ex hic minima nesciunt, sequi tempora tenetur! Architecto dolor eius eos est et, exercitationem facere pariatur quo repellat reprehenderit sequi.">
    <Field label="Test field" />
  </Fieldset>
);
