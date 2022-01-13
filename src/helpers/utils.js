export const reloadPage = () => window.location.reload();

export const openSite = (siteUrl) => {
  window.open(`https://${siteUrl}`, '_blank');
};

export const downloadCv = () => {
  window.open('/assets/documents/RoicAlessandroCV.pdf', '_blank');
};

export const scrollTop = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
