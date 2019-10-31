import './styles/sass/main.scss';

const [playButton] = document.getElementsByClassName('video_box--play_button');
const [videoPoster] = document.getElementsByClassName('video_box--poster');
const [videoIframe] = document.getElementsByClassName('video_box--video');

playButton.addEventListener('click', () => {
  videoPoster.style.opacity = 0;
  videoIframe.style.display = 'block';
});
