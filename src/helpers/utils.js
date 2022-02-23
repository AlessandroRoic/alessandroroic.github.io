export const reloadPage = () => window.location.reload();

export const openSite = (siteUrl) => {
  window.open(`https://${siteUrl}`, '_blank');
};

export const downloadCv = () => {
  window.open('/assets/documents/RoicAlessandroCV.pdf', '_blank');
};
