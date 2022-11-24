export const scoreCO = (level) => {
  if (level <= 100) {
    return 'Good';
  } else if (level <= 200) {
    return 'Satisfactory';
  } else if (level <= 1000) {
    return 'Moderate';
  } else if (level <= 1700) {
    return 'Poor';
  } else if (level <= 3400) {
    return 'Severe';
  } else if (level > 3400) {
    return 'Hazardous';
  }
};

export const scoreNH3 = (level) => {
  if (level <= 200) {
    return 'Good';
  } else if (level <= 400) {
    return 'Satisfactory';
  } else if (level <= 800) {
    return 'Moderate';
  } else if (level <= 1200) {
    return 'Poor';
  } else if (level <= 1800) {
    return 'Severe';
  } else if (level > 1800) {
    return 'Hazardous';
  }
};

export const scoreNO2 = (level) => {
  if (level <= 40) {
    return 'Good';
  } else if (level <= 80) {
    return 'Satisfactory';
  } else if (level <= 180) {
    return 'Moderate';
  } else if (level <= 280) {
    return 'Poor';
  } else if (level <= 400) {
    return 'Severe';
  } else if (level > 400) {
    return 'Hazardous';
  }
};

export const scoreO3 = (level) => {
  if (level <= 50) {
    return 'Good';
  } else if (level <= 100) {
    return 'Satisfactory';
  } else if (level <= 168) {
    return 'Moderate';
  } else if (level <= 208) {
    return 'Poor';
  } else if (level <= 748) {
    return 'Severe';
  } else if (level > 748) {
    return 'Hazardous';
  }
};

export const scorePM25 = (level) => {
  if (level <= 30) {
    return 'Good';
  } else if (level <= 60) {
    return 'Satisfactory';
  } else if (level <= 90) {
    return 'Moderate';
  } else if (level <= 120) {
    return 'Poor';
  } else if (level <= 250) {
    return 'Severe';
  } else if (level > 250) {
    return 'Hazardous';
  }
};

export const scorePM10 = (level) => {
  if (level <= 50) {
    return 'Good';
  } else if (level <= 100) {
    return 'Satisfactory';
  } else if (level <= 250) {
    return 'Moderate';
  } else if (level <= 350) {
    return 'Poor';
  } else if (level <= 430) {
    return 'Severe';
  } else if (level > 430) {
    return 'Hazardous';
  }
};

export const scoreSO2 = (level) => {
  if (level <= 40) {
    return 'Good';
  } else if (level <= 80) {
    return 'Satisfactory';
  } else if (level <= 380) {
    return 'Moderate';
  } else if (level <= 800) {
    return 'Poor';
  } else if (level <= 1600) {
    return 'Severe';
  } else if (level > 1600) {
    return 'Hazardous';
  }
};
