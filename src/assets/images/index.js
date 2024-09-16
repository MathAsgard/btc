const imagesDir = "./testTeams"

function ImportImages(requirement) {
    let images = {};
    requirement.keys().map(item => {
      let imagePath = item.replace('./', '');
      imagePath = imagePath.replace(/.png|.jpg|.jpeg/gi, '');
      images[imagePath] = requirement(item);
    });
    return images;
}

const teamImages = ImportImages(require.context("../../assets/images/testTeams", false, /\.png/));

function Usage(){
  //const images = importImages(require.context(imagesDir, false, /\.(png|jpe?g)$/));
  //const images = importImages(require.context(imagesDir, false, "/\.png/"));
}

export default teamImages;