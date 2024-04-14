import { Field, Form, Formik } from 'formik';
import { MdOutlineImageSearch } from 'react-icons/md';

import s from '../cards.module.css';

const SearchBar = ({ setQuery }) => {
  const handleSubmit = (data, options) => {
    setQuery(data.query);
    options.resetForm();
  };
  const initialValues = { query: '' };
  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            type="text"
            // InputProps={<MdOutlineImageSearch />}
          />
          {/* <MdOutlineImageSearch /> */}

          {/* <button type="submit">Search</button> */}
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
