import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchTrailers } from './api-service';
import { modalWindow } from './markups';

modalWindow.addEventListener('click', onTrailerBtn);

function onTrailerBtn(evt) {
  const trailerBtn = evt.target.closest('.js__youtube__btn');
  if (!trailerBtn) return;
  const trailerId = Number(trailerBtn.dataset.modalId);

  if (trailerBtn) {
    onTrailerClick(trailerId);
  }
}

async function onTrailerClick(movie_id) {
  try {
    const data = await fetchTrailers(movie_id);
    const id = data.results[0].key;
    onRenderTrailer(id);
  } catch (error) {
    Notify.warning('video is not available');
  }
}

let renderTrailer;

function onRenderTrailer(id) {
  renderTrailer = basicLightbox.create(
    `<iframe class="trailer-container" width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`,
    {
      onShow: () => document.addEventListener('keydown', onClose),
    },
    {
      onClose: () => document.removeEventListener('keydown', onClose),
    }
  );
  renderTrailer.show();
}

function onClose(evt) {
  if (evt.code !== 'Escape') {
    return;
  }
  renderTrailer.close();
}
