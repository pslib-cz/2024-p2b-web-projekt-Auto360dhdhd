
function toggleLabelsAndPlaceholders() {
  const isWide = window.innerWidth >= 1280;

  document.querySelectorAll('#contact-form .field-label').forEach(label => {
    label.style.display = isWide ? 'block' : 'none';
  });

  document.querySelectorAll('#contact-form input, #contact-form textarea').forEach(field => {
    if (!field.dataset.originalPlaceholder) {
      field.dataset.originalPlaceholder = field.placeholder;
    }

    field.placeholder = isWide ? '' : field.dataset.originalPlaceholder;
  });
}

// Inicializace
window.addEventListener('DOMContentLoaded', toggleLabelsAndPlaceholders);
window.addEventListener('resize', toggleLabelsAndPlaceholders);

