const NO_IMAGE = 'spacer.gif';

const validateImage = (url) => {
  const urlSplitted = url.split('/');
  if (urlSplitted[urlSplitted.length - 1] === NO_IMAGE) {
    return false;
  }
  return true;
};

export default validateImage;
