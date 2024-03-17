import { createPortal } from 'react-dom';
import Prompt from '../atomics/prompt/Prompt';
import Dialog from '../atomics/dialog/Dialog';
import MovieDetails from '../components/movie-details/MovieDetails';
import MovieForm from '../components/movie-form/MovieForm';

const dialogTitleMap = {
  show: '',
  edit: 'Edit movie',
  add: 'Add movie',
  delete: 'Delete movie'
};

function useMoviePortal(portal, onClose, onAction) {
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
    children = <Dialog title={dialogTitleMap[portal.type]} onClose={onClose}>
      <MovieForm
        movieData={portal.data}
        onSubmit={(formData) => { onAction('add', { ...portal.data, ...formData }); onClose(); }}
      />
    </Dialog>
    break;

  case 'edit':
    children = <Dialog title={dialogTitleMap[portal.type]} onClose={onClose}>
      <MovieForm
        movieData={portal.data}
        onSubmit={(formData) => { onAction('edit', { ...portal.data, ...formData }); onClose(); }}
      />
    </Dialog>
    break;

  case 'delete':
    children = <Dialog title={dialogTitleMap[portal.type]} onClose={onClose}>
      <Prompt
        prompt={`Do you really want to delete ${portal.data.Title}?`}
        onConfirm={() => { onAction('delete', portal.data); onClose(); }}
      />
    </Dialog>
    break;

  default:
    break;
  }

  return children && createPortal(
    children,
    document.getElementById('modal'),
  );
}

export default useMoviePortal;