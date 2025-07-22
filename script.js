async function loadVideos() {
  const res = await fetch('videos.json');
  const videos = await res.json();
  const container = document.getElementById('video-list');

  videos.forEach(video => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}" />
      <h3>${video.title}</h3>
    `;
    card.onclick = () => openPlayer(video.id);
    container.appendChild(card);
  });
}

function openPlayer(id) {
  const modal = document.getElementById('player-modal');
  const iframe = document.getElementById('video-player');
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  modal.classList.remove('hidden');
}

function closePlayer() {
  const modal = document.getElementById('player-modal');
  const iframe = document.getElementById('video-player');
  iframe.src = '';
  modal.classList.add('hidden');
}

loadVideos();
