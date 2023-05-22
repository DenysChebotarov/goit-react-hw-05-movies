// import { useState } from 'react';
// import { BsSearch } from 'react-icons/bs';
// import PropTypes from 'prop-types';
// import Notiflix from 'notiflix';

// import css from './Searchbar.module.css'

// export default function SearchBar({ onSubmit }) {
//     const [movieName, setMovieName] = useState('');
  
//     const handleNameChange = event => {
//       setMovieName(event.currentTarget.value.toLowerCase());
//     };
  
//     const handleSubmit = event => {
//       event.preventDefault();
//       if (movieName.trim() === '') {
//         Notiflix.Notify.failure('You have not entered anything');
//         return;
//       }
//       onSubmit(movieName);
//       setMovieName('');
//     };
  
//     return (
//       <header className={css.searchbar}>
//         <form onSubmit={handleSubmit} className={css.searchForm}>
//           <button type="submit" className={css.searchForm_button}>
//             <BsSearch />
//           </button>
  
//           <input
//             className={css.searchForm_input}
//             type="text"
//             name="name"
//             value={movieName}
//             onChange={handleNameChange}
//             placeholder="Search movies"
//           />
//         </form>
//       </header>
//     );
//   }
//   SearchBar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };
  
