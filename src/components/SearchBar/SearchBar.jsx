import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { MdOutlineImageSearch } from 'react-icons/md';

const SearchBar = ({ setQuery }) => {
  const handleSubmit = (data, options) => {
    if (data.query.trim() === '') {
      toast('Please enter query!');
    }
    setQuery(data.query.trim());

    console.log(data.query);

    options.resetForm();
  };
  const initialValues = { query: '' };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" type="text" />

          <button type="submit">
            <MdOutlineImageSearch />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
