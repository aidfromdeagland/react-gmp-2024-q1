import { createPortal } from 'react-dom';
import Dialog from '../dialog/Dialog';
import MovieDetails from '../movie-details/MovieDetails';
import MovieForm from '../movie-form/MovieForm';

const dialogTitleMap = {
  show: '',
  edit: 'Edit movie',
  add: 'Add movie',
};

function useMoviePortal(portal, onClose, onSubmit) {
  if (!portal) {
    return null;
  }

  let children;
  switch (portal.type) {
    case 'show':
      children = <Dialog title={dialogTitleMap[portal.type]} onClose={onClose}>
        <MovieDetails movie={portal.data} />
      </Dialog>
      break;

    case 'add':
    case 'edit':
      children = <Dialog title={dialogTitleMap[portal.type]} onClose={onClose}>
        <MovieForm movieData={portal.data} onSubmit={onSubmit} />
      </Dialog>
      break;
    default:
      children = undefined;
  }

  return children && createPortal(
    children,
    document.getElementById('modal'),
  );
}

export default useMoviePortal;